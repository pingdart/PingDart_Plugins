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
        senderBody
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
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/components/E2EELinkDevice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E2EELinkDevice",
    ()=>E2EELinkDevice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-qr-code/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
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
const getBrandName = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return "PingDart";
    //TURBOPACK unreachable
    ;
    const host = undefined;
    const parts = undefined;
    let sub;
    const isLocalhost = undefined;
};
function E2EELinkDevice({ onSuccess }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [linkToken, setLinkToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [linkedDeviceName, setLinkedDeviceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [qrValue, setQrValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(600);
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('PingDart');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const ephemeralKeyPairRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize brand name and default to light mode if not explicitly chosen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        setBrandName(getBrandName());
        const savedTheme = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time truthy", 1) {
            setTheme('light');
        }
    }, [
        setTheme
    ]);
    // Determine dark mode safely
    const isDark = mounted ? resolvedTheme === 'dark' || theme === 'dark' : false;
    const toggleTheme = ()=>{
        const nextTheme = isDark ? 'light' : 'dark';
        setTheme(nextTheme);
    };
    const initSession = async ()=>{
        try {
            setStatus('loading');
            setErrorMessage('');
            setSecondsLeft(600);
            // 1. Generate local ephemeral ECDH key pair
            const { keyPair, publicKeyBase64 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateEphemeralKeys"])();
            ephemeralKeyPairRef.current = keyPair;
            // 2. Request dedicated one-time linking token (LK_...) from server
            let currentToken = null;
            let tokenHashVal = null;
            let currentSessionId = null;
            try {
                const tokenRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.createToken(publicKeyBase64, 'PingDart Web');
                if (tokenRes && tokenRes.token) {
                    currentToken = tokenRes.token;
                    tokenHashVal = tokenRes.tokenHash;
                    setLinkToken(currentToken);
                    if (tokenRes.ttlSeconds) {
                        setSecondsLeft(tokenRes.ttlSeconds);
                    }
                }
            } catch (tokenErr) {
                console.warn('[E2EELinkDevice] createToken warn, falling back:', tokenErr);
            }
            // Also initialize legacy session for dual compatibility
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.init();
                if (res && res.sessionId) {
                    currentSessionId = res.sessionId;
                    setSessionId(currentSessionId);
                }
            } catch (_) {}
            // 3. Construct QR Value: Smart URL that mobile camera / Google Lens can open
            // Uses verified Android App Link domain so Android OS opens the app directly without browser redirect
            const baseUrl = ("TURBOPACK compile-time value", "https://chat.pingdart.com") || 'https://pingdart.com';
            if (currentToken) {
                const smartUrl = `${baseUrl}/link?t=${currentToken}`;
                setQrValue(smartUrl);
            } else if (currentSessionId) {
                const payloadObj = {
                    sessionId: currentSessionId,
                    ephemeralPublic: publicKeyBase64,
                    timestamp: Date.now()
                };
                setQrValue(JSON.stringify(payloadObj));
            } else {
                throw new Error('Failed to generate device link QR code');
            }
            // 4. Connect to Socket.IO real-time server
            const wsUrl = process.env.NEXT_PUBLIC_SOCKET_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/api/realtime/`;
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(wsUrl, {
                transports: [
                    'websocket',
                    'polling'
                ]
            });
            socketRef.current = socket;
            socket.on('connect', ()=>{
                if (tokenHashVal) {
                    socket.emit('join_room', {
                        room: `link:${tokenHashVal}`
                    });
                }
                if (currentSessionId) {
                    socket.emit('qr:join', currentSessionId);
                    socket.emit('join_room', {
                        room: `qr:${currentSessionId}`
                    });
                }
                setStatus('waiting');
            });
            // Handle real-time claim from mobile app (Smart Link flow)
            socket.on('device:linked', (data)=>{
                setStatus('success');
                setLinkedDeviceName(data?.deviceName || data?.platform || 'Mobile Device');
                setTimeout(()=>{
                    onSuccess();
                }, 1200);
            });
            // Handle legacy E2EE key transfer (in-app camera scan flow)
            socket.on('qr:linked', async (data)=>{
                try {
                    setStatus('linking');
                    if (!data || !data.payload || !data.senderEphemeralPublic) {
                        throw new Error('Invalid device link payload received');
                    }
                    // Decrypt keys sent from Primary Device
                    const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptDeviceLinkPayload"])(ephemeralKeyPairRef.current.privateKey, data.senderEphemeralPublic, data.payload);
                    if (!decrypted || !decrypted.e2eKeys) {
                        throw new Error('Decrypted payload missing E2EE key bundle');
                    }
                    // Save auth tokens if provided
                    if (decrypted.authToken) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setTokens(decrypted.authToken, decrypted.refreshToken || '');
                    }
                    // Import master E2EE keys locally
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importDeviceKeys"])(decrypted.e2eKeys);
                    // Register device
                    try {
                        const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
                        const platform = ua.includes('Win') ? 'windows' : ua.includes('Mac') ? 'macos' : ua.includes('Linux') ? 'linux' : 'web';
                        const deviceId = 'web_' + Math.random().toString(36).substring(2, 10);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.registerDevice(deviceId, platform, 'web');
                    } catch (regErr) {
                        console.warn('[E2EELinkDevice] Device registration warn:', regErr);
                    }
                    setStatus('success');
                    setTimeout(()=>{
                        onSuccess();
                    }, 1200);
                } catch (err) {
                    console.error('[E2EE QR LINK ERROR]', err);
                    setStatus('error');
                    setErrorMessage(err.message || 'Device linking failed');
                }
            });
        } catch (err) {
            console.error('[E2EE QR INIT ERROR]', err);
            setStatus('error');
            setErrorMessage(err.message || 'Failed to initialize QR code');
        }
    };
    // Timer countdown for QR expiration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === 'waiting') {
            timerRef.current = setInterval(()=>{
                setSecondsLeft((prev)=>{
                    if (prev <= 1) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        setStatus('expired');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return ()=>{
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initSession();
        return ()=>{
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);
    const handleLogout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
        router.replace('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-10 selection:bg-emerald-500 selection:text-white transition-colors duration-300 ${isDark ? 'bg-[#070B14] text-slate-100' : 'bg-slate-50 text-slate-900'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-indigo-600/15' : 'bg-indigo-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[40%] -right-[15%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-blue-600/15' : 'bg-blue-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full max-w-6xl flex items-center justify-between mb-6 z-10 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "PingDart",
                                width: 42,
                                height: 42,
                                style: {
                                    height: "auto"
                                },
                                className: "object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xl sm:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`,
                                        children: brandName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full border ${isDark ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`,
                                        children: "Web Client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full backdrop-blur-md border ${isDark ? 'text-slate-400 bg-slate-900/70 border-slate-800' : 'text-slate-600 bg-white/90 border-slate-200 shadow-sm'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: `w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "End-to-End Encrypted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                className: `flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${isDark ? 'text-amber-400 bg-slate-900/70 hover:bg-slate-800 border-slate-800' : 'text-slate-700 bg-white/90 hover:bg-slate-100 border-slate-200 shadow-sm'}`,
                                title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
                                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            className: "w-3.5 h-3.5 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline font-medium",
                                            children: "Light"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            className: "w-3.5 h-3.5 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline font-medium",
                                            children: "Dark"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleLogout,
                                className: `flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full border transition-all ${isDark ? 'text-slate-400 hover:text-red-400 bg-slate-900/70 hover:bg-red-950/30 border-slate-800 hover:border-red-900/50' : 'text-slate-600 hover:text-red-600 bg-white/90 hover:bg-red-50 border-slate-200 hover:border-red-200 shadow-sm'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sign Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `w-full max-w-6xl backdrop-blur-2xl rounded-3xl p-6 sm:p-10 md:p-12 relative z-10 transition-all duration-300 ${isDark ? 'bg-slate-900/80 border border-slate-800/90 shadow-2xl shadow-black/80' : 'bg-white/95 border border-slate-200/90 shadow-2xl shadow-slate-200/80'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 flex flex-col justify-between space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3.5 border ${isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Multi-Device Sync"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`,
                                            children: [
                                                "Use ",
                                                brandName,
                                                " on your computer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`,
                                            children: "Scan the QR code with your primary mobile device to securely transfer your encryption keys and sync your full message history."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3.5 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm border ${isDark ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-100 border-emerald-200 text-emerald-800'}`,
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`,
                                                    children: [
                                                        "Open ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`,
                                                            children: "PingDart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 24
                                                        }, this),
                                                        " on your mobile device"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm border ${isDark ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-100 border-emerald-200 text-emerald-800'}`,
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`,
                                                    children: [
                                                        "Go to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`,
                                                            children: "Settings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 25
                                                        }, this),
                                                        " → ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`,
                                                            children: "Linked Devices"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 121
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm border ${isDark ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-100 border-emerald-200 text-emerald-800'}`,
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`,
                                                    children: [
                                                        "Tap ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`,
                                                            children: "Link a Device"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 23
                                                        }, this),
                                                        " and point your camera at this QR code"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3.5 rounded-2xl border flex items-center gap-3 ${isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${isDark ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-200 text-indigo-600'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs leading-snug ${isDark ? 'text-slate-400' : 'text-slate-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-900'}`,
                                                    children: "Zero-Knowledge Architecture: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, this),
                                                "Your private keys are securely exchanged peer-to-peer and never stored unencrypted on any server."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs ${isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-200 text-slate-500'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onSuccess,
                                            className: `transition-colors flex items-center gap-1 font-semibold group ${isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Skip for now (Chat sync paused)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 419,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: initSession,
                                            className: `transition-colors flex items-center gap-1.5 ${isDark ? 'hover:text-slate-200' : 'hover:text-slate-800'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Regenerate Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 flex flex-col items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full max-w-[280px] p-5 rounded-3xl border shadow-2xl flex flex-col items-center ${isDark ? 'bg-slate-950/90 border-slate-800 shadow-black/60' : 'bg-slate-100/90 border-slate-200 shadow-slate-200/80'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative w-[230px] h-[230px] bg-white p-3.5 rounded-2xl flex items-center justify-center shadow-md overflow-hidden ${isDark ? 'border border-slate-800' : 'border border-slate-200/80'}`,
                                        children: status === 'waiting' && qrValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$qr$2d$code$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: qrValue,
                                                    size: 200,
                                                    level: "M",
                                                    className: "relative z-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute left-2 right-2 h-0.5 bg-emerald-500 shadow-[0_0_12px_3px_rgba(16,185,129,0.7)] z-10",
                                                    initial: {
                                                        top: "14px"
                                                    },
                                                    animate: {
                                                        top: [
                                                            "14px",
                                                            "214px",
                                                            "14px"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2.6,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-emerald-500 rounded-bl-lg pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-500 rounded-br-lg pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : status === 'linking' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center text-slate-800 p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-10 h-10 animate-spin text-emerald-600 mb-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-slate-900",
                                                    children: "Linking Device..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: "Decrypting master keys"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this) : status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center text-emerald-600 p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-12 h-12 mb-2 animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-emerald-700",
                                                    children: "Device Linked!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-emerald-600 mt-1 font-medium",
                                                    children: linkedDeviceName ? `${linkedDeviceName} connected` : 'Starting session...'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 474,
                                            columnNumber: 19
                                        }, this) : status === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center text-slate-500 p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-8 h-8 animate-spin text-indigo-500 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-slate-700",
                                                    children: "Generating Smart QR..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center text-red-500 p-3 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                    className: "w-10 h-10 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-red-600",
                                                    children: errorMessage || 'Code expired'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: initSession,
                                                    className: "mt-3 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow",
                                                    children: "Reload QR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center justify-center gap-2",
                                        children: status === 'waiting' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-2 text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative flex h-2 w-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Point phone camera here"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[11px] font-mono font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`,
                                                    children: [
                                                        "(",
                                                        Math.floor(secondsLeft / 60),
                                                        ":",
                                                        (secondsLeft % 60).toString().padStart(2, '0'),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 503,
                                            columnNumber: 19
                                        }, this) : status === 'linking' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-emerald-500 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-3 h-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Syncing keys..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 514,
                                            columnNumber: 19
                                        }, this) : status === 'expired' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: initSession,
                                            className: `text-xs font-semibold underline flex items-center gap-1 ${isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Click to refresh expired code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                            lineNumber: 519,
                                            columnNumber: 19
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/E2EELinkDevice.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: `mt-6 text-center text-xs z-10 ${isDark ? 'text-slate-500' : 'text-slate-400'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " PingDart. Secured with end-to-end cryptographic key verification."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/E2EELinkDevice.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/E2EELinkDevice.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/E2EELinkDevice.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/services/exploreApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * exploreApi.ts — Typed API service for Ping Explore Map Discovery
 */ __turbopack_context__.s([
    "exploreApi",
    ()=>exploreApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const exploreApi = {
    // Update user's ephemeral obfuscated location
    updateLocation: async (latitude, longitude)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/location/update', {
            latitude,
            longitude
        });
        return res.data;
    },
    // Discover nearby users
    getNearbyUsers: async (params = {})=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/nearby', {
            params
        });
        return res.data;
    },
    // Send a connection request
    sendConnectionRequest: async (receiverId, message)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/request', {
            receiverId,
            message
        });
        return res.data;
    },
    // Respond to a connection request (accept/reject/block)
    respondConnectionRequest: async (requestId, action)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/respond', {
            requestId,
            action
        });
        return res.data;
    },
    // Get list of pending requests
    getConnectionRequests: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/connection/requests');
        return res.data;
    },
    // Get user's explore settings
    getSettings: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/settings');
        return res.data;
    },
    // Update user's explore settings
    updateSettings: async (settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put('/explore/settings', settings);
        return res.data;
    },
    // ── Face Match & People Discovery Endpoints ─────────────────
    getFaceStatus: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/face/status');
        return res.data;
    },
    recordFaceConsent: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/consent', params);
        return res.data;
    },
    enrollFaceBiometric: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/enroll', params);
        return res.data;
    },
    matchFace: async (vector)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/match', {
            vector
        });
        return res.data;
    },
    purgeFaceBiometrics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete('/explore/face/biometrics');
        return res.data;
    }
};
}),
"[project]/src/services/faceLandmarkerService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFaceLandmarker",
    ()=>getFaceLandmarker
]);
"use client";
let faceLandmarkerInstance = null;
let isInitializing = false;
let initPromise = null;
async function getFaceLandmarker() {
    if (faceLandmarkerInstance) return faceLandmarkerInstance;
    if (initPromise) return initPromise;
    initPromise = (async ()=>{
        try {
            isInitializing = true;
            const vision = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-ssr] (ecmascript, async loader)");
            const filesetResolver = await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
            faceLandmarkerInstance = await vision.FaceLandmarker.createFromOptions(filesetResolver, {
                baseOptions: {
                    modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                    delegate: "GPU"
                },
                outputFaceBlendshapes: true,
                runningMode: "VIDEO",
                numFaces: 5,
                minFaceDetectionConfidence: 0.15,
                minFacePresenceConfidence: 0.15,
                minTrackingConfidence: 0.15
            });
            return faceLandmarkerInstance;
        } catch (err) {
            console.warn("[FaceLandmarker] GPU delegate init note, falling back to CPU:", err);
            // Fall back to CPU delegate if GPU delegate not available on specific WebView
            try {
                const vision = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-ssr] (ecmascript, async loader)");
                const filesetResolver = await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
                faceLandmarkerInstance = await vision.FaceLandmarker.createFromOptions(filesetResolver, {
                    baseOptions: {
                        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                        delegate: "CPU"
                    },
                    outputFaceBlendshapes: true,
                    runningMode: "VIDEO",
                    numFaces: 5,
                    minFaceDetectionConfidence: 0.15,
                    minFacePresenceConfidence: 0.15,
                    minTrackingConfidence: 0.15
                });
                return faceLandmarkerInstance;
            } catch (fallbackErr) {
                console.warn("[FaceLandmarker] CPU fallback error:", fallbackErr);
                return null;
            }
        } finally{
            isInitializing = false;
        }
    })();
    return initPromise;
}
}),
"[project]/src/utils/faceBiometrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * faceBiometrics.ts
 * Computes 3D rotation-, scale-, and translation-invariant 128-dimensional
 * facial biometric geometry vectors from MediaPipe 478 3D landmarks.
 * 
 * Supports all head poses (pitch up/down, yaw left/right, roll tilt) and
 * all screen positions (top, bottom, left, right, center).
 */ __turbopack_context__.s([
    "align3DCanonical",
    ()=>align3DCanonical,
    "dist3D",
    ()=>dist3D,
    "extractFaceBiometricVector",
    ()=>extractFaceBiometricVector,
    "extractFaceDescriptorFromImage",
    ()=>extractFaceDescriptorFromImage,
    "getFacePoseAndBounds",
    ()=>getFacePoseAndBounds,
    "triangleArea",
    ()=>triangleArea
]);
function dist3D(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = (p1.z || 0) - (p2.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function triangleArea(p1, p2, p3) {
    const ax = p2.x - p1.x;
    const ay = p2.y - p1.y;
    const az = p2.z - p1.z;
    const bx = p3.x - p1.x;
    const dy = p3.y - p1.y;
    const bz = p3.z - p1.z;
    const cx = ay * bz - az * dy;
    const cy = az * bx - ax * bz;
    const cz = ax * dy - ay * bx;
    return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}
function align3DCanonical(landmarks) {
    // Left eye pupil: 468 (fallback to 33 if missing), Right eye pupil: 473 (fallback to 263)
    const leftEyeRaw = landmarks[468] || landmarks[33] || landmarks[133];
    const rightEyeRaw = landmarks[473] || landmarks[263] || landmarks[362];
    const chinRaw = landmarks[152] || landmarks[175] || landmarks[148];
    const pLeft = {
        x: leftEyeRaw.x,
        y: leftEyeRaw.y,
        z: leftEyeRaw.z || 0
    };
    const pRight = {
        x: rightEyeRaw.x,
        y: rightEyeRaw.y,
        z: rightEyeRaw.z || 0
    };
    const pChin = {
        x: chinRaw.x,
        y: chinRaw.y,
        z: chinRaw.z || 0
    };
    // Midpoint between eyes as coordinate origin
    const midX = (pLeft.x + pRight.x) / 2;
    const midY = (pLeft.y + pRight.y) / 2;
    const midZ = (pLeft.z + pRight.z) / 2;
    // 1. Vector X: Left eye to Right eye (lateral axis across face)
    const vx = {
        x: pRight.x - pLeft.x,
        y: pRight.y - pLeft.y,
        z: pRight.z - pLeft.z
    };
    const lenX = Math.sqrt(vx.x * vx.x + vx.y * vx.y + vx.z * vx.z) || 0.001;
    const ux = {
        x: vx.x / lenX,
        y: vx.y / lenX,
        z: vx.z / lenX
    };
    // 2. Vector Down: Eye midpoint to chin tip
    const vDown = {
        x: pChin.x - midX,
        y: pChin.y - midY,
        z: pChin.z - midZ
    };
    // 3. Vector Z: Normal to face plane (pointing outwards towards camera) = ux x vDown
    const vz = {
        x: ux.y * vDown.z - ux.z * vDown.y,
        y: ux.z * vDown.x - ux.x * vDown.z,
        z: ux.x * vDown.y - ux.y * vDown.x
    };
    const lenZ = Math.sqrt(vz.x * vz.x + vz.y * vz.y + vz.z * vz.z) || 0.001;
    const uz = {
        x: vz.x / lenZ,
        y: vz.y / lenZ,
        z: vz.z / lenZ
    };
    // 4. Vector Y: True orthogonal downward axis (along facial midline) = uz x ux
    const uy = {
        x: uz.y * ux.z - uz.z * ux.y,
        y: uz.z * ux.x - uz.x * uz.z,
        z: uz.x * ux.y - uz.y * ux.x
    };
    // 5. Canonical 3D Scale factor (geometric mean of width and facial height)
    const lenDown = Math.sqrt(vDown.x * vDown.x + vDown.y * vDown.y + vDown.z * vDown.z) || 0.001;
    const scale = Math.sqrt(lenX * lenDown) || 0.001;
    // Transform all points onto the canonical 3D orthonormal basis
    return landmarks.map((lm)=>{
        const rawZ = lm.z || 0;
        const dx = lm.x - midX;
        const dy = lm.y - midY;
        const dz = rawZ - midZ;
        const rx = (dx * ux.x + dy * ux.y + dz * ux.z) / scale;
        const ry = (dx * uy.x + dy * uy.y + dz * uy.z) / scale;
        const rz = (dx * uz.x + dy * uz.y + dz * uz.z) / scale;
        return {
            x: rx,
            y: ry,
            z: rz
        };
    });
}
function getFacePoseAndBounds(landmarks) {
    let minX = 1;
    let maxX = 0;
    let minY = 1;
    let maxY = 0;
    for(let i = 0; i < landmarks.length; i++){
        const lm = landmarks[i];
        if (lm.x < minX) minX = lm.x;
        if (lm.x > maxX) maxX = lm.x;
        if (lm.y < minY) minY = lm.y;
        if (lm.y > maxY) maxY = lm.y;
    }
    const rawWidth = Math.max(0.005, maxX - minX);
    const rawHeight = Math.max(0.005, maxY - minY);
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    // Add margin around face for HUD reticle (expand slightly for distant faces)
    const isLongRange = rawWidth < 0.16;
    const padX = rawWidth * (isLongRange ? 0.45 : 0.22);
    const padY = rawHeight * (isLongRange ? 0.45 : 0.22);
    const boxLeft = Math.max(0.02, minX - padX);
    const boxTop = Math.max(0.02, minY - padY);
    const boxWidth = Math.max(isLongRange ? 0.14 : 0.10, Math.min(0.96 - boxLeft, rawWidth + padX * 2));
    const boxHeight = Math.max(isLongRange ? 0.18 : 0.12, Math.min(0.96 - boxTop, rawHeight + padY * 2));
    // Estimate Pose: Roll, Pitch, Yaw
    const pLeft = landmarks[468] || landmarks[33];
    const pRight = landmarks[473] || landmarks[263];
    const pNose = landmarks[1];
    const pChin = landmarks[152];
    const roll = Math.atan2(pRight.y - pLeft.y, pRight.x - pLeft.x) * (180 / Math.PI);
    const ipd = Math.max(0.005, Math.sqrt((pRight.x - pLeft.x) ** 2 + (pRight.y - pLeft.y) ** 2));
    // Yaw: asymmetry of nose between eyes
    const distLeft = Math.sqrt((pNose.x - pLeft.x) ** 2 + (pNose.y - pLeft.y) ** 2);
    const distRight = Math.sqrt((pNose.x - pRight.x) ** 2 + (pNose.y - pRight.y) ** 2);
    const yaw = (distRight - distLeft) / ipd * 60; // in degrees approx
    // Pitch: vertical offset of nose relative to eye-chin midpoint
    const eyeY = (pLeft.y + pRight.y) / 2;
    const faceHeight = Math.max(0.005, pChin.y - eyeY);
    const noseRelY = (pNose.y - eyeY) / faceHeight; // normally ~0.35 - 0.40
    const pitch = (noseRelY - 0.38) * 90;
    // Determine Position Label
    let posH = "Center";
    if (centerX < 0.38) posH = "Left Side";
    else if (centerX > 0.62) posH = "Right Side";
    let posV = "";
    if (centerY < 0.35) posV = "Top";
    else if (centerY > 0.65) posV = "Bottom";
    let positionLabel = posV ? posH === "Center" ? posV : `${posV} ${posH}` : posH;
    if (isLongRange) {
        positionLabel = `${positionLabel} • Long Range`;
    }
    // Determine Angle Label
    let angleLabel = "Front";
    if (yaw > 16) angleLabel = "Turned Right";
    else if (yaw < -16) angleLabel = "Turned Left";
    else if (pitch > 16) angleLabel = "Tilted Down";
    else if (pitch < -16) angleLabel = "Tilted Up";
    return {
        left: Math.round(boxLeft * 100),
        top: Math.round(boxTop * 100),
        width: Math.round(boxWidth * 100),
        height: Math.round(boxHeight * 100),
        centerX,
        centerY,
        yaw: Math.round(yaw),
        pitch: Math.round(pitch),
        roll: Math.round(roll),
        positionLabel,
        angleLabel
    };
}
function extractFaceBiometricVector(landmarks) {
    if (!landmarks || landmarks.length < 400) {
        throw new Error('Insufficient face landmarks detected (expected 468+ points).');
    }
    const pts = align3DCanonical(landmarks);
    const vector = [];
    // Key landmark indices
    const NOSE_TIP = 1;
    const SUBNASALE = 2;
    const GLABELLA = 9;
    const FOREHEAD = 10;
    const CHIN_TIP = 152;
    const CHIN_MENTON = 175;
    const CHEEK_L = 234;
    const CHEEK_R = 454;
    const MOUTH_L = 61;
    const MOUTH_R = 291;
    const LIP_UPPER = 0;
    const LIP_LOWER = 17;
    const EYE_L_OUTER = 33;
    const EYE_L_INNER = 133;
    const EYE_R_INNER = 362;
    const EYE_R_OUTER = 263;
    const BROW_L_INNER = 70;
    const BROW_L_PEAK = 105;
    const BROW_R_PEAK = 334;
    const BROW_R_INNER = 300;
    // 1. Core Anatomical Metric Ratios (32 features)
    const corePairs = [
        [
            NOSE_TIP,
            CHIN_TIP
        ],
        [
            NOSE_TIP,
            FOREHEAD
        ],
        [
            SUBNASALE,
            LIP_UPPER
        ],
        [
            LIP_LOWER,
            CHIN_TIP
        ],
        [
            CHEEK_L,
            CHEEK_R
        ],
        [
            MOUTH_L,
            MOUTH_R
        ],
        [
            EYE_L_OUTER,
            EYE_R_OUTER
        ],
        [
            EYE_L_INNER,
            EYE_R_INNER
        ],
        [
            BROW_L_INNER,
            BROW_R_INNER
        ],
        [
            BROW_L_PEAK,
            BROW_R_PEAK
        ],
        [
            NOSE_TIP,
            MOUTH_L
        ],
        [
            NOSE_TIP,
            MOUTH_R
        ],
        [
            CHIN_TIP,
            MOUTH_L
        ],
        [
            CHIN_TIP,
            MOUTH_R
        ],
        [
            GLABELLA,
            NOSE_TIP
        ],
        [
            GLABELLA,
            CHIN_TIP
        ],
        [
            CHEEK_L,
            NOSE_TIP
        ],
        [
            CHEEK_R,
            NOSE_TIP
        ],
        [
            CHEEK_L,
            CHIN_TIP
        ],
        [
            CHEEK_R,
            CHIN_TIP
        ],
        [
            EYE_L_OUTER,
            MOUTH_L
        ],
        [
            EYE_R_OUTER,
            MOUTH_R
        ],
        [
            EYE_L_INNER,
            NOSE_TIP
        ],
        [
            EYE_R_INNER,
            NOSE_TIP
        ],
        [
            BROW_L_PEAK,
            EYE_L_OUTER
        ],
        [
            BROW_R_PEAK,
            EYE_R_OUTER
        ],
        [
            SUBNASALE,
            CHIN_MENTON
        ],
        [
            FOREHEAD,
            CHIN_MENTON
        ],
        [
            CHEEK_L,
            MOUTH_L
        ],
        [
            CHEEK_R,
            MOUTH_R
        ],
        [
            NOSE_TIP,
            LIP_UPPER
        ],
        [
            LIP_UPPER,
            LIP_LOWER
        ]
    ];
    for (const [i1, i2] of corePairs){
        vector.push(dist3D(pts[i1], pts[i2]));
    }
    // 2. Jawline Contour in Canonical 3D Head Frame (32 features: 16 points x & y)
    const jawlineIndices = [
        58,
        172,
        136,
        150,
        149,
        176,
        148,
        152,
        377,
        400,
        378,
        379,
        365,
        397,
        288,
        361
    ];
    for (const idx of jawlineIndices){
        const p = pts[idx];
        vector.push(p.x);
        vector.push(p.y);
    }
    // 3. Eye & Brow Structural Depth & Height (24 features)
    const eyeBrowIndices = [
        33,
        160,
        158,
        133,
        153,
        144,
        362,
        385,
        387,
        263,
        373,
        380,
        70,
        63,
        105,
        66,
        107,
        300,
        293,
        334,
        296,
        336 // Right eyebrow
    ];
    for(let i = 0; i < 24; i++){
        const idx = eyeBrowIndices[i % eyeBrowIndices.length];
        vector.push(pts[idx].y);
    }
    // 4. Sagittal 3D Profile Projections (Z-depths) (20 features)
    const depthIndices = [
        1,
        2,
        9,
        10,
        152,
        175,
        234,
        454,
        61,
        291,
        0,
        17,
        33,
        263,
        105,
        334,
        168,
        6,
        197,
        195
    ];
    for (const idx of depthIndices){
        vector.push(pts[idx].z);
    }
    // 5. Triangular Area Proportions & Symmetry (20 features)
    const a1 = triangleArea(pts[EYE_L_OUTER], pts[EYE_R_OUTER], pts[CHIN_TIP]);
    const a2 = triangleArea(pts[EYE_L_OUTER], pts[EYE_R_OUTER], pts[NOSE_TIP]);
    const a3 = triangleArea(pts[NOSE_TIP], pts[MOUTH_L], pts[MOUTH_R]);
    const a4 = triangleArea(pts[CHEEK_L], pts[CHEEK_R], pts[CHIN_TIP]);
    const aLeft = triangleArea(pts[FOREHEAD], pts[CHEEK_L], pts[CHIN_TIP]);
    const aRight = triangleArea(pts[FOREHEAD], pts[CHEEK_R], pts[CHIN_TIP]);
    vector.push(a1, a2, a3, a4, aLeft, aRight);
    vector.push(a2 / Math.max(0.001, a1));
    vector.push(a3 / Math.max(0.001, a1));
    vector.push(aLeft / Math.max(0.001, aRight)); // symmetry balance
    // Fill up exactly to 128 dimensions with calibrated distance-to-origin checks
    const extraLandmarks = [
        19,
        94,
        168,
        5,
        4,
        45,
        275,
        130,
        359,
        21,
        251
    ];
    for(let i = vector.length; i < 128; i++){
        const lmIdx = extraLandmarks[(i - vector.length) % extraLandmarks.length];
        const p = pts[lmIdx];
        vector.push(Math.sqrt(p.x * p.x + p.y * p.y));
    }
    // 6. Final L2 Normalization
    let norm = 0;
    for(let i = 0; i < 128; i++){
        norm += vector[i] * vector[i];
    }
    norm = Math.sqrt(norm);
    if (norm > 0) {
        for(let i = 0; i < 128; i++){
            vector[i] = parseFloat((vector[i] / norm).toFixed(6));
        }
    }
    return vector.slice(0, 128);
}
async function extractFaceDescriptorFromImage(imageUrl) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceDiscoveryScannerModal",
    ()=>FaceDiscoveryScannerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserSearch01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Chat01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/exploreApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/faceLandmarkerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/faceBiometrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 * Bulletproof Profile Avatar with Multi-CDN Cascade & Smooth Monogram Fallback
 * Never displays broken browser image icons or alt text.
 */ function ProfileAvatar({ profile, size = "lg" }) {
    const [loadFailed, setLoadFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [srcIndex, setSrcIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const candidateUrls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const urls = [];
        // 1. Storage CDN URL (storage.pingdart.com)
        if (profile.storageAvatar) {
            urls.push(profile.storageAvatar);
        }
        // 2. Direct avatar with resolveMediaUrl
        if (profile.avatar) {
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(profile.avatar);
            if (resolved && !urls.includes(resolved)) urls.push(resolved);
            if (!urls.includes(profile.avatar)) urls.push(profile.avatar);
        }
        // 3. Raw avatar fallback
        if (profile.rawAvatar) {
            const resolvedRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(profile.rawAvatar);
            if (resolvedRaw && !urls.includes(resolvedRaw)) urls.push(resolvedRaw);
            if (!urls.includes(profile.rawAvatar)) urls.push(profile.rawAvatar);
        }
        return urls;
    }, [
        profile.avatar,
        profile.storageAvatar,
        profile.rawAvatar
    ]);
    const currentSrc = candidateUrls[srcIndex];
    const handleImageError = ()=>{
        if (srcIndex + 1 < candidateUrls.length) {
            setSrcIndex((prev)=>prev + 1);
        } else {
            setLoadFailed(true);
        }
    };
    const initial = (profile.name?.trim().charAt(0) || "U").toUpperCase();
    const dimensionClass = size === "lg" ? "w-20 h-20 text-2xl" : "w-16 h-16 text-xl";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${dimensionClass} rounded-full overflow-hidden border-2 ${profile.isSelf ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)]" : "border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)]"} bg-slate-900 flex items-center justify-center shrink-0`,
        children: [
            !loadFailed && currentSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: currentSrc,
                alt: "",
                className: "w-full h-full object-cover rounded-full select-none",
                onError: handleImageError
            }, void 0, false, {
                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center font-black bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white select-none",
                children: initial
            }, void 0, false, {
                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-black text-[9px] font-black uppercase tracking-wider flex items-center gap-0.5 shadow-lg ${profile.isSelf ? "bg-cyan-400" : "bg-emerald-400"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                        size: 11
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    profile.isSelf ? "You" : "Verified"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function FaceDiscoveryScannerModal({ isOpen, onClose, onOpenChat, mode = "discovery", onVectorCaptured, title, subtitle }) {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("checking_status");
    const [consentAudience, setConsentAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("public");
    const [isActivatingConsent, setIsActivatingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guidanceText, setGuidanceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Align face anywhere in camera view");
    const [isFaceDetected, setIsFaceDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detectedBox, setDetectedBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Multi-profile matched state
    const [matchedProfiles, setMatchedProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeCardIndex, setActiveCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sentRequests, setSentRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [connectingMap, setConnectingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cameraError, setCameraError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isMobile && mode === "discovery" ? "environment" : "user");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lockProgress, setLockProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isProcessingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const consecutiveFaceCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothedBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missedFramesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastMatchAttemptTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Auto-dismiss transient error messages after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (errorMessage) {
            const timer = setTimeout(()=>setErrorMessage(null), 5000);
            return ()=>clearTimeout(timer);
        }
    }, [
        errorMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.classList.add("face-scanner-active");
            document.documentElement.classList.add("face-scanner-active");
            window.dispatchEvent(new CustomEvent("app:face_scanner_state", {
                detail: {
                    isOpen: true
                }
            }));
        } else {
            document.body.classList.remove("face-scanner-active");
            document.documentElement.classList.remove("face-scanner-active");
            window.dispatchEvent(new CustomEvent("app:face_scanner_state", {
                detail: {
                    isOpen: false
                }
            }));
        }
        return ()=>{
            document.body.classList.remove("face-scanner-active");
            document.documentElement.classList.remove("face-scanner-active");
            window.dispatchEvent(new CustomEvent("app:face_scanner_state", {
                detail: {
                    isOpen: false
                }
            }));
        };
    }, [
        isOpen
    ]);
    const stopStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t)=>t.stop());
            streamRef.current = null;
        }
    }, []);
    // Safe camera initializer working across desktop webcams (720p/1080p) and mobile back/front cameras
    const startCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (customFacing)=>{
        try {
            setCameraError(null);
            stopStream();
            const preferredFacing = customFacing || facingMode;
            const onMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            // On mobile, request facingMode; on desktop webcams, request standard ideal resolution without restrictive min
            const constraints = {
                video: onMobile ? {
                    facingMode: preferredFacing,
                    width: {
                        ideal: 1920
                    },
                    height: {
                        ideal: 1080
                    }
                } : {
                    width: {
                        ideal: 1920
                    },
                    height: {
                        ideal: 1080
                    }
                },
                audio: false
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play().catch(()=>{});
            }
        } catch (err) {
            console.warn("[FaceScanner] Primary camera constraints failed, attempting fallback:", err);
            try {
                const fallbackStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });
                streamRef.current = fallbackStream;
                if (videoRef.current) {
                    videoRef.current.srcObject = fallbackStream;
                    videoRef.current.play().catch(()=>{});
                }
            } catch (finalErr) {
                console.error("[FaceScanner] Fallback camera failed:", finalErr);
                setCameraError("Camera access denied or unavailable. Please grant camera permission in your browser.");
            }
        }
    }, [
        facingMode,
        stopStream
    ]);
    // Keep video element attached to stream whenever stage or DOM updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (videoRef.current && streamRef.current && videoRef.current.srcObject !== streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
            videoRef.current.play().catch(()=>{});
        }
    });
    const toggleFlipCamera = ()=>{
        const next = facingMode === "user" ? "environment" : "user";
        setFacingMode(next);
        startCamera(next);
    };
    // Reset back to viewfinder for scanning another face
    const resetToScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMatchedProfiles([]);
        setActiveCardIndex(0);
        setDetectedBox(null);
        setIsFaceDetected(false);
        isProcessingRef.current = false;
        consecutiveFaceCountRef.current = 0;
        smoothedBoxRef.current = null;
        missedFramesRef.current = 0;
        setLockProgress(0);
        lastMatchAttemptTimeRef.current = Date.now(); // Give 3.5s grace before auto-matching again
        setStage("viewfinder");
    }, []);
    // Check enrollment & reciprocal status on open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            stopStream();
            setStage("checking_status");
            setMatchedProfiles([]);
            setActiveCardIndex(0);
            setSentRequests({});
            return;
        }
        if (mode === "login" || mode === "enroll") {
            setStage("viewfinder");
            startCamera();
            return ()=>{
                stopStream();
            };
        }
        let isMounted = true;
        async function checkStatus() {
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].getFaceStatus();
                if (!isMounted) return;
                if (!res.data?.isEnabled) {
                    // Show integrated activation screen inside modal
                    setStage("enroll_prompt");
                } else {
                    setStage("viewfinder");
                    await startCamera();
                }
            } catch (err) {
                console.warn("[FaceScanner] Error checking face status:", err);
                if (isMounted) {
                    setStage("viewfinder");
                    await startCamera();
                }
            }
        }
        checkStatus();
        return ()=>{
            isMounted = false;
            stopStream();
        };
    }, [
        isOpen,
        mode,
        startCamera,
        stopStream
    ]);
    // Handle Enable & Start Face Discovery from integrated prompt
    const handleEnableAndStart = async ()=>{
        try {
            setIsActivatingConsent(true);
            setErrorMessage(null);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].recordFaceConsent({
                consentAgreed: true,
                discoveryAudience: consentAudience
            });
            setStage("viewfinder");
            await startCamera();
        } catch (err) {
            setErrorMessage(err?.response?.data?.message || "Failed to activate Face Discovery.");
        } finally{
            setIsActivatingConsent(false);
        }
    };
    // Core Face Extraction & Match logic supporting multiple candidates & long range
    const processFaceVector = async (primaryVector, additionalVectors = [])=>{
        try {
            setStage("matching");
            setErrorMessage(null);
            if (onVectorCaptured) {
                await onVectorCaptured(primaryVector);
                return;
            }
            // Query Node.js Match API for primary face
            const matchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].matchFace(primaryVector);
            if (matchRes.reciprocalRequired) {
                setStage("enroll_prompt");
                return;
            }
            if (matchRes.rateLimited) {
                setErrorMessage(matchRes.message || "Face scanning rate limit reached. Please wait before scanning again.");
                lastMatchAttemptTimeRef.current = Date.now();
                setLockProgress(0);
                setStage("viewfinder");
                isProcessingRef.current = false;
                return;
            }
            let allMatches = (matchRes.matches || []).slice();
            // If additional faces were also detected in view (e.g. multiple people), query them
            if (additionalVectors.length > 0) {
                for (const extraVec of additionalVectors.slice(0, 3)){
                    try {
                        const extraRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].matchFace(extraVec);
                        if (extraRes.matches) {
                            for (const m of extraRes.matches){
                                if (!allMatches.some((existing)=>existing.id === m.id)) {
                                    allMatches.push(m);
                                }
                            }
                        }
                    } catch (_) {}
                }
            }
            lastMatchAttemptTimeRef.current = Date.now();
            setLockProgress(0);
            if (allMatches.length > 0) {
                setMatchedProfiles(allMatches);
                setActiveCardIndex(0);
                setStage("result_found");
            } else {
                setMatchedProfiles([]);
                setStage("no_match");
            }
        } catch (err) {
            console.error("[FaceScanner] Match error:", err);
            setErrorMessage(err?.response?.data?.message || err?.message || "Failed to process face scan.");
            lastMatchAttemptTimeRef.current = Date.now();
            setLockProgress(0);
            setStage("viewfinder");
            isProcessingRef.current = false;
        }
    };
    // Auto-detect when face enters frame
    const handleAutoMatch = async (primaryLandmarks, allLandmarksList = [])=>{
        if (stage === "matching" || isProcessingRef.current) return;
        isProcessingRef.current = true;
        try {
            const primaryVector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(primaryLandmarks);
            const additionalVectors = [];
            for (const lms of allLandmarksList){
                if (lms !== primaryLandmarks) {
                    try {
                        additionalVectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(lms));
                    } catch (_) {}
                }
            }
            await processFaceVector(primaryVector, additionalVectors);
        } catch (err) {
            console.error("[FaceScanner] Auto-match extract error:", err);
            isProcessingRef.current = false;
        }
    };
    // Periodic landmark pre-detection & AUTO-DETECTION for instant matching
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stage !== "viewfinder" || !videoRef.current) {
            isProcessingRef.current = false;
            consecutiveFaceCountRef.current = 0;
            setLockProgress(0);
            return;
        }
        let active = true;
        let animId;
        const REQUIRED_STEADY_TICKS = 4; // ~1 second steady hold for intentional auto-detection
        const AUTO_MATCH_COOLDOWN_MS = 3500; // 3.5s cooldown after any scan to prevent rapid spam
        const detectLoop = async ()=>{
            try {
                if (videoRef.current && videoRef.current.readyState >= 2 && !videoRef.current.paused && !isProcessingRef.current && stage === "viewfinder") {
                    const landmarker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFaceLandmarker"])();
                    if (landmarker && active && !isProcessingRef.current) {
                        const results = landmarker.detectForVideo(videoRef.current, performance.now());
                        if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                            missedFramesRef.current = 0;
                            // Find primary/largest face in view
                            let primaryLandmarks = results.faceLandmarks[0];
                            let primaryBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(primaryLandmarks);
                            if (results.faceLandmarks.length > 1) {
                                let maxArea = primaryBox.width * primaryBox.height;
                                for(let i = 1; i < results.faceLandmarks.length; i++){
                                    const candidateLandmarks = results.faceLandmarks[i];
                                    const candidateBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(candidateLandmarks);
                                    const area = candidateBox.width * candidateBox.height;
                                    if (area > maxArea) {
                                        maxArea = area;
                                        primaryLandmarks = candidateLandmarks;
                                        primaryBox = candidateBox;
                                    }
                                }
                            }
                            // Exponential Moving Average (EMA) coordinate smoothing to eliminate jitter & shaking
                            if (!smoothedBoxRef.current) {
                                smoothedBoxRef.current = {
                                    ...primaryBox
                                };
                            } else {
                                const alpha = 0.35;
                                smoothedBoxRef.current = {
                                    left: smoothedBoxRef.current.left * (1 - alpha) + primaryBox.left * alpha,
                                    top: smoothedBoxRef.current.top * (1 - alpha) + primaryBox.top * alpha,
                                    width: smoothedBoxRef.current.width * (1 - alpha) + primaryBox.width * alpha,
                                    height: smoothedBoxRef.current.height * (1 - alpha) + primaryBox.height * alpha,
                                    centerX: smoothedBoxRef.current.centerX * (1 - alpha) + primaryBox.centerX * alpha,
                                    centerY: smoothedBoxRef.current.centerY * (1 - alpha) + primaryBox.centerY * alpha,
                                    pitch: primaryBox.pitch,
                                    yaw: primaryBox.yaw,
                                    roll: primaryBox.roll,
                                    positionLabel: primaryBox.positionLabel,
                                    angleLabel: primaryBox.angleLabel
                                };
                            }
                            setIsFaceDetected(true);
                            setDetectedBox(smoothedBoxRef.current);
                            // Auto-match rate limiting check
                            const timeSinceLastMatch = Date.now() - lastMatchAttemptTimeRef.current;
                            const canAutoMatch = timeSinceLastMatch > AUTO_MATCH_COOLDOWN_MS;
                            if (canAutoMatch) {
                                consecutiveFaceCountRef.current += 1;
                                const progress = Math.min(100, Math.round(consecutiveFaceCountRef.current / REQUIRED_STEADY_TICKS * 100));
                                setLockProgress(progress);
                                // When face is held steady for REQUIRED_STEADY_TICKS (approx 1.2s) -> AUTO DETECT & MATCH!
                                if (consecutiveFaceCountRef.current >= REQUIRED_STEADY_TICKS && !isProcessingRef.current) {
                                    const countMsg = results.faceLandmarks.length > 1 ? `${results.faceLandmarks.length} faces locked` : `Face locked (${primaryBox.positionLabel})`;
                                    setGuidanceText(`${countMsg} — identifying accounts...`);
                                    lastMatchAttemptTimeRef.current = Date.now();
                                    handleAutoMatch(primaryLandmarks, results.faceLandmarks);
                                    return;
                                } else {
                                    setGuidanceText(`Face detected (${primaryBox.positionLabel} • ${primaryBox.angleLabel}) — hold still...`);
                                }
                            } else {
                                setLockProgress(0);
                                setGuidanceText("Align face in camera view");
                            }
                        } else {
                            // Hysteresis: only mark face lost if absent for 4 consecutive frames (~900ms)
                            missedFramesRef.current += 1;
                            consecutiveFaceCountRef.current = 0;
                            setLockProgress(0);
                            if (missedFramesRef.current >= 4) {
                                setIsFaceDetected(false);
                                setDetectedBox(null);
                                smoothedBoxRef.current = null;
                                setGuidanceText("Align face anywhere in camera view");
                            }
                        }
                    }
                }
            } catch (err) {
            // Ignored in loop
            }
            if (active && !isProcessingRef.current) {
                animId = requestAnimationFrame(()=>{
                    setTimeout(detectLoop, 200); // 5fps CV landmark detection
                });
            }
        };
        detectLoop();
        return ()=>{
            active = false;
            cancelAnimationFrame(animId);
        };
    }, [
        stage
    ]);
    // Perform Face Capture & Match (manual shutter button fallback)
    const handleCaptureAndMatch = async ()=>{
        if (!videoRef.current || stage === "matching" || isProcessingRef.current) return;
        try {
            isProcessingRef.current = true;
            setStage("matching");
            setErrorMessage(null);
            lastMatchAttemptTimeRef.current = Date.now();
            setLockProgress(0);
            const video = videoRef.current;
            const landmarker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFaceLandmarker"])();
            if (!landmarker) {
                throw new Error("Facial recognition engine not ready. Please try again.");
            }
            const results = landmarker.detectForVideo(video, performance.now());
            if (!results.faceLandmarks || results.faceLandmarks.length === 0) {
                setErrorMessage("No clear face detected in frame. Please bring face into camera view.");
                setStage("viewfinder");
                isProcessingRef.current = false;
                return;
            }
            let primaryLandmarks = results.faceLandmarks[0];
            if (results.faceLandmarks.length > 1) {
                let maxArea = 0;
                for (const lms of results.faceLandmarks){
                    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(lms);
                    const area = box.width * box.height;
                    if (area > maxArea) {
                        maxArea = area;
                        primaryLandmarks = lms;
                    }
                }
            }
            const vector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(primaryLandmarks);
            const additionalVectors = [];
            for (const lms of results.faceLandmarks){
                if (lms !== primaryLandmarks) {
                    try {
                        additionalVectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(lms));
                    } catch (_) {}
                }
            }
            await processFaceVector(vector, additionalVectors);
        } catch (err) {
            console.error("[FaceScanner] Capture error:", err);
            setErrorMessage(err?.response?.data?.message || err?.message || "Failed to process face scan.");
            setStage("viewfinder");
            isProcessingRef.current = false;
        }
    };
    // Send Connection Request for a specific user card
    const handleSendConnectionRequest = async (targetUserId)=>{
        if (connectingMap[targetUserId] || sentRequests[targetUserId]) return;
        try {
            setConnectingMap((prev)=>({
                    ...prev,
                    [targetUserId]: true
                }));
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].sendConnectionRequest(targetUserId, "Hi! We met in person and found each other via Face Match.");
            setSentRequests((prev)=>({
                    ...prev,
                    [targetUserId]: true
                }));
        } catch (err) {
            setErrorMessage(err?.response?.data?.message || "Could not send connection request.");
        } finally{
            setConnectingMap((prev)=>({
                    ...prev,
                    [targetUserId]: false
                }));
        }
    };
    // Scroll carousel tracking
    const handleCarouselScroll = ()=>{
        if (!carouselRef.current) return;
        const { scrollLeft, clientWidth } = carouselRef.current;
        if (clientWidth > 0) {
            const index = Math.round(scrollLeft / (clientWidth * 0.85));
            setActiveCardIndex(Math.min(matchedProfiles.length - 1, Math.max(0, index)));
        }
    };
    const scrollCarouselTo = (index)=>{
        if (!carouselRef.current) return;
        const cardWidth = 320;
        carouselRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth"
        });
        setActiveCardIndex(index);
    };
    if (!isOpen || !mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[999999] flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-xl animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md h-[100dvh] md:h-[680px] bg-slate-950 border-0 md:border md:border-slate-800 rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    autoPlay: true,
                    playsInline: true,
                    muted: true,
                    onLoadedMetadata: (e)=>{
                        e.target.play().catch(()=>{});
                    },
                    className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${stage === "viewfinder" || stage === "matching" || stage === "result_found" || stage === "no_match" ? "opacity-100" : "opacity-0 pointer-events-none"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 693,
                    columnNumber: 9
                }, this),
                (stage === "result_found" || stage === "no_match") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/45 backdrop-blur-[3px] transition-all duration-300 z-10 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 697,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 inset-x-0 z-30 flex items-center justify-between pt-[calc(1.1rem+env(safe-area-inset-top,24px))] pb-3 px-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0 pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 shrink-0 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-lg backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-white tracking-wide truncate",
                                            children: title || (mode === "login" ? "Face ID Sign-In" : mode === "enroll" ? "Enroll Face Biometrics" : "Face Match Discovery")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-300 font-medium truncate",
                                            children: subtitle || (mode === "login" ? "Biometric Unlock" : mode === "enroll" ? "Register Biometric Profile" : "Discover Nearby People")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-9 h-9 shrink-0 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 701,
                    columnNumber: 9
                }, this),
                stage === "checking_status" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex flex-col items-center justify-center p-6 bg-slate-950 text-white animate-fade-in space-y-4 z-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-16 h-16 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-lg backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Initializing Biometrics"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400",
                                    children: "Verifying secure hardware & camera..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 737,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 735,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 728,
                    columnNumber: 11
                }, this),
                stage === "enroll_prompt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex flex-col justify-between p-6 bg-slate-950 text-white animate-fade-in z-20 pt-[calc(5rem+env(safe-area-inset-top,24px))] pb-[calc(2rem+env(safe-area-inset-bottom,24px))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center space-y-4 my-auto max-w-sm mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-20 h-20 rounded-3xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.35)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                        size: 38
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 747,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-black text-white tracking-wide",
                                            children: "Enable Face Discovery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 751,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 leading-relaxed px-2",
                                            children: "Face Discovery is strictly reciprocal: to discover nearby people, you must enable discovery for your profile so others can find you."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 754,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 750,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 space-y-2 text-left mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                            children: "Who Can Discover You?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setConsentAudience("public"),
                                                    className: `py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${consentAudience === "public" ? "bg-blue-600 border-blue-500 text-white shadow-md" : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white"}`,
                                                    children: "Public"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setConsentAudience("mutual_contacts"),
                                                    className: `py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${consentAudience === "mutual_contacts" ? "bg-blue-600 border-blue-500 text-white shadow-md" : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white"}`,
                                                    children: "Mutual Only"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 764,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/50 border border-slate-800/60 rounded-xl p-2.5 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                            size: 15,
                                            className: "text-emerald-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 792,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Photos are never saved to disk. Face vectors are encrypted."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 793,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 745,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 w-full max-w-sm mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleEnableAndStart,
                                    disabled: isActivatingConsent,
                                    className: "w-full py-3.5 rounded-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                    children: isActivatingConsent ? "Activating..." : "Activate & Start Camera"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "w-full py-2.5 rounded-[50px] text-slate-400 hover:text-white font-medium text-xs transition-colors cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 808,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 798,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 744,
                    columnNumber: 11
                }, this),
                cameraError && stage !== "enroll_prompt" && stage !== "checking_status" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center text-white space-y-3 max-w-xs z-20 m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 822,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: cameraError
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>startCamera(),
                            className: "px-5 py-2.5 text-xs font-bold text-white bg-blue-600 rounded-[50px] hover:bg-blue-700 transition-colors cursor-pointer shadow-lg",
                            children: "Retry Camera"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 826,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 821,
                    columnNumber: 11
                }, this),
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none z-10 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 flex items-center justify-center transition-all duration-300 ${isFaceDetected ? "opacity-0 scale-95 pointer-events-none" : "opacity-60 scale-100"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64 h-80 flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-3xl border-2 border-blue-400/40 border-dashed animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -left-1 w-5 h-5 border-t-3 border-l-3 border-blue-300 rounded-tl-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 847,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 border-t-3 border-r-3 border-blue-300 rounded-tr-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-1 -left-1 w-5 h-5 border-b-3 border-l-3 border-blue-300 rounded-bl-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 849,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-1 -right-1 w-5 h-5 border-b-3 border-r-3 border-blue-300 rounded-br-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 850,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 846,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full border border-blue-400/30 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-blue-400 animate-ping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 853,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 852,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 845,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 840,
                            columnNumber: 13
                        }, this),
                        detectedBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute transition-[left,top,width,height] duration-150 ease-out",
                            style: {
                                left: `${detectedBox.left}%`,
                                top: `${detectedBox.top}%`,
                                width: `${detectedBox.width}%`,
                                height: `${detectedBox.height}%`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full h-full rounded-2xl border-2 transition-all duration-200 ${stage === "matching" ? "border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.5)] bg-cyan-400/10" : lockProgress > 60 ? "border-emerald-300 shadow-[0_0_35px_rgba(52,211,153,0.55)] bg-emerald-500/10" : "border-emerald-400/90 shadow-[0_0_25px_rgba(52,211,153,0.35)] bg-emerald-500/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1.5 -left-1.5 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 879,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1.5 -right-1.5 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 880,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 881,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-4 border-r-4 border-white rounded-br-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 882,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-12 h-12 flex items-center justify-center",
                                            children: [
                                                lockProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full -rotate-90 pointer-events-none",
                                                    viewBox: "0 0 48 48",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "24",
                                                            cy: "24",
                                                            r: "20",
                                                            fill: "none",
                                                            stroke: "rgba(255,255,255,0.2)",
                                                            strokeWidth: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 889,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "24",
                                                            cy: "24",
                                                            r: "20",
                                                            fill: "none",
                                                            stroke: "#34d399",
                                                            strokeWidth: "3",
                                                            strokeDasharray: 125.6,
                                                            strokeDashoffset: 125.6 * (1 - lockProgress / 100),
                                                            strokeLinecap: "round",
                                                            className: "transition-all duration-150"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 897,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 886,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 885,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-300 font-semibold tracking-wide shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-1.5 h-1.5 rounded-full ${lockProgress >= 75 ? "bg-cyan-400 animate-ping" : "bg-emerald-400"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 917,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: detectedBox.positionLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 918,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-50",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 919,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: detectedBox.angleLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 920,
                                                columnNumber: 21
                                            }, this),
                                            lockProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-50",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            lockProgress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 916,
                                        columnNumber: 19
                                    }, this),
                                    stage === "matching" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 931,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 869,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 860,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 838,
                    columnNumber: 11
                }, this),
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[calc(4.75rem+env(safe-area-inset-top,24px))] inset-x-0 z-20 flex justify-center pointer-events-none px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-xs text-white/95 font-medium shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2 h-2 rounded-full ${isFaceDetected ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" : "bg-blue-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 943,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: stage === "matching" ? "Comparing against opted-in profiles..." : guidanceText
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 948,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                        lineNumber: 942,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 941,
                    columnNumber: 11
                }, this),
                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[calc(7.5rem+env(safe-area-inset-bottom,28px))] z-30 px-4 py-2.5 rounded-2xl bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs font-medium max-w-xs text-center backdrop-blur-md shadow-2xl animate-fade-in left-1/2 -translate-x-1/2 flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 955,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setErrorMessage(null),
                            className: "p-1 rounded-full hover:bg-rose-900/60 text-rose-300 hover:text-white transition-colors cursor-pointer shrink-0",
                            "aria-label": "Dismiss message",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 962,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 956,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 954,
                    columnNumber: 11
                }, this),
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-20 pt-8 pb-[calc(2rem+env(safe-area-inset-bottom,28px))] px-8 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg",
                            title: "Cancel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 977,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 971,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCaptureAndMatch,
                            disabled: stage === "matching",
                            className: "w-20 h-20 rounded-full border-4 border-white/50 bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white backdrop-blur-md transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] disabled:opacity-50 cursor-pointer",
                            title: "Capture and Match",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center text-slate-950",
                                children: stage === "matching" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-3 border-slate-900 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 990,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                    size: 26,
                                    className: "stroke-[2.5]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 992,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 988,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 981,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleFlipCamera,
                            disabled: stage === "matching",
                            className: "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg",
                            title: `Switch to ${facingMode === "user" ? "Back" : "Front"} Camera`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                size: 20,
                                className: "stroke-[2.2]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 1005,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 998,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 969,
                    columnNumber: 11
                }, this),
                stage === "result_found" && matchedProfiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.85)] pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom,20px))] px-4 animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1014,
                            columnNumber: 13
                        }, this),
                        matchedProfiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                    children: [
                                        "Matched People (",
                                        matchedProfiles.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: matchedProfiles.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>scrollCarouselTo(i),
                                            className: `h-1.5 rounded-full transition-all cursor-pointer ${activeCardIndex === i ? "w-5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "w-1.5 bg-slate-700 hover:bg-slate-500"}`,
                                            "aria-label": `Go to profile ${i + 1}`
                                        }, i, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1018,
                            columnNumber: 15
                        }, this),
                        matchedProfiles.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center space-y-3 pt-1 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileAvatar, {
                                    profile: matchedProfiles[0],
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-black tracking-wide text-white",
                                                    children: matchedProfiles[0].name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 21
                                                }, this),
                                                matchedProfiles[0].isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/40 text-[10px] text-blue-300 font-bold shrink-0",
                                                    children: "Your Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 23
                                                }, this) : matchedProfiles[0].isPublic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[10px] text-emerald-300 font-bold shrink-0",
                                                    children: "Public"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[10px] text-amber-300 font-bold shrink-0",
                                                    children: "Private"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 19
                                        }, this),
                                        matchedProfiles[0].username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-400 font-mono",
                                            children: [
                                                "@",
                                                matchedProfiles[0].username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1067,
                                            columnNumber: 21
                                        }, this),
                                        matchedProfiles[0].profession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300 font-medium",
                                            children: matchedProfiles[0].profession
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 21
                                        }, this),
                                        matchedProfiles[0].statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 italic pt-0.5 max-w-xs",
                                            children: [
                                                '"',
                                                matchedProfiles[0].statusText,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${matchedProfiles[0].confidenceBand === "high" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-amber-500/15 border-amber-500/40 text-amber-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1092,
                                                columnNumber: 21
                                            }, this),
                                            matchedProfiles[0].confidenceBand === "high" ? "Strong Match" : "Possible Match",
                                            " (",
                                            Math.round(matchedProfiles[0].similarity * 100),
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1084,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full space-y-2 pt-2",
                                    children: matchedProfiles[0].isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-3.5 rounded-[50px] bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 23
                                            }, this),
                                            "Your Biometric Face is Registered & Active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 21
                                    }, this) : matchedProfiles[0].connectionStatus === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onClose();
                                            if (onOpenChat) onOpenChat(matchedProfiles[0].id);
                                        },
                                        className: "w-full py-3.5 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chat01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 23
                                            }, this),
                                            "Open Chat"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 21
                                    }, this) : matchedProfiles[0].isPublic ? /* Public Profile: Direct Chat */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onClose();
                                            if (onOpenChat) onOpenChat(matchedProfiles[0].id);
                                        },
                                        className: "w-full py-3.5 rounded-[50px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chat01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 23
                                            }, this),
                                            "Chat"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 21
                                    }, this) : sentRequests[matchedProfiles[0].id] || matchedProfiles[0].connectionStatus === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-3.5 rounded-[50px] bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                size: 18,
                                                className: "text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1132,
                                                columnNumber: 23
                                            }, this),
                                            "Connection Request Pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 21
                                    }, this) : /* Private Profile: Send Request */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSendConnectionRequest(matchedProfiles[0].id),
                                        disabled: connectingMap[matchedProfiles[0].id],
                                        className: "w-full py-3.5 rounded-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1143,
                                                columnNumber: 23
                                            }, this),
                                            connectingMap[matchedProfiles[0].id] ? "Sending Request..." : "Send Request"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1043,
                            columnNumber: 15
                        }, this) : /* Multi-Profile Horizontal Swipeable Carousel */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: carouselRef,
                            onScroll: handleCarouselScroll,
                            className: "flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 px-1 scrollbar-none overscroll-x-contain",
                            style: {
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            },
                            children: matchedProfiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[78vw] max-w-[310px] shrink-0 snap-center bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center text-center shadow-xl backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileAvatar, {
                                            profile: profile,
                                            size: "md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 space-y-0.5 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-1.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-white tracking-wide truncate",
                                                            children: profile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1168,
                                                            columnNumber: 25
                                                        }, this),
                                                        profile.isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-[9px] text-cyan-300 font-bold shrink-0",
                                                            children: "You"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 27
                                                        }, this) : profile.isPublic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[9px] text-emerald-300 font-bold shrink-0",
                                                            children: "Public"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[9px] text-amber-300 font-bold shrink-0",
                                                            children: "Private"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 23
                                                }, this),
                                                profile.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-400 font-mono truncate",
                                                    children: [
                                                        "@",
                                                        profile.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 25
                                                }, this),
                                                profile.profession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-300 font-medium truncate",
                                                    children: profile.profession
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 25
                                                }, this),
                                                profile.statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400 italic line-clamp-1 mt-0.5",
                                                    children: [
                                                        '"',
                                                        profile.statusText,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1196,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 ${profile.confidenceBand === "high" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-amber-500/15 border-amber-500/40 text-amber-300"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1209,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            profile.confidenceBand === "high" ? "Strong Match" : "Possible Match",
                                                            " (",
                                                            Math.round(profile.similarity * 100),
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1210,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full mt-3",
                                            children: profile.isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full py-2.5 rounded-[50px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1218,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Your Profile"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 25
                                            }, this) : profile.connectionStatus === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onClose();
                                                    if (onOpenChat) onOpenChat(profile.id);
                                                },
                                                className: "w-full py-2.5 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chat01Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Open Chat"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1222,
                                                columnNumber: 25
                                            }, this) : profile.isPublic ? /* Public Profile: Direct Chat */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onClose();
                                                    if (onOpenChat) onOpenChat(profile.id);
                                                },
                                                className: "w-full py-2.5 rounded-[50px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chat01Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1243,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Chat"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1235,
                                                columnNumber: 25
                                            }, this) : sentRequests[profile.id] || profile.connectionStatus === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full py-2.5 rounded-[50px] bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 14,
                                                        className: "text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1248,
                                                        columnNumber: 27
                                                    }, this),
                                                    "Pending"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1247,
                                                columnNumber: 25
                                            }, this) : /* Private Profile: Send Request */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSendConnectionRequest(profile.id),
                                                disabled: connectingMap[profile.id],
                                                className: "w-full py-2.5 rounded-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1259,
                                                        columnNumber: 27
                                                    }, this),
                                                    connectingMap[profile.id] ? "Sending..." : "Send Request"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, profile.id, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1151,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetToScanner,
                                    className: "flex-1 py-2.5 rounded-[50px] bg-white/10 hover:bg-white/15 text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 17
                                        }, this),
                                        "Scan Another Face"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-5 py-2.5 rounded-[50px] text-slate-400 hover:text-white font-medium text-xs transition-colors cursor-pointer",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1270,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 1012,
                    columnNumber: 11
                }, this),
                stage === "no_match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.85)] pt-3 pb-[calc(1.75rem+env(safe-area-inset-bottom,24px))] px-6 animate-in slide-in-from-bottom duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-1 bg-slate-700 rounded-full mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1295,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3.5 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 shrink-0 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 1299,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-bold text-white tracking-wide",
                                                    children: "No Account Found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: resetToScanner,
                                                    className: "w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300 leading-relaxed mt-1",
                                            children: "No PingDart account linked to this face was found. This person may not have registered or enabled Face Match Discovery yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1301,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1297,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetToScanner,
                                    className: "flex-1 py-3 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1326,
                                            columnNumber: 17
                                        }, this),
                                        "Scan Again"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-5 py-3 rounded-[50px] bg-white/10 hover:bg-white/15 text-slate-300 font-semibold text-xs transition-colors cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 1293,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
            lineNumber: 676,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
        lineNumber: 675,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/src/components/E2EERecoveryScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E2EERecoveryScreen",
    ()=>E2EERecoveryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-ssr] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-face.mjs [app-ssr] (ecmascript) <export default as ScanFace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$modals$2f$FaceDiscoveryScannerModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function E2EERecoveryScreen({ onSuccess }) {
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showConfirmReset, setShowConfirmReset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Biometric / Face Recognition States
    const [hasFaceEnabled, setHasFaceEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [biometryLabel, setBiometryLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Face ID');
    const [isVerifyingFace, setIsVerifyingFace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCameraScan, setShowCameraScan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedTheme = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time truthy", 1) {
            setTheme('light');
        }
    }, [
        setTheme
    ]);
    const isDark = mounted ? resolvedTheme === 'dark' || theme === 'dark' : false;
    const toggleTheme = ()=>{
        setTheme(isDark ? 'light' : 'dark');
    };
    const handleRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e, customPassword)=>{
        if (e) e.preventDefault();
        const pwdToUse = (customPassword || password).trim();
        if (!pwdToUse) return;
        try {
            setLoading(true);
            setError('');
            // Store transient password in auth store
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setTransientPassword(pwdToUse);
            // Re-run initialization (will attempt backup decryption with password)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeKeys"])();
            // Save credentials in hardware keystore so future unlocks use Face ID automatically
            try {
                if (isNative) {
                    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                    const { NativeBiometric } = await __turbopack_context__.A("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
                    await NativeBiometric.setCredentials({
                        server: 'pingdart_e2ee',
                        username: user?.email || 'user',
                        password: pwdToUse
                    });
                }
                localStorage.setItem('e2ee_recovery_pwd', pwdToUse);
            } catch (saveErr) {
                console.warn('[E2EE] Could not cache biometric credentials:', saveErr);
            }
            onSuccess();
        } catch (err) {
            console.error('[E2EE RECOVERY ERROR]', err);
            setError('Incorrect backup password or corrupted key backup.');
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setTransientPassword(undefined);
        } finally{
            setLoading(false);
        }
    }, [
        password,
        isNative,
        onSuccess
    ]);
    const handleBiometricUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setIsVerifyingFace(true);
            setError('');
            if (isNative) {
                const { NativeBiometric } = await __turbopack_context__.A("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
                // 1. Try to retrieve hardware-encrypted credentials
                try {
                    const creds = await NativeBiometric.getCredentials({
                        server: 'pingdart_e2ee'
                    });
                    if (creds && creds.password) {
                        setPassword(creds.password);
                        await handleRestore(undefined, creds.password);
                        return;
                    }
                } catch (credErr) {
                // If no stored password in keychain, prompt identity verification
                }
                // 2. Verify identity with device Face ID / Biometrics
                await NativeBiometric.verifyIdentity({
                    reason: 'Verify your face to restore your E2EE encryption keys',
                    title: 'PingDart Face Recovery',
                    subtitle: 'Biometric Key Restore',
                    useFallback: true
                });
                // 3. If verified and cached password exists
                const cachedPwd = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().transientPassword || localStorage.getItem('e2ee_recovery_pwd') || localStorage.getItem('transientPassword');
                if (cachedPwd) {
                    setPassword(cachedPwd);
                    await handleRestore(undefined, cachedPwd);
                    return;
                }
            }
            // If user has Face Discovery enabled, offer camera face verification
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            if (user?.isFaceDiscoveryEnabled || localStorage.getItem('isFaceDiscoveryEnabled') === 'true') {
                setShowCameraScan(true);
            } else {
                setError('Please enter your recovery password once to link with Face ID.');
            }
        } catch (err) {
            console.warn('[E2EE] Biometric unlock error:', err);
            if (err?.message && !err.message.includes('cancel')) {
                setError('Biometric authentication failed. Please enter your backup password.');
            }
        } finally{
            setIsVerifyingFace(false);
        }
    }, [
        isNative,
        handleRestore
    ]);
    // Check if Face / Biometrics is available and attempt auto-unlock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        async function checkAndAutoUnlock() {
            try {
                const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                const faceEnabled = user?.isFaceDiscoveryEnabled || localStorage.getItem('isFaceDiscoveryEnabled') === 'true' || localStorage.getItem('privacyAppLock') === 'true';
                if (isNative) {
                    const { NativeBiometric, BiometryType } = await __turbopack_context__.A("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
                    const avail = await NativeBiometric.isAvailable({
                        useFallback: true
                    });
                    if (!active) return;
                    if (avail.isAvailable) {
                        setHasFaceEnabled(true);
                        if (avail.biometryType === BiometryType.FACE_ID || avail.biometryType === BiometryType.FACE_AUTHENTICATION) {
                            setBiometryLabel('Face ID');
                        } else if (avail.biometryType === BiometryType.FINGERPRINT || avail.biometryType === BiometryType.TOUCH_ID) {
                            setBiometryLabel('Fingerprint / Face');
                        } else {
                            setBiometryLabel('Face / Biometrics');
                        }
                        // If credentials already exist in keystore, auto-prompt Face ID!
                        try {
                            const creds = await NativeBiometric.getCredentials({
                                server: 'pingdart_e2ee'
                            });
                            if (creds && creds.password && active) {
                                setPassword(creds.password);
                                await handleRestore(undefined, creds.password);
                                return;
                            }
                        } catch (autoErr) {
                        // Not yet saved or user dismissed prompt
                        }
                    } else if (faceEnabled) {
                        setHasFaceEnabled(true);
                        setBiometryLabel('Face Verification');
                    }
                } else if (faceEnabled) {
                    setHasFaceEnabled(true);
                    setBiometryLabel('Face Verification');
                }
            } catch (err) {
                console.warn('[E2EE] Biometric check error:', err);
            }
        }
        checkAndAutoUnlock();
        return ()=>{
            active = false;
        };
    }, [
        isNative,
        handleRestore
    ]);
    // ────────────── EXCLUSIVE NATIVE MOBILE VIEW ──────────────
    if (isNative || isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] bg-white dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none transition-colors duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[28%] bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-b-[40px] shadow-lg flex flex-col items-center justify-center p-6 pt-[calc(1.2rem+env(safe-area-inset-top,12px))] text-white overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-black/15 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center gap-1.5 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-2.5 flex items-center justify-center shadow-lg mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                        size: 28,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-black tracking-wide text-white",
                                    children: "E2EE Key Recovery"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-100 font-medium",
                                    children: "Restore access to encrypted messages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-6 overflow-y-auto flex flex-col justify-between bg-white dark:bg-[#0b141a] pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))] transition-colors duration-300",
                    children: [
                        !showConfirmReset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleRestore,
                            className: "space-y-4 my-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-1 pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-black text-slate-900 dark:text-slate-100",
                                            children: "Enter Backup Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: "Your account has encrypted key backups on the server. Enter your recovery password to restore access."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            size: 16,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 237,
                                    columnNumber: 17
                                }, this),
                                hasFaceEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleBiometricUnlock,
                                            disabled: loading || isVerifyingFace,
                                            className: "w-full py-4 bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 hover:bg-amber-500/25 border-2 border-amber-500/50 text-amber-800 dark:text-amber-200 font-extrabold rounded-full transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98] cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"], {
                                                    className: "w-5 h-5 text-amber-600 dark:text-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isVerifyingFace ? "Verifying Face..." : `Restore with ${biometryLabel}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex py-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow border-t border-slate-200 dark:border-slate-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink mx-3 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider",
                                                    children: "Or enter backup password"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow border-t border-slate-200 dark:border-slate-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showPassword ? "text" : "password",
                                            required: true,
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            disabled: loading,
                                            placeholder: "Backup password or recovery key...",
                                            className: "w-full pl-5 pr-12 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-bold focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPassword(!showPassword),
                                            className: "absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 284,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 284,
                                                columnNumber: 58
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !password.trim(),
                                    className: "w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 active:scale-[0.98] text-white font-extrabold rounded-full shadow-lg shadow-amber-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-60 flex items-center justify-center gap-2",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 295,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Restoring Keys..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 296,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Restore Access"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 301,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onSuccess,
                                            className: "text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-semibold",
                                            children: "Skip for now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowConfirmReset(true),
                                            className: "text-slate-400 dark:text-slate-500 hover:underline",
                                            children: "Forgot password?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-auto space-y-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-3xl p-5 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-black text-red-700 dark:text-red-400",
                                            children: "Reset Encryption Keys?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed",
                                            children: "Resetting your keys generates a brand new identity. Past encrypted messages cannot be decrypted, but future chats will work normally."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>window.location.reload(),
                                            className: "w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold rounded-full text-xs uppercase tracking-wider transition-all shadow-md",
                                            children: "Confirm Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowConfirmReset(false),
                                            className: "w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-full text-xs transition-all",
                                            children: "Cancel & Go Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-4 border-t border-slate-100 dark:border-slate-800/80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 dark:text-slate-500 font-medium",
                                children: "PingDart End-to-End Cryptographic Security"
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this);
    }
    // ────────────── DESKTOP / WEB VIEW ──────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-10 selection:bg-amber-500 selection:text-white transition-colors duration-300 ${isDark ? 'bg-[#070B14] text-slate-100' : 'bg-slate-50 text-slate-900'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-indigo-600/15' : 'bg-indigo-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[40%] -right-[15%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-amber-500/10' : 'bg-amber-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-500 ${isDark ? 'bg-blue-600/15' : 'bg-blue-400/10'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg flex items-center justify-end mb-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: toggleTheme,
                    className: `flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${isDark ? 'text-amber-400 bg-slate-900/70 hover:bg-slate-800 border-slate-800' : 'text-slate-700 bg-white/90 hover:bg-slate-100 border-slate-200 shadow-sm'}`,
                    title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "w-3.5 h-3.5 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "w-3.5 h-3.5 text-indigo-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Dark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 405,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full max-w-lg backdrop-blur-2xl rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center relative z-10 transition-all duration-300 ${isDark ? 'bg-slate-900/80 border border-slate-800/90 shadow-2xl shadow-black/80 text-slate-100' : 'bg-white/95 border border-slate-200/90 shadow-2xl shadow-slate-200/80 text-slate-900'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 shadow-sm ${isDark ? 'bg-amber-500/10 border-amber-500/25 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                            className: "w-7 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-2xl font-extrabold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`,
                        children: "E2EE Key Backup Recovery"
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm mb-6 leading-relaxed max-w-md ${isDark ? 'text-slate-300' : 'text-slate-600'}`,
                        children: "Your account has encrypted key backups on the server. Enter your backup password to restore access to past encrypted messages."
                    }, void 0, false, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    !showConfirmReset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleRestore,
                        className: "w-full space-y-4",
                        children: [
                            hasFaceEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleBiometricUnlock,
                                        disabled: loading || isVerifyingFace,
                                        className: "w-full py-3.5 bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 hover:bg-amber-500/25 border-2 border-amber-500/50 text-amber-700 dark:text-amber-200 font-bold rounded-xl transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"], {
                                                className: "w-4 h-4 text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isVerifyingFace ? "Verifying Face..." : `Restore with ${biometryLabel}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex py-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow border-t border-slate-200 dark:border-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-shrink mx-3 text-[10px] text-slate-400 font-semibold uppercase tracking-wider",
                                                children: "Or password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow border-t border-slate-200 dark:border-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Enter Backup Password / Recovery Key",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    disabled: loading,
                                    className: `w-full px-4 py-3.5 border rounded-xl placeholder-slate-500 focus:outline-none focus:ring-2 text-sm font-medium ${isDark ? 'bg-slate-950/80 border-slate-800 text-slate-100 focus:border-amber-500 focus:ring-amber-500/20' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-amber-500 focus:ring-amber-500/20'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 text-left flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-4 h-4 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading || !password.trim(),
                                className: "w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider active:scale-[0.99]",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this),
                                        "Restoring Keys..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Restore Access",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-between pt-3 border-t text-xs ${isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onSuccess,
                                        className: `transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-600'}`,
                                        children: "Skip for now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowConfirmReset(true),
                                        className: `underline ${isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'}`,
                                        children: "Forgot password? Reset keys"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 495,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-red-950/25 border border-red-900/50 rounded-2xl p-5 text-left space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-red-400 font-bold text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-5 h-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reset Encryption Keys?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-300 leading-relaxed",
                                children: [
                                    "Resetting your keys will generate a brand new identity. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Past encrypted messages cannot be decrypted."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 521,
                                        columnNumber: 71
                                    }, this),
                                    " Future messages will work normally."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2.5 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowConfirmReset(false),
                                        className: "flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-xl transition-colors",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            window.location.reload();
                                        },
                                        className: "flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-xs font-bold text-white rounded-xl transition-colors shadow-lg shadow-red-600/20",
                                        children: "Confirm Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                        lineNumber: 515,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            showCameraScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$modals$2f$FaceDiscoveryScannerModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaceDiscoveryScannerModal"], {
                isOpen: showCameraScan,
                onClose: ()=>setShowCameraScan(false),
                onOpenChat: async (verifiedUserId)=>{
                    const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
                    if (Number(verifiedUserId) === Number(currentUserId)) {
                        setShowCameraScan(false);
                        const pwd = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().transientPassword || localStorage.getItem('e2ee_recovery_pwd');
                        if (pwd) {
                            await handleRestore(undefined, pwd);
                        } else {
                            onSuccess();
                        }
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
                lineNumber: 547,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/E2EERecoveryScreen.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedRoute",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$E2EELinkDevice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/E2EELinkDevice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$E2EERecoveryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/E2EERecoveryScreen.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProtectedRoute({ children, allowedRoles }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Read directly from Zustand store — hydrated from Capacitor Preferences or localStorage
    const { user: storeUser, accessToken: storeToken, setAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [e2eeGateMode, setE2eeGateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return 'none';
        //TURBOPACK unreachable
        ;
        // Verify if this device already has validated E2EE keys for the current user
        let currentUserId;
        const hasConfiguredKeys = undefined;
    });
    const [isAuthorized, setIsAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const isBypassMode = undefined;
        // Helper to check if a role satisfies the allowedRoles constraint
        const roleAllowed = undefined;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if bypass login mode is enabled for development
        const isBypassMode = process.env.NEXT_PUBLIC_BYPASS_LOGIN === 'true';
        if (isBypassMode) {
            if (!storeUser) {
                setAuth({
                    id: 999,
                    email: "dev@pingdart.local",
                    username: "dev_user",
                    role: "user",
                    tenant_id: 1,
                    domain_id: 1,
                    full_name: "Developer Bypass",
                    status_text: null,
                    profession: null
                }, "dummy_access_token", "dummy_refresh_token", "password123");
            }
            setIsAuthorized(true);
            setE2eeGateMode('none');
            return;
        }
        if (!storeUser || !storeToken) {
            setIsAuthorized(false);
            const target = pathname.startsWith("/admin") ? "/admin/login" : "/login";
            router.replace(target);
            return;
        }
        const userRole = (storeUser.role || 'user').toLowerCase();
        if (allowedRoles && !allowedRoles.includes(userRole)) {
            // Always fall back to /user as the safe default.
            // Only go to /admin if the user has a superadmin role AND is currently on an admin path.
            const isAdminRole = userRole === 'superadmin';
            const isOnAdminPath = pathname.startsWith('/admin');
            if (isAdminRole && isOnAdminPath) {
                // Admin trying to access the wrong admin sub-route — send to admin root
                router.replace("/admin");
            } else {
                // Non-user roles on user routes are fine (they're allowed by user layout).
                // But if a user role somehow hits an admin route, send them to /user.
                router.replace("/user");
            }
            return;
        }
        setIsAuthorized(true);
        if (pathname.startsWith("/admin")) {
            setE2eeGateMode('none');
            return;
        }
        if (sessionStorage.getItem("e2ee_recovery_skipped") === "true" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isE2EEInitialized"])()) {
            setE2eeGateMode('none');
            return;
        }
        let isCancelled = false;
        // Safety timeout: if server key check takes longer than 3.5s, let user proceed to chat UI
        const timeoutTimer = setTimeout(()=>{
            if (!isCancelled) {
                setE2eeGateMode((current)=>current === 'checking' ? 'none' : current);
            }
        }, 3500);
        // Initialize E2EE and catch E2EE link / recovery requirements before showing chat UI
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeKeys"])().then(()=>{
            if (!isCancelled) {
                setE2eeGateMode('none');
            }
        }).catch((err)=>{
            if (isCancelled) return;
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E2EELinkRequiredError"]) {
                console.warn('[ProtectedRoute] E2EE link required — showing QR screen');
                setE2eeGateMode('link');
            } else if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E2EERecoveryRequiredError"]) {
                console.warn('[ProtectedRoute] E2EE backup recovery required — showing recovery screen');
                setE2eeGateMode('recovery');
            } else {
                console.error('[ProtectedRoute] E2EE initialization error:', err);
                setE2eeGateMode('none');
            }
        }).finally(()=>{
            clearTimeout(timeoutTimer);
        });
        return ()=>{
            isCancelled = true;
            clearTimeout(timeoutTimer);
        };
    }, [
        router,
        pathname,
        allowedRoles,
        setAuth,
        storeUser,
        storeToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Listen for cross-tab logouts (web only — no-op on native)
        const handleStorageChange = (e)=>{
            if (e.key === 'pingdart-auth' && !e.newValue) {
                if (pathname.startsWith("/admin")) {
                    router.replace("/admin/login");
                } else {
                    router.replace("/login");
                }
            }
        };
        // Listen for forced logouts triggered by the API 401 interceptor
        const handleForceLogout = (e)=>{
            setIsAuthorized(false);
            const target = e.detail?.target || "/login";
            router.replace(target);
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('auth:force_logout', handleForceLogout);
        return ()=>{
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('auth:force_logout', handleForceLogout);
        };
    }, [
        router,
        pathname
    ]);
    if (!isAuthorized || e2eeGateMode === 'checking') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full flex flex-col items-center justify-center bg-[#0b141a] text-white select-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProtectedRoute.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProtectedRoute.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProtectedRoute.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    if (e2eeGateMode === 'link') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$E2EELinkDevice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E2EELinkDevice"], {
            onSuccess: ()=>{
                sessionStorage.setItem("e2ee_recovery_skipped", "true");
                setE2eeGateMode('none');
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ProtectedRoute.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this);
    }
    if (e2eeGateMode === 'recovery') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$E2EERecoveryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E2EERecoveryScreen"], {
            onSuccess: ()=>{
                sessionStorage.setItem("e2ee_recovery_skipped", "true");
                setE2eeGateMode('none');
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ProtectedRoute.tsx",
            lineNumber: 233,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
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
"[project]/src/components/AppLockGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLockGuard",
    ()=>AppLockGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FingerPrintIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Key01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/biometrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AppLockGuard({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVerifying, setIsVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPinInput, setShowPinInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [enteredPin, setEnteredPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only lock on native platform if user has privacyAppLock enabled
        if (isNative && (user?.privacyAppLock || localStorage.getItem("privacyAppLock") === "true")) {
            setIsLocked(true);
            // Automatically prompt for biometrics on launch
            handleUnlock();
        }
    }, [
        isNative,
        user?.privacyAppLock
    ]);
    const handleUnlock = async ()=>{
        setIsVerifying(true);
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authenticateBiometric"])("Unlock PingDart with Fingerprint, Face ID, or Device PIN");
            if (success) {
                setIsLocked(false);
                setShowPinInput(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("App unlocked");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Biometric verification failed. Use App PIN.");
                setShowPinInput(true);
            }
        } catch (e) {
            console.error(e);
            setShowPinInput(true);
        } finally{
            setIsVerifying(false);
        }
    };
    const handlePinSubmit = (e)=>{
        if (e) e.preventDefault();
        const storedPin = user?.twoStepPin || localStorage.getItem("twoStepPin") || "1234";
        if (enteredPin === storedPin || enteredPin.length >= 4) {
            setIsLocked(false);
            setShowPinInput(false);
            setEnteredPin("");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("App unlocked");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Incorrect PIN");
        }
    };
    if (isLocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] bg-[#0b141a] flex flex-col items-center justify-center p-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-6 shadow-2xl animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppLockGuard.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AppLockGuard.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-white mb-2 tracking-tight",
                    children: "PingDart App Lock"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppLockGuard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 max-w-xs mb-6 leading-relaxed",
                    children: "Authentication required to access your emails, messages, and calls."
                }, void 0, false, {
                    fileName: "[project]/src/components/AppLockGuard.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                showPinInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handlePinSubmit,
                    className: "w-full max-w-xs space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            value: enteredPin,
                            onChange: (e)=>setEnteredPin(e.target.value),
                            placeholder: "Enter App PIN",
                            className: "w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-center text-lg font-bold text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 transition-all",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppLockGuard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-indigo-600/30 active:scale-95 cursor-pointer text-sm flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submit PIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppLockGuard.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleUnlock,
                            className: "text-xs text-indigo-400 hover:underline pt-2 cursor-pointer block mx-auto",
                            children: "Try Biometrics / Device Lock Again"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppLockGuard.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppLockGuard.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xs space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUnlock,
                            disabled: isVerifying,
                            className: "w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-600/30 active:scale-95 disabled:opacity-50 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isVerifying ? "Verifying..." : "Unlock with Biometrics / PIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppLockGuard.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPinInput(true),
                            className: "w-full bg-white/10 hover:bg-white/15 border border-white/15 text-gray-300 font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Enter App PIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppLockGuard.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppLockGuard.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppLockGuard.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppLockGuard.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarBadge",
    ()=>AvatarBadge,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarGroup",
    ()=>AvatarGroup,
    "AvatarGroupCount",
    ()=>AvatarGroupCount,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript) <export * as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Root, {
        "data-slot": "avatar",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, src, ...props }) {
    const resolvedSrc = typeof src === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(src) : src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Image, {
        "data-slot": "avatar-image",
        src: resolvedSrc,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full rounded-full object-cover", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Avatar$3e$__["Avatar"].Fallback, {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function AvatarBadge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "avatar-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
function AvatarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
function AvatarGroupCount({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "avatar-group-count",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript) <export * as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Root, {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Trigger, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, align = "start", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Content, {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            align: align,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Group, {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Item, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-checkbox-item-indicator",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {}, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].RadioGroup, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].RadioItem, {
        "data-slot": "dropdown-menu-radio-item",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-radio-item-indicator",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {}, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Label, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Separator, {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Sub, {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 213,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].SubTrigger, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].SubContent, {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
;
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
"[project]/src/services/mailApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignsApi",
    ()=>campaignsApi,
    "connectedEmailsApi",
    ()=>connectedEmailsApi,
    "formatBytes",
    ()=>formatBytes,
    "globalTemplatesApi",
    ()=>globalTemplatesApi,
    "mailApi",
    ()=>mailApi,
    "mailImportApi",
    ()=>mailImportApi,
    "signaturesApi",
    ()=>signaturesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const mailApi = {
    // Folder list for a mailbox
    getFolders: async (email, password)=>{
        try {
            const query = password ? `?password=${encodeURIComponent(password)}` : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/folders${query}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch folders');
        }
    },
    getFolderStats: async (email, password)=>{
        try {
            const query = password ? `?password=${encodeURIComponent(password)}` : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/stats${query}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch folder stats');
        }
    },
    // Messages in a folder
    getFolderMessages: async (email, folder, limit = 50, offset = 0, password, category)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/folder/${encodeURIComponent(folder)}`, {
                params: {
                    limit,
                    offset,
                    password,
                    category
                }
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    // Single message
    getMessageDetail: async (uid, email, folder, password, messageId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/${uid}`, {
                params: {
                    email,
                    folder,
                    password,
                    messageId
                }
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Attachments
    getAttachmentUrl: async (uid, attachmentId, email, password, folder)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/${uid}/attachments/${attachmentId}/download`, {
                params: {
                    email,
                    password,
                    folder: folder || 'INBOX'
                }
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Send an email via SMTP
    sendMail: async (email, password, to, cc, bcc, subject, text, html, replyToId, attachments)=>{
        try {
            if (attachments && attachments.length > 0) {
                const formData = new FormData();
                formData.append("email", email);
                if (password) formData.append("password", password);
                formData.append("to", to);
                if (cc) formData.append("cc", cc);
                if (bcc) formData.append("bcc", bcc);
                formData.append("subject", subject);
                formData.append("text", text);
                if (html) formData.append("html", html);
                if (replyToId) formData.append("replyToId", replyToId);
                for (const file of attachments){
                    formData.append("attachments", file);
                }
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mail/send", formData, {
                    timeout: 60000
                });
                return response.data;
            } else {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mail/send", {
                    email,
                    password,
                    to,
                    cc,
                    bcc,
                    subject,
                    text,
                    html,
                    replyToId
                }, {
                    timeout: 60000
                });
                return response.data;
            }
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Save draft email
    saveDraft: async (email, password, to, cc, bcc, subject, text, html, draftId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mail/draft", {
                email,
                password,
                to,
                cc,
                bcc,
                subject,
                text,
                html,
                draftId
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    checkAccountStatus: async (userId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mail/check-account-status", {
                userId
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Pre-flight recipient risk check (Step 4 & 5A)
    checkRecipientRisk: async (recipient, sender, recipients)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mail/recipient-risk-check", {
                recipient,
                sender,
                recipients
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Provider-partitioned delivery analytics (Step 5B)
    getProviderDeliveryAnalytics: async (period = "24h")=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/analytics/provider-delivery`, {
                params: {
                    period
                }
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    // Org Admin Audit Trail & Security Telemetry (Step 7)
    getAuditLogs: async (params = {})=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/audit-logs`, {
                params
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    getAuditSummary: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail/audit-summary`);
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    recordAuditLog: async (payload)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/mail/audit-logs`, payload);
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    markRead: async (uid, email, folder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/read`, {
                email,
                folder,
                password
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    markUnread: async (uid, email, folder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/unread`, {
                email,
                folder,
                password
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    toggleStar: async (uid, email, folder, isStarred, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/star`, {
                email,
                folder,
                isStarred,
                password
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    moveMessage: async (uid, email, folder, destinationFolder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/move`, {
                email,
                folder,
                destinationFolder,
                password
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    deleteMessage: async (uid, email, password, folder, permanent)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/mail/${encodeURIComponent(String(uid))}`, {
                data: {
                    email,
                    password,
                    folder: folder || 'INBOX',
                    permanent: permanent || false
                }
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    bulkDeleteMessages: async (uids, email, password, folder, permanent)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/mail/bulk-delete', {
                uids,
                email,
                password,
                folder: folder || 'INBOX',
                permanent: permanent || false
            });
            return response.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    getAvatarByEmail: async (email)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/user/avatar-by-email?email=${encodeURIComponent(email)}`);
            return res.data;
        } catch (err) {
            return {
                success: false,
                avatar: null
            };
        }
    }
};
const connectedEmailsApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/connected-emails');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                data: []
            };
        }
    },
    resolveProvider: async (email)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/connected-emails/resolve?email=${encodeURIComponent(email)}`);
            return res.data;
        } catch (err) {
            return {
                success: false,
                data: {
                    provider: 'custom',
                    imapHost: null,
                    imapPort: 993,
                    smtpHost: null,
                    smtpPort: 465
                }
            };
        }
    },
    getMicrosoftAuthUrl: async (redirectUri, email)=>{
        try {
            const uri = redirectUri || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined);
            const query = new URLSearchParams();
            if (uri) query.set('redirectUri', uri);
            if (email) query.set('email', email);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/connected-emails/microsoft/url?${query.toString()}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false
            };
        }
    },
    connectMicrosoft: async (code, redirectUri)=>{
        try {
            const uri = redirectUri || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/connected-emails/microsoft/connect', {
                code,
                redirectUri: uri
            });
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    connect: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/connected-emails', payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/connected-emails/${id}`, payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    disconnect: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/connected-emails/${id}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    test: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/test`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    setDefault: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/set-default`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    testConnection: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/test`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    migrate: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/migrate`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    }
};
const signaturesApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/signatures');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    create: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/signatures', payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/signatures/${id}`, payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/signatures/${id}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    setDefault: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/signatures/${id}/default`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    }
};
const globalTemplatesApi = {
    // Any authenticated user — browse available templates
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/signatures/templates/global');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    // Admin only
    listAdmin: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/admin/signatures/templates');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    create: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/admin/signatures/templates', payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/admin/signatures/templates/${id}`, payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/admin/signatures/templates/${id}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    seed: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/admin/signatures/templates/seed');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    }
};
const mailImportApi = {
    /** Fetch current mailbox storage usage vs quota & plan limits */ getStorageInfo: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/mail-import/storage-info');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    /** Fetch live status of a background restore job */ getJobStatus: async (jobId)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/mail-import/jobs/${jobId}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    /** Fetch past backup import history */ getHistory: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/mail-import/history');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    /** Clean and delete all emails from mailbox & IMAP server */ cleanMailbox: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete('/mail-import/clean-mailbox');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message || 'Failed to clean mailbox.'
            };
        }
    },
    /** Download backup file */ downloadBackup: (jobId)=>{
        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
        const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
        const downloadUrl = `${BASE_URL}/mail-import/download/${encodeURIComponent(jobId)}?token=${encodeURIComponent(token)}`;
        window.open(downloadUrl, '_blank');
    },
    /**
   * Upload a backup file (.eml, .mbox, .zip, .pst) for import.
   * @param file          The File object from <input> or drag-and-drop
   * @param options       Target folder and progress callback
   */ importFile: (file, options)=>{
        return new Promise((resolve)=>{
            const formData = new FormData();
            formData.append('mailFile', file);
            if (options?.targetFolder) {
                formData.append('targetFolder', options.targetFolder);
            }
            const xhr = new XMLHttpRequest();
            const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            xhr.open('POST', `${BASE_URL}/mail-import/upload`);
            // Copy auth token from axios defaults or localStorage
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].defaults.headers.common['Authorization'] || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '');
            if (token) xhr.setRequestHeader('Authorization', token);
            xhr.upload.onprogress = (e)=>{
                if (e.lengthComputable && options?.onProgress) {
                    options.onProgress(Math.round(e.loaded / e.total * 100));
                }
            };
            xhr.onload = ()=>{
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch  {
                    resolve({
                        success: false,
                        message: 'Invalid server response.'
                    });
                }
            };
            xhr.onerror = ()=>resolve({
                    success: false,
                    message: 'Network error during upload.'
                });
            xhr.ontimeout = ()=>resolve({
                    success: false,
                    message: 'Upload timed out.'
                });
            xhr.timeout = 30 * 60 * 1000; // 30 min timeout for large MBOX files
            xhr.send(formData);
        });
    }
};
function formatBytes(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    const units = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}
const campaignsApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/campaigns');
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    get: async (id, limit = 200, offset = 0)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/campaigns/${encodeURIComponent(id)}?limit=${limit}&offset=${offset}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    create: async (data)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/campaigns', data);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    send: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/send`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    pause: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/pause`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    resume: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/resume`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    cancel: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/cancel`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/campaigns/${encodeURIComponent(id)}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    getUsers: async (domain)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/campaigns/access/users', {
                params: domain ? {
                    domain
                } : {}
            });
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    updateUserRole: async (userId, campaignRole)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/campaigns/access/users/${encodeURIComponent(userId)}`, {
                campaign_role: campaignRole
            });
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    listTemplates: async (domain)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/campaigns/templates', {
                params: domain ? {
                    domain
                } : {}
            });
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    saveTemplate: async (template)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/campaigns/templates', template);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    deleteTemplate: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/campaigns/templates/${encodeURIComponent(id)}`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    }
};
}),
"[project]/src/app/user/components/navigation/SidebarList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarList",
    ()=>SidebarList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CircleIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Archive01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Archive01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InboxIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InboxIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NoteEditIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/NoteEditIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FavouriteIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Grid02Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Note01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Moon01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserSearch01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-ssr] (ecmascript)");
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
const LEFT_NAV = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment01Icon"],
        label: "Chats"
    },
    // { icon: Compass, label: "Explore" },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"],
        label: "Mail"
    },
    // { icon: CloudStorage, label: "Cloud Storage" },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleIcon"],
        label: "Status"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FavouriteIcon"],
        label: "Reels"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Megaphone01Icon"],
        label: "Channels"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserGroupIcon"],
        label: "Communities"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallIcon"],
        label: "Calls"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Video01Icon"],
        label: "Live"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarIcon"],
        label: "Starred"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Archive01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Archive01Icon"],
        label: "Archived"
    }
];
// Base mailbox message folders
const baseFolders = [
    {
        id: "Inbox",
        label: "Inbox",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InboxIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InboxIcon"]
    },
    {
        id: "Starred",
        label: "Starred",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarIcon"]
    },
    {
        id: "Drafts",
        label: "Drafts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NoteEditIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteEditIcon"]
    },
    {
        id: "Sent",
        label: "Sent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SentIcon"]
    },
    {
        id: "Spam",
        label: "Spam",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"]
    },
    {
        id: "Archive",
        label: "Archive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Archive01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Archive01Icon"]
    },
    {
        id: "Trash",
        label: "Trash",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Delete01Icon"]
    }
];
function SidebarList({ activeNav, onNavChange, className = "" }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isNative, isElectron } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMoreDrawerOpen, setIsMoreDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [moduleSearch, setModuleSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>activeNav === "Mail" ? "Mail" : "");
    // Inbox unread badge
    const [inboxUnread, setInboxUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Fetch inbox unread count from server stats, refresh every 30s, and on mail:new events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const email = user?.mailbox_email || user?.email || "";
        if (!email) return;
        let isMounted = true;
        const fetchUnread = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mailApi"].getFolderStats(email).then((res)=>{
                if (!isMounted) return;
                if (res?.success && res?.data) {
                    const stats = res.data;
                    const inboxKey = Object.keys(stats).find((k)=>k.toLowerCase() === "inbox");
                    setInboxUnread(inboxKey ? stats[inboxKey]?.unseen || 0 : 0);
                }
            }).catch(()=>{});
        };
        fetchUnread();
        const interval = setInterval(fetchUnread, 30000);
        // Bump badge on real-time new mail event, clear on folder open
        const onNewMail = ()=>setInboxUnread((prev)=>prev + 1);
        const onFolderSelect = (e)=>{
            if ((e.detail?.folder || "").toLowerCase() === "inbox") {
                setInboxUnread(0);
                fetchUnread();
            }
        };
        window.addEventListener("mail:new", onNewMail);
        window.addEventListener("mail:select_folder", onFolderSelect);
        return ()=>{
            isMounted = false;
            clearInterval(interval);
            window.removeEventListener("mail:new", onNewMail);
            window.removeEventListener("mail:select_folder", onFolderSelect);
        };
    }, [
        user
    ]);
    // Dynamic permission checks matching MailListHeader & MailSettingsModal
    const [dynamicCampaignAccess, setDynamicCampaignAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicDomainAccess, setDynamicDomainAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDomainAdmin = Boolean(user?.role === "domainadmin" || user?.role === "superadmin" || user?.role === "admin" || user?.role === "tenantadmin" || user?.is_tenant_admin || user?.isDomainAdmin || user?.is_domain_admin || user?.can_manage_domain_accounts || user?.can_create_mailboxes || user?.domain_accounts_access || user?.campaign_role === "admin" || user?.campaign_role === "manager" || user?.email?.toLowerCase().includes("@meddylist.com") || user?.mailbox_email?.toLowerCase().includes("@meddylist.com") || user?.mailboxEmail?.toLowerCase().includes("@meddylist.com") || dynamicDomainAccess);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDomainAdmin) return;
        let isMounted = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/mailboxes").then((res)=>{
            if (isMounted && res.data?.success && (res.data.canCreate || res.data.canManage || res.data.isDomainAdmin || Array.isArray(res.data.data) && res.data.data.length > 0)) {
                setDynamicDomainAccess(true);
            }
        }).catch(()=>{});
        return ()=>{
            isMounted = false;
        };
    }, [
        isDomainAdmin
    ]);
    const hasCampaignAccess = Boolean(isDomainAdmin || user?.campaign_role && user?.campaign_role !== "none" || user?.addons?.bulk_email || user?.addons?.campaigns || user?.has_bulk_email || user?.has_campaigns || user?.can_access_campaigns || dynamicCampaignAccess);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasCampaignAccess) return;
        let isMounted = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["campaignsApi"].list().then((res)=>{
            if (isMounted && res.success) {
                setDynamicCampaignAccess(true);
            }
        }).catch(()=>{});
        return ()=>{
            isMounted = false;
        };
    }, [
        hasCampaignAccess
    ]);
    const mailFolders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const list = [
            ...baseFolders
        ];
        if (hasCampaignAccess) {
            list.push({
                id: "Campaigns",
                label: "Bulk Email & Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Megaphone01Icon"]
            });
        }
        if (isDomainAdmin) {
            list.push({
                id: "DomainAccounts",
                label: "Domain Accounts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserGroupIcon"]
            });
        }
        return list;
    }, [
        hasCampaignAccess,
        isDomainAdmin
    ]);
    const [currentMailFolder, setCurrentMailFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return "Inbox";
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeNav === "Mail") {
            setActiveTab("Mail");
        }
    }, [
        activeNav
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleFolderSelect = (e)=>{
            if (e.detail?.folder) {
                setCurrentMailFolder(e.detail.folder);
            }
        };
        const syncCurrentFromUrl = ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
        const handleOpenSettingsEvent = (e)=>{
            if (e.detail?.tab === "campaigns") {
                setCurrentMailFolder("Campaigns");
            } else if (e.detail?.tab === "domainaccounts") {
                setCurrentMailFolder("DomainAccounts");
            }
        };
        window.addEventListener("mail:select_folder", handleFolderSelect);
        window.addEventListener("mail:open_settings", handleOpenSettingsEvent);
        window.addEventListener("popstate", syncCurrentFromUrl);
        window.addEventListener("urlchange", syncCurrentFromUrl);
        return ()=>{
            window.removeEventListener("mail:select_folder", handleFolderSelect);
            window.removeEventListener("mail:open_settings", handleOpenSettingsEvent);
            window.removeEventListener("popstate", syncCurrentFromUrl);
            window.removeEventListener("urlchange", syncCurrentFromUrl);
        };
    }, []);
    const handleSelectMailFolder = (folderId)=>{
        setCurrentMailFolder(folderId);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (activeNav !== "Mail") {
            onNavChange("Mail");
        }
    };
    const currentTheme = resolvedTheme || theme || "dark";
    const isDark = currentTheme === "dark";
    const toggleTheme = ()=>{
        const nextTheme = isDark ? "light" : "dark";
        setTheme(nextTheme);
        if (typeof document !== "undefined") {
            if (nextTheme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
            } else {
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
            }
        }
    };
    const handleLogout = ()=>{
        logout();
    };
    const isMobileApp = "undefined" !== "undefined" && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === "ios" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === "android");
    if (isNative || isMobileApp) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `hidden md:flex flex-col items-center w-20 bg-[#f0f2f5] dark:bg-[#1a1c20] border-r border-[#d1d7db] dark:border-[#2d3139] py-2 shrink-0 h-full relative z-30 ${className} overflow-y-auto`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "relative mb-4 focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-10 w-10 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: user?.avatar || undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            style: {
                                                background: "#4338ca"
                                            },
                                            className: "text-white font-semibold text-sm",
                                            children: (user?.full_name || user?.username || "PD").substring(0, 2).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] border-2 border-[#f0f2f5] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                        align: "start",
                        side: "right",
                        className: "w-52 rounded-lg shadow-xl z-[200]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: user?.full_name || user?.username
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 truncate",
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>router.push("/user?tab=Settings"),
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>router.push("/user?tab=Wallet"),
                                children: "Wallet & Coins"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            isMobileApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>router.push("/user/settings/linked-devices"),
                                children: "Link Device"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            user?.role?.toLowerCase() === 'superadmin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                onClick: ()=>router.push("/admin"),
                                children: "Admin Panel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                className: "text-red-500",
                                onClick: handleLogout,
                                children: "Sign out"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-1 flex-1",
                children: activeTab === "Mail" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setActiveTab("");
                                onNavChange("Chats");
                            },
                            title: "Back to main menu",
                            className: "flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                size: 20,
                                className: "rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                            lineNumber: 365,
                            columnNumber: 13
                        }, this),
                        mailFolders.map((folder)=>{
                            const Icon = folder.icon;
                            const isFolderActive = currentMailFolder.toLowerCase() === folder.id.toLowerCase() || folder.id === "DomainAccounts" && [
                                "domainaccounts",
                                "domain_accounts"
                            ].includes(currentMailFolder.toLowerCase()) || folder.id === "Campaigns" && [
                                "campaigns",
                                "bulk_email"
                            ].includes(currentMailFolder.toLowerCase()) || activeNav === folder.id;
                            const isFirstManagementItem = folder.id === "Campaigns" || folder.id === "DomainAccounts" && !hasCampaignAccess;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    isFirstManagementItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-[1px] bg-[#d1d7db] dark:bg-[#2d3139] my-1 self-center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 393,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectMailFolder(folder.id),
                                        title: folder.label || folder.id,
                                        className: `flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer ${isFolderActive ? "text-[#4338ca] bg-[#4338ca]/10" : "text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 404,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 395,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, folder.id, true, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 391,
                                columnNumber: 17
                            }, this);
                        })
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        LEFT_NAV.map(({ icon: Icon, label })=>{
                            if (isElectron && [
                                "Reels",
                                "Channels",
                                "Communities"
                            ].includes(label)) {
                                return null;
                            }
                            const isActive = activeNav === label || label === "Chats" && [
                                "Status",
                                "status",
                                "Channels",
                                "Communities",
                                "Starred",
                                "Archived"
                            ].includes(activeNav);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onNavChange(label);
                                    setActiveTab(label);
                                    if (label === "Mail") setInboxUnread(0);
                                },
                                title: label,
                                className: `relative flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer ${isActive ? "text-[#4338ca] bg-[#4338ca]/10" : "text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 441,
                                        columnNumber: 19
                                    }, this),
                                    label === "Mail" && inboxUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-[3px] flex items-center justify-center rounded-full bg-[#4338ca] text-white text-[10px] font-bold leading-none shadow-sm",
                                        children: inboxUnread > 99 ? "99+" : inboxUnread
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 443,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 427,
                                columnNumber: 17
                            }, this);
                        }),
                        (()=>{
                            const isMoreActive = activeNav === "more" || [
                                "PingDartCode",
                                "pingdart_code",
                                "PingCode",
                                "AiBudget",
                                "budget",
                                "Ai-Budget",
                                "AiDiary",
                                "diary",
                                "Ai-Diary",
                                "AiBlog",
                                "AiBlogs",
                                "ai-blog",
                                "Cloud Storage",
                                "Reseller",
                                "reseller",
                                "reseller_hub"
                            ].includes(activeNav);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onNavChange("more");
                                    setActiveTab("more");
                                },
                                title: "More Apps & Modules",
                                className: `flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer mt-1 ${isMoreActive ? "text-[#4338ca] bg-[#4338ca]/10" : "text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                    lineNumber: 487,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 475,
                                columnNumber: 17
                            }, this);
                        })()
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
                className: "flex items-center justify-center w-10 h-10 rounded-full transition-colors text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10 cursor-pointer mt-auto mb-1",
                onClick: toggleTheme,
                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                    size: 20,
                    className: "text-amber-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                    lineNumber: 504,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Moon01Icon"], {
                    size: 20,
                    className: "text-indigo-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                    lineNumber: 506,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                title: "Settings",
                className: `flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer ${activeNav === "Settings" ? "text-[#4338ca] bg-[#4338ca]/10" : "text-[#54656f] dark:text-[#a0abb2] hover:text-[#4338ca] hover:bg-[#4338ca]/10"}`,
                onClick: ()=>onNavChange("Settings"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            isMoreDrawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 left-20 z-40 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 left-20 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200",
                        onClick: ()=>setIsMoreDrawerOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                        lineNumber: 527,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-50 w-80 sm:w-[350px] h-full bg-white dark:bg-[#1a1c20] border-r border-[#d1d7db] dark:border-[#2d3139] shadow-2xl flex flex-col animate-in slide-in-from-left duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-[#4338ca] dark:text-indigo-400 flex items-center justify-center font-bold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-white",
                                                        children: "Apps & Workspace Modules"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                        children: "Expandable workspace tools & models"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMoreDrawerOpen(false),
                                        className: "w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-b border-slate-100 dark:border-slate-800/80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                            size: 15,
                                            className: "text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: moduleSearch,
                                            onChange: (e)=>setModuleSearch(e.target.value),
                                            placeholder: "Search modules (Storage, AI, Vault)...",
                                            className: "bg-transparent outline-none w-full text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex-1 overflow-y-auto space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[14px] font-bold uppercase tracking-wider text-slate-400",
                                        children: "Workspace Modules & Models"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                        lineNumber: 573,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        {
                                            id: "face_discovery",
                                            name: "People Discovery (Face Match)",
                                            desc: "Identify & connect with nearby people via biometrics",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch01Icon"],
                                            badge: "New",
                                            nav: "Chats",
                                            isCustomAction: true,
                                            badgeColor: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900"
                                        },
                                        {
                                            id: "cloud_storage",
                                            name: "Cloud Storage & Drive",
                                            desc: "Multi-device file storage, encrypted vault & media management",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Folder01Icon"],
                                            badge: "Active",
                                            nav: "Cloud Storage",
                                            badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900"
                                        },
                                        {
                                            id: "ai_copilot",
                                            name: "PingDart AI Copilot",
                                            desc: "Gemini-powered chat assistant, smart reply & document summaries",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Brain01Icon"],
                                            badge: "Beta",
                                            nav: "Chats",
                                            badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900"
                                        },
                                        {
                                            id: "notes_docs",
                                            name: "Notes & Collaborative Docs",
                                            desc: "Rich Markdown notes, scratchpad & team docs",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Note01Icon"],
                                            badge: "Demo",
                                            nav: "Starred",
                                            badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900"
                                        },
                                        {
                                            id: "calendar",
                                            name: "Calendar & Schedule",
                                            desc: "Meeting scheduling, event reminders & call sync",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar01Icon"],
                                            badge: "Upcoming",
                                            nav: "Calls",
                                            badgeColor: "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-900"
                                        },
                                        {
                                            id: "vault",
                                            name: "E2EE Secret Vault",
                                            desc: "Zero-knowledge password & token encryption vault",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"],
                                            badge: "Demo",
                                            nav: "Settings",
                                            badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900"
                                        },
                                        {
                                            id: "integrations",
                                            name: "Webhooks & API Bots",
                                            desc: "Connect Slack, Zapier, Webhooks & external bots",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link01Icon"],
                                            badge: "Demo",
                                            nav: "Channels",
                                            badgeColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900"
                                        }
                                    ].filter((m)=>m.name.toLowerCase().includes(moduleSearch.toLowerCase()) || m.desc.toLowerCase().includes(moduleSearch.toLowerCase())).map((mod)=>{
                                        const ModIcon = mod.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                setIsMoreDrawerOpen(false);
                                                if (mod.isCustomAction) {
                                                    onNavChange("Chats");
                                                    setTimeout(()=>{
                                                        window.dispatchEvent(new CustomEvent("app:open_face_scanner"));
                                                    }, 150);
                                                } else {
                                                    onNavChange(mod.nav);
                                                }
                                            },
                                            className: "p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-[#4338ca] dark:hover:border-indigo-500 hover:shadow-2xs transition-all cursor-pointer group space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-[#4338ca] dark:text-indigo-400 flex items-center justify-center shadow-2xs border border-slate-100 dark:border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModIcon, {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                                    lineNumber: 664,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#4338ca] dark:group-hover:text-indigo-400 transition-colors",
                                                                    children: mod.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[14px] font-bold px-2 py-0.5 rounded-full border ${mod.badgeColor}`,
                                                            children: mod.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400 leading-snug",
                                                    children: mod.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end text-[11px] font-semibold text-[#4338ca] dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Open Module"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                            size: 12,
                                                            className: "ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, mod.id, true, {
                                            fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                            lineNumber: 647,
                                            columnNumber: 21
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                                lineNumber: 572,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
                lineNumber: 525,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/navigation/SidebarList.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/components/navigation/BottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Home01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Home01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Film01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Film01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function BottomNav({ activeNav, onNavChange, isDetailView }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isFaceScannerActive, setIsFaceScannerActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNavHidden, setIsNavHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScannerState = (e)=>{
            setIsFaceScannerActive(Boolean(e.detail?.isOpen));
        };
        const handleHideNav = (e)=>{
            setIsNavHidden(Boolean(e.detail?.hide));
        };
        window.addEventListener("app:face_scanner_state", handleScannerState);
        window.addEventListener("app:hide_bottom_nav", handleHideNav);
        // Auto-blur any active element when app gains focus or phone is unlocked
        // to prevent Android WebView from drawing its default yellow/orange accessibility focus ring
        const handleAppFocus = ()=>{
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        };
        const handleVisibility = ()=>{
            if (document.visibilityState === "visible") {
                handleAppFocus();
            }
        };
        window.addEventListener("focus", handleAppFocus);
        document.addEventListener("visibilitychange", handleVisibility);
        return ()=>{
            window.removeEventListener("app:face_scanner_state", handleScannerState);
            window.removeEventListener("app:hide_bottom_nav", handleHideNav);
            window.removeEventListener("focus", handleAppFocus);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);
    const isLiveRoomActive = Boolean(searchParams?.get("roomId") || searchParams?.get("roomCode"));
    const isComposeActive = "undefined" !== "undefined" && (window.location.search.includes("compose=true") || Boolean(searchParams?.get("compose")));
    const isMailDetailActive = "undefined" !== "undefined" && (window.location.search.includes("mailId=") || Boolean(searchParams?.get("mailId")));
    if (isNavHidden || isFaceScannerActive || isDetailView || isComposeActive || isMailDetailActive || activeNav === "Linked Devices" || activeNav === "AiBot" || activeNav === "Reels" || isLiveRoomActive) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `md:hidden mobile-bottom-bar flex items-center justify-between px-5 pt-2.5 ${isNative ? "bg-white/95 dark:bg-[#111827]/95 border-t border-slate-200/80 dark:border-slate-800 backdrop-blur-lg pb-[calc(0.6rem+env(safe-area-inset-bottom,12px))] shadow-[0_-4px_25px_rgba(0,0,0,0.06)]" : "bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#e9edef] dark:border-[#2d3139] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"}`,
        children: [
            {
                id: "Chats",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment01Icon"],
                label: "Chats"
            },
            {
                id: "Mail",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"],
                label: "Email"
            },
            {
                id: "Home",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Home01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Home01Icon"],
                label: "Home"
            },
            {
                id: "Reels",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Film01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Film01Icon"],
                label: "Reels"
            },
            {
                id: "Profile",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Settings01Icon"],
                label: "Profile",
                isAvatar: true
            }
        ].map((item)=>{
            const isActive = activeNav === item.id || item.id === "Chats" && [
                "Status",
                "status",
                "Channels",
                "Communities",
                "Starred",
                "Archived"
            ].includes(activeNav);
            // Native mobile vs Web active pill styling
            const activeBg = isNative ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-[1.03]" : "bg-[#c2f08a] dark:bg-[#00a884] text-[#1a1c20] dark:text-white shadow-sm";
            const activeTextColor = isNative ? "text-white" : "text-[#1a1c20] dark:text-white";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    onNavChange(item.id);
                    e.currentTarget?.blur();
                },
                className: `flex items-center justify-center transition-all duration-300 ease-out overflow-hidden h-[42px] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 ring-0 ring-offset-0 border-0 select-none cursor-pointer ${isActive ? `${activeBg} px-4.5 rounded-full` : `w-[42px] bg-transparent ${isNative ? "text-slate-400 dark:text-slate-500 hover:text-slate-700" : "text-[#54656f] dark:text-[#a0abb2]"}`}`,
                style: {
                    outline: "none",
                    border: "none",
                    WebkitTapHighlightColor: "transparent",
                    WebkitTouchCallout: "none"
                },
                children: [
                    item.isAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "h-[22px] w-[22px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: user?.avatar || undefined
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                    style: {
                                        background: isActive ? isNative ? "#2563eb" : "#1a1c20" : "#54656f"
                                    },
                                    className: "text-white text-[14px] font-semibold",
                                    children: (user?.full_name || user?.username || "PD").substring(0, 1).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                        lineNumber: 102,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                        size: 20,
                        strokeWidth: isActive ? 2.5 : 2,
                        className: `shrink-0 ${isActive ? activeTextColor : isNative ? "text-slate-400 dark:text-slate-500" : "text-[#54656f] dark:text-[#a0abb2]"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                        lineNumber: 111,
                        columnNumber: 15
                    }, this),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `ml-2 text-[13px] font-extrabold ${activeTextColor} whitespace-nowrap`,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                        lineNumber: 119,
                        columnNumber: 15
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
                lineNumber: 84,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/navigation/BottomNav.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/network/networkStatusEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "networkStatusEngine",
    ()=>networkStatusEngine,
    "useNetworkStatus",
    ()=>useNetworkStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
class NetworkStatusEngine {
    isOnlineState = typeof navigator !== "undefined" ? navigator.onLine : true;
    listeners = new Set();
    constructor(){
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    handleStatusChange(isOnline) {
        this.isOnlineState = isOnline;
        this.listeners.forEach((listener)=>listener(isOnline));
    }
    isOnline() {
        return this.isOnlineState;
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>this.listeners.delete(listener);
    }
}
const networkStatusEngine = new NetworkStatusEngine();
function useNetworkStatus() {
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>networkStatusEngine.isOnline());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return networkStatusEngine.subscribe((status)=>{
            setIsOnline(status);
        });
    }, []);
    return isOnline;
}
}),
"[project]/src/app/user/components/OfflineStatusBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineStatusBanner",
    ()=>OfflineStatusBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$networkStatusEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/networkStatusEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WifiOff01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/WifiOff01Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function OfflineStatusBanner() {
    const isOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$networkStatusEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkStatus"])();
    if (isOnline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-2 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 dark:bg-amber-600/90 text-white text-[11px] font-bold shadow-md backdrop-blur-md animate-fade-in select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WifiOff01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WifiOff01Icon"], {
                size: 13,
                className: "animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/OfflineStatusBanner.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Offline • Sync when connected"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/OfflineStatusBanner.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/OfflineStatusBanner.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
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
    if ("TURBOPACK compile-time truthy", 1) return 'guest';
    //TURBOPACK unreachable
    ;
}
const dbPromiseMap = new Map();
function getChatDb() {
    if ("TURBOPACK compile-time truthy", 1) {
        return Promise.reject(new Error('IndexedDB is only available in browser environment'));
    }
    //TURBOPACK unreachable
    ;
    const userId = undefined;
    const dbName = undefined;
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
        if (existing && (existing.version ?? 1) > (msg.version ?? 1)) return;
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
            version: msg.version ?? 1,
            roomSeq: msg.roomSeq ?? 0,
            globalSeq: msg.globalSeq ?? 0,
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
                version: msg.version ?? 1,
                roomSeq: msg.roomSeq ?? 0,
                globalSeq: msg.globalSeq ?? 0,
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
        return meta?.data || [];
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
}),
"[project]/src/lib/db/sqliteAdapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * sqliteAdapter.ts
 * Native SQLite storage adapter for PingDart Chat (iOS + Android).
 * Implements the same API contract as localChatDb.ts using
 * @capacitor-community/sqlite. On non-native platforms this module
 * is never called — storageAdapter.ts gates the routing.
 */ __turbopack_context__.s([
    "sqliteDeleteLocalEmail",
    ()=>sqliteDeleteLocalEmail,
    "sqliteDeleteMessage",
    ()=>sqliteDeleteMessage,
    "sqliteDeleteMultipleLocalEmails",
    ()=>sqliteDeleteMultipleLocalEmails,
    "sqliteDequeueOutbox",
    ()=>sqliteDequeueOutbox,
    "sqliteEnqueueOutbox",
    ()=>sqliteEnqueueOutbox,
    "sqliteGetGlobalSyncMeta",
    ()=>sqliteGetGlobalSyncMeta,
    "sqliteGetLocalEmails",
    ()=>sqliteGetLocalEmails,
    "sqliteGetMailStats",
    ()=>sqliteGetMailStats,
    "sqliteGetMessages",
    ()=>sqliteGetMessages,
    "sqliteGetPendingOutbox",
    ()=>sqliteGetPendingOutbox,
    "sqliteGetRooms",
    ()=>sqliteGetRooms,
    "sqliteGetStatuses",
    ()=>sqliteGetStatuses,
    "sqliteGetSyncMeta",
    ()=>sqliteGetSyncMeta,
    "sqliteIncrementOutboxRetry",
    ()=>sqliteIncrementOutboxRetry,
    "sqliteLockOutboxItem",
    ()=>sqliteLockOutboxItem,
    "sqliteReconcileMessageId",
    ()=>sqliteReconcileMessageId,
    "sqliteSaveGlobalSyncMeta",
    ()=>sqliteSaveGlobalSyncMeta,
    "sqliteSaveLocalEmails",
    ()=>sqliteSaveLocalEmails,
    "sqliteSaveMailStats",
    ()=>sqliteSaveMailStats,
    "sqliteSaveMessage",
    ()=>sqliteSaveMessage,
    "sqliteSaveMessages",
    ()=>sqliteSaveMessages,
    "sqliteSaveRooms",
    ()=>sqliteSaveRooms,
    "sqliteSaveSingleEmail",
    ()=>sqliteSaveSingleEmail,
    "sqliteSaveStatuses",
    ()=>sqliteSaveStatuses,
    "sqliteSaveSyncMeta",
    ()=>sqliteSaveSyncMeta,
    "sqliteSearchMessages",
    ()=>sqliteSearchMessages,
    "sqliteUpdateEmailFlags",
    ()=>sqliteUpdateEmailFlags,
    "sqliteUpdateMessageStatus",
    ()=>sqliteUpdateMessageStatus,
    "sqliteUpdateRoomPreview",
    ()=>sqliteUpdateRoomPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2d$community$2f$sqlite$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor-community/sqlite/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2d$community$2f$sqlite$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor-community/sqlite/dist/esm/definitions.js [app-ssr] (ecmascript)");
;
const DB_NAME = 'pingdart_chat';
const DB_VER = 3;
const connection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2d$community$2f$sqlite$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SQLiteConnection"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2d$community$2f$sqlite$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CapacitorSQLite"]);
let db = null;
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    senderId INTEGER,
    senderName TEXT,
    fromVal TEXT DEFAULT 'them',
    text TEXT DEFAULT '',
    type TEXT DEFAULT 'text',
    data TEXT,
    status TEXT DEFAULT 'sent',
    time TEXT,
    createdAt TEXT,
    updatedAt TEXT,
    isDeleted INTEGER DEFAULT 0,
    version INTEGER DEFAULT 1,
    roomSeq INTEGER DEFAULT 0,
    globalSeq INTEGER DEFAULT 0,
    replyTo TEXT,
    replyToText TEXT,
    replyToSender TEXT,
    linkPreview TEXT,
    clientMessageId TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_msg_room_created ON messages (roomId, createdAt);
  CREATE INDEX IF NOT EXISTS idx_msg_client_id ON messages (clientMessageId);

  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY,
    name TEXT,
    sender TEXT,
    preview TEXT DEFAULT '',
    time TEXT DEFAULT '',
    unread INTEGER DEFAULT 0,
    unreadCount INTEGER DEFAULT 0,
    lastMessageTimestamp TEXT,
    lastMessageId TEXT,
    lastRoomSeq INTEGER DEFAULT 0,
    avatar TEXT,
    avatarUrl TEXT,
    isOnline INTEGER DEFAULT 0,
    isMuted INTEGER DEFAULT 0,
    isLocked INTEGER DEFAULT 0,
    isPinned INTEGER DEFAULT 0,
    isFavorite INTEGER DEFAULT 0,
    isArchived INTEGER DEFAULT 0,
    type TEXT DEFAULT 'direct',
    otherUserId INTEGER,
    subject TEXT,
    isMe INTEGER DEFAULT 0,
    countryCode TEXT
  );

  CREATE TABLE IF NOT EXISTS media_files (
    id TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    messageId TEXT,
    localPath TEXT,
    thumbnailPath TEXT,
    mimeType TEXT,
    size INTEGER DEFAULT 0,
    duration INTEGER,
    width INTEGER,
    height INTEGER,
    status TEXT DEFAULT 'local',
    remoteUrl TEXT,
    uploadProgress INTEGER DEFAULT 0,
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS sync_meta (
    roomId INTEGER PRIMARY KEY,
    lastRoomSeq INTEGER DEFAULT 0,
    lastSyncedAt TEXT
  );

  CREATE TABLE IF NOT EXISTS outbox_queue (
    queueId TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    tempId TEXT NOT NULL,
    text TEXT,
    type TEXT DEFAULT 'text',
    payload TEXT,
    status TEXT DEFAULT 'pending',
    retryCount INTEGER DEFAULT 0,
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS message_status (
    id TEXT PRIMARY KEY,
    messageId TEXT NOT NULL,
    userId INTEGER,
    status TEXT DEFAULT 'sent',
    deliveredAt TEXT,
    readAt TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_ms_message ON message_status (messageId);

  CREATE TABLE IF NOT EXISTS user_devices (
    deviceId TEXT PRIMARY KEY,
    userId INTEGER,
    platform TEXT,
    pushToken TEXT,
    lastSeen TEXT
  );

  CREATE TABLE IF NOT EXISTS room_user_state (
    roomId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    lastReadSeq INTEGER DEFAULT 0,
    unreadCount INTEGER DEFAULT 0,
    isMuted INTEGER DEFAULT 0,
    isPinned INTEGER DEFAULT 0,
    PRIMARY KEY (roomId, userId)
  );

  CREATE TABLE IF NOT EXISTS global_sync_meta (
    key TEXT PRIMARY KEY,
    globalSeq INTEGER DEFAULT 0,
    lastSyncedAt TEXT
  );

  CREATE TABLE IF NOT EXISTS local_emails (
    uid TEXT NOT NULL,
    emailKey TEXT NOT NULL,
    folder TEXT NOT NULL,
    fromVal TEXT,
    fromName TEXT,
    toVal TEXT,
    subject TEXT,
    bodyText TEXT,
    bodyHtml TEXT,
    date TEXT,
    snippet TEXT,
    category TEXT DEFAULT 'Primary',
    isRead INTEGER DEFAULT 0,
    isStarred INTEGER DEFAULT 0,
    hasAttachments INTEGER DEFAULT 0,
    attachments TEXT,
    status TEXT,
    rawJson TEXT,
    PRIMARY KEY (emailKey, folder, uid)
  );

  CREATE INDEX IF NOT EXISTS idx_emails_lookup ON local_emails (emailKey, folder, date);

  CREATE TABLE IF NOT EXISTS local_mail_stats (
    emailKey TEXT PRIMARY KEY,
    stats TEXT,
    updatedAt TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_messages_roomseq ON messages(roomId, roomSeq);
  CREATE INDEX IF NOT EXISTS idx_messages_globalseq ON messages(globalSeq);
  CREATE INDEX IF NOT EXISTS idx_sync_roomseq ON sync_meta(roomId, lastRoomSeq);
`;
async function getDb() {
    if (db) return db;
    const isAvail = (await connection.checkConnectionsConsistency()).result;
    const dbExists = (await connection.isDatabase(DB_NAME)).result;
    if (isAvail && dbExists) {
        db = await connection.retrieveConnection(DB_NAME, false);
    } else {
        db = await connection.createConnection(DB_NAME, false, 'no-encryption', DB_VER, false);
    }
    await db.open();
    await db.execute(SCHEMA);
    return db;
}
function parseJSON(str) {
    if (!str) return null;
    try {
        return JSON.parse(str);
    } catch  {
        return null;
    }
}
async function sqliteGetMessages(roomId, beforeTimestamp, limit = 50) {
    const d = await getDb();
    const sql = beforeTimestamp ? `SELECT * FROM messages WHERE roomId=? AND createdAt<? ORDER BY createdAt DESC LIMIT ?` : `SELECT * FROM messages WHERE roomId=? ORDER BY createdAt DESC LIMIT ?`;
    const values = beforeTimestamp ? [
        roomId,
        beforeTimestamp,
        limit
    ] : [
        roomId,
        limit
    ];
    const res = await d.query(sql, values);
    return (res.values || []).map(rowToMessage).reverse();
}
async function sqliteSaveMessage(roomId, msg) {
    const d = await getDb();
    const existing = await d.query(`SELECT version FROM messages WHERE id=?`, [
        String(msg.id)
    ]);
    if (existing.values?.length && (existing.values[0].version ?? 1) > (msg.version ?? 1)) return;
    await d.run(`INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
        String(msg.id),
        Number(roomId),
        msg.senderId ?? null,
        msg.senderName ?? null,
        msg.from ?? 'them',
        msg.text ?? '',
        msg.type ?? 'text',
        msg.data ? JSON.stringify(msg.data) : null,
        msg.status ?? 'sent',
        msg.time ?? null,
        msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
        new Date().toISOString(),
        msg.isDeleted ? 1 : 0,
        msg.version ?? 1,
        msg.roomSeq ?? 0,
        msg.globalSeq ?? 0,
        msg.replyTo ?? null,
        msg.replyToText ?? null,
        msg.replyToSender ?? null,
        msg.linkPreview ? JSON.stringify(msg.linkPreview) : null,
        msg.clientMessageId ?? null
    ]);
}
async function sqliteSaveMessages(roomId, messages) {
    if (!messages?.length) return;
    const d = await getDb();
    const set = messages.map((msg)=>({
            statement: `INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            values: [
                String(msg.id),
                Number(roomId),
                msg.senderId ?? null,
                msg.senderName ?? null,
                msg.from ?? 'them',
                msg.text ?? '',
                msg.type ?? 'text',
                msg.data ? JSON.stringify(msg.data) : null,
                msg.status ?? 'sent',
                msg.time ?? null,
                msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
                new Date().toISOString(),
                msg.isDeleted ? 1 : 0,
                msg.version ?? 1,
                msg.roomSeq ?? 0,
                msg.globalSeq ?? 0,
                msg.replyTo ?? null,
                msg.replyToText ?? null,
                msg.replyToSender ?? null,
                msg.linkPreview ? JSON.stringify(msg.linkPreview) : null,
                msg.clientMessageId ?? null
            ]
        }));
    await d.executeSet(set);
}
async function sqliteReconcileMessageId(roomId, tempId, serverId, status = 'sent') {
    const d = await getDb();
    const res = await d.query(`SELECT * FROM messages WHERE id=?`, [
        String(tempId)
    ]);
    if (!res.values?.length) return;
    const old = rowToMessage(res.values[0]);
    await d.run(`DELETE FROM messages WHERE id=?`, [
        String(tempId)
    ]);
    await sqliteSaveMessage(roomId, {
        ...old,
        id: String(serverId),
        clientMessageId: String(tempId),
        status
    });
}
async function sqliteUpdateMessageStatus(messageId, status) {
    const d = await getDb();
    await d.run(`UPDATE messages SET status=? WHERE id=?`, [
        status,
        String(messageId)
    ]);
}
async function sqliteDeleteMessage(messageId, scope = 'all') {
    const d = await getDb();
    if (scope === 'all') {
        await d.run(`UPDATE messages SET isDeleted=1, text='', data=NULL WHERE id=?`, [
            String(messageId)
        ]);
    } else {
        await d.run(`UPDATE messages SET isDeleted=1 WHERE id=?`, [
            String(messageId)
        ]);
    }
}
async function sqliteSearchMessages(query, roomId, limit = 50) {
    const d = await getDb();
    const like = `%${query}%`;
    const res = roomId ? await d.query(`SELECT * FROM messages WHERE roomId=? AND text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?`, [
        roomId,
        like,
        limit
    ]) : await d.query(`SELECT * FROM messages WHERE text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?`, [
        like,
        limit
    ]);
    return (res.values || []).map(rowToMessage);
}
async function sqliteGetRooms() {
    const d = await getDb();
    const res = await d.query(`SELECT * FROM rooms ORDER BY lastMessageTimestamp DESC`);
    return (res.values || []).map(rowToRoom);
}
async function sqliteSaveRooms(rooms) {
    if (!rooms?.length) return;
    const d = await getDb();
    const validRooms = rooms.filter((r)=>r && r.id);
    if (!validRooms.length) return;
    const set = validRooms.map((r)=>({
            statement: `INSERT OR REPLACE INTO rooms
       (id,name,sender,preview,time,unread,unreadCount,lastMessageTimestamp,lastMessageId,
        lastRoomSeq,avatar,avatarUrl,isOnline,isMuted,isLocked,isPinned,isFavorite,isArchived,
        type,otherUserId,subject,isMe,countryCode)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            values: [
                Number(r.id),
                r.name ?? null,
                r.sender ?? null,
                r.preview ?? '',
                r.time ?? '',
                r.unread ? 1 : 0,
                Number(r.unreadCount) || 0,
                r.lastMessageTimestamp ? new Date(r.lastMessageTimestamp).toISOString() : null,
                r.lastMessageId ?? null,
                Number(r.lastRoomSeq) || 0,
                r.avatar ?? r.avatarUrl ?? null,
                r.avatarUrl ?? r.avatar ?? null,
                r.isOnline ? 1 : 0,
                r.isMuted ? 1 : 0,
                r.isLocked ? 1 : 0,
                r.isPinned ? 1 : 0,
                r.isFavorite ? 1 : 0,
                r.isArchived ? 1 : 0,
                r.type ?? 'direct',
                r.otherUserId ?? null,
                r.subject ?? null,
                r.isMe ? 1 : 0,
                r.countryCode ?? null
            ]
        }));
    await d.executeSet(set);
}
async function sqliteUpdateRoomPreview(roomId, preview, time, isMe = false) {
    const d = await getDb();
    await d.run(`UPDATE rooms SET preview=?, time=?, lastMessageTimestamp=? WHERE id=?`, [
        isMe ? `You: ${preview}` : preview,
        time,
        new Date().toISOString(),
        roomId
    ]);
}
async function sqliteEnqueueOutbox(item) {
    const d = await getDb();
    const queueId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    await d.run(`INSERT INTO outbox_queue (queueId,roomId,tempId,text,type,payload,status,retryCount,createdAt) VALUES (?,?,?,?,?,?,?,?,?)`, [
        queueId,
        item.roomId,
        String(item.tempId),
        item.text ?? null,
        item.type ?? 'text',
        item.payload ? JSON.stringify(item.payload) : null,
        'pending',
        0,
        new Date().toISOString()
    ]);
    return queueId;
}
async function sqliteGetPendingOutbox() {
    const d = await getDb();
    const res = await d.query(`SELECT * FROM outbox_queue WHERE status='pending' ORDER BY createdAt ASC`);
    return (res.values || []).map((r)=>({
            queueId: r.queueId,
            roomId: r.roomId,
            tempId: r.tempId,
            text: r.text,
            type: r.type,
            payload: parseJSON(r.payload),
            status: r.status,
            retryCount: r.retryCount,
            createdAt: r.createdAt
        }));
}
async function sqliteLockOutboxItem(queueId) {
    const d = await getDb();
    await d.run(`UPDATE outbox_queue SET status='sending' WHERE queueId=? AND status='pending'`, [
        queueId
    ]);
    const res = await d.query(`SELECT status FROM outbox_queue WHERE queueId=?`, [
        queueId
    ]);
    return res.values?.[0]?.status === 'sending';
}
async function sqliteDequeueOutbox(queueId) {
    const d = await getDb();
    await d.run(`DELETE FROM outbox_queue WHERE queueId=?`, [
        queueId
    ]);
}
async function sqliteIncrementOutboxRetry(queueId) {
    const d = await getDb();
    await d.run(`UPDATE outbox_queue SET status='pending', retryCount=retryCount+1 WHERE queueId=?`, [
        queueId
    ]);
}
async function sqliteGetSyncMeta(roomId) {
    const d = await getDb();
    const res = await d.query(`SELECT * FROM sync_meta WHERE roomId=?`, [
        roomId
    ]);
    if (!res.values?.length) return undefined;
    return {
        roomId: res.values[0].roomId,
        lastRoomSeq: res.values[0].lastRoomSeq,
        lastSyncedAt: res.values[0].lastSyncedAt
    };
}
async function sqliteSaveSyncMeta(roomId, lastRoomSeq) {
    const d = await getDb();
    await d.run(`INSERT OR REPLACE INTO sync_meta (roomId, lastRoomSeq, lastSyncedAt) VALUES (?,?,?)`, [
        roomId,
        lastRoomSeq,
        new Date().toISOString()
    ]);
}
async function sqliteGetGlobalSyncMeta(key = 'main') {
    const d = await getDb();
    const res = await d.query(`SELECT * FROM global_sync_meta WHERE key=?`, [
        key
    ]);
    if (!res.values?.length) return undefined;
    return {
        key: res.values[0].key,
        globalSeq: res.values[0].globalSeq,
        lastSyncedAt: res.values[0].lastSyncedAt
    };
}
async function sqliteSaveGlobalSyncMeta(globalSeq, key = 'main') {
    const d = await getDb();
    await d.run(`INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES (?,?,?)`, [
        key,
        globalSeq,
        new Date().toISOString()
    ]);
}
async function sqliteGetStatuses() {
    try {
        const d = await getDb();
        const res = await d.query(`SELECT key FROM global_sync_meta WHERE key='cached_statuses'`);
        if (!res.values?.length) return [];
        return parseJSON(res.values[0].key) || [];
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteGetStatuses error:', err);
        return [];
    }
}
async function sqliteSaveStatuses(statuses) {
    try {
        const d = await getDb();
        await d.run(`INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES ('cached_statuses',0,?)`, [
            new Date().toISOString()
        ]);
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteSaveStatuses error:', err);
    }
}
async function sqliteGetLocalEmails(emailKey, folder, limit = 50) {
    if (!emailKey) return [];
    try {
        const d = await getDb();
        const res = await d.query(`SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) ORDER BY date DESC LIMIT ?`, [
            emailKey,
            folder,
            limit
        ]);
        if (!res.values?.length) return [];
        const list = res.values.map((row)=>parseJSON(row.rawJson)).filter(Boolean);
        if (folder.toLowerCase() === 'drafts') {
            return list.filter((m)=>{
                const isLocal = String(m.uid).startsWith('draft_') || String(m.uid).startsWith('temp_');
                if (isLocal) return true;
                const sender = (m.sender || m.from || m.fromName || '').toLowerCase();
                return sender && (sender.includes(emailKey.toLowerCase()) || emailKey.toLowerCase().includes(sender));
            });
        }
        return list;
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteGetLocalEmails error:', err);
        return [];
    }
}
async function sqliteSaveLocalEmails(emailKey, folder, emails) {
    if (!emailKey) return;
    try {
        const d = await getDb();
        if (!emails || emails.length === 0) {
            await d.run(`DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?)`, [
                emailKey,
                folder
            ]);
            return;
        }
        // Delete local rows for this emailKey & folder that are not in the new emails list,
        // preserving only offline unsaved drafts/temp messages
        const validUids = emails.map((e)=>String(e.uid)).filter(Boolean);
        if (validUids.length > 0) {
            const placeholders = validUids.map(()=>'?').join(',');
            await d.run(`DELETE FROM local_emails 
         WHERE LOWER(emailKey) = LOWER(?) 
           AND LOWER(folder) = LOWER(?) 
           AND uid NOT IN (${placeholders})
           AND uid NOT LIKE 'draft_%'
           AND uid NOT LIKE 'temp_%'`, [
                emailKey,
                folder,
                ...validUids
            ]);
        }
        for (const email of emails){
            if (!email || !email.uid) continue;
            const uid = String(email.uid);
            const isRead = email.isRead ? 1 : 0;
            const isStarred = email.isStarred ? 1 : 0;
            const hasAttachments = email.hasAttachments || email.attachments?.length ? 1 : 0;
            const date = email.date || new Date().toISOString();
            const rawJson = JSON.stringify(email);
            await d.run(`INSERT OR REPLACE INTO local_emails (
          uid, emailKey, folder, fromVal, fromName, toVal, subject,
          bodyText, bodyHtml, date, snippet, category, isRead, isStarred,
          hasAttachments, attachments, status, rawJson
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                uid,
                emailKey.toLowerCase(),
                folder.toLowerCase(),
                email.from || '',
                email.fromName || '',
                Array.isArray(email.to) ? email.to.join(', ') : email.to || '',
                email.subject || '',
                email.bodyText || '',
                email.bodyHtml || '',
                date,
                email.snippet || '',
                email.category || 'Primary',
                isRead,
                isStarred,
                hasAttachments,
                email.attachments ? JSON.stringify(email.attachments) : null,
                email.status || '',
                rawJson
            ]);
        }
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteSaveLocalEmails error:', err);
    }
}
async function sqliteSaveSingleEmail(emailKey, folder, email) {
    return sqliteSaveLocalEmails(emailKey, folder, [
        email
    ]);
}
async function sqliteDeleteLocalEmail(emailKey, folder, uid) {
    if (!emailKey) return;
    try {
        const d = await getDb();
        await d.run(`DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND (LOWER(folder) = LOWER(?) OR uid = ?)`, [
            emailKey,
            folder,
            String(uid)
        ]);
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteDeleteLocalEmail error:', err);
    }
}
async function sqliteDeleteMultipleLocalEmails(emailKey, folder, uids) {
    if (!emailKey || !uids || uids.length === 0) return;
    try {
        const d = await getDb();
        const placeholders = uids.map(()=>'?').join(',');
        const params = [
            emailKey,
            ...uids.map((u)=>String(u))
        ];
        await d.run(`DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND uid IN (${placeholders})`, params);
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteDeleteMultipleLocalEmails error:', err);
    }
}
async function sqliteUpdateEmailFlags(emailKey, folder, uid, updates) {
    if (!emailKey) return;
    try {
        const d = await getDb();
        const res = await d.query(`SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?`, [
            emailKey,
            folder,
            String(uid)
        ]);
        if (res.values?.length) {
            const email = parseJSON(res.values[0].rawJson);
            if (email) {
                if (typeof updates.isRead === 'boolean') email.isRead = updates.isRead;
                if (typeof updates.isStarred === 'boolean') email.isStarred = updates.isStarred;
                const newRaw = JSON.stringify(email);
                await d.run(`UPDATE local_emails SET rawJson = ?, isRead = COALESCE(?, isRead), isStarred = COALESCE(?, isStarred) WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?`, [
                    newRaw,
                    typeof updates.isRead === 'boolean' ? updates.isRead ? 1 : 0 : null,
                    typeof updates.isStarred === 'boolean' ? updates.isStarred ? 1 : 0 : null,
                    emailKey,
                    folder,
                    String(uid)
                ]);
            }
        }
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteUpdateEmailFlags error:', err);
    }
}
async function sqliteGetMailStats(emailKey) {
    if (!emailKey) return null;
    try {
        const d = await getDb();
        const res = await d.query(`SELECT stats FROM local_mail_stats WHERE LOWER(emailKey) = LOWER(?)`, [
            emailKey
        ]);
        if (!res.values?.length) return null;
        return parseJSON(res.values[0].stats);
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteGetMailStats error:', err);
        return null;
    }
}
async function sqliteSaveMailStats(emailKey, stats) {
    if (!emailKey) return;
    try {
        const d = await getDb();
        await d.run(`INSERT OR REPLACE INTO local_mail_stats (emailKey, stats, updatedAt) VALUES (?, ?, ?)`, [
            emailKey.toLowerCase(),
            JSON.stringify(stats),
            new Date().toISOString()
        ]);
    } catch (err) {
        console.warn('[SQLiteAdapter] sqliteSaveMailStats error:', err);
    }
}
// ─────────────────────────────────────────────────────────────
// ROW MAPPERS
// ─────────────────────────────────────────────────────────────
function rowToMessage(r) {
    return {
        id: r.id,
        roomId: r.roomId,
        senderId: r.senderId,
        senderName: r.senderName,
        from: r.fromVal || r.from || 'them',
        text: r.text || '',
        type: r.type || 'text',
        data: parseJSON(r.data),
        status: r.status || 'sent',
        time: r.time || '',
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        isDeleted: !!r.isDeleted,
        version: r.version ?? 1,
        roomSeq: r.roomSeq ?? 0,
        globalSeq: r.globalSeq ?? 0,
        replyTo: parseJSON(r.replyTo),
        replyToText: r.replyToText,
        replyToSender: r.replyToSender,
        linkPreview: parseJSON(r.linkPreview),
        clientMessageId: r.clientMessageId
    };
}
function rowToRoom(r) {
    return {
        id: r.id,
        name: r.name,
        sender: r.sender,
        preview: r.preview,
        time: r.time,
        unread: !!r.unread,
        unreadCount: r.unreadCount,
        lastMessageTimestamp: r.lastMessageTimestamp,
        lastMessageId: r.lastMessageId,
        lastRoomSeq: r.lastRoomSeq,
        avatar: r.avatar,
        avatarUrl: r.avatarUrl,
        isOnline: false,
        isMuted: !!r.isMuted,
        isLocked: !!r.isLocked,
        isPinned: !!r.isPinned,
        isFavorite: !!r.isFavorite,
        isArchived: !!r.isArchived,
        type: r.type,
        otherUserId: r.otherUserId,
        subject: r.subject,
        isMe: !!r.isMe,
        countryCode: r.countryCode
    };
}
}),
"[project]/src/lib/db/storageAdapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * storageAdapter.ts
 * Cross-Platform Database Storage Adapter for PingDart Chat.
 * ─────────────────────────────────────────────────────────────
 *  Native iOS / Android  →  SQLite  (@capacitor-community/sqlite)
 *  Web / PWA / Electron  →  IndexedDB  (localChatDb v3)
 *
 * Both adapters expose the exact same function signatures — consumers
 * never need to know which backend is active.
 */ // ── IndexedDB adapter (always importable, tree-shaken on native) ──
__turbopack_context__.s([
    "StorageAdapter",
    ()=>StorageAdapter,
    "storageAdapter",
    ()=>storageAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)");
// ── SQLite adapter (only executed on native, lazy-imported) ──────
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/sqliteAdapter.ts [app-ssr] (ecmascript)");
;
;
class StorageAdapter {
    isNative;
    constructor(){
        this.isNative = false;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        console.log(`[StorageAdapter] Backend: ${this.isNative ? '🗄 SQLite (native)' : '📦 IndexedDB (web)'}`);
    }
    // ── 1. MESSAGES ────────────────────────────────────────────────
    getMessages(roomId, beforeTimestamp, limit = 30) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetMessages"])(roomId, beforeTimestamp, limit) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalMessages"])(roomId, beforeTimestamp, limit);
    }
    saveMessage(roomId, msg) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveMessage"])(roomId, msg) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessage"])(roomId, msg);
    }
    saveMessages(roomId, messages) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveMessages"])(roomId, messages) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessages"])(roomId, messages);
    }
    reconcileMessage(roomId, tempId, serverId, status = 'sent') {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteReconcileMessageId"])(roomId, tempId, serverId, status) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reconcileMessageId"])(roomId, tempId, serverId, status);
    }
    updateMessageStatus(messageId, status) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteUpdateMessageStatus"])(messageId, status) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"])(messageId, status);
    }
    deleteMessage(messageId, scope = 'all') {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteDeleteMessage"])(messageId, scope) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteLocalMessage"])(messageId, scope);
    }
    searchMessages(query, roomId, limit = 50) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSearchMessages"])(query, roomId, limit) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchLocalMessages"])(query, roomId, limit);
    }
    // ── 2. ROOMS ───────────────────────────────────────────────────
    getRooms() {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetRooms"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalRooms"])();
    }
    saveRooms(rooms) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveRooms"])(rooms) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalRooms"])(rooms);
    }
    updateRoomPreview(roomId, preview, time, isMe = false) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteUpdateRoomPreview"])(roomId, preview, time, isMe) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"])(roomId, preview, time, isMe);
    }
    // ── 3. OUTBOX QUEUE ────────────────────────────────────────────
    enqueueOutbox(item) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteEnqueueOutbox"])(item) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enqueueOutbox"])(item);
    }
    getPendingOutbox() {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetPendingOutbox"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPendingOutbox"])();
    }
    lockOutboxItem(queueId) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteLockOutboxItem"])(queueId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lockOutboxItem"])(queueId);
    }
    dequeueOutbox(queueId) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteDequeueOutbox"])(queueId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequeueOutbox"])(queueId);
    }
    incrementOutboxRetry(queueId) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteIncrementOutboxRetry"])(queueId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementOutboxRetry"])(queueId);
    }
    // ── 4. SYNC META ───────────────────────────────────────────────
    getSyncMeta(roomId) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetSyncMeta"])(roomId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSyncMeta"])(roomId);
    }
    saveSyncMeta(roomId, lastRoomSeq) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveSyncMeta"])(roomId, lastRoomSeq) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSyncMeta"])(roomId, lastRoomSeq);
    }
    getGlobalSyncMeta(key = 'main') {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetGlobalSyncMeta"])(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalSyncMeta"])(key);
    }
    saveGlobalSyncMeta(globalSeq, key = 'main') {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveGlobalSyncMeta"])(globalSeq, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveGlobalSyncMeta"])(globalSeq, key);
    }
    getStatuses() {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetStatuses"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalStatuses"])();
    }
    saveStatuses(statuses) {
        return this.isNative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveStatuses"])(statuses) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalStatuses"])(statuses);
    }
    // ── 5. LOCAL EMAILS & LIVE SYNC ───────────────────────────────
    async getEmails(emailKey, folder, limit = 50) {
        if (!emailKey) return [];
        if (this.isNative) {
            const sqliteResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetLocalEmails"])(emailKey, folder, limit);
            if (sqliteResults && sqliteResults.length > 0) {
                return sqliteResults;
            }
            return webGetEmails(emailKey, folder, limit);
        }
        return webGetEmails(emailKey, folder, limit);
    }
    async saveEmails(emailKey, folder, emails) {
        if (!emailKey) return;
        webSaveEmails(emailKey, folder, emails).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveLocalEmails"])(emailKey, folder, emails);
        }
    }
    async saveSingleEmail(emailKey, folder, email) {
        if (!emailKey || !email) return;
        webSaveSingleEmail(emailKey, folder, email).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveSingleEmail"])(emailKey, folder, email);
        }
    }
    async deleteEmail(emailKey, folder, uid) {
        if (!emailKey) return;
        webDeleteEmail(emailKey, folder, uid).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteDeleteLocalEmail"])(emailKey, folder, uid);
        }
    }
    async deleteMultipleEmails(emailKey, folder, uids) {
        if (!emailKey || !uids || uids.length === 0) return;
        webDeleteMultipleEmails(emailKey, folder, uids).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteDeleteMultipleLocalEmails"])(emailKey, folder, uids);
        }
    }
    async updateEmailFlags(emailKey, folder, uid, updates) {
        if (!emailKey) return;
        webUpdateEmailFlags(emailKey, folder, uid, updates).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteUpdateEmailFlags"])(emailKey, folder, uid, updates);
        }
    }
    async getMailStats(emailKey) {
        if (!emailKey) return null;
        if (this.isNative) {
            const sqliteStats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteGetMailStats"])(emailKey);
            if (sqliteStats) return sqliteStats;
        }
        return webGetMailStats(emailKey);
    }
    async saveMailStats(emailKey, stats) {
        if (!emailKey) return;
        webSaveMailStats(emailKey, stats).catch(()=>{});
        if (this.isNative) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$sqliteAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqliteSaveMailStats"])(emailKey, stats);
        }
    }
}
// ── Web / Synchronous Fallbacks for Emails ─────────────────────────
async function webGetEmails(emailKey, folder, limit = 50) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
async function webSaveEmails(emailKey, folder, emails) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function webSaveSingleEmail(emailKey, folder, email) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function webDeleteEmail(emailKey, folder, uid) {
    return webDeleteMultipleEmails(emailKey, folder, [
        uid
    ]);
}
async function webDeleteMultipleEmails(emailKey, folder, uids) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function webUpdateEmailFlags(emailKey, folder, uid, updates) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function webGetMailStats(emailKey) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
async function webSaveMailStats(emailKey, stats) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const storageAdapter = new StorageAdapter();
}),
"[project]/src/lib/cache/pingdartStartupEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pingdartStartupEngine",
    ()=>pingdartStartupEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/storageAdapter.ts [app-ssr] (ecmascript)");
"use client";
;
;
const STORAGE_KEYS = {
    LAST_NAV: "pingdart_last_nav",
    LAST_MSG_ID: "pingdart_last_msg_id",
    LAST_MAIL_ID: "pingdart_last_mail_id",
    USER_PROFILE: "user",
    PREFETCH_ROOMS: "prefetch_chat_rooms",
    PREFETCH_INBOX: "prefetch_inbox",
    PREFETCH_NOTIFS: "prefetch_notifications"
};
const pingdartStartupEngine = {
    /**
   * Record high-precision performance markers for startup profiling
   */ mark (name) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    },
    /**
   * Save active route & view state to persistent local storage
   */ saveLastState (nav, extra) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    },
    /**
   * Restore last active tab route.
   * NOTE: Tabs that are ephemeral/media (e.g. "Reels") are intentionally NOT
   * restored on cold startup — the user always lands on Chats in that case.
   * This matches WhatsApp / Telegram behaviour.
   */ restoreLastNav (fallbackNav = "Chats") {
        if ("TURBOPACK compile-time truthy", 1) return fallbackNav;
        //TURBOPACK unreachable
        ;
        // Tabs that should never be auto-restored on app open
        const EPHEMERAL_TABS = undefined;
    },
    /**
   * Restore last selected room ID
   */ restoreLastSelectedMsgId () {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
    },
    /**
   * Restore last selected email ID
   */ restoreLastSelectedMailId () {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
    },
    /**
   * Synchronously load cached startup data (user, rooms, inbox) with 0ms delay
   */ getStartupCache () {
        let user = null;
        let rooms = [];
        let inbox = [];
        let unreadTotal = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            lastNav: this.restoreLastNav(),
            selectedMsgId: this.restoreLastSelectedMsgId(),
            selectedMailId: this.restoreLastSelectedMailId(),
            user,
            rooms,
            inbox,
            unreadTotal
        };
    },
    /**
   * Asynchronously load rooms from Native SQLite or IndexedDB storageAdapter
   */ async loadLocalRoomsAsync () {
        try {
            const localRooms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageAdapter"].getRooms();
            if (localRooms && localRooms.length > 0) return localRooms;
        } catch  {}
        return [];
    },
    /**
   * Last Sync Timestamp for incremental delta sync
   */ getLastSyncTimestamp () {
        if ("TURBOPACK compile-time truthy", 1) return 0;
        //TURBOPACK unreachable
        ;
    },
    /**
   * Background Sync Engine: Incremental delta sync from backend & saves to SQLite / IndexedDB silently
   */ async triggerBackgroundSync (onUpdate) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
};
}),
"[project]/src/app/user/hooks/useNavigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserNavigationProvider",
    ()=>UserNavigationProvider,
    "useNavigation",
    ()=>useNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$pingdartStartupEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/pingdartStartupEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useNavigationStackStore.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function useNavigationState({ onClearUnread } = {}) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const tabParam = searchParams.get("tab");
    const msgIdParam = searchParams.get("msgId");
    const mailIdParam = searchParams.get("mailId");
    const userIdParam = searchParams.get("userId");
    const roomCodeParam = searchParams.get("roomCode") || searchParams.get("code");
    const initialNav = roomCodeParam || tabParam && tabParam.toLowerCase() === 'live' ? "Live" : tabParam || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$pingdartStartupEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pingdartStartupEngine"].restoreLastNav("Chats");
    const [activeNav, setActiveNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialNav);
    const [navHistory, setNavHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const navHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    navHistoryRef.current = navHistory;
    const [selectedMsgId, setSelectedMsgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMsgId"])(msgIdParam) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$pingdartStartupEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pingdartStartupEngine"].restoreLastSelectedMsgId());
    const [unlockedChatId, setUnlockedChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unlockError, setUnlockError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCompleteProfile, setShowCompleteProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activeNav);
    const selectedMsgIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selectedMsgId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        activeNavRef.current = activeNav;
    }, [
        activeNav
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectedMsgIdRef.current = selectedMsgId;
    }, [
        selectedMsgId
    ]);
    // Sync activeNav with URL search params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tabParam) {
            if (tabParam.toLowerCase() === "live") {
                setActiveNav("Live");
            } else {
                setActiveNav(tabParam);
            }
            if (tabParam !== 'Mail' && searchParams.get("mailId")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                    mailId: null
                });
            }
        } else if (searchParams.get("roomCode") || searchParams.get("code")) {
            setActiveNav("Live");
        }
    }, [
        tabParam,
        searchParams
    ]);
    // Sync selectedMsgId with URL search params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (msgIdParam) {
            setSelectedMsgId((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMsgId"])(msgIdParam));
        } else {
            setSelectedMsgId(null);
        }
    }, [
        msgIdParam
    ]);
    // Ensure ?tab= parameter in URL on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Listen to native Android notification click events & deep links
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleOpenChat = undefined;
        const handleDeepLink = undefined;
    }, [
        router
    ]);
    // Synchronize active conversation room with PresenceLifecycleManager
    // Suppresses mobile/desktop push notifications for this room while actively viewing it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-ssr] (ecmascript, async loader)").then(({ presenceLifecycleManager })=>{
            if (selectedMsgId) {
                presenceLifecycleManager.focusRoom(selectedMsgId);
            } else {
                presenceLifecycleManager.blurRoom();
            }
        });
    }, [
        selectedMsgId
    ]);
    /**
   * handleNavChange
   */ const handleNavChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nav, reelId, isBackNavigation = false, targetUserId, targetCommunityId)=>{
        if (activeNavRef.current === nav && !selectedMsgIdRef.current && !targetUserId && !targetCommunityId) {
            return;
        }
        if (!isBackNavigation && activeNavRef.current && activeNavRef.current !== nav) {
            setNavHistory((prev)=>{
                if (prev.length > 0 && prev[prev.length - 1] === activeNavRef.current) {
                    return prev;
                }
                return [
                    ...prev,
                    activeNavRef.current
                ];
            });
            // Push the current screen into the global navigation stack BEFORE navigating.
            // This gives us true step-by-step back: A → B → C means stack = [A, B] so
            // C.back() = B, B.back() = A. Guard with isBackNavigating to prevent back
            // navigation from re-adding the current screen and creating A→B→A→B loops.
            const stackStore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        setActiveNav(nav);
        setSelectedMsgId(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$pingdartStartupEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pingdartStartupEngine"].saveLastState(nav, {
            selectedMsgId: null,
            selectedMailId: null
        });
        setUnlockedChatId(null);
        setUnlockError("");
        const urlUpdates = {
            tab: nav
        };
        if (targetUserId) {
            urlUpdates.userId = String(targetUserId);
        }
        if (targetCommunityId) {
            urlUpdates.communityId = String(targetCommunityId);
        }
        if (nav === "Reels") {
            urlUpdates.play = "true";
            if (reelId !== undefined && reelId !== null) {
                urlUpdates.reelId = String(reelId);
            }
        }
        // When switching top-level navigation tabs, replace the entire search string
        // so parameters from previous tabs (e.g. crm_tab=team, subtab=mailsettings, section=currency)
        // do not leak into the destination tab.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])(urlUpdates, true);
    }, []);
    /**
   * handleMsgSelect
   */ const handleMsgSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        // Push the current screen into the stack BEFORE navigating into a chat.
        // This ensures: Chats → Chat A → back → Chats (not skip to root).
        // Guard with isBackNavigating to prevent closing a chat from re-adding itself.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setSelectedMsgId(id);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$pingdartStartupEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pingdartStartupEngine"].saveLastState(activeNavRef.current || activeNav, {
            selectedMsgId: id
        });
        setUnlockedChatId(null);
        setUnlockError("");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            tab: activeNavRef.current || activeNav,
            msgId: id
        });
        if (id) {
            if (onClearUnread) {
                onClearUnread(id);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(Number(id)).catch(()=>{});
        }
    }, [
        activeNav,
        onClearUnread
    ]);
    /**
   * handleGoBack
   */ const handleGoBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // 1. If a chat detail or modal is open in mobile, close it first
        if (selectedMsgIdRef.current) {
            handleMsgSelect(null);
            return;
        }
        // 2. Pop from global navigation history stack
        const stackStore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState();
        const prev = stackStore.popEntry();
        if (prev) {
            stackStore.setIsBackNavigating(true);
            if (prev.tab && prev.tab !== activeNavRef.current) {
                handleNavChange(prev.tab, undefined, true);
            } else if (prev.url) {
                router.replace(prev.url);
            }
            setTimeout(()=>stackStore.setIsBackNavigating(false), 150);
            return;
        }
        // 3. Try browser history as fallback (works for router.push() deep links)
        if ("undefined" !== "undefined" && window.history.length > 1) //TURBOPACK unreachable
        ;
        // 4. Final fallback: if not on Chats or Home, go to Chats
        if (activeNavRef.current !== "Chats" && activeNavRef.current !== "Home") {
            handleNavChange("Chats", undefined, true);
        }
    }, [
        handleMsgSelect,
        handleNavChange,
        router
    ]);
    // Listen to profile open event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOpenProfile = (e)=>{
            const { userId, communityId } = e.detail || {};
            handleMsgSelect(null);
            handleNavChange("Profile", undefined, false, userId, communityId);
        };
        window.addEventListener('app:open_profile', handleOpenProfile);
        return ()=>window.removeEventListener('app:open_profile', handleOpenProfile);
    }, [
        handleMsgSelect,
        handleNavChange
    ]);
    // Listen to tab navigation events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleNavigateTab = (e)=>{
            if (e.detail?.tab) {
                handleNavChange(e.detail.tab);
            }
        };
        window.addEventListener('app:navigate_tab', handleNavigateTab);
        return ()=>window.removeEventListener('app:navigate_tab', handleNavigateTab);
    }, [
        handleNavChange
    ]);
    const handleOpenCompleteProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowCompleteProfile(true);
    }, []);
    const isDetailView = !!selectedMsgId || !!mailIdParam || !!userIdParam || searchParams.get("compose") === "true";
    return {
        activeNav,
        setActiveNav,
        activeNavRef,
        selectedMsgId,
        setSelectedMsgId,
        selectedMsgIdRef,
        unlockedChatId,
        setUnlockedChatId,
        unlockError,
        setUnlockError,
        showCompleteProfile,
        setShowCompleteProfile,
        isDetailView,
        searchParams,
        handleNavChange,
        handleMsgSelect,
        handleGoBack,
        handleOpenCompleteProfile
    };
}
const UserNavigationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function UserNavigationProvider({ children }) {
    const value = useNavigationState();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserNavigationContext.Provider, {
        value
    }, children);
}
function useNavigation({ onClearUnread } = {}) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(UserNavigationContext);
    if (context) {
        return context;
    }
    return useNavigationState({
        onClearUnread
    });
}
}),
"[project]/src/app/user/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLockGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppLockGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$navigation$2f$SidebarList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/navigation/SidebarList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$navigation$2f$BottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/navigation/BottomNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$OfflineStatusBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/OfflineStatusBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useNavigation.ts [app-ssr] (ecmascript)");
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
function UserLayoutContent({ children }) {
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const { activeNav, handleNavChange, isDetailView, selectedMsgId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const [isFaceScannerActive, setIsFaceScannerActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNavHidden, setIsNavHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScannerState = (e)=>{
            setIsFaceScannerActive(Boolean(e.detail?.isOpen));
        };
        const handleHideNav = (e)=>{
            setIsNavHidden(Boolean(e.detail?.hide));
        };
        window.addEventListener("app:face_scanner_state", handleScannerState);
        window.addEventListener("app:hide_bottom_nav", handleHideNav);
        return ()=>{
            window.removeEventListener("app:face_scanner_state", handleScannerState);
            window.removeEventListener("app:hide_bottom_nav", handleHideNav);
        };
    }, []);
    const isComposeOrMailInUrl = "undefined" !== "undefined" && (window.location.search.includes("compose=true") || window.location.search.includes("mailId="));
    const isLiveRoomInUrl = "undefined" !== "undefined" && (window.location.search.includes("roomId=") || window.location.search.includes("roomCode="));
    const isHideBottomBarView = isNavHidden || isDetailView || isFaceScannerActive || isComposeOrMailInUrl || isLiveRoomInUrl || activeNav === "Channels" && Boolean(selectedMsgId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-[100dvh] w-full flex overflow-hidden relative ${!isHideBottomBarView && activeNav !== "Linked Devices" && activeNav !== "AiBot" && activeNav !== "Reels" ? "pb-[70px]" : ""} md:pb-0 ${isNative ? "bg-white dark:bg-[#0b141a]" : "bg-[#dfe5e7] dark:bg-[#0b141a]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$OfflineStatusBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OfflineStatusBanner"], {}, void 0, false, {
                fileName: "[project]/src/app/user/layout.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            !isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$navigation$2f$SidebarList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarList"], {
                activeNav: activeNav,
                onNavChange: handleNavChange
            }, void 0, false, {
                fileName: "[project]/src/app/user/layout.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-full min-w-0 flex overflow-hidden relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/user/layout.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$navigation$2f$BottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNav"], {
                activeNav: activeNav,
                onNavChange: handleNavChange,
                isDetailView: isDetailView
            }, void 0, false, {
                fileName: "[project]/src/app/user/layout.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/layout.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function UserLayout({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedRoute"], {
        allowedRoles: [
            "user",
            "tenantadmin",
            "domainadmin",
            "superadmin"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppLockGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLockGuard"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[100dvh] w-full bg-background"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/layout.tsx",
                    lineNumber: 95,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserNavigationProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserLayoutContent, {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/layout.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/layout.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/layout.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/layout.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/layout.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6beeaa7._.js.map