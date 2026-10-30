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
        senderBody
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
        const isMe = !!(currentUserId && String(senderUserId) === String(currentUserId));
        // Method 1: If senderBody & senderIv are present AND this is our own sent message, try master key / identity key decryption
        if (isMe && payload.senderBody && payload.senderIv) {
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
            if (isMe) {
                targetDhUserId = Number(payload.recipientUserId || payload.otherUserId || (roomId && Number(roomId) !== currentUserId ? Number(roomId) : senderUserId));
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
"[project]/src/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPERADMIN_WEB_ONLY_MESSAGE",
    ()=>SUPERADMIN_WEB_ONLY_MESSAGE,
    "clearSessionTokens",
    ()=>clearSessionTokens,
    "getClientDeviceInfo",
    ()=>getClientDeviceInfo,
    "isSuperadminWebOnly",
    ()=>isSuperadminWebOnly,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const SUPERADMIN_WEB_ONLY_MESSAGE = 'Superadmin accounts can only log in on the web. Please log in using a web browser.';
function isSuperadminWebOnly(user) {
    if (((user === null || user === void 0 ? void 0 : user.role) || '').toLowerCase() !== 'superadmin') return false;
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatform"])();
    return platform.isNative || platform.isElectron;
}
let isFetchingLiveUser = false;
let hasFetchedLiveUser = false;
/**
 * Safely extracts error messages from API calls or native exceptions.
 */ function extractErrorMessage(err, fallbackMessage) {
    if (err && typeof err === 'object') {
        var _axiosErr_response_data, _axiosErr_response, _axiosErr_response_data1, _axiosErr_response1;
        const axiosErr = err;
        const apiMsg = ((_axiosErr_response = axiosErr.response) === null || _axiosErr_response === void 0 ? void 0 : (_axiosErr_response_data = _axiosErr_response.data) === null || _axiosErr_response_data === void 0 ? void 0 : _axiosErr_response_data.message) || ((_axiosErr_response1 = axiosErr.response) === null || _axiosErr_response1 === void 0 ? void 0 : (_axiosErr_response_data1 = _axiosErr_response1.data) === null || _axiosErr_response_data1 === void 0 ? void 0 : _axiosErr_response_data1.error);
        if (apiMsg) return apiMsg;
        if ('message' in err && typeof err.message === 'string') {
            return err.message;
        }
    }
    return fallbackMessage;
}
/**
 * Determines client-side route target based on role.
 */ function getRoleRedirectTarget(user) {
    var _user_role;
    const role = (user === null || user === void 0 ? void 0 : (_user_role = user.role) === null || _user_role === void 0 ? void 0 : _user_role.toLowerCase()) || '';
    if ([
        'superadmin'
    ].includes(role)) return '/admin';
    if ("TURBOPACK compile-time truthy", 1) {
        const redirectUrl = localStorage.getItem('redirect_after_login');
        if (redirectUrl) {
            localStorage.removeItem('redirect_after_login');
            return redirectUrl;
        }
    }
    const host = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.hostname.toLowerCase();
    if (host === 'ai.localhost' || host.startsWith('ai.')) return '/ai';
    if (host === 'chat.localhost' || host.startsWith('chat.')) return '/chat';
    return '/user';
}
function getClientDeviceInfo() {
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    let deviceId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('pingdart_device_id') : "TURBOPACK unreachable";
    if (!deviceId && "object" !== 'undefined') {
        deviceId = (isNative ? 'mobile_' : 'web_') + Math.random().toString(36).substring(2, 10);
        localStorage.setItem('pingdart_device_id', deviceId);
    }
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const platform = isNative ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() || 'mobile' : ua.includes('Win') ? 'windows' : ua.includes('Mac') ? 'macos' : ua.includes('Linux') ? 'linux' : 'web';
    const deviceType = isNative ? 'mobile' : 'web';
    return {
        deviceId: deviceId || (isNative ? 'mobile_device' : 'web_device'),
        platform,
        deviceType
    };
}
/**
 * Safe localStorage setter with automatic quota exhaustion recovery.
 */ function safeSetLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        console.warn(`[safeStorage] Quota warning for "${key}". Purging bloated caches and retrying...`, err === null || err === void 0 ? void 0 : err.message);
        try {
            localStorage.removeItem('pingdart_site_settings');
            Object.keys(localStorage).forEach((k)=>{
                if (k.startsWith('prefetch_') || k.includes('cache') || k.includes('draft') || k.startsWith('temp_') || k.startsWith('face_') || k.includes('blob') || k.startsWith('media_')) {
                    localStorage.removeItem(k);
                }
            });
            localStorage.setItem(key, value);
        } catch (retryErr) {
            console.error(`[safeStorage] Critical: could not save "${key}" even after cache cleanup:`, retryErr);
        }
    }
}
/**
 * Synchronously stores session tokens & user info in localStorage & Capacitor Preferences.
 */ function persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, transientPassword, deviceId) {
    localStorage.removeItem('pingdart-auth');
    hasFetchedLiveUser = false;
    isFetchingLiveUser = false;
    safeSetLocalStorage('access_token', accessToken);
    safeSetLocalStorage('refresh_token', refreshToken);
    safeSetLocalStorage('hasSeenIntro', 'true');
    if (deviceMailToken) {
        safeSetLocalStorage('device_mail_token', deviceMailToken);
    }
    if (deviceId) {
        safeSetLocalStorage('pingdart_device_id', deviceId);
    }
    const userForStorage = {
        ...user
    };
    delete userForStorage.avatar;
    delete userForStorage.banner;
    delete userForStorage.faceVector;
    delete userForStorage.face_vector;
    safeSetLocalStorage('user', JSON.stringify(userForStorage));
    // Reset the in-memory Zustand state ONLY (not localStorage, which we just set above)
    // to eliminate any stale role from a previous admin session before writing the new session.
    // This prevents the login page auto-redirect from briefly seeing the old admin role.
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].setState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        transientPassword: undefined,
        deviceMailToken: null
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(user, accessToken, refreshToken, transientPassword, deviceMailToken || undefined);
    try {
        Object.keys(localStorage).forEach((key)=>{
            if (key.startsWith('prefetch_chat_rooms_') && !key.endsWith(`_${user.id}`)) {
                localStorage.removeItem(key);
            }
        });
    } catch (_) {}
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('hasSeenIntro', 'true').catch(()=>{});
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('access_token', accessToken).catch((e)=>console.error('[Capacitor] Token save error:', e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('refresh_token', refreshToken).catch((e)=>console.error('[Capacitor] Refresh token save error:', e));
        try {
            const { getApiV1Url } = __turbopack_context__.r("[project]/src/lib/utils.ts [app-client] (ecmascript)");
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('api_base_url', getApiV1Url()).catch(()=>{});
        } catch (_) {}
        if (deviceMailToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('device_mail_token', deviceMailToken).catch((e)=>console.error('[Capacitor] Mail token save error:', e));
        }
        if (deviceId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('pingdart_device_id', deviceId).catch(()=>{});
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch((e)=>console.error('[Capacitor] User save error:', e));
    }
}
function clearSessionTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('python_access_token');
    localStorage.removeItem('python_tenant_id');
    localStorage.removeItem('user');
    localStorage.removeItem('device_mail_token');
    localStorage.removeItem('pingdart-auth');
    localStorage.removeItem('pingdart_device_id');
    try {
        Object.keys(localStorage).forEach((key)=>{
            if (key.startsWith('prefetch_chat_rooms')) {
                localStorage.removeItem(key);
            }
        });
    } catch (_) {}
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
    hasFetchedLiveUser = false;
    isFetchingLiveUser = false;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('access_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('refresh_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('user').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('device_mail_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart-auth').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart_device_id').catch((e)=>console.error(e));
    }
}
/**
 * Non-blocking initialization of post-login background services (E2EE keys, FCM Push Token & Linked Device Sync).
 */ function initBackgroundAuthTasks() {
    const { deviceId, platform, deviceType } = getClientDeviceInfo();
    if (deviceId) {
        __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then(({ chatApi })=>{
            chatApi.deviceLinking.registerDevice(deviceId, platform, deviceType).catch(()=>{});
        }).catch(()=>{});
    }
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)").then(({ initializeKeys })=>{
        initializeKeys().catch((err)=>console.warn('[E2EE] Key init failed (non-fatal):', err));
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during login:', err));
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-client] (ecmascript, async loader)").then(({ registerDeviceFcmToken })=>{
        registerDeviceFcmToken().catch((err)=>console.warn('[FCM] Token register failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
}
/**
 * Non-blocking cleanup of background services on logout.
 */ function cleanupBackgroundAuthTasks() {
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-client] (ecmascript, async loader)").then(({ unregisterDeviceFcmToken })=>{
        unregisterDeviceFcmToken().catch((err)=>console.warn('[FCM] Token unregister failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)").then(({ resetE2EEState })=>{
        resetE2EEState();
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during logout:', err));
}
function useAuth() {
    _s();
    const storeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useAuth.useAuthStore[storeUser]": (state)=>state.user
    }["useAuth.useAuthStore[storeUser]"]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. LOGIN
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[login]": async (email, password, options)=>{
            setIsLoading(true);
            setError(null);
            try {
                clearSessionTokens();
                const isBypassMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BYPASS_LOGIN === 'true';
                let user;
                let access_token;
                let refresh_token;
                let deviceMailToken = null;
                const { deviceId, platform, deviceType } = getClientDeviceInfo();
                if (isBypassMode) {
                    user = {
                        id: 999,
                        email: email || 'dev@pingdart.local',
                        username: 'dev_user',
                        role: (options === null || options === void 0 ? void 0 : options.requireAdmin) ? 'superadmin' : 'user',
                        tenant_id: 1,
                        domain_id: 1,
                        full_name: 'Developer Bypass'
                    };
                    access_token = 'dummy_access_token';
                    refresh_token = 'dummy_refresh_token';
                    await new Promise({
                        "useAuth.useCallback[login]": (resolve)=>setTimeout(resolve, 500)
                    }["useAuth.useCallback[login]"]);
                } else {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/login', {
                        email,
                        password,
                        deviceId,
                        platform,
                        deviceType,
                        requireSuperAdmin: (options === null || options === void 0 ? void 0 : options.requireAdmin) || false
                    });
                    if (response.data.requiresTwoStep) {
                        return {
                            requiresTwoStep: true,
                            twoStepMethod: response.data.twoStepMethod || 'pin',
                            target: response.data.target,
                            credential: response.data.credential,
                            userId: response.data.userId
                        };
                    }
                    user = response.data.user;
                    access_token = response.data.accessToken;
                    refresh_token = response.data.refreshToken;
                    deviceMailToken = response.data.deviceMailToken || null;
                    if (response.data.deviceId) {
                        localStorage.setItem('pingdart_device_id', response.data.deviceId);
                    }
                }
                if (options === null || options === void 0 ? void 0 : options.requireAdmin) {
                    const isSuperAdmin = (user.role || '').toLowerCase() === 'superadmin';
                    if (!isSuperAdmin) {
                        throw new Error('Access denied. Super Admin privileges required.');
                    }
                }
                if (isSuperadminWebOnly(user)) {
                    throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
                }
                const finalDeviceId = localStorage.getItem('pingdart_device_id') || deviceId;
                persistSessionTokens(user, access_token, refresh_token, deviceMailToken, password, finalDeviceId);
                initBackgroundAuthTasks();
                return {
                    success: true,
                    user,
                    role: user === null || user === void 0 ? void 0 : user.role
                };
            } catch (err) {
                var _axiosErr_response_data, _axiosErr_response, _axiosErr_response_data1, _axiosErr_response1;
                const msg = extractErrorMessage(err, 'Login failed. Please check your credentials.');
                const axiosErr = err;
                const errorType = axiosErr === null || axiosErr === void 0 ? void 0 : (_axiosErr_response = axiosErr.response) === null || _axiosErr_response === void 0 ? void 0 : (_axiosErr_response_data = _axiosErr_response.data) === null || _axiosErr_response_data === void 0 ? void 0 : _axiosErr_response_data.errorType;
                const field = axiosErr === null || axiosErr === void 0 ? void 0 : (_axiosErr_response1 = axiosErr.response) === null || _axiosErr_response1 === void 0 ? void 0 : (_axiosErr_response_data1 = _axiosErr_response1.data) === null || _axiosErr_response_data1 === void 0 ? void 0 : _axiosErr_response_data1.field;
                setError(msg);
                return {
                    success: false,
                    error: msg,
                    errorType,
                    field
                };
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[login]"], [
        router
    ]);
    // 2. REGISTER
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[register]": async (full_name, domain, email, password, phone, contactEmail, location, extra)=>{
            setIsLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/register', {
                    full_name,
                    domain,
                    email,
                    password,
                    phone,
                    contactEmail,
                    location,
                    ...extra
                });
                return true;
            } catch (err) {
                const msg = extractErrorMessage(err, 'Registration failed. Please try again.');
                setError(msg);
                return false;
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[register]"], []);
    // 3. SEND OTP
    const sendOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[sendOtp]": async (medium, credential)=>{
            setIsLoading(true);
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/send-otp', {
                    medium,
                    credential
                });
                return true;
            } catch (err) {
                const msg = extractErrorMessage(err, 'Failed to send OTP. Please try again.');
                setError(msg);
                return false;
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[sendOtp]"], []);
    // 4. VERIFY OTP
    const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[verifyOtp]": async (credential, code, newPassword)=>{
            setIsLoading(true);
            setError(null);
            try {
                const { deviceId, platform, deviceType } = getClientDeviceInfo();
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-otp', {
                    credential,
                    code,
                    newPassword,
                    deviceId,
                    platform,
                    deviceType
                });
                const { user, accessToken, refreshToken } = response.data;
                const finalDeviceId = response.data.deviceId || deviceId;
                if (isSuperadminWebOnly(user)) {
                    throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
                }
                persistSessionTokens(user, accessToken, refreshToken, null, undefined, finalDeviceId);
                initBackgroundAuthTasks();
                router.replace(getRoleRedirectTarget(user));
                return true;
            } catch (err) {
                const msg = extractErrorMessage(err, 'Invalid or expired OTP.');
                setError(msg);
                return false;
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[verifyOtp]"], [
        router
    ]);
    // 5. VERIFY TWO STEP
    const verifyTwoStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[verifyTwoStep]": async (userId, code, method, credential)=>{
            setIsLoading(true);
            setError(null);
            try {
                const { deviceId, platform, deviceType } = getClientDeviceInfo();
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-two-step', {
                    userId,
                    code,
                    method,
                    credential,
                    deviceId,
                    platform,
                    deviceType
                });
                const { user, accessToken, refreshToken } = response.data;
                const finalDeviceId = response.data.deviceId || deviceId;
                if (isSuperadminWebOnly(user)) {
                    throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
                }
                persistSessionTokens(user, accessToken, refreshToken, null, undefined, finalDeviceId);
                initBackgroundAuthTasks();
                return true;
            } catch (err) {
                const msg = extractErrorMessage(err, 'Invalid or expired verification code / PIN.');
                setError(msg);
                return false;
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[verifyTwoStep]"], []);
    // 6. LOGIN WITH PIN
    const loginWithPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[loginWithPin]": async (identifier, pin)=>{
            setIsLoading(true);
            setError(null);
            try {
                localStorage.removeItem('pingdart-auth');
                hasFetchedLiveUser = false;
                isFetchingLiveUser = false;
                const { deviceId, platform, deviceType } = getClientDeviceInfo();
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/login-pin', {
                    identifier,
                    pin,
                    deviceId,
                    platform,
                    deviceType
                });
                const { user, accessToken, refreshToken, deviceMailToken } = response.data;
                const finalDeviceId = response.data.deviceId || deviceId;
                if (isSuperadminWebOnly(user)) {
                    throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
                }
                persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, undefined, finalDeviceId);
                initBackgroundAuthTasks();
                return {
                    success: true,
                    user,
                    role: user === null || user === void 0 ? void 0 : user.role
                };
            } catch (err) {
                const msg = extractErrorMessage(err, 'PIN Login failed. Please check your PIN.');
                setError(msg);
                return {
                    success: false,
                    error: msg
                };
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[loginWithPin]"], []);
    // 7. LOGIN WITH FACE
    const loginWithFace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[loginWithFace]": async (vector, pin)=>{
            setIsLoading(true);
            setError(null);
            try {
                const { deviceId, platform, deviceType } = getClientDeviceInfo();
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/login-face', {
                    vector,
                    pin,
                    deviceId,
                    platform,
                    deviceType
                });
                if (response.data.requiresPin) {
                    return {
                        success: true,
                        requiresPin: true,
                        matchedUser: response.data.matchedUser
                    };
                }
                const { user, accessToken, refreshToken, deviceMailToken } = response.data;
                const finalDeviceId = response.data.deviceId || deviceId;
                if (isSuperadminWebOnly(user)) {
                    throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
                }
                persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, undefined, finalDeviceId);
                initBackgroundAuthTasks();
                return {
                    success: true,
                    user
                };
            } catch (err) {
                const msg = extractErrorMessage(err, 'Face authentication failed.');
                setError(msg);
                return {
                    success: false,
                    error: msg
                };
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[loginWithFace]"], []);
    // 8. LOGIN WITH HARDWARE BIOMETRICS (TOUCH ID / FACE ID)
    const loginWithSavedBiometrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[loginWithSavedBiometrics]": async ()=>{
            setIsLoading(true);
            setError(null);
            try {
                const { getBiometricLoginCredentials } = await __turbopack_context__.A("[project]/src/utils/biometrics.ts [app-client] (ecmascript, async loader)");
                const creds = await getBiometricLoginCredentials();
                if (!creds || !creds.username) {
                    return {
                        success: false,
                        error: 'Biometric scan was cancelled or not recognized.'
                    };
                }
                if (creds.password) {
                    return await login(creds.username, creds.password);
                }
                return {
                    success: false,
                    error: 'No saved credentials found for biometric unlock.'
                };
            } catch (err) {
                const msg = extractErrorMessage(err, 'Biometric authentication failed.');
                setError(msg);
                return {
                    success: false,
                    error: msg
                };
            } finally{
                setIsLoading(false);
            }
        }
    }["useAuth.useCallback[loginWithSavedBiometrics]"], [
        login
    ]);
    // 6. LOGOUT
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[logout]": (redirectTarget)=>{
            // Clear E2EE in-memory state FIRST so next login re-initializes cleanly
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetE2EEState"])();
            } catch (_) {}
            const deviceId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('pingdart_device_id') : "TURBOPACK unreachable";
            const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().refreshToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('refresh_token') : "TURBOPACK unreachable");
            // Notify backend to invalidate refresh token and unregister secondary/linked device
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/logout', {
                refreshToken,
                deviceId
            }).catch({
                "useAuth.useCallback[logout]": ()=>{}
            }["useAuth.useCallback[logout]"]);
            clearSessionTokens();
            cleanupBackgroundAuthTasks();
            const currentPath = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
            const isTargetAdmin = (redirectTarget === null || redirectTarget === void 0 ? void 0 : redirectTarget.startsWith('/admin')) || currentPath.startsWith('/admin');
            const target = redirectTarget || (isTargetAdmin ? '/admin/login' : '/login');
            router.replace(target);
        }
    }["useAuth.useCallback[logout]"], [
        router
    ]);
    // 7. REFRESH PROFILE (New Addition)
    const refreshProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[refreshProfile]": async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/user/profile');
                if (res.data && res.data.success) {
                    const liveUser = res.data.user;
                    const userForStorage = {
                        ...liveUser
                    };
                    delete userForStorage.avatar;
                    delete userForStorage.banner;
                    localStorage.setItem('user', JSON.stringify(userForStorage));
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch({
                            "useAuth.useCallback[refreshProfile]": (e)=>console.error(e)
                        }["useAuth.useCallback[refreshProfile]"]);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(liveUser);
                    return liveUser;
                }
            } catch (err) {
                console.error('Failed to fetch live user profile', err);
            }
            return null;
        }
    }["useAuth.useCallback[refreshProfile]"], []);
    // 8. GET USER
    const getUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[getUser]": ()=>{
            if ("object" !== 'undefined' && !hasFetchedLiveUser && !isFetchingLiveUser) {
                const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken || localStorage.getItem('access_token');
                if (token) {
                    isFetchingLiveUser = true;
                    hasFetchedLiveUser = true;
                    refreshProfile().finally({
                        "useAuth.useCallback[getUser]": ()=>{
                            isFetchingLiveUser = false;
                        }
                    }["useAuth.useCallback[getUser]"]);
                }
            }
            if (storeUser) return storeUser;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const userStr = localStorage.getItem('user');
            if (!userStr) return null;
            try {
                return JSON.parse(userStr);
            } catch (e) {
                return null;
            }
        }
    }["useAuth.useCallback[getUser]"], [
        storeUser,
        refreshProfile
    ]);
    return {
        login,
        loginWithPin,
        loginWithFace,
        loginWithSavedBiometrics,
        register,
        sendOtp,
        verifyOtp,
        verifyTwoStep,
        refreshProfile,
        logout,
        getUser,
        isLoading,
        error
    };
}
_s(useAuth, "CYohEeSDwXQ/mfZHtqcvXu0zm9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/(public)/forgot-password/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForgotPasswordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SmartPhone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Key01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ZapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ZapIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)");
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
const getBrandName = (hostname)=>{
    const host = (hostname || "").toLowerCase().split(':')[0];
    const parts = host.split('.');
    let sub = '';
    const isLocalhost = host.endsWith('.localhost') || host === 'localhost' || host === '127.0.0.1';
    if (isLocalhost) {
        if (parts.length >= 2 && parts[parts.length - 1] === 'localhost') {
            const candidate = parts.slice(0, parts.length - 1).join('.');
            if (candidate && ![
                'www',
                'api',
                'admin',
                'app'
            ].includes(candidate)) {
                sub = candidate;
            }
        }
    } else {
        if (parts.length >= 3) {
            const candidate = parts[0];
            if (![
                'www',
                'api',
                'admin',
                'app'
            ].includes(candidate)) {
                sub = candidate;
            }
        }
    }
    if (sub === 'mail') return 'PingDart Mail';
    if (sub === 'chat') return 'PingDart Chat';
    if (sub === 'ai') return 'PingDart AI Studio';
    if (sub) return `${sub.charAt(0).toUpperCase() + sub.slice(1)} Workspace`;
    return ("TURBOPACK compile-time value", "PingDart") || 'PingDart';
};
function ForgotPasswordPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const { sendOtp, verifyOtp, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ForgotPasswordPage.useState": ()=>("TURBOPACK compile-time truthy", 1) ? getBrandName(window.location.hostname) : "TURBOPACK unreachable"
    }["ForgotPasswordPage.useState"]);
    const effectiveBrandName = settings.appLogoText || brandName;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForgotPasswordPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setBrandName(getBrandName(window.location.hostname));
            }
        }
    }["ForgotPasswordPage.useEffect"], []);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("request");
    const [resetMedium, setResetMedium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("email");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+91");
    // OTP & New Password state
    const [otpValues, setOtpValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleOtpChange = (index, val)=>{
        if (!/^\d*$/.test(val)) return;
        const newValues = [
            ...otpValues
        ];
        newValues[index] = val.slice(-1);
        setOtpValues(newValues);
        if (val && index < 5) {
            var _inputRefs_current_;
            (_inputRefs_current_ = inputRefs.current[index + 1]) === null || _inputRefs_current_ === void 0 ? void 0 : _inputRefs_current_.focus();
        }
    };
    const handleOtpKeyDown = (index, e)=>{
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            var _inputRefs_current_;
            (_inputRefs_current_ = inputRefs.current[index - 1]) === null || _inputRefs_current_ === void 0 ? void 0 : _inputRefs_current_.focus();
        }
    };
    const handleSendResetCode = async (e)=>{
        e.preventDefault();
        setErrorMsg(null);
        const target = resetMedium === "email" ? email : `${countryCode}${phoneNumber}`;
        if (!target.trim()) {
            setErrorMsg("Please enter your registered email or phone number.");
            return;
        }
        try {
            const isSuccess = await sendOtp(resetMedium === "email" ? "gmail" : "phone", target);
            if (isSuccess) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Verification code sent to ${target}`);
                setStep("verify");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send verification code. Please verify your details.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send verification code. Please try again.");
        }
    };
    const handleResetPassword = async (e)=>{
        e.preventDefault();
        setErrorMsg(null);
        const code = otpValues.join("");
        if (code.length !== 6) {
            setErrorMsg("Please enter the 6-digit verification code.");
            return;
        }
        if (!newPassword || newPassword.length < 6) {
            setErrorMsg("New password must be at least 6 characters long.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }
        const target = resetMedium === "email" ? email : `${countryCode}${phoneNumber}`;
        try {
            const isSuccess = await verifyOtp(target, code, newPassword);
            if (isSuccess) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Password reset successfully!");
                setStep("success");
            } else {
                setErrorMsg("Invalid verification code. Please try again.");
            }
        } catch (err) {
            setErrorMsg("Failed to reset password. Please try again.");
        }
    };
    // ────────────── NATIVE MOBILE VIEW ──────────────
    if (isNative) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] bg-white dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none transition-colors duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[28%] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-b-[40px] shadow-lg flex flex-col items-center justify-center p-6 pt-[calc(1.2rem+env(safe-area-inset-top,12px))] text-white overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/login"),
                            className: "absolute top-[calc(0.8rem+env(safe-area-inset-top,12px))] left-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center gap-1 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-[10px] bg-white/20 backdrop-blur-md border border-white/30 p-2 flex items-center justify-center shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                        size: 26,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-black tracking-wide text-white",
                                    children: "Reset Password"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-blue-100/90 font-medium",
                                    children: "Recover your PingDart account"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-6 overflow-y-auto flex flex-col justify-between bg-white dark:bg-[#0b141a] transition-colors duration-300",
                    children: [
                        step === "request" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSendResetCode,
                            className: "space-y-4 my-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-1 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-black text-slate-900 dark:text-slate-100",
                                            children: "Forgot Password?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: "Select your recovery method to receive a 6-digit security code."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex p-1.5 bg-slate-100/90 dark:bg-slate-800/80 rounded-full border border-slate-200/80 dark:border-slate-700/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setResetMedium("email"),
                                            className: `flex-1 py-2.5 text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${resetMedium === "email" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700" : "text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                " Email"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setResetMedium("phone"),
                                            className: `flex-1 py-2.5 text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${resetMedium === "phone" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700" : "text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this),
                                                " Phone"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-[10px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                            size: 16,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: errorMsg
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                resetMedium === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "Enter registered email address...",
                                        className: "w-full px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: countryCode,
                                            onChange: (e)=>setCountryCode(e.target.value),
                                            className: "px-3 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+91",
                                                    children: "🇮🇳 +91"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+1",
                                                    children: "🇺🇸 +1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+44",
                                                    children: "🇬🇧 +44"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+971",
                                                    children: "🇦🇪 +971"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            required: true,
                                            value: phoneNumber,
                                            onChange: (e)=>setPhoneNumber(e.target.value),
                                            placeholder: "Registered phone number...",
                                            className: "flex-1 px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-extrabold rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60",
                                    children: isLoading ? "Sending Code..." : "Send Verification Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        step === "verify" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleResetPassword,
                            className: "space-y-4 my-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-1 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-black text-slate-900 dark:text-slate-100",
                                            children: "Enter Security Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: [
                                                "Enter the 6-digit code sent to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-800 dark:text-slate-200",
                                                    children: resetMedium === "email" ? email : `${countryCode} ${phoneNumber}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 50
                                                }, this),
                                                " and set your new password."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this),
                                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-[10px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                            size: 16,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: errorMsg
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-2",
                                    children: otpValues.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: (el)=>{
                                                inputRefs.current[index] = el;
                                            },
                                            type: "text",
                                            inputMode: "numeric",
                                            maxLength: 1,
                                            value: digit,
                                            onChange: (e)=>handleOtpChange(index, e.target.value),
                                            onKeyDown: (e)=>handleOtpKeyDown(index, e),
                                            className: "w-11 h-12 text-center text-lg font-black rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        }, index, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            required: true,
                                            value: newPassword,
                                            onChange: (e)=>setNewPassword(e.target.value),
                                            placeholder: "New password (min. 6 chars)",
                                            className: "w-full px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            required: true,
                                            value: confirmPassword,
                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                            placeholder: "Confirm new password",
                                            className: "w-full px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-extrabold rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60",
                                    children: isLoading ? "Resetting Password..." : "Reset Password & Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStep("request"),
                                        className: "text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline",
                                        children: "← Resend code or change email/phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this),
                        step === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-auto text-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mx-auto shadow-lg animate-bounce",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                        size: 36
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-black text-slate-900 dark:text-slate-100",
                                            children: "Password Reset Complete!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto",
                                            children: "Your password has been successfully updated. You can now sign in with your new password."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.push("/login"),
                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-full shadow-lg shadow-blue-500/25 text-xs uppercase tracking-wider transition-all",
                                    children: "Back to Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-4 border-t border-slate-100 dark:border-slate-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "text-xs font-bold text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                children: [
                                    "Remember your password? ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 dark:text-blue-400",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    }
    // ────────────── WEB / DESKTOP VIEW ──────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex bg-gray-50 dark:bg-gray-950 font-sans selection:bg-indigo-500 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex flex-col w-[55%] relative overflow-hidden text-white p-8 xl:p-12 justify-between bg-[#0B0F19]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/30 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[40%] -right-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: settings.appLogoDark || settings.appLogoDarkImage || "/logo.png",
                                alt: `${effectiveBrandName} Logo`,
                                width: 40,
                                height: 40,
                                style: {
                                    width: "40px",
                                    height: "40px"
                                },
                                className: "h-10 w-auto object-contain",
                                priority: true,
                                onError: (e)=>{
                                    e.currentTarget.src = "/logo.png";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[34px] xl:text-[38px] font-bold text-white leading-tight tracking-tight",
                                children: effectiveBrandName
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-indigo-200 mb-6 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        size: 14,
                                        className: "text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Account Security & Recovery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl xl:text-5xl font-bold mb-4 leading-[1.15] tracking-tight",
                                children: [
                                    "Reset & Secure ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 28
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400",
                                        children: "Your Account Access"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this),
                                    "in simple steps."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-base xl:text-lg leading-relaxed mb-8 max-w-lg",
                                children: "Recover access to your mailboxes, conversations, and workspace tools with end-to-end encrypted identity verification."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 p-4 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-white",
                                                children: "Bank-grade Security"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Multi-layered cryptographic verification protocols."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 p-4 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ZapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZapIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-white",
                                                children: "Instant Verification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Real-time OTP delivery to your registered email or phone."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 p-4 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-white",
                                                children: "Protected Mailbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Zero data loss with automated encrypted credential sync."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 p-4 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-white",
                                                children: "One-Click Access"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Instantly sign back into your workspace across devices."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between text-xs text-gray-500 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " PingDart. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-gray-300 transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-gray-300 transition-colors",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-[45%] flex flex-col justify-center items-center p-6 sm:p-12 xl:p-20 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[440px] relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden flex items-center justify-center gap-3 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: settings.appLogoImage || "/logo_light.png",
                                        alt: effectiveBrandName,
                                        width: 40,
                                        height: 40,
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        },
                                        className: `h-10 w-auto object-contain ${settings.appLogoDark ? "dark:hidden" : ""}`,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    settings.appLogoDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: settings.appLogoDark,
                                        alt: effectiveBrandName,
                                        width: 40,
                                        height: 40,
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        },
                                        className: "h-10 w-auto object-contain hidden dark:block",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center",
                                        children: effectiveBrandName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-900 shadow-2xl shadow-gray-200/50 dark:shadow-black/50 rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/60 flex items-center justify-center mx-auto shadow-sm mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                                    size: 26
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight",
                                                children: [
                                                    step === "request" && "Forgot Password",
                                                    step === "verify" && "Forgot Password",
                                                    step === "success" && "Password Reset Complete"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1.5",
                                                children: [
                                                    step === "request" && `Recover access to your ${brandName} account`,
                                                    step === "verify" && `Recover access to your ${brandName} account`,
                                                    step === "success" && "Your password has been updated successfully."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this),
                                    step === "request" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSendResetCode,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex p-1 bg-gray-100 dark:bg-gray-800/60 rounded-[50px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setResetMedium("email"),
                                                        className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${resetMedium === "email" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Email Address"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setResetMedium("phone"),
                                                        className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${resetMedium === "phone" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Phone Number"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[50px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                        size: 16,
                                                        className: "shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: errorMsg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this),
                                            resetMedium === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                value: email,
                                                                onChange: (e)=>setEmail(e.target.value),
                                                                placeholder: "registered.user@example.com",
                                                                className: "w-full pl-10 pr-4 py-3 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none text-sm font-medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",
                                                        children: "Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: countryCode,
                                                                onChange: (e)=>setCountryCode(e.target.value),
                                                                className: "px-3 py-3 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs font-semibold outline-none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+91",
                                                                        children: "🇮🇳 +91"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                        lineNumber: 573,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+1",
                                                                        children: "🇺🇸 +1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+44",
                                                                        children: "🇬🇧 +44"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+971",
                                                                        children: "🇦🇪 +971"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                required: true,
                                                                value: phoneNumber,
                                                                onChange: (e)=>setPhoneNumber(e.target.value),
                                                                placeholder: "Enter phone number...",
                                                                className: "flex-1 px-4 py-3 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                className: "w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-[50px] shadow-lg shadow-indigo-600/20 transition-all text-sm uppercase tracking-wider disabled:opacity-70 active:scale-[0.99]",
                                                children: isLoading ? "Sending Reset Code..." : "Send Reset Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    step === "verify" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleResetPassword,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    "Enter 6-digit OTP code sent to",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-800 dark:text-gray-200",
                                                        children: resetMedium === "email" ? email : `${countryCode}${phoneNumber}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this),
                                            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[50px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                        size: 16,
                                                        className: "shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: errorMsg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-1.5 sm:gap-2",
                                                children: otpValues.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            inputRefs.current[index] = el;
                                                        },
                                                        type: "text",
                                                        inputMode: "numeric",
                                                        maxLength: 1,
                                                        value: digit,
                                                        onChange: (e)=>handleOtpChange(index, e.target.value),
                                                        onKeyDown: (e)=>handleOtpKeyDown(index, e),
                                                        className: "w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2.5 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                    lineNumber: 637,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                required: true,
                                                                value: newPassword,
                                                                onChange: (e)=>setNewPassword(e.target.value),
                                                                placeholder: "New Password (min 6 chars)",
                                                                className: "w-full pl-10 pr-4 py-3 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                    lineNumber: 650,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                required: true,
                                                                value: confirmPassword,
                                                                onChange: (e)=>setConfirmPassword(e.target.value),
                                                                placeholder: "Confirm New Password",
                                                                className: "w-full pl-10 pr-4 py-3 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                className: "w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-[50px] shadow-lg shadow-indigo-600/20 transition-all text-sm uppercase tracking-wider disabled:opacity-70 active:scale-[0.99]",
                                                children: isLoading ? "Updating Password..." : "Reset Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center pt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setStep("request"),
                                                    className: "text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline",
                                                    children: "← Back to email/phone request"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    step === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mx-auto shadow-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 36
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 dark:text-white",
                                                        children: "Password Reset Successful!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 leading-relaxed",
                                                        children: [
                                                            "You can now log in to your ",
                                                            brandName,
                                                            " account using your new password."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>router.push("/login"),
                                                className: "w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-[50px] shadow-lg shadow-indigo-600/20 text-sm uppercase tracking-wider transition-all",
                                                children: "Back to Login"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center pt-4 mt-6 border-t border-gray-100 dark:border-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-xs font-semibold text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors",
                                            children: [
                                                "Remembered your password? ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-indigo-600 dark:text-indigo-400 font-bold hover:underline",
                                                    children: "Back to Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/forgot-password/page.tsx",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_s(ForgotPasswordPage, "UfVxz6LfA4B/PDaZelgW9EpV0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ForgotPasswordPage;
var _c;
__turbopack_context__.k.register(_c, "ForgotPasswordPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e63df0b2._.js.map