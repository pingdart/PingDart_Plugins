module.exports = [
"[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
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
    db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(DB_NAME, DB_VERSION, {
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
    if ("TURBOPACK compile-time truthy", 1) return 'global:';
    //TURBOPACK unreachable
    ;
    let userId;
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
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const d = undefined;
    const prefix = undefined;
    const range = undefined;
    const tx = undefined;
}
}),
"[project]/src/lib/e2ee/signalStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)");
;
class SignalProtocolStore {
    // ─────────────── Direction enum compatibility ─────────────────
    Direction = {
        SENDING: 1,
        RECEIVING: 2
    };
    // ─────────────── Identity Key ──────────────────────────────────
    async getIdentityKeyPair() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    }
    async getLocalRegistrationId() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
                return true;
            }
            return false;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
        return false;
    }
    async isTrustedIdentity(name, key) {
        // Auto-trust new identity keys to support seamless key regeneration/updates
        return true;
    }
    async loadIdentityKey(identifier) {
        const userId = identifier.split('.')[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSession"](`identity:${userId}`);
    }
    // ─────────────── Pre-Keys ─────────────────────────────────────
    async loadPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadPreKey"](Number(keyId));
    }
    async storePreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savePreKey"](Number(keyId), keyPair);
    }
    async removePreKey(keyId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deletePreKey"](Number(keyId));
    }
    // ─────────────── Signed Pre-Keys ──────────────────────────────
    async loadSignedPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSignedPreKey"](Number(keyId));
    }
    async storeSignedPreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSignedPreKey"](Number(keyId), keyPair);
    }
    async removeSignedPreKey(keyId) {
    // We never delete signed pre-keys (they may be needed for ongoing sessions)
    }
    // ─────────────── Sessions ─────────────────────────────────────
    async loadSession(identifier) {
        const buf = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSession"](`session:${identifier}`);
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`session:${identifier}`, bytes.buffer);
    }
    async removeSession(identifier) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}`);
    }
    async removeAllSessions(identifier) {
        // For now we just remove the specific device 1 session
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}.1`);
    }
}
}),
"[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/signalStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
async function getLibSignal() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('[E2EE] libsignal cannot be loaded on server');
    }
    const target = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : typeof globalThis !== 'undefined' ? globalThis : {};
    if (target && !target.msrCrypto) {
        target.msrCrypto = {};
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return await __turbopack_context__.A("[project]/node_modules/@privacyresearch/libsignal-protocol-typescript/lib/index.js [app-ssr] (ecmascript, async loader)");
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
    } catch  {
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
    if (!storeInstance) storeInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignalProtocolStore"]();
    return storeInstance;
}
function resetE2EEState() {
    storeInstance = null;
    initPromise = null;
    initResolved = false;
    dhSharedKeyCache.clear();
    sessionNeedsRebuild.clear();
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
    const mod = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
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
    const api = await getChatApi();
    const res = await api.checkMyKeyBundle();
    if (res.exists && res.data?.encryptedBackup) {
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
            console.log(`[E2EE] Prekey count low (local: ${count}, server: ${serverOtkCount ?? 'N/A'}, threshold: ${PREKEY_LOW_WATERMARK}). Auto-replenishing to ${NUM_ONE_TIME_PREKEYS}...`);
            const oneTimePreKeys = await Promise.all(Array.from({
                length: NUM_ONE_TIME_PREKEYS
            }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
            for (const otp of oneTimePreKeys){
                await store.storePreKey(otp.keyId, otp.keyPair);
            }
            const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (identityKeyPair) {
                const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, SIGNED_PREKEY_ID);
                await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
                const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const KeyHelper = undefined, setWebCrypto = undefined;
    const store = undefined;
    // 1. Generate identity key pair
    const identityKeyPair = undefined;
    // 2. Registration ID
    const registrationId = undefined;
    // 3. Signed Pre-Key
    const signedPreKey = undefined;
    // 4. One-time Pre-Keys (batch of 10)
    const oneTimePreKeys = undefined;
    const otp = undefined;
    // 5. Generate P-256 ECDH key pair for deterministic shared-key encryption (v2)
    const dhKeyPair = undefined;
    const dhPrivRaw = undefined;
    const dhPubJwk = undefined;
    // 6. Get or generate random user master key
    const userMasterKeyObj = undefined;
    const rawMasterKey = undefined;
    // 7. Encrypt private keys for backup if password is available
    let encryptedBackup;
    const transientPassword = undefined;
    // 7. Upload public key bundle to server (includes P-256 ECDH and backup)
    const api = undefined;
}
/**
 * Re-uploads the existing local identity/DH keys to the server without
 * generating new key material. Use when the server bundle is missing but
 * the device already has a valid identity (e.g. after a server DB reset).
 */ async function reUploadExistingKeys() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const KeyHelper = undefined, setWebCrypto = undefined;
    const identityKeyPair = undefined;
    const store = undefined;
    const registrationId = undefined;
    // Re-generate signed prekey (must be signed with current identity)
    const signedPreKey = undefined;
    // Re-generate one-time prekeys
    const oneTimePreKeys = undefined;
    const otp = undefined;
    // Reuse existing DH key pair if present, otherwise generate a new one
    let dhKeyPair;
    // Rebuild backup if password is available
    let encryptedBackup;
    const transientPassword = undefined;
    const rawMasterKeyForBackup = undefined;
    const api = undefined;
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
    const start = Date.now();
    while(!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id){
        if (Date.now() - start > timeoutMs) {
            //console.warn('[E2EE] Timed out waiting for auth user — proceeding with anonymous prefix.');
            return;
        }
        await new Promise((r)=>setTimeout(r, 50));
    }
}
async function initializeKeys() {
    if ("TURBOPACK compile-time truthy", 1) {
        //console.log('[E2EE INIT] SSR mode - skipping');
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function ensureE2EEReady() {
    if ("TURBOPACK compile-time truthy", 1) {
        //console.error('[E2EE INIT] SSR environment detected - returning false');
        return false;
    }
    //TURBOPACK unreachable
    ;
}
async function buildSession(recipientUserId) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const SignalProtocolAddress = undefined, SessionBuilder = undefined, setWebCrypto = undefined;
    const store = undefined;
    const api = undefined;
    // Fetch the recipient's public key bundle
    const res = undefined;
    const bundle = undefined;
    // Construct the PreKeyBundle in the format the Signal library expects
    const preKeyBundle = undefined;
    const address = undefined;
    const sessionBuilder = undefined;
}
async function hasSessionWith(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasSession"](`session:${userId}.${DEVICE_ID}`);
}
async function encryptMessage(recipientUserId, plaintext) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
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
        logDebug('[E2EE DH] Computing shared key for user:', theirUserId);
        // Load our P-256 private key (auto-generate if missing)
        let ourDhPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDhKeyPair"](ourDhPair);
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
        if (!res || !res.success || !res.data?.dhPublicKey) {
            console.warn(`[E2EE DH] fetchDhPublicKey missing for user ${theirUserId}, trying full key bundle...`);
            const bundleRes = await api.fetchKeyBundle(theirUserId);
            if (bundleRes?.success && bundleRes.data?.dhPublicKey) {
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
            errorName: err?.name,
            errorMessage: err?.message
        });
        dhSharedKeyCache.delete(theirUserId);
        throw err;
    });
}
async function getUserMasterAesKey(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUserMasterKey"]();
}
/**
 * Fallback master key derivation for legacy messages encrypted with deterministic keys.
 */ async function getLegacyUserMasterAesKey(userId, email) {
    const authState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
    const userEmail = email || authState.user?.email || '';
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
        const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
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
            const ourIdentity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
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
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const SignalProtocolAddress = undefined, SessionCipher = undefined, setWebCrypto = undefined;
        const store = undefined;
        const address = undefined;
        const cipher = undefined;
        const plaintextBytes = undefined;
        const encrypted = undefined;
        // Encrypt a copy for the sender using the sender's own identity private key (AES-GCM)
        let senderIv;
        let senderBody;
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
async function decryptMessage(senderUserId, encryptedPayload, clearSessionOnFail = false, roomId, messageId) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    // 1. Race condition guard: Ensure E2EE key initialization completes before decrypting
    const isReady = undefined;
    let payload;
    const payloadVersion = undefined;
}
function isEncryptedPayload(text) {
    if (!text || !text.startsWith('{')) return false;
    try {
        const obj = JSON.parse(text);
        return obj.__e2ee === true;
    } catch  {
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
    const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    const registrationId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
    const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
    const rawMasterKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveIdentityKeyPair"]({
                pubKey: b642ab(restoredKeys.identityKeyPair.pubKey),
                privKey: b642ab(restoredKeys.identityKeyPair.privKey)
            });
        }
        if (restoredKeys.registrationId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRegistrationId"](restoredKeys.registrationId);
        }
        if (restoredKeys.dhKeyPair) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDhKeyPair"](restoredKeys.dhKeyPair);
        }
        if (restoredKeys.masterKey) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserMasterKey"](b642ab(restoredKeys.masterKey));
        }
        dhSharedKeyCache.clear();
        sessionNeedsRebuild.clear();
        console.log('[E2EE LINK] ✅ Device keys successfully imported from primary device.');
    }
}
}),
"[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
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
    if ((user?.role || '').toLowerCase() !== 'superadmin') return false;
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatform"])();
    return platform.isNative || platform.isElectron;
}
let isFetchingLiveUser = false;
let hasFetchedLiveUser = false;
/**
 * Safely extracts error messages from API calls or native exceptions.
 */ function extractErrorMessage(err, fallbackMessage) {
    if (err && typeof err === 'object') {
        const axiosErr = err;
        const apiMsg = axiosErr.response?.data?.message || axiosErr.response?.data?.error;
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
    const role = user?.role?.toLowerCase() || '';
    if ([
        'superadmin'
    ].includes(role)) return '/admin';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const host = ("TURBOPACK compile-time truthy", 1) ? '' : "TURBOPACK unreachable";
    if (host === 'ai.localhost' || host.startsWith('ai.')) return '/ai';
    if (host === 'chat.localhost' || host.startsWith('chat.')) return '/chat';
    return '/user';
}
function getClientDeviceInfo() {
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    let deviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const platform = isNative ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() || 'mobile' : ua.includes('Win') ? 'windows' : ua.includes('Mac') ? 'macos' : ua.includes('Linux') ? 'linux' : 'web';
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
        console.warn(`[safeStorage] Quota warning for "${key}". Purging bloated caches and retrying...`, err?.message);
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].setState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        transientPassword: undefined,
        deviceMailToken: null
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(user, accessToken, refreshToken, transientPassword, deviceMailToken || undefined);
    try {
        Object.keys(localStorage).forEach((key)=>{
            if (key.startsWith('prefetch_chat_rooms_') && !key.endsWith(`_${user.id}`)) {
                localStorage.removeItem(key);
            }
        });
    } catch (_) {}
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('hasSeenIntro', 'true').catch(()=>{});
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('access_token', accessToken).catch((e)=>console.error('[Capacitor] Token save error:', e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('refresh_token', refreshToken).catch((e)=>console.error('[Capacitor] Refresh token save error:', e));
        try {
            const { getApiV1Url } = __turbopack_context__.r("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('api_base_url', getApiV1Url()).catch(()=>{});
        } catch (_) {}
        if (deviceMailToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('device_mail_token', deviceMailToken).catch((e)=>console.error('[Capacitor] Mail token save error:', e));
        }
        if (deviceId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('pingdart_device_id', deviceId).catch(()=>{});
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch((e)=>console.error('[Capacitor] User save error:', e));
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
    hasFetchedLiveUser = false;
    isFetchingLiveUser = false;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('access_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('refresh_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('user').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('device_mail_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart-auth').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart_device_id').catch((e)=>console.error(e));
    }
}
/**
 * Non-blocking initialization of post-login background services (E2EE keys, FCM Push Token & Linked Device Sync).
 */ function initBackgroundAuthTasks() {
    const { deviceId, platform, deviceType } = getClientDeviceInfo();
    if (deviceId) {
        __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
            chatApi.deviceLinking.registerDevice(deviceId, platform, deviceType).catch(()=>{});
        }).catch(()=>{});
    }
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)").then(({ initializeKeys })=>{
        initializeKeys().catch((err)=>console.warn('[E2EE] Key init failed (non-fatal):', err));
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during login:', err));
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-ssr] (ecmascript, async loader)").then(({ registerDeviceFcmToken })=>{
        registerDeviceFcmToken().catch((err)=>console.warn('[FCM] Token register failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
}
/**
 * Non-blocking cleanup of background services on logout.
 */ function cleanupBackgroundAuthTasks() {
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-ssr] (ecmascript, async loader)").then(({ unregisterDeviceFcmToken })=>{
        unregisterDeviceFcmToken().catch((err)=>console.warn('[FCM] Token unregister failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)").then(({ resetE2EEState })=>{
        resetE2EEState();
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during logout:', err));
}
function useAuth() {
    const storeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.user);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. LOGIN
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password, options)=>{
        setIsLoading(true);
        setError(null);
        try {
            clearSessionTokens();
            const isBypassMode = process.env.NEXT_PUBLIC_BYPASS_LOGIN === 'true';
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
                    role: options?.requireAdmin ? 'superadmin' : 'user',
                    tenant_id: 1,
                    domain_id: 1,
                    full_name: 'Developer Bypass'
                };
                access_token = 'dummy_access_token';
                refresh_token = 'dummy_refresh_token';
                await new Promise((resolve)=>setTimeout(resolve, 500));
            } else {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login', {
                    email,
                    password,
                    deviceId,
                    platform,
                    deviceType,
                    requireSuperAdmin: options?.requireAdmin || false
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
            if (options?.requireAdmin) {
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
                role: user?.role
            };
        } catch (err) {
            const msg = extractErrorMessage(err, 'Login failed. Please check your credentials.');
            const axiosErr = err;
            const errorType = axiosErr?.response?.data?.errorType;
            const field = axiosErr?.response?.data?.field;
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
    }, [
        router
    ]);
    // 2. REGISTER
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (full_name, domain, email, password, phone, contactEmail, location, extra)=>{
        setIsLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/register', {
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
    }, []);
    // 3. SEND OTP
    const sendOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (medium, credential)=>{
        setIsLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/send-otp', {
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
    }, []);
    // 4. VERIFY OTP
    const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (credential, code, newPassword)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-otp', {
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
    }, [
        router
    ]);
    // 5. VERIFY TWO STEP
    const verifyTwoStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId, code, method, credential)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-two-step', {
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
    }, []);
    // 6. LOGIN WITH PIN
    const loginWithPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (identifier, pin)=>{
        setIsLoading(true);
        setError(null);
        try {
            localStorage.removeItem('pingdart-auth');
            hasFetchedLiveUser = false;
            isFetchingLiveUser = false;
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login-pin', {
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
                role: user?.role
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
    }, []);
    // 7. LOGIN WITH FACE
    const loginWithFace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (vector, pin)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login-face', {
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
    }, []);
    // 8. LOGIN WITH HARDWARE BIOMETRICS (TOUCH ID / FACE ID)
    const loginWithSavedBiometrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const { getBiometricLoginCredentials } = await __turbopack_context__.A("[project]/src/utils/biometrics.ts [app-ssr] (ecmascript, async loader)");
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
    }, [
        login
    ]);
    // 6. LOGOUT
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((redirectTarget)=>{
        // Clear E2EE in-memory state FIRST so next login re-initializes cleanly
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetE2EEState"])();
        } catch (_) {}
        const deviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().refreshToken || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null);
        // Notify backend to invalidate refresh token and unregister secondary/linked device
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/logout', {
            refreshToken,
            deviceId
        }).catch(()=>{});
        clearSessionTokens();
        cleanupBackgroundAuthTasks();
        const currentPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
        const isTargetAdmin = redirectTarget?.startsWith('/admin') || currentPath.startsWith('/admin');
        const target = redirectTarget || (isTargetAdmin ? '/admin/login' : '/login');
        router.replace(target);
    }, [
        router
    ]);
    // 7. REFRESH PROFILE (New Addition)
    const refreshProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/user/profile');
            if (res.data && res.data.success) {
                const liveUser = res.data.user;
                const userForStorage = {
                    ...liveUser
                };
                delete userForStorage.avatar;
                delete userForStorage.banner;
                localStorage.setItem('user', JSON.stringify(userForStorage));
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch((e)=>console.error(e));
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(liveUser);
                return liveUser;
            }
        } catch (err) {
            console.error('Failed to fetch live user profile', err);
        }
        return null;
    }, []);
    // 8. GET USER
    const getUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (storeUser) return storeUser;
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const userStr = undefined;
    }, [
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
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/app/(public)/login/QRLoginTab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QRLoginTab",
    ()=>QRLoginTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-qr-code/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Loading01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SmartPhone01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Time02Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Refresh01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
function QRLoginTab({ hideInstructions = false, qrSize = 220 } = {}) {
    const [qrPayload, setQrPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("generating");
    const { setAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Mode: "qr" | "code_input" | "code_display"
    const [linkMode, setLinkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("qr");
    const [inputMedium, setInputMedium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("phone");
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("+91");
    const [emailInput, setEmailInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pairingCode, setPairingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRequestingCode, setIsRequestingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [codeError, setCodeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [codeTimerSeconds, setCodeTimerSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(300);
    const [initialTtl, setInitialTtl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(300);
    const sessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const publicKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastIdentifierRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let socket = null;
        let localPrivateKey = null;
        let currentSessionId = null;
        const initQR = async ()=>{
            try {
                setStatus("generating");
                const { keyPair, publicKeyBase64 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateEphemeralKeys"])();
                localPrivateKey = keyPair.privateKey;
                publicKeyRef.current = publicKeyBase64;
                // Initialize session with backend
                try {
                    const initRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.init();
                    currentSessionId = initRes?.sessionId || crypto.randomUUID();
                } catch  {
                    currentSessionId = crypto.randomUUID();
                }
                sessionIdRef.current = currentSessionId;
                // Prefetch target routes for instant smooth transition
                try {
                    router.prefetch('/user?tab=Chats');
                } catch (_) {}
                // Connect to socket to wait for completion
                const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/api/realtime/`;
                socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(socketUrl, {
                    transports: [
                        "polling",
                        "websocket"
                    ],
                    upgrade: true
                });
                socket.on("connect", ()=>{
                    socket?.emit("qr:join", currentSessionId);
                    socket?.emit("join_room", {
                        room: `qr:${currentSessionId}`
                    });
                    const payload = JSON.stringify({
                        sessionId: currentSessionId,
                        ephemeralPublic: publicKeyBase64,
                        publicKey: publicKeyBase64
                    });
                    setQrPayload(payload);
                    setStatus("waiting");
                });
                socket.on("qr:linked", async (data)=>{
                    try {
                        if (!data.success || !localPrivateKey) return;
                        const { payload, senderEphemeralPublic } = data;
                        const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptDeviceLinkPayload"])(localPrivateKey, senderEphemeralPublic, payload);
                        if (decrypted.authToken) {
                            const targetUrl = '/user?tab=Chats';
                            const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
                            const platform = ua.includes('Win') ? 'windows' : ua.includes('Mac') ? 'macos' : ua.includes('Linux') ? 'linux' : 'web';
                            const deviceId = 'web_' + Math.random().toString(36).substring(2, 10);
                            // Fetch the role before persisting session tokens so restricted accounts stay logged out.
                            const profilePromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])()}/user/profile`, {
                                headers: {
                                    Authorization: `Bearer ${decrypted.authToken}`
                                }
                            }).then((res)=>res.data?.user).catch(()=>null);
                            const keysPromise = decrypted.e2eKeys ? __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)").then(({ importDeviceKeys })=>importDeviceKeys(decrypted.e2eKeys)).catch((e)=>console.warn('[QRLoginTab] Key import warn:', e)) : Promise.resolve();
                            const [userProfileData] = await Promise.all([
                                profilePromise,
                                keysPromise
                            ]);
                            const platformInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatform"])();
                            if (!userProfileData && (platformInfo.isNative || platformInfo.isElectron)) {
                                setError('Unable to verify this account. Please log in on the web.');
                                return;
                            }
                            const finalUser = userProfileData || {
                                id: 0,
                                username: "User",
                                email: "",
                                role: "user"
                            };
                            if (!finalUser.role) finalUser.role = 'user';
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSuperadminWebOnly"])(finalUser)) {
                                setError(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPERADMIN_WEB_ONLY_MESSAGE"]);
                                return;
                            }
                            setStatus("success");
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])()}/device-linking/register-device`, {
                                deviceId,
                                platform,
                                deviceType: 'web'
                            }, {
                                headers: {
                                    Authorization: `Bearer ${decrypted.authToken}`
                                }
                            }).catch((e)=>console.warn('[QRLoginTab] Device registration warn:', e));
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            setAuth(finalUser, decrypted.authToken, decrypted.refreshToken || "");
                            // Smooth instant client-side route transition without white screen or reload
                            router.replace(targetUrl);
                        }
                    } catch (err) {
                        console.error("QR Decrypt Error:", err);
                        setError("Failed to securely decode device linking payload.");
                    }
                });
            } catch (err) {
                console.error("QR Init Error:", err);
                setError("Failed to generate QR code.");
            }
        };
        initQR();
        return ()=>{
            if (socket) {
                if (currentSessionId) socket.emit("qr:leave", currentSessionId);
                socket.disconnect();
            }
        };
    }, []);
    // Live countdown timer for pairing code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (linkMode !== "code_display") return;
        if (codeTimerSeconds <= 0) return;
        const interval = setInterval(()=>{
            setCodeTimerSeconds((prev)=>{
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        linkMode,
        codeTimerSeconds
    ]);
    const formatTimer = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    const handleRegenerateCode = async ()=>{
        const identifier = lastIdentifierRef.current || (inputMedium === "phone" ? `${countryCode}${phoneNumber.replace(/\D/g, "")}` : emailInput.trim());
        if (!identifier || !sessionIdRef.current || !publicKeyRef.current) {
            setLinkMode("code_input");
            return;
        }
        setIsRequestingCode(true);
        setCodeError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.requestCode(sessionIdRef.current, identifier, publicKeyRef.current);
            if (res?.success && res?.code) {
                setPairingCode(res.code);
                const ttl = res.ttlSeconds || 300;
                setCodeTimerSeconds(ttl);
                setInitialTtl(ttl);
            } else {
                setCodeError(res?.error || "Failed to generate pairing code.");
            }
        } catch (err) {
            setCodeError(err?.response?.data?.error || err?.message || "Failed to generate pairing code.");
        } finally{
            setIsRequestingCode(false);
        }
    };
    const handleRequestPairingCode = async (e)=>{
        e.preventDefault();
        setCodeError(null);
        let identifier = "";
        if (inputMedium === "phone") {
            const digits = phoneNumber.replace(/\D/g, "");
            if (!digits) {
                setCodeError("Please enter your registered phone number.");
                return;
            }
            identifier = `${countryCode}${digits}`;
        } else {
            if (!emailInput.trim()) {
                setCodeError("Please enter your registered email address.");
                return;
            }
            identifier = emailInput.trim();
        }
        if (!sessionIdRef.current || !publicKeyRef.current) {
            setCodeError("Session is still initializing. Please wait a moment.");
            return;
        }
        setIsRequestingCode(true);
        try {
            lastIdentifierRef.current = identifier;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.requestCode(sessionIdRef.current, identifier, publicKeyRef.current);
            if (res?.success && res?.code) {
                setPairingCode(res.code);
                const ttl = res.ttlSeconds || 300;
                setCodeTimerSeconds(ttl);
                setInitialTtl(ttl);
                setLinkMode("code_display");
            } else {
                setCodeError(res?.error || "Failed to generate pairing code.");
            }
        } catch (err) {
            setCodeError(err?.response?.data?.error || err?.message || "Failed to generate pairing code.");
        } finally{
            setIsRequestingCode(false);
        }
    };
    const [c1, c2] = (pairingCode || "••••-••••").split("-");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center justify-center w-full ${hideInstructions ? "p-1 space-y-4" : "p-6 space-y-6"}`,
        children: [
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-3 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 305,
                columnNumber: 9
            }, this) : status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 text-emerald-500 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                        size: 64,
                        className: "animate-in zoom-in"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-lg",
                        children: "Device linked successfully!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this) : linkMode === "code_input" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center space-y-4 animate-in fade-in duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full text-center space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-bold text-white uppercase tracking-wider",
                                children: "Link with Phone or Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "Enter your registered credentials to get an 8-character pairing code"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex p-1 bg-slate-900/80 border border-slate-800 rounded-full w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setInputMedium("phone");
                                    setCodeError(null);
                                },
                                className: `flex-1 py-1.5 text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${inputMedium === "phone" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    " Phone"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setInputMedium("email");
                                    setCodeError(null);
                                },
                                className: `flex-1 py-1.5 text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${inputMedium === "email" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    " Email"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this),
                    codeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs w-full text-center",
                        children: codeError
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 347,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleRequestPairingCode,
                        className: "w-full space-y-3",
                        children: [
                            inputMedium === "phone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: countryCode,
                                        onChange: (e)=>setCountryCode(e.target.value),
                                        className: "px-2.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-xs font-semibold outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "+91",
                                                children: "🇮🇳 +91"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "+1",
                                                children: "🇺🇸 +1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "+44",
                                                children: "🇬🇧 +44"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "+971",
                                                children: "🇦🇪 +971"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        required: true,
                                        autoFocus: true,
                                        value: phoneNumber,
                                        onChange: (e)=>setPhoneNumber(e.target.value.replace(/[^\d\s\-]/g, '')),
                                        placeholder: "Registered Phone Number",
                                        className: "flex-1 px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-xs font-medium outline-none placeholder:text-slate-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                required: true,
                                autoFocus: true,
                                value: emailInput,
                                onChange: (e)=>setEmailInput(e.target.value),
                                placeholder: "name@pingdart.com or user@gmail.com",
                                className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-xs font-medium outline-none placeholder:text-slate-500 focus:border-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isRequestingCode,
                                className: "w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer",
                                children: isRequestingCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loading01Icon"], {
                                            size: 14,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Generating Code..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 395,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Next / Get Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 399,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setLinkMode("qr");
                            setCodeError(null);
                        },
                        className: "text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline-offset-4 hover:underline",
                        children: "← Back to QR code"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this) : linkMode === "code_display" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center space-y-4 animate-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full text-center space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full",
                                        children: "Code Ready"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all border ${codeTimerSeconds <= 0 ? "bg-rose-950/60 border-rose-500/50 text-rose-300" : codeTimerSeconds <= 60 ? "bg-amber-950/60 border-amber-500/50 text-amber-300 animate-pulse" : "bg-blue-950/60 border-blue-500/40 text-blue-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Time02Icon"], {
                                                size: 12,
                                                className: codeTimerSeconds <= 0 ? "text-rose-400" : codeTimerSeconds <= 60 ? "text-amber-400" : "text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: codeTimerSeconds <= 0 ? "Expired" : `Expires in ${formatTimer(codeTimerSeconds)}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-bold text-white pt-1",
                                children: "Enter this code on your phone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center my-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-300 ${codeTimerSeconds <= 0 ? "opacity-30 grayscale blur-[0.5px]" : "opacity-100"}`,
                                children: [
                                    (c1 || "").split("").map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-10 sm:w-9 sm:h-11 rounded-lg bg-slate-900/90 border-2 border-blue-500/60 flex items-center justify-center font-mono text-lg sm:text-xl font-black text-white shadow-lg",
                                            children: ch
                                        }, `c1-${idx}`, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 font-black text-lg px-0.5",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    (c2 || "").split("").map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-10 sm:w-9 sm:h-11 rounded-lg bg-slate-900/90 border-2 border-blue-500/60 flex items-center justify-center font-mono text-lg sm:text-xl font-black text-white shadow-lg",
                                            children: ch
                                        }, `c2-${idx}`, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this),
                            codeTimerSeconds <= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center z-10 gap-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleRegenerateCode,
                                    disabled: isRequestingCode,
                                    className: "px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-bold text-xs shadow-xl border border-white/20 flex items-center gap-2 cursor-pointer transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Refresh01Icon"], {
                                            size: 14,
                                            className: isRequestingCode ? "animate-spin" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 475,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isRequestingCode ? "Generating..." : "Get New Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                    lineNumber: 469,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 468,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[280px] h-1.5 bg-slate-800 rounded-full overflow-hidden mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full transition-all duration-1000 ease-linear rounded-full ${codeTimerSeconds <= 0 ? "w-0 bg-rose-500" : codeTimerSeconds <= 60 ? "bg-amber-400" : "bg-gradient-to-r from-blue-500 to-emerald-400"}`,
                                    style: {
                                        width: `${Math.max(0, Math.min(100, codeTimerSeconds / initialTtl * 100))}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-1 px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-300 leading-relaxed",
                                children: [
                                    "Open ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 498,
                                        columnNumber: 20
                                    }, this),
                                    " on phone > ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Linked Devices"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 498,
                                        columnNumber: 60
                                    }, this),
                                    " > ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Link with code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 498,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${codeTimerSeconds <= 0 ? "bg-rose-400" : "bg-emerald-400 animate-ping"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: codeTimerSeconds <= 0 ? "Pairing code expired. Generate a new one." : "Waiting for code confirmation..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleRegenerateCode,
                                disabled: isRequestingCode,
                                className: "text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer flex items-center gap-1.5 transition hover:underline",
                                title: "Generate code one more time",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Refresh01Icon"], {
                                        size: 13,
                                        className: isRequestingCode ? "animate-spin" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isRequestingCode ? "Generating..." : "Get new code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setLinkMode("code_input"),
                                className: "text-xs text-slate-400 hover:text-white cursor-pointer",
                                children: "Change number"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setLinkMode("qr");
                                    setPairingCode(null);
                                },
                                className: "text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline-offset-4 hover:underline",
                                children: "Link with QR code"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 527,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 415,
                columnNumber: 9
            }, this) : qrPayload ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-3 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: qrPayload,
                                size: qrSize,
                                level: "H",
                                className: "relative z-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 540,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute left-4 right-4 h-0.5 bg-emerald-500 shadow-[0_0_12px_3px_rgba(16,185,129,0.5)] z-10",
                                initial: {
                                    top: "20px"
                                },
                                animate: {
                                    top: [
                                        "20px",
                                        `${20 + qrSize}px`,
                                        "20px"
                                    ]
                                },
                                transition: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-emerald-500/80 rounded-tl-xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-emerald-500/80 rounded-tr-xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-emerald-500/80 rounded-bl-xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 553,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-emerald-500/80 rounded-br-xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLinkMode("code_input"),
                        className: "text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline-offset-4 hover:underline pt-1 transition",
                        children: "Link with phone number or email instead"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 558,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 537,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 py-16 text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loading01Icon"], {
                        className: "animate-spin",
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Generating secure QR code..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this),
            !hideInstructions && linkMode === "qr" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 dark:text-white",
                        children: "Log in with QR Code"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 575,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400",
                        children: [
                            "Scan this code from the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Settings > Link Device"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                                lineNumber: 577,
                                columnNumber: 37
                            }, this),
                            " menu on your existing device."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                        lineNumber: 576,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
                lineNumber: 574,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/login/QRLoginTab.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WorkspaceLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceLoader",
    ()=>WorkspaceLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/** Silently cache a value in localStorage, ignoring quota errors */ function safeStore(key, value) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } catch  {}
}
/** Dynamic import guard – only runs in a real browser context */ const isBrowser = "undefined" !== "undefined";
function WorkspaceLoader({ variant = "native", onDone }) {
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
        onDone
    ]);
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setElapsed((prev)=>prev + 1);
        }, 1000);
        return ()=>clearInterval(timer);
    }, []);
    const isNative = variant === "native";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-300 ease-in-out opacity-100 scale-100 ${isNative ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700" : "bg-gradient-to-br from-[#0B0F19] via-indigo-950 to-[#0B0F19]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] ${isNative ? "bg-white/15" : "bg-indigo-600/30"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[40%] -right-[20%] w-[50%] h-[50%] rounded-full blur-[100px] ${isNative ? "bg-black/20" : "bg-blue-500/20"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorkspaceLoader.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center gap-5 px-8 w-full max-w-xs text-center z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl relative ${isNative ? "bg-white/20 backdrop-blur-md border border-white/30" : "bg-white/10 backdrop-blur-md border border-white/20"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo_light.png",
                            alt: "Logo",
                            width: 52,
                            height: 52,
                            style: {
                                width: "auto",
                                height: "auto"
                            },
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorkspaceLoader.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-blue-400 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium tracking-wide text-slate-200",
                                        children: elapsed < 3 ? "Signing in to workspace..." : elapsed < 6 ? "Preparing your chats & settings..." : "Finishing loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorkspaceLoader.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            elapsed >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    const target = localStorage.getItem("redirect_after_login") || "/user?tab=Chats";
                                    window.location.href = target;
                                },
                                className: "mt-3 px-4 py-1.5 text-xs text-blue-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-full transition-all cursor-pointer shadow-sm active:scale-95",
                                children: "Click here to continue →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkspaceLoader.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorkspaceLoader.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorkspaceLoader.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorkspaceLoader.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Moon01Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ThemeToggle({ className = "", minimal = false }) {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Only render after mount to avoid hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    if (!mounted) {
        // Placeholder to prevent layout shift
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-9 h-9 ${className}`
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 22,
            columnNumber: 12
        }, this);
    }
    const isDark = theme === "dark";
    const toggle = ()=>setTheme(isDark ? "light" : "dark");
    if (minimal) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: toggle,
            "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
            className: `w-9 h-9 flex items-center justify-center rounded-full transition-all
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          text-gray-600 dark:text-gray-300 shadow-sm active:scale-90 ${className}`,
            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 39,
                columnNumber: 19
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Moon01Icon"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 39,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all
        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
        text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700
        shadow-sm active:scale-95 ${className}`,
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Light"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Moon01Icon"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Dark"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/useSiteSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BOTTOM_LINKS",
    ()=>DEFAULT_BOTTOM_LINKS,
    "DEFAULT_FOOTER_SECTIONS",
    ()=>DEFAULT_FOOTER_SECTIONS,
    "useSiteSettings",
    ()=>useSiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return DEFAULT_SITE_SETTINGS;
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchSettings() {
            try {
                const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
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
                        setSettings((prev)=>({
                                ...prev,
                                ...updated
                            }));
                        try {
                            const forStorage = {
                                ...updated
                            };
                            if (forStorage.appLogoImage?.startsWith('data:') || (forStorage.appLogoImage?.length || 0) > 500) {
                                delete forStorage.appLogoImage;
                            }
                            if (forStorage.appLogoDark?.startsWith('data:') || (forStorage.appLogoDark?.length || 0) > 500) {
                                delete forStorage.appLogoDark;
                            }
                            if (forStorage.appLogoDarkImage?.startsWith('data:') || (forStorage.appLogoDarkImage?.length || 0) > 500) {
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
    }, []);
    const updateSettings = async (newSettings)=>{
        try {
            const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
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
}),
"[project]/src/utils/biometrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
async function authenticateBiometric(reason = "Verify fingerprint, Face ID, or device PIN to unlock") {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            if (result.isAvailable) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].verifyIdentity({
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return true;
}
const BIOMETRIC_SERVER_NAME = "pingdart_login";
const BIOMETRIC_ENABLED_KEY = "pingdart_biometric_login_enabled";
const LAST_LOGIN_USER_KEY = "pingdart_saved_login_user";
async function isBiometricsAvailable() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            return {
                available: Boolean(result?.isAvailable),
                biometryType: result?.biometryType ? String(result.biometryType) : undefined
            };
        } catch  {
            return {
                available: false
            };
        }
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        available: false
    };
}
function isBiometricLoginEnabled() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function setBiometricLoginEnabled(enabled, username) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getSavedLoginUser() {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
}
async function saveBiometricLoginCredentials(username, passwordOrToken) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].setCredentials({
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const creds = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].getCredentials({
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].deleteCredentials({
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
}),
"[project]/src/app/(public)/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ZapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ZapIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Robot01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Robot01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$QrCodeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/QrCodeIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Key01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SmartPhone01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewOffSlashIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FingerPrintIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$login$2f$QRLoginTab$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(public)/login/QRLoginTab.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorkspaceLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/biometrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
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
;
;
;
;
;
;
;
const FaceDiscoveryScannerModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const parseSubdomainContext = (hostname)=>{
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
        // For standard domains: e.g. mail.pingdart.com (length >= 3)
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
    const isMail = sub === 'mail';
    const isChat = sub === 'chat';
    const isAi = sub === 'ai';
    const isCustomTenant = Boolean(sub && !isMail && !isChat && !isAi);
    const capitalizedSub = sub ? sub.charAt(0).toUpperCase() + sub.slice(1) : 'PingDart';
    if (isMail) {
        return {
            subdomain: 'mail',
            brandName: 'PingDart Mail',
            isMail: true,
            isChat: false,
            isAi: false,
            isCustomTenant: false,
            badge: '✉️ PingDart Mail Portal',
            headline: 'Sign in to Mail',
            subheadline: 'Access your secure inboxes, webmail & email accounts.',
            heroBadge: 'Enterprise Secure Webmail',
            heroTitle: 'Ultra-Fast Webmail',
            heroHighlight: 'Mailbox & Domains',
            heroDesc: 'Manage custom domain mailboxes, IMAP sync, and secure corporate communications.',
            defaultRedirect: '/user?tab=Mail',
            loginPlaceholder: 'user@pingdart.com, personal email, or mailbox'
        };
    }
    if (isChat) {
        return {
            subdomain: 'chat',
            brandName: 'PingDart Chat',
            isMail: false,
            isChat: true,
            isAi: false,
            isCustomTenant: false,
            badge: '💬 PingDart Chat',
            headline: 'Sign in to Chat',
            subheadline: 'Connect with your team, channels, and direct messages.',
            heroBadge: 'Realtime Team Messaging',
            heroTitle: 'Instant Team Chat',
            heroHighlight: 'Realtime Channels',
            heroDesc: 'Collaborate with ultra-low latency messaging, voice notes, video calls, and group channels.',
            defaultRedirect: '/chat',
            loginPlaceholder: 'Username, PingDart email, or Gmail'
        };
    }
    if (isAi) {
        return {
            subdomain: 'ai',
            brandName: 'PingDart AI Studio',
            isMail: false,
            isChat: false,
            isAi: true,
            isCustomTenant: false,
            badge: '🤖 PingDart AI Studio',
            headline: 'Sign in to AI Studio',
            subheadline: 'Access your AI Second Brain, Agents, and Workflows.',
            heroBadge: 'Autonomous AI Operating System',
            heroTitle: 'Your Intelligent',
            heroHighlight: 'AI Copilot & Agents',
            heroDesc: 'Execute autonomous workflows, voice notes, diary insights, and personalized intelligence.',
            defaultRedirect: '/ai',
            loginPlaceholder: 'Username, PingDart ID, or Gmail'
        };
    }
    if (isCustomTenant) {
        const domainSuffix = isLocalhost ? 'localhost' : parts.slice(1).join('.');
        return {
            subdomain: sub,
            brandName: `${capitalizedSub} Workspace`,
            isMail: false,
            isChat: false,
            isAi: false,
            isCustomTenant: true,
            badge: `🏢 ${sub}.${domainSuffix} Workspace`,
            headline: `Sign in to ${capitalizedSub}`,
            subheadline: `Welcome to the ${capitalizedSub} organization portal.`,
            heroBadge: `${capitalizedSub} Organization Portal`,
            heroTitle: `${capitalizedSub}`,
            heroHighlight: 'Workspace Portal',
            heroDesc: `Private organization space for ${capitalizedSub} members, email accounts, and collaboration.`,
            defaultRedirect: '/user?tab=Chats',
            loginPlaceholder: `name@${sub}.com, user@gmail.com, or username`
        };
    }
    return {
        subdomain: '',
        brandName: ("TURBOPACK compile-time value", "PingDart") || 'PingDart',
        isMail: false,
        isChat: false,
        isAi: false,
        isCustomTenant: false,
        badge: '',
        headline: 'Welcome back',
        subheadline: 'Please enter your details to sign in.',
        heroBadge: 'The AI Business Operating System',
        heroTitle: 'Enterprise',
        heroHighlight: 'Mail Platform',
        heroDesc: 'A high-performance, API-first mail server platform to host email services for multiple domains securely.',
        defaultRedirect: '/user?tab=Chats',
        loginPlaceholder: 'name@pingdart.com, user@gmail.com, or username'
    };
};
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const { login, loginWithPin, loginWithFace, loginWithSavedBiometrics, sendOtp, verifyOtp, verifyTwoStep, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { user: storeUser, accessToken: storeToken, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative, isElectron } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isDesktopApp = Boolean(isElectron || "undefined" !== "undefined" && (Boolean(window.__ELECTRON__) || Boolean(window.process?.versions?.electron) || (navigator.userAgent || "").toLowerCase().includes("electron") || window.location.protocol.includes("capacitor-electron")));
    const [mobileMode, setMobileMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [redirecting, setRedirecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarLogoSrc, setSidebarLogoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("/logo.png");
    const [mobileLogoSrc, setMobileLogoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("/logo_light.png");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const rawDark = settings.appLogoDark || settings.appLogoDarkImage;
        if (rawDark && !rawDark.includes("storage.pingdart.com")) {
            setSidebarLogoSrc(rawDark);
        } else {
            setSidebarLogoSrc("/logo.png");
        }
        const rawLight = settings.appLogoDark || settings.appLogoImage;
        console.log("rawLight :", settings.appLogoDark);
        if (rawLight && !rawLight.includes("storage.pingdart.com")) {
            setMobileLogoSrc(rawLight);
        } else {
            setMobileLogoSrc("/logo_light.png");
        }
    }, [
        settings.appLogoDark,
        settings.appLogoDarkImage,
        settings.appLogoImage
    ]);
    const [savedAccount, setSavedAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fieldError, setFieldError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subdomainCtx, setSubdomainCtx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : parseSubdomainContext(""));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Prefetch dashboard routes immediately so transitions are instant
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            router.prefetch("/user");
            router.prefetch("/admin");
        } catch (_) {}
    }, [
        router
    ]);
    /**
   * Smooth client-side router transition with hard reload fallback
   */ const navigateToTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        setRedirecting(true);
        router.replace(target);
        setTimeout(()=>{
            if ("undefined" !== "undefined" && window.location.pathname.includes('/login')) //TURBOPACK unreachable
            ;
        }, 1200);
    }, [
        router
    ]);
    /**
   * Computes the final redirect target after login.
   * Respects subdomain context (e.g. mail.localhost -> /user?tab=Mail)
   */ const buildUserTarget = (role)=>{
        const isSuper = role && [
            'superadmin'
        ].includes(role.toLowerCase());
        if (isSuper) return "/admin";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return subdomainCtx.defaultRedirect || "/user?tab=Chats";
    };
    const [showAccountChoice, setShowAccountChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load saved account hint from localStorage (runs once on mount, before hydration)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const rawSaved = localStorage.getItem("pingdart_saved_account");
            if (rawSaved) {
                const parsed = JSON.parse(rawSaved);
                if (parsed && parsed.email) {
                    setSavedAccount(parsed);
                    setEmail(parsed.email);
                }
            }
        } catch (_) {}
    }, []);
    // Auto-redirect already-authenticated users — ONLY after the async store has hydrated.
    // Without the isHydrated guard, storeUser/storeToken are null on first render (async storage
    // hasn't loaded yet), so the redirect never fires and the login page stays visible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHydrated) return; // wait for async storage rehydration
        if (storeUser && storeToken) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSuperadminWebOnly"])(storeUser)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPERADMIN_WEB_ONLY_MESSAGE"], {
                    id: "superadmin-web-only-login"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
                return;
            }
            const target = buildUserTarget(storeUser.role);
            navigateToTarget(target);
        } else if (storeUser && storeUser.email) {
            // Store user exists but token is gone — still populate the account hint
            setSavedAccount({
                full_name: storeUser.full_name || undefined,
                email: storeUser.email,
                avatar: storeUser.avatar || undefined
            });
            setEmail(storeUser.email);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isHydrated,
        storeUser,
        storeToken,
        savedAccount
    ]);
    const handleContinueWithSavedAccount = ()=>{
        const activeEmail = (storeUser?.email || "").toLowerCase().trim();
        const savedEmail = (savedAccount?.email || "").toLowerCase().trim();
        // ONLY continue instantly if the active stored session matches the displayed saved account!
        if (storeUser && storeToken && activeEmail && savedEmail && activeEmail === savedEmail) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Welcome back, ${storeUser.full_name || storeUser.email}! Redirecting...`);
            const target = buildUserTarget(storeUser.role);
            navigateToTarget(target);
        } else {
            // Session does not match saved account or token expired:
            // Clear any stale mismatched session and ask user for password
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSessionTokens"])();
            setShowAccountChoice(false);
            if (savedAccount?.email) {
                setEmail(savedAccount.email);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`Please enter your password for ${savedAccount?.email || 'your account'} to sign in.`);
        }
    };
    const [loginMethod, setLoginMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("password");
    const [otpMedium, setOtpMedium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("gmail");
    const [otpCredential, setOtpCredential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("+91");
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpValues, setOtpValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        "",
        "",
        "",
        ""
    ]);
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // PIN Login State
    const [pinIdentifier, setPinIdentifier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pinValue, setPinValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pinError, setPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Face ID / Biometrics State
    const [faceModalOpen, setFaceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [facePendingUser, setFacePendingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [facePendingVector, setFacePendingVector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [facePinValue, setFacePinValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [faceError, setFaceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBiometricDeviceReady, setIsBiometricDeviceReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasBiometricEnrolledLocally, setHasBiometricEnrolledLocally] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBiometricsAvailable"])().then((res)=>{
            setIsBiometricDeviceReady(res.available);
        });
        setHasBiometricEnrolledLocally((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBiometricLoginEnabled"])());
        const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSavedLoginUser"])();
        if (saved) {
            setPinIdentifier(saved);
        }
    }, []);
    // Handle remote device unlinking without reload
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (error === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPERADMIN_WEB_ONLY_MESSAGE"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error, {
                id: "superadmin-web-only-login"
            });
        }
    }, [
        error
    ]);
    // Two-Step Verification state
    const [twoStepInfo, setTwoStepInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [twoStepPin, setTwoStepPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [twoStepError, setTwoStepError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const appName = ("TURBOPACK compile-time value", "PingDart") || "PingDart";
    const handleLogin = async (e)=>{
        e.preventDefault();
        setFieldError(null);
        const activeEmail = (storeUser?.email || "").toLowerCase().trim();
        const loginEmail = email.toLowerCase().trim();
        if (activeEmail && activeEmail !== loginEmail) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSessionTokens"])();
        }
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Signing in...");
        try {
            const res = await login(email, password);
            if (res && 'requiresTwoStep' in res && res.requiresTwoStep) {
                setTwoStepInfo(res);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`Two-Step verification required (${res.twoStepMethod.toUpperCase()})`);
            } else if (res && 'success' in res && res.success) {
                const loggedInUser = res.user;
                // Save account for Google-like 1-click continue
                try {
                    if (loggedInUser) {
                        const avatarUrl = loggedInUser.avatar && !loggedInUser.avatar.startsWith('data:') && loggedInUser.avatar.length < 500 ? loggedInUser.avatar : undefined;
                        localStorage.setItem("pingdart_saved_account", JSON.stringify({
                            full_name: loggedInUser.full_name || loggedInUser.username,
                            email: loggedInUser.email,
                            avatar: avatarUrl
                        }));
                        setSavedAccount({
                            full_name: loggedInUser.full_name || loggedInUser.username,
                            email: loggedInUser.email,
                            avatar: avatarUrl
                        });
                    }
                } catch (_) {}
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Login successful! Redirecting...");
                const loginRole = loggedInUser?.role || res.role || undefined;
                const target = buildUserTarget(loginRole);
                navigateToTarget(target);
            } else if (res && 'success' in res && !res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(res.error || "Login failed", res.error === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPERADMIN_WEB_ONLY_MESSAGE"] ? {
                    id: "superadmin-web-only-login"
                } : undefined);
                if (res.field === 'email' || res.field === 'password' || res.field === 'all') {
                    setFieldError(res.field);
                }
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.message || "An unexpected error occurred during login");
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleVerifyTwoStep = async (e)=>{
        e.preventDefault();
        if (!twoStepInfo || !twoStepInfo.userId || !twoStepPin) return;
        setTwoStepError(null);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Verifying security code...");
        try {
            const success = await verifyTwoStep(twoStepInfo.userId, twoStepPin, twoStepInfo.twoStepMethod, twoStepInfo.credential);
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Verification successful! Redirecting...");
                const target = buildUserTarget();
                navigateToTarget(target);
            } else {
                const errMsg = error || (twoStepInfo.twoStepMethod === 'pin' ? 'Invalid 6-digit Security PIN. Please try again.' : 'Invalid or expired verification code. Please try again.');
                setTwoStepError(errMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errMsg, errMsg === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPERADMIN_WEB_ONLY_MESSAGE"] ? {
                    id: "superadmin-web-only-login"
                } : undefined);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.message || "Verification failed");
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleSendOtp = async ()=>{
        let credential = otpCredential;
        if (otpMedium === 'phone') {
            const digits = phoneNumber.replace(/\D/g, '');
            if (!digits) return;
            credential = `${countryCode}${digits}`;
        }
        if (!credential) return;
        setOtpCredential(credential);
        const success = await sendOtp(otpMedium, credential);
        if (success) {
            setOtpSent(true);
        }
    };
    const handleVerifyOtp = async (e)=>{
        e.preventDefault();
        const code = otpValues.join("");
        if (!otpCredential || code.length !== 6) return;
        await verifyOtp(otpCredential, code);
    };
    const handleOtpChange = (index, value)=>{
        if (!/^\d*$/.test(value)) return;
        const newValues = [
            ...otpValues
        ];
        newValues[index] = value.slice(-1);
        setOtpValues(newValues);
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleOtpKeyDown = (index, e)=>{
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handleOtpPaste = (e)=>{
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (pastedData) {
            const newValues = [
                ...otpValues
            ];
            for(let i = 0; i < pastedData.length; i++){
                newValues[i] = pastedData[i];
            }
            setOtpValues(newValues);
            const focusIndex = Math.min(pastedData.length, 5);
            inputRefs.current[focusIndex]?.focus();
        }
    };
    const handlePinLogin = async (e)=>{
        e.preventDefault();
        const ident = pinIdentifier.trim() || email.trim();
        if (!ident) {
            setPinError("Please enter your email, username, or phone number.");
            return;
        }
        if (pinValue.length !== 6) {
            setPinError("Please enter your 6-digit Security PIN.");
            return;
        }
        setPinError(null);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Signing in with PIN...");
        try {
            const res = await loginWithPin(ident, pinValue);
            if (res && 'success' in res && res.success) {
                const u = res.user;
                if (u) {
                    const avatarUrl = u.avatar && !u.avatar.startsWith('data:') && u.avatar.length < 500 ? u.avatar : undefined;
                    localStorage.setItem("pingdart_saved_account", JSON.stringify({
                        full_name: u.full_name || u.username,
                        email: u.email,
                        avatar: avatarUrl
                    }));
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Welcome back! Signed in with PIN.");
                const loginRole = res.role || storeUser?.role || undefined;
                const target = buildUserTarget(loginRole);
                navigateToTarget(target);
            } else {
                const msg = res && 'error' in res && res.error ? res.error : "Incorrect Security PIN or account not found.";
                setPinError(msg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
            }
        } catch (err) {
            const msg = err?.message || "An error occurred during PIN sign-in.";
            setPinError(msg);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleBiometricHardwareLogin = async ()=>{
        setFaceError(null);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Scanning Face ID / Biometrics...");
        try {
            const res = await loginWithSavedBiometrics();
            if (res && 'success' in res && res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Biometric verification successful! Signing in...");
                const loginRole = res.role || storeUser?.role || undefined;
                const target = buildUserTarget(loginRole);
                navigateToTarget(target);
            } else {
                const msg = res && 'error' in res && res.error ? res.error : "Biometric unlock failed. Please use camera scan or PIN.";
                setFaceError(msg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
            }
        } catch (err) {
            const msg = err?.message || "Biometric authentication failed.";
            setFaceError(msg);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleVectorCapturedForLogin = async (vector)=>{
        setFaceModalOpen(false);
        setFaceError(null);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Matching face with PingDart account...");
        try {
            const res = await loginWithFace(vector);
            if (res.requiresPin) {
                setFacePendingVector(vector);
                setFacePendingUser(res.matchedUser);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`Face recognized (${res.matchedUser?.full_name || res.matchedUser?.username})! Please enter your 6-digit Security PIN.`);
            } else if (res.success) {
                if (res.user) {
                    const avatarUrl = res.user.avatar && !res.user.avatar.startsWith('data:') && res.user.avatar.length < 500 ? res.user.avatar : undefined;
                    localStorage.setItem("pingdart_saved_account", JSON.stringify({
                        full_name: res.user.full_name || res.user.username,
                        email: res.user.email,
                        avatar: avatarUrl
                    }));
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Face ID confirmed! Signing in...");
                const target = buildUserTarget(res.user?.role);
                navigateToTarget(target);
            } else {
                const msg = res.error || "No matching profile found with Face Login enabled.";
                setFaceError(msg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
            }
        } catch (err) {
            const msg = err?.message || "Face recognition failed.";
            setFaceError(msg);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleFacePinConfirm = async (e)=>{
        e.preventDefault();
        if (!facePendingVector || facePinValue.length !== 6) {
            setFaceError("Please enter your 6-digit Security PIN.");
            return;
        }
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Verifying Security PIN...");
        try {
            const res = await loginWithFace(facePendingVector, facePinValue);
            if (res.success && res.user) {
                const avatarUrl = res.user.avatar && !res.user.avatar.startsWith('data:') && res.user.avatar.length < 500 ? res.user.avatar : undefined;
                localStorage.setItem("pingdart_saved_account", JSON.stringify({
                    full_name: res.user.full_name || res.user.username,
                    email: res.user.email,
                    avatar: avatarUrl
                }));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Authentication confirmed! Signing in...");
                const target = buildUserTarget(res.user.role);
                navigateToTarget(target);
            } else {
                const msg = res.error || "Incorrect Security PIN. Please try again.";
                setFaceError(msg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
            }
        } catch (err) {
            const msg = err?.message || "Failed to confirm PIN.";
            setFaceError(msg);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    // Social Sign-in Icons Row Component
    const SocialIconsRow = ()=>{
        const [socialModalOpen, setSocialModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
        const handleSocialClick = (provider)=>{
            setSelectedProvider(provider);
            setSocialModalOpen(true);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-4 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleSocialClick("X (Twitter)"),
                            className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-blue-400 active:scale-90 transition-all shadow-2xs",
                            title: "Sign in with X",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 fill-current",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 715,
                                    columnNumber: 71
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleSocialClick("LinkedIn"),
                            className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-blue-700 active:scale-90 transition-all shadow-2xs",
                            title: "Sign in with LinkedIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 fill-current",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 723,
                                    columnNumber: 71
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 723,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 717,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleSocialClick("Facebook"),
                            className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-blue-600 active:scale-90 transition-all shadow-2xs",
                            title: "Sign in with Facebook",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 fill-current",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 71
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handleSocialClick("Google"),
                            className: "w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-red-500 active:scale-90 transition-all shadow-2xs",
                            title: "Sign in with Google",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 fill-current",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.24 10.285v3.708h6.824c-.269 1.745-2.046 5.125-6.824 5.125-4.108 0-7.46-3.388-7.46-7.564s3.352-7.564 7.46-7.564c2.34 0 3.902.998 4.797 1.859l2.92-2.82c-1.879-1.758-4.316-2.839-7.717-2.839-6.353 0-11.5 5.147-11.5 11.5s5.147 11.5 11.5 11.5c6.64 0 11.04-4.667 11.04-11.239 0-.756-.08-1.334-.179-1.906h-10.861z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 739,
                                    columnNumber: 71
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 708,
                    columnNumber: 9
                }, this),
                socialModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-xs w-full shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200 select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-[10px] bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-500 flex items-center justify-center mx-auto shadow-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 747,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-black text-slate-900 dark:text-white",
                                        children: "Temporarily Unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 751,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed",
                                        children: [
                                            selectedProvider ? `${selectedProvider} sign-in` : "Social sign-in",
                                            " is temporarily unavailable. Please sign in using your ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 143
                                            }, this),
                                            " or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 229
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 752,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 750,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSocialModalOpen(false),
                                className: "w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-[10px] text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all",
                                children: "Got It"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 756,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 746,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 745,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true);
    };
    // ────────────── EXCLUSIVE NATIVE MOBILE VIEW (MOFINOW STYLE) ──────────────
    // Electron is a desktop runtime — never show the native mobile UI inside it,
    // even if @capacitor-community/electron makes Capacitor.isNativePlatform() lie.
    if (isNative && !isElectron) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] bg-white dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none transition-colors duration-300",
            children: [
                redirecting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceLoader"], {
                    variant: "native"
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 777,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[32%] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-b-[45px] shadow-lg flex flex-col items-center justify-center p-6 pt-[calc(1.5rem+env(safe-area-inset-top,12px))] text-white overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 783,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/15 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 784,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 782,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-[10px] bg-white/20 backdrop-blur-md border border-white/30 p-2.5 flex items-center justify-center shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: mobileLogoSrc,
                                        alt: "Logo",
                                        width: 48,
                                        height: 48,
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        },
                                        className: "w-12 h-12 object-contain",
                                        priority: true,
                                        onError: ()=>setMobileLogoSrc("/logo_light.png")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 793,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-black tracking-wider text-white uppercase text-center px-4",
                                    children: settings.appLogoText || subdomainCtx.brandName || appName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 792,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 780,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#0b141a] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))] transition-colors duration-300",
                    children: [
                        mobileMode === "welcome" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-between pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight",
                                            children: "Welcome !"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3.5 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push("/register"),
                                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-black rounded-full shadow-lg shadow-blue-500/25 transition-all text-sm uppercase tracking-wider",
                                                    children: "Create Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMobileMode("login"),
                                                    className: "w-full py-4 bg-white dark:bg-slate-800 border-2 border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 active:scale-[0.98] text-blue-600 dark:text-blue-400 font-black rounded-full transition-all text-sm uppercase tracking-wider shadow-xs",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 817,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-3 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 dark:text-slate-500 font-semibold",
                                            children: "Sign in with another account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIconsRow, {}, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 841,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 816,
                            columnNumber: 13
                        }, this),
                        mobileMode === "login" && (otpSent || twoStepInfo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-between pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center space-y-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-3xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                className: "w-10 h-10 text-blue-600 dark:text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 853,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 852,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-extrabold text-slate-900 dark:text-white",
                                            children: twoStepInfo ? "Two-Step Verification" : "Registration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 855,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 max-w-xs text-center",
                                            children: [
                                                "Enter the Code sent to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 42
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-blue-600 dark:text-blue-400",
                                                    children: twoStepInfo ? twoStepInfo.target || "your registered device" : otpCredential
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 851,
                                    columnNumber: 15
                                }, this),
                                twoStepInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleVerifyTwoStep,
                                    className: "space-y-5 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",
                                            maxLength: 6,
                                            required: true,
                                            value: twoStepPin,
                                            onChange: (e)=>setTwoStepPin(e.target.value.replace(/\D/g, '')),
                                            placeholder: "••••••",
                                            className: "w-full text-center text-2xl font-black tracking-[0.5em] py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 outline-none shadow-xs transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading || twoStepPin.length !== 6,
                                            className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-full shadow-lg shadow-blue-500/30 transition-all text-sm uppercase tracking-wider disabled:opacity-50",
                                            children: isLoading ? "Verifying..." : "Verify & Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 868,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleVerifyOtp,
                                    className: "space-y-5 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-1.5 sm:gap-2",
                                            children: otpValues.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: (el)=>{
                                                        inputRefs.current[index] = el;
                                                    },
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    pattern: "[0-9]*",
                                                    maxLength: 1,
                                                    value: digit,
                                                    onChange: (e)=>handleOtpChange(index, e.target.value),
                                                    onKeyDown: (e)=>handleOtpKeyDown(index, e),
                                                    onPaste: handleOtpPaste,
                                                    className: "w-11 h-12 text-center text-lg font-black rounded-[10px] border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 outline-none shadow-xs transition-all"
                                                }, index, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 890,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-xs text-slate-500 dark:text-slate-400",
                                            children: [
                                                "I Didn't Receive the Code!",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleSendOtp,
                                                    disabled: isLoading,
                                                    className: "text-blue-600 dark:text-blue-400 font-bold hover:underline",
                                                    children: "Resend Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 908,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading || otpValues.join("").length !== 6,
                                            className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-full shadow-lg shadow-blue-500/30 transition-all text-sm uppercase tracking-wider disabled:opacity-50",
                                            children: isLoading ? "Verifying..." : "Verify"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 915,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 889,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setOtpSent(false);
                                            setTwoStepInfo(null);
                                        },
                                        className: "text-xs font-semibold text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200",
                                        children: "← Back to Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 926,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 848,
                            columnNumber: 13
                        }, this),
                        mobileMode === "login" && !otpSent && !twoStepInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col justify-between pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-1",
                                            children: [
                                                subdomainCtx.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: subdomainCtx.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight",
                                                    children: subdomainCtx.headline
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400 font-medium",
                                                    children: subdomainCtx.subheadline
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 940,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex p-1 bg-slate-100/90 dark:bg-slate-800/80 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-inner my-2 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLoginMethod("password"),
                                                    className: `flex-1 py-2 text-[11px] font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 ${loginMethod === 'password' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md border border-slate-200/60 dark:border-slate-700' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold'}`,
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLoginMethod("face"),
                                                    className: `flex-1 py-2 text-[11px] font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 ${loginMethod === 'face' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md border border-slate-200/60 dark:border-slate-700' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold'}`,
                                                    children: "Face ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLoginMethod("otp"),
                                                    className: `flex-1 py-2 text-[11px] font-extrabold tracking-wider uppercase rounded-full transition-all duration-300 ${loginMethod === 'otp' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md border border-slate-200/60 dark:border-slate-700' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold'}`,
                                                    children: "OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 975,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 17
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[10px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                    className: "w-4 h-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 989,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 987,
                                            columnNumber: 19
                                        }, this),
                                        loginMethod === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleLogin,
                                            className: "space-y-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        autoComplete: "username",
                                                        autoCapitalize: "none",
                                                        autoCorrect: "off",
                                                        spellCheck: false,
                                                        required: true,
                                                        value: email,
                                                        onChange: (e)=>{
                                                            setEmail(e.target.value);
                                                            if (fieldError === 'email' || fieldError === 'all') setFieldError(null);
                                                        },
                                                        placeholder: subdomainCtx.loginPlaceholder || "PingDart Email, Gmail or Username",
                                                        className: `w-full px-5 py-4 rounded-full border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 outline-none text-xs--line-height font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-2xs ${fieldError === 'email' || fieldError === 'all' ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 997,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 996,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: showPassword ? "text" : "password",
                                                            required: true,
                                                            value: password,
                                                            onChange: (e)=>{
                                                                setPassword(e.target.value);
                                                                if (fieldError === 'password' || fieldError === 'all') setFieldError(null);
                                                            },
                                                            placeholder: "Password",
                                                            className: `w-full pl-5 pr-12 py-4 rounded-full border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 outline-none text-xs--line-height font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-2xs ${fieldError === 'password' || fieldError === 'all' ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            className: "absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 41
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 74
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-2 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer select-none text-slate-500 dark:text-slate-400 font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: rememberMe,
                                                                    onChange: (e)=>setRememberMe(e.target.checked),
                                                                    className: "w-4 h-4 rounded text-blue-600 border-slate-300 dark:border-slate-700 focus:ring-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1043,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Remember me"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1049,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/forgot-password",
                                                            className: "text-slate-400 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium",
                                                            children: "Forgot password?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1051,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1041,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isLoading,
                                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-black rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60",
                                                    children: isLoading ? "Signing in..." : "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 995,
                                            columnNumber: 19
                                        }, this),
                                        loginMethod === "pin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handlePinLogin,
                                            className: "space-y-4",
                                            children: [
                                                pinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                            className: "w-4 h-4 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: pinError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        autoCapitalize: "none",
                                                        autoCorrect: "off",
                                                        required: true,
                                                        value: pinIdentifier,
                                                        onChange: (e)=>setPinIdentifier(e.target.value),
                                                        placeholder: "PingDart Email, Phone or Username",
                                                        className: "w-full px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white outline-none text-xs font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                                            children: "Enter 6-Digit Security PIN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            inputMode: "numeric",
                                                            pattern: "[0-9]*",
                                                            maxLength: 6,
                                                            required: true,
                                                            value: pinValue,
                                                            onChange: (e)=>setPinValue(e.target.value.replace(/\D/g, '')),
                                                            placeholder: "••••••",
                                                            className: "w-full text-center text-3xl font-extrabold tracking-[0.45em] py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1093,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isLoading || pinValue.length !== 6,
                                                    className: "w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-black rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60",
                                                    children: isLoading ? "Verifying PIN..." : "Sign In with PIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 19
                                        }, this),
                                        loginMethod === "face" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                faceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                            className: "w-4 h-4 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1121,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: faceError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1122,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 23
                                                }, this),
                                                facePendingUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleFacePinConfirm,
                                                    className: "p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 space-y-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-full mx-auto overflow-hidden bg-indigo-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xl font-bold",
                                                            children: facePendingUser.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: facePendingUser.avatar,
                                                                alt: facePendingUser.name || "User",
                                                                width: 64,
                                                                height: 64,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1130,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: (facePendingUser.name || facePendingUser.username || "U")[0].toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1128,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-slate-900 dark:text-white text-sm",
                                                                    children: [
                                                                        "Hi, ",
                                                                        facePendingUser.name || facePendingUser.username,
                                                                        "!"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                                                    children: "Face recognized. Please enter your 6-digit PIN to sign in."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1139,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            inputMode: "numeric",
                                                            pattern: "[0-9]*",
                                                            maxLength: 6,
                                                            autoFocus: true,
                                                            required: true,
                                                            value: facePinValue,
                                                            onChange: (e)=>setFacePinValue(e.target.value.replace(/\D/g, '')),
                                                            placeholder: "••••••",
                                                            className: "w-full text-center text-2xl font-extrabold tracking-[0.45em] py-2.5 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1143,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: isLoading || facePinValue.length !== 6,
                                                            className: "w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full text-xs uppercase tracking-wider",
                                                            children: isLoading ? "Verifying..." : "Confirm & Sign In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setFacePendingUser(null);
                                                                setFacePendingVector(null);
                                                                setFacePinValue("");
                                                            },
                                                            className: "text-xs text-slate-400 hover:text-slate-600 underline",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1162,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 text-center space-y-4 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-20 h-20 mx-auto flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-500/10 animate-ping"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1173,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                                                        className: "w-8 h-8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1175,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1174,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-extrabold text-slate-800 dark:text-white text-base",
                                                                    children: "Face ID & Biometrics"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1180,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto",
                                                                    children: "Sign in instantly using your face or registered device biometric sensor."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1181,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2.5 pt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setFaceModalOpen(true),
                                                                    className: "w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1192,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Scan Face with Camera"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1187,
                                                                    columnNumber: 27
                                                                }, this),
                                                                isBiometricDeviceReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleBiometricHardwareLogin,
                                                                    className: "w-full py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                                                            className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1202,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Device Fingerprint / Face ID"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1186,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1171,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 19
                                        }, this),
                                        loginMethod === "otp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: (e)=>{
                                                e.preventDefault();
                                                handleSendOtp();
                                            },
                                            className: "space-y-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex p-1.5 bg-slate-100/90 dark:bg-slate-800/80 rounded-full border border-slate-200/80 dark:border-slate-700/80 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("gmail"),
                                                            className: `flex-1 py-2.5 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${otpMedium === 'gmail' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700 scale-[1.02]' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1224,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Gmail"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("phone"),
                                                            className: `flex-1 py-2.5 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${otpMedium === 'phone' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700 scale-[1.02]' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1234,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Phone"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("pingdart_id"),
                                                            className: `flex-1 py-2.5 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${otpMedium === 'pingdart_id' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/60 dark:border-slate-700 scale-[1.02]' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1244,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ID"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1236,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 21
                                                }, this),
                                                otpMedium === "phone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: countryCode,
                                                            onChange: (e)=>setCountryCode(e.target.value),
                                                            className: "px-3 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "+91",
                                                                    children: "🇮🇳 +91"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1255,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "+1",
                                                                    children: "🇺🇸 +1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1256,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "+44",
                                                                    children: "🇬🇧 +44"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1257,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "+971",
                                                                    children: "🇦🇪 +971"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1258,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            required: true,
                                                            value: phoneNumber,
                                                            onChange: (e)=>setPhoneNumber(e.target.value.replace(/[^\d\s\-]/g, '')),
                                                            placeholder: "Phone Number",
                                                            className: "flex-1 px-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-semibold outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1260,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1249,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: otpMedium === 'gmail' ? 'email' : 'text',
                                                    required: true,
                                                    value: otpCredential,
                                                    onChange: (e)=>setOtpCredential(e.target.value),
                                                    placeholder: otpMedium === 'gmail' ? 'Gmail Address' : 'PingDart ID',
                                                    className: "w-full px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-semibold outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1270,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isLoading,
                                                    className: "w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60",
                                                    children: isLoading ? "Sending..." : "Send Verification OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1280,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 font-medium",
                                                children: [
                                                    "New user?",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>router.push("/register"),
                                                        className: "text-blue-600 dark:text-blue-400 font-bold hover:underline",
                                                        children: "Sign Up"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1294,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1292,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 939,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 pt-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full border-t border-slate-200 dark:border-slate-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bg-white dark:bg-[#0b141a] px-3 text-[14px] font-bold text-slate-400 dark:text-slate-500 uppercase",
                                                    children: "OR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIconsRow, {}, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 938,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 812,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaceDiscoveryScannerModal, {
                    isOpen: faceModalOpen,
                    onClose: ()=>setFaceModalOpen(false),
                    mode: "login",
                    title: "Face ID Sign-In",
                    subtitle: "Align your face inside the frame to sign in",
                    onVectorCaptured: handleVectorCapturedForLogin
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 1317,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/login/page.tsx",
            lineNumber: 775,
            columnNumber: 7
        }, this);
    }
    // ────────────── ORIGINAL WEB / DESKTOP VIEW (UNTOUCHED FOR WEB) ──────────────
    // Show a minimal loading screen while the async auth store is still hydrating.
    // This prevents the login form from flashing before we know the user's auth state.
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1337,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400 font-medium",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1338,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/page.tsx",
                lineNumber: 1336,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/login/page.tsx",
            lineNumber: 1335,
            columnNumber: 7
        }, this);
    }
    if (redirecting) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceLoader"], {
            variant: "web"
        }, void 0, false, {
            fileName: "[project]/src/app/(public)/login/page.tsx",
            lineNumber: 1345,
            columnNumber: 12
        }, this);
    }
    // ────────────── EXCLUSIVE DESKTOP APPLICATION VIEW (ELECTRON ONLY) ──────────────
    // Desktop apps are exclusively QR-code based (WhatsApp Desktop / Telegram Desktop style)
    if (isDesktopApp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full flex flex-col items-center justify-between bg-[#070b16] text-slate-100 selection:bg-blue-600 selection:text-white relative overflow-hidden select-none p-6 md:p-10 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-blue-600/20 blur-[130px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1356,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[35%] -right-[20%] w-[50%] h-[50%] rounded-full bg-indigo-600/15 blur-[120px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[130px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 1354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "relative z-10 w-full max-w-4xl flex items-center justify-between py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: sidebarLogoSrc,
                                    alt: `${settings.appLogoText || subdomainCtx.brandName || "PingDart"} Logo`,
                                    width: 38,
                                    height: 38,
                                    style: {
                                        width: "auto",
                                        height: "auto"
                                    },
                                    className: "h-9 w-auto max-h-9 object-contain",
                                    priority: true,
                                    onError: ()=>setSidebarLogoSrc("/logo.png")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-black text-white tracking-tight leading-none",
                                            children: settings.appLogoText || subdomainCtx.brandName || ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mt-1",
                                            children: "Desktop App"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 1374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1363,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-medium shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1386,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ready to link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1385,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1384,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 1362,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "relative z-10 w-full max-w-4xl my-auto py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[#0f172a]/95 border border-slate-800 rounded-[14px] shadow-2xl shadow-black/80 backdrop-blur-xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7 flex flex-col justify-center space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2",
                                                children: [
                                                    "Use ",
                                                    settings.appLogoText || subdomainCtx.brandName || "PingDart",
                                                    " on your computer"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 leading-relaxed",
                                                children: "Open the mobile app on your phone to scan the QR code and link your account instantly."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1402,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-4 text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Open ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-semibold",
                                                                children: settings.appLogoText || subdomainCtx.brandName || "PingDart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1414,
                                                                columnNumber: 26
                                                            }, this),
                                                            " on your phone"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1413,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1418,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Go to ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-semibold",
                                                                children: "Settings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1422,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ⚙️ and select ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-semibold",
                                                                children: "Linked Devices"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1422,
                                                                columnNumber: 104
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1426,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Tap ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-semibold",
                                                                children: "Link a Device"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1430,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1429,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1425,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5",
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Point your phone camera at this screen to capture the QR code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                size: 16,
                                                className: "text-emerald-400 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "End-to-End Encrypted Session. Messages, chats, and files sync directly to this computer."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1444,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1397,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5 flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-[280px] flex flex-col items-center p-6 rounded-[14px] bg-[#090e1a] border border-slate-800/90 shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$login$2f$QRLoginTab$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRLoginTab"], {
                                            hideInstructions: true,
                                            qrSize: 210
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-2 text-center",
                                            children: "Point your phone camera at this code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1451,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1394,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 1393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "relative z-10 w-full max-w-4xl text-center py-2 text-xs text-slate-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            settings.appLogoText || subdomainCtx.brandName || "PingDart",
                            ". Secure Desktop Client."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1465,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/login/page.tsx",
                    lineNumber: 1464,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/login/page.tsx",
            lineNumber: 1352,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex bg-gray-50 dark:bg-gray-950 font-sans selection:bg-indigo-500 selection:text-white",
        children: [
            redirecting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceLoader"], {
                variant: "web"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/login/page.tsx",
                lineNumber: 1474,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex flex-col w-[55%] relative overflow-hidden text-white p-8 xl:p-12 justify-between bg-[#070b16]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-indigo-600/25 blur-[130px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1481,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[35%] -right-[20%] w-[55%] h-[55%] rounded-full bg-sky-500/20 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[130px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1483,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: sidebarLogoSrc,
                                alt: `${settings.appLogoText || subdomainCtx.brandName || "PingDart"} Logo`,
                                width: 38,
                                height: 38,
                                style: {
                                    width: "auto",
                                    height: "auto"
                                },
                                className: "h-10 w-auto max-h-10 object-contain",
                                priority: true,
                                onError: ()=>setSidebarLogoSrc("/logo.png")
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl xl:text-3xl font-black text-white tracking-tight leading-none",
                                        children: settings.appLogoText || subdomainCtx.brandName || ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mt-1",
                                        children: "Enterprise Cloud"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1502,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1498,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold text-indigo-300 mb-5 shadow-sm shadow-indigo-500/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        size: 14,
                                        className: "text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1511,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: subdomainCtx.heroBadge
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl xl:text-5xl font-extrabold mb-4 leading-[1.12] tracking-tight text-white",
                                children: [
                                    subdomainCtx.heroTitle,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1515,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-400 to-cyan-300",
                                        children: subdomainCtx.heroHighlight
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1518,
                                        columnNumber: 21
                                    }, this),
                                    "for modern teams."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300 text-base xl:text-lg leading-relaxed mb-8 max-w-lg font-normal",
                                children: subdomainCtx.heroDesc
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex flex-col gap-1.5 p-4 rounded-[10px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-indigo-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-1 group-hover:scale-105 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1528,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1527,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white",
                                                children: "Bank-grade Security"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 leading-relaxed",
                                                children: "Advanced E2EE encryption & spam isolation."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1531,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex flex-col gap-1.5 p-4 rounded-[10px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-amber-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-1 group-hover:scale-105 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ZapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZapIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1534,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white",
                                                children: "Lightning Fast"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1537,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 leading-relaxed",
                                                children: "Sub-10ms latency delivery worldwide."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1538,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1533,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex flex-col gap-1.5 p-4 rounded-[10px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-purple-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-1 group-hover:scale-105 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1541,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white",
                                                children: "Team Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1544,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 leading-relaxed",
                                                children: "Real-time one-to-one & collaborative channels."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1545,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex flex-col gap-1.5 p-4 rounded-[10px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-1 group-hover:scale-105 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Robot01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1549,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1548,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white",
                                                children: "AI Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 leading-relaxed",
                                                children: "Intelligent email drafting & deep search."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1552,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1547,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1525,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between text-xs text-slate-400 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " PingDart Cloud. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/download",
                                        className: "text-cyan-400 hover:text-cyan-300 font-bold transition-colors",
                                        children: "💻 Download Desktop App"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-slate-200 transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1563,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-slate-200 transition-colors",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1564,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/page.tsx",
                lineNumber: 1477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-[45%] flex flex-col justify-center items-center p-6 sm:p-10 xl:p-14 relative bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100 dark:from-[#080d18] dark:via-[#0b1120] dark:to-[#070b16]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1572,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                            minimal: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/login/page.tsx",
                            lineNumber: 1576,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[430px] relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden flex items-center justify-center gap-2.5 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: settings.appLogoImage || "/logo.png",
                                        alt: settings.appLogoText || "Logo",
                                        width: 34,
                                        height: 34,
                                        style: {
                                            width: "auto",
                                            height: "50px"
                                        },
                                        className: `h-9 w-auto object-contain ${settings.appLogoDark ? "dark:hidden" : ""}`,
                                        priority: true,
                                        onError: (e)=>{
                                            e.currentTarget.src = "/logo_light.png";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1582,
                                        columnNumber: 13
                                    }, this),
                                    settings.appLogoDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: settings.appLogoDark,
                                        alt: settings.appLogoText || "Logo",
                                        width: 34,
                                        height: 34,
                                        style: {
                                            width: "auto",
                                            height: "50px"
                                        },
                                        className: "h-9 w-auto object-contain hidden dark:block",
                                        priority: true,
                                        onError: (e)=>{
                                            e.currentTarget.src = "/logo.png";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1593,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-black tracking-tight text-slate-900 dark:text-white",
                                        children: settings.appLogoText || subdomainCtx.brandName || ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1604,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/95 dark:bg-[#111728]/95 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl rounded-[10px] p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            subdomainCtx.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: subdomainCtx.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight",
                                                children: subdomainCtx.headline
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium",
                                                children: subdomainCtx.subheadline
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1619,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1610,
                                        columnNumber: 13
                                    }, this),
                                    savedAccount && showAccountChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 sm:p-5 bg-gradient-to-br from-indigo-50/90 via-blue-50/40 to-white dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900 border border-indigo-200/80 dark:border-slate-700 rounded-[10px] shadow-sm space-y-3.5 animate-in fade-in zoom-in-95 duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-[11px] uppercase tracking-wider",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1628,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "PingDart Single Sign-On"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1629,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1627,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 p-3 rounded-[10px] bg-white dark:bg-slate-900/80 border border-indigo-100/80 dark:border-slate-800 text-left shadow-2xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm",
                                                        children: savedAccount.full_name ? savedAccount.full_name[0].toUpperCase() : savedAccount.email[0].toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1633,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate",
                                                                        children: savedAccount.full_name || "PingDart User"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1638,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                        size: 15,
                                                                        className: "text-emerald-500 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1641,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1637,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-500 dark:text-slate-400 block truncate font-mono",
                                                                children: savedAccount.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1643,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1636,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1632,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleContinueWithSavedAccount,
                                                className: "w-full h-11 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs tracking-wide rounded-[50px] shadow-md shadow-indigo-600/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Continue as ",
                                                            savedAccount.full_name || 'User'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1653,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1647,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center pt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSessionTokens"])();
                                                        try {
                                                            localStorage.removeItem("pingdart_saved_account");
                                                        } catch (_) {}
                                                        setSavedAccount(null);
                                                        setEmail("");
                                                        setPassword("");
                                                        setShowAccountChoice(false);
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Please enter your account details to sign in.");
                                                    },
                                                    className: "text-xs font-semibold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer",
                                                    children: "Use another account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1657,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1656,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1626,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex p-1 bg-slate-100 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 rounded-[50px] mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                suppressHydrationWarning: true,
                                                onClick: ()=>setLoginMethod("password"),
                                                className: `flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-[50px] transition-all cursor-pointer ${loginMethod === 'password' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1681,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Password"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1677,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                suppressHydrationWarning: true,
                                                onClick: ()=>setLoginMethod("otp"),
                                                className: `flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-[50px] transition-all cursor-pointer ${loginMethod === 'otp' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1699,
                                                        columnNumber: 17
                                                    }, this),
                                                    " OTP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1695,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                suppressHydrationWarning: true,
                                                onClick: ()=>setLoginMethod("qr"),
                                                className: `flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-[50px] transition-all cursor-pointer ${loginMethod === 'qr' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$QrCodeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QrCodeIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1705,
                                                        columnNumber: 17
                                                    }, this),
                                                    " QR Scan"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1701,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1676,
                                        columnNumber: 13
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5 p-3.5 rounded-[10px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-start gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                size: 17,
                                                className: "mt-0.5 shrink-0 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1711,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1712,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1710,
                                        columnNumber: 15
                                    }, this),
                                    loginMethod === "password" && twoStepInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleVerifyTwoStep,
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-[10px] bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                            size: 26
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1720,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1719,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "Two-Step Verification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed",
                                                        children: [
                                                            twoStepInfo.twoStepMethod === 'pin' && "Enter your 6-digit Security PIN to complete login.",
                                                            twoStepInfo.twoStepMethod === 'email' && `Enter the 6-digit verification code sent to ${twoStepInfo.target || 'your email'}.`,
                                                            twoStepInfo.twoStepMethod === 'phone' && `Enter the 6-digit OTP code sent to ${twoStepInfo.target || 'your phone'}.`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1723,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1718,
                                                columnNumber: 17
                                            }, this),
                                            (twoStepError || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                        size: 16,
                                                        className: "shrink-0 text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1732,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: twoStepError || error
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1733,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1731,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center",
                                                        children: twoStepInfo.twoStepMethod === 'pin' ? "Security PIN" : "Verification Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1738,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*",
                                                        maxLength: 6,
                                                        required: true,
                                                        value: twoStepPin,
                                                        onChange: (e)=>{
                                                            setTwoStepPin(e.target.value.replace(/\D/g, ''));
                                                            if (twoStepError) setTwoStepError(null);
                                                        },
                                                        placeholder: "••••••",
                                                        className: `w-full text-center text-2xl font-bold tracking-[0.5em] py-3 rounded-[10px] border bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white outline-none transition-all ${twoStepError || error ? 'border-red-500 ring-2 ring-red-500/20 text-red-600 dark:text-red-400' : 'border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1741,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1737,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading || twoStepPin.length !== 6,
                                                className: "w-full h-12 flex items-center justify-center gap-2 rounded-[50px] text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-[0.99] font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
                                                children: isLoading ? 'Verifying...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Verify & Sign In ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1766,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1760,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setTwoStepInfo(null);
                                                        setTwoStepPin("");
                                                        setTwoStepError(null);
                                                    },
                                                    className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer",
                                                    children: "← Back to password login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1771,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1770,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1717,
                                        columnNumber: 15
                                    }, this) : loginMethod === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleLogin,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5",
                                                                children: subdomainCtx.isMail ? "Mail Account or Email" : subdomainCtx.isCustomTenant ? `${subdomainCtx.subdomain.toUpperCase()} Email or Username` : "PingDart Email, Gmail or Username"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1784,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1789,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1788,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        autoComplete: "username",
                                                                        autoCapitalize: "none",
                                                                        autoCorrect: "off",
                                                                        spellCheck: false,
                                                                        required: true,
                                                                        suppressHydrationWarning: true,
                                                                        value: email,
                                                                        onChange: (e)=>{
                                                                            setEmail(e.target.value);
                                                                            if (fieldError === 'email' || fieldError === 'all') setFieldError(null);
                                                                        },
                                                                        placeholder: subdomainCtx.loginPlaceholder || "name@pingdart.com, user@gmail.com, or username",
                                                                        className: `w-full h-12 pl-11 pr-4 rounded-[10px] border bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white text-xs sm:text-sm font-medium outline-none transition-all placeholder:text-slate-400 ${fieldError === 'email' || fieldError === 'all' ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1791,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1787,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1783,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-1.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300",
                                                                    children: "Password"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 1815,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1814,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1819,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1818,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: showPassword ? "text" : "password",
                                                                        required: true,
                                                                        suppressHydrationWarning: true,
                                                                        value: password,
                                                                        onChange: (e)=>{
                                                                            setPassword(e.target.value);
                                                                            if (fieldError === 'password' || fieldError === 'all') setFieldError(null);
                                                                        },
                                                                        placeholder: "••••••••",
                                                                        className: `w-full h-12 pl-11 pr-11 rounded-[10px] border bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white text-xs sm:text-sm font-medium outline-none transition-all placeholder:text-slate-400 ${fieldError === 'password' || fieldError === 'all' ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1821,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        suppressHydrationWarning: true,
                                                                        onClick: ()=>setShowPassword(!showPassword),
                                                                        className: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none cursor-pointer",
                                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1842,
                                                                            columnNumber: 41
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1842,
                                                                            columnNumber: 64
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1836,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1817,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1813,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-xs pt-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2 cursor-pointer select-none text-slate-500 dark:text-slate-400 font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: rememberMe,
                                                                        onChange: (e)=>setRememberMe(e.target.checked),
                                                                        className: "w-4 h-4 rounded text-indigo-600 border-slate-300 dark:border-slate-600 focus:ring-indigo-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1849,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Remember me"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1855,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1848,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/forgot-password",
                                                                className: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold hover:underline",
                                                                children: "Forgot password?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1857,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1847,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1782,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                suppressHydrationWarning: true,
                                                className: "w-full h-12 flex items-center justify-center gap-2 rounded-[50px] text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-[0.99] font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1871,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Signing in..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1872,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1870,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Sign in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1876,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1877,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1863,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1781,
                                        columnNumber: 15
                                    }, this),
                                    loginMethod === "pin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePinLogin,
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-[14px] bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1888,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1887,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "Sign In with PIN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1890,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto",
                                                        children: "Enter your account identifier and 6-digit Security PIN."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1891,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1886,
                                                columnNumber: 17
                                            }, this),
                                            pinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                        size: 16,
                                                        className: "shrink-0 text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1898,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: pinError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1899,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1897,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5",
                                                                children: "Account (Email, Phone or Username)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1905,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 1910,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1909,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        autoCapitalize: "none",
                                                                        autoCorrect: "off",
                                                                        required: true,
                                                                        value: pinIdentifier,
                                                                        onChange: (e)=>{
                                                                            setPinIdentifier(e.target.value);
                                                                            if (pinError) setPinError(null);
                                                                        },
                                                                        placeholder: subdomainCtx.loginPlaceholder || "name@pingdart.com, user@gmail.com, or username",
                                                                        className: "w-full h-12 pl-11 pr-4 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white text-xs sm:text-sm font-medium outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 1912,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1908,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1904,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center",
                                                                children: "6-Digit Security PIN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1929,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                inputMode: "numeric",
                                                                pattern: "[0-9]*",
                                                                maxLength: 6,
                                                                required: true,
                                                                value: pinValue,
                                                                onChange: (e)=>{
                                                                    setPinValue(e.target.value.replace(/\D/g, ''));
                                                                    if (pinError) setPinError(null);
                                                                },
                                                                placeholder: "••••••",
                                                                className: "w-full text-center text-3xl font-bold tracking-[0.45em] py-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1932,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1928,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1903,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading || pinValue.length !== 6,
                                                className: "w-full h-12 flex items-center justify-center gap-2 rounded-[50px] text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-[0.99] font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
                                                children: isLoading ? 'Verifying PIN...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Sign in with PIN ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1955,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1949,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setLoginMethod("password"),
                                                    className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer",
                                                    children: "← Switch to Password Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 1960,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1959,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1885,
                                        columnNumber: 15
                                    }, this),
                                    loginMethod === "face" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: [
                                            faceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                        size: 16,
                                                        className: "shrink-0 text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1975,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: faceError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1976,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1974,
                                                columnNumber: 19
                                            }, this),
                                            facePendingUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleFacePinConfirm,
                                                className: "p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50 space-y-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 rounded-full mx-auto overflow-hidden bg-indigo-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xl font-bold",
                                                        children: facePendingUser.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: facePendingUser.avatar,
                                                            alt: facePendingUser.name || "User",
                                                            width: 64,
                                                            height: 64,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1984,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (facePendingUser.name || facePendingUser.username || "U")[0].toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1986,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1982,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-slate-900 dark:text-white text-base",
                                                                children: [
                                                                    "Hi, ",
                                                                    facePendingUser.name || facePendingUser.username,
                                                                    "!"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1990,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                                                children: "Face recognized. Please confirm your 6-digit Security PIN to complete sign in."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 1993,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1989,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1.5 max-w-[200px] mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            inputMode: "numeric",
                                                            pattern: "[0-9]*",
                                                            maxLength: 6,
                                                            autoFocus: true,
                                                            required: true,
                                                            value: facePinValue,
                                                            onChange: (e)=>setFacePinValue(e.target.value.replace(/\D/g, '')),
                                                            placeholder: "••••••",
                                                            className: "w-full text-center text-2xl font-bold tracking-[0.45em] py-2.5 rounded-xl border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-indigo-500/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 1999,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 1998,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isLoading || facePinValue.length !== 6,
                                                        className: "w-full h-11 flex items-center justify-center gap-2 rounded-[50px] text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 font-bold text-sm tracking-wide shadow-md shadow-indigo-600/20 cursor-pointer",
                                                        children: isLoading ? 'Verifying PIN...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "Confirm & Sign In ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2019,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2013,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setFacePendingUser(null);
                                                                setFacePendingVector(null);
                                                                setFacePinValue("");
                                                            },
                                                            className: "text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2024,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2023,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 1981,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 text-center space-y-4 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-20 h-20 mx-auto flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 animate-ping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2036,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                                                    size: 32
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2038,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2037,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2035,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-extrabold text-slate-800 dark:text-white text-base",
                                                                children: "Face ID & Biometrics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2043,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto",
                                                                children: "Authenticate securely using your face scanner or device biometric sensor."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2044,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2.5 pt-2 max-w-xs mx-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setFaceModalOpen(true),
                                                                className: "w-full h-12 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold rounded-[50px] text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 2055,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Scan Face with Camera"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2050,
                                                                columnNumber: 23
                                                            }, this),
                                                            isBiometricDeviceReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleBiometricHardwareLogin,
                                                                className: "w-full h-11 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-[50px] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                                                        size: 18,
                                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 2065,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Device Touch ID / Sensor"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                lineNumber: 2060,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2049,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 2034,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 1972,
                                        columnNumber: 15
                                    }, this),
                                    loginMethod === "qr" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$public$292f$login$2f$QRLoginTab$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRLoginTab"], {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 2076,
                                        columnNumber: 15
                                    }, this),
                                    loginMethod === "otp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleVerifyOtp,
                                        className: "space-y-6",
                                        children: !otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex p-1 bg-gray-100 dark:bg-gray-800/50 rounded-[50px] mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("gmail"),
                                                            className: `flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-[50px] transition-all ${otpMedium === 'gmail' ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2088,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Gmail"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("phone"),
                                                            className: `flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-[50px] transition-all ${otpMedium === 'phone' ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2094,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Phone"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2090,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOtpMedium("pingdart_id"),
                                                            className: `flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-[50px] transition-all ${otpMedium === 'pingdart_id' ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2100,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " PingDart ID"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2096,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 2083,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                            children: otpMedium === 'gmail' ? 'Gmail Address' : otpMedium === 'phone' ? 'Phone Number' : 'PingDart ID'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2105,
                                                            columnNumber: 23
                                                        }, this),
                                                        otpMedium === 'phone' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: countryCode,
                                                                            onChange: (e)=>setCountryCode(e.target.value),
                                                                            className: "h-full pl-3 pr-8 py-3.5 rounded-[10px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm font-semibold appearance-none cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "+91",
                                                                                    children: "🇮🇳 +91"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2117,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "+1",
                                                                                    children: "🇺🇸 +1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2118,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "+44",
                                                                                    children: "🇬🇧 +44"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2119,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "+61",
                                                                                    children: "🇦🇺 +61"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2120,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "+971",
                                                                                    children: "🇦🇪 +971"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2121,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 2112,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3.5 h-3.5",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M19 9l-7 7-7-7"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                    lineNumber: 2124,
                                                                                    columnNumber: 114
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                lineNumber: 2124,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 2123,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2111,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative group flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                                                size: 18
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                                lineNumber: 2129,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 2128,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            inputMode: "numeric",
                                                                            required: true,
                                                                            value: phoneNumber,
                                                                            onChange: (e)=>setPhoneNumber(e.target.value.replace(/[^\d\s\-]/g, '')),
                                                                            placeholder: "9876543210",
                                                                            className: "w-full pl-11 pr-4 py-3.5 rounded-[10px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                            lineNumber: 2131,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2127,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2110,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors",
                                                                    children: otpMedium === 'gmail' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 2145,
                                                                        columnNumber: 54
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                        lineNumber: 2145,
                                                                        columnNumber: 75
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2144,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: otpMedium === 'gmail' ? 'email' : 'text',
                                                                    required: true,
                                                                    value: otpCredential,
                                                                    onChange: (e)=>setOtpCredential(e.target.value),
                                                                    placeholder: otpMedium === 'gmail' ? 'name@gmail.com' : 'Your PingDart ID',
                                                                    className: "w-full pl-11 pr-4 py-3.5 rounded-[10px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2147,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2143,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1.5 text-xs text-gray-400 dark:text-gray-500",
                                                            children: otpMedium === 'gmail' ? '📩 OTP will be sent to your email and to your registered phone.' : otpMedium === 'phone' ? '📩 OTP will be sent to your phone via SMS and to your registered email.' : '📩 OTP will be sent to your registered phone and email.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2158,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 2104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleSendOtp,
                                                    disabled: isLoading,
                                                    className: "group w-full bg-gray-900 hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-gray-900/20 dark:shadow-indigo-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                                                    children: isLoading ? 'Sending...' : otpMedium === 'gmail' ? 'Send OTP via Gmail' : otpMedium === 'phone' ? 'Send OTP via SMS' : 'Send Push Notification'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 2166,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                            children: "Enter 6-digit OTP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2178,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between gap-2 sm:gap-3",
                                                            children: otpValues.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: (el)=>{
                                                                        inputRefs.current[index] = el;
                                                                    },
                                                                    type: "text",
                                                                    inputMode: "numeric",
                                                                    pattern: "[0-9]*",
                                                                    maxLength: 1,
                                                                    value: digit,
                                                                    onChange: (e)=>handleOtpChange(index, e.target.value),
                                                                    onKeyDown: (e)=>handleOtpKeyDown(index, e),
                                                                    onPaste: handleOtpPaste,
                                                                    className: "w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-[10px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-300"
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2181,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2179,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mt-3 text-center",
                                                            children: [
                                                                "Code sent to ",
                                                                otpCredential,
                                                                ". ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setOtpSent(false),
                                                                    className: "text-indigo-600 hover:underline font-medium",
                                                                    children: [
                                                                        "Change ",
                                                                        otpMedium === 'gmail' ? 'email' : otpMedium === 'phone' ? 'phone' : 'PingDart ID'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2197,
                                                                    columnNumber: 55
                                                                }, this),
                                                                " | ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleSendOtp,
                                                                    disabled: isLoading,
                                                                    className: "text-indigo-600 hover:underline font-medium disabled:opacity-50",
                                                                    children: "Resend OTP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                                    lineNumber: 2199,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2196,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 2177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isLoading,
                                                    className: "group w-full bg-gray-900 hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-[50px] shadow-lg shadow-gray-900/20 dark:shadow-indigo-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                                                    children: [
                                                        isLoading ? 'Verifying...' : 'Verify & Sign In',
                                                        !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                            size: 18,
                                                            className: "opacity-70 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                                            lineNumber: 2208,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/login/page.tsx",
                                                    lineNumber: 2202,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 2080,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 1609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 font-medium",
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/register"),
                                                suppressHydrationWarning: true,
                                                className: "text-gray-900 dark:text-white font-semibold hover:underline decoration-2 underline-offset-4 decoration-indigo-500/30",
                                                children: "Register new account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 2219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 2217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: async ()=>{
                                                localStorage.removeItem("hasSeenIntro");
                                                try {
                                                    const { safeStorage } = await __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-ssr] (ecmascript, async loader)");
                                                    await safeStorage.removeItem("hasSeenIntro");
                                                } catch (_) {}
                                                window.dispatchEvent(new CustomEvent("onboarding:restart"));
                                                window.location.href = "/?showIntro=true";
                                            },
                                            className: "text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline cursor-pointer",
                                            children: "✨ View App Intro & Permissions Tour"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/login/page.tsx",
                                            lineNumber: 2228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 2227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Looking for the computer app?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 2245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/download",
                                                className: "font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Download Desktop Client"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2250,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "💻"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                                        lineNumber: 2251,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                                lineNumber: 2246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/login/page.tsx",
                                        lineNumber: 2244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/login/page.tsx",
                                lineNumber: 2216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/login/page.tsx",
                        lineNumber: 1579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/login/page.tsx",
                lineNumber: 1570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaceDiscoveryScannerModal, {
                isOpen: faceModalOpen,
                onClose: ()=>setFaceModalOpen(false),
                mode: "login",
                title: "Face ID Sign-In",
                subtitle: "Look into your camera to authenticate",
                onVectorCaptured: handleVectorCapturedForLogin
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/login/page.tsx",
                lineNumber: 2257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/login/page.tsx",
        lineNumber: 1472,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d7df1629._.js.map