module.exports = [
"[project]/src/services/presenceLifecycleManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Presence Lifecycle Manager
 *
 * Enterprise client-side presence & lifecycle controller:
 * - Multi-Tab Leader Election via Web Locks API (navigator.locks) with BroadcastChannel fallback
 * - 5-Minute Idle Detection (mousemove, keydown, touchstart, scroll)
 * - Web Lifecycle (visibilitychange, focus, blur, online, offline, beforeunload)
 * - Mobile Capacitor Lifecycle (App.addListener('appStateChange'))
 * - Call Presence ('in_call' / 'busy' for audio/video calling)
 * - 10-Second Heartbeat Engine
 * - Token-bucket Rate Limiter (Max 1 presence update per second)
 */ __turbopack_context__.s([
    "presenceLifecycleManager",
    ()=>presenceLifecycleManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
class PresenceLifecycleManager {
    socket = null;
    currentState = "online";
    previousState = "online";
    isLeaderTab = true;
    isInitialized = false;
    inCall = false;
    activeRoomId = null;
    heartbeatInterval = null;
    idleTimer = null;
    lastEmissionTime = 0;
    lastActivityTime = Date.now();
    pendingEmissionTimer = null;
    hiddenTimer = null;
    broadcastChannel = null;
    abortController = null;
    HEARTBEAT_INTERVAL_MS = 10000;
    IDLE_TIMEOUT_MS = 300000;
    EMISSION_RATE_LIMIT_MS = 1000;
    /**
   * Initialize lifecycle monitoring with the active socket instance.
   */ init(socketInstance) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    /**
   * Set the currently active conversation room.
   * Suppresses push notifications for this room across the user's other devices.
   */ focusRoom(roomId) {
        const id = Number(roomId);
        if (!id || this.activeRoomId === id) return;
        this.activeRoomId = id;
        if (this.socket && this.socket.connected) {
            this.socket.emit("presence:focus_room", {
                roomId: id
            });
        }
    }
    /**
   * Clear active conversation room when navigating away.
   */ blurRoom() {
        if (!this.activeRoomId) return;
        this.activeRoomId = null;
        if (this.socket && this.socket.connected) {
            this.socket.emit("presence:blur_room");
        }
    }
    /**
   * Update active calling state (LiveKit audio/video calls)
   */ setInCall(inCall, mode = 'direct') {
        this.inCall = inCall;
        const callState = mode === 'group' ? 'in_call_group' : 'in_call_direct';
        const isCallState = (s)=>s === 'in_call' || s === 'in_call_direct' || s === 'in_call_group';
        if (inCall) {
            this.previousState = !isCallState(this.currentState) ? this.currentState : "online";
            this.transitionTo(callState);
        } else {
            const restore = !isCallState(this.previousState) ? this.previousState : "online";
            this.transitionTo(restore);
        }
    }
    getState() {
        return this.currentState;
    }
    /**
   * Transition state machine
   */ transitionTo(nextState) {
        if (this.currentState === nextState) return;
        const isCallState = (s)=>s === 'in_call' || s === 'in_call_direct' || s === 'in_call_group';
        // Never override active call status with idle/away
        if (this.inCall && !isCallState(nextState) && nextState !== "offline") {
            this.previousState = nextState;
            return;
        }
        this.currentState = nextState;
        this.emitState(nextState);
        // Notify other tabs via BroadcastChannel if available
        if (this.broadcastChannel) {
            try {
                this.broadcastChannel.postMessage({
                    type: "presence_state_change",
                    state: nextState
                });
            } catch (_) {}
        }
    }
    /**
   * Rate-limited presence emission to backend
   */ emitState(state, force = false) {
        if (!this.socket || !this.socket.connected) return;
        const now = Date.now();
        const elapsed = now - this.lastEmissionTime;
        if (!force && elapsed < this.EMISSION_RATE_LIMIT_MS) {
            if (this.pendingEmissionTimer) clearTimeout(this.pendingEmissionTimer);
            this.pendingEmissionTimer = setTimeout(()=>{
                this.emitState(state);
            }, this.EMISSION_RATE_LIMIT_MS - elapsed);
            return;
        }
        if (this.pendingEmissionTimer) {
            clearTimeout(this.pendingEmissionTimer);
            this.pendingEmissionTimer = null;
        }
        this.lastEmissionTime = now;
        const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() : "web";
        const deviceId = this.getDeviceId();
        this.socket.emit("user:presence_state", {
            state,
            deviceType: platform,
            deviceId
        });
    }
    /**
   * 10-Second Heartbeat Engine
   */ startHeartbeat() {
        if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = setInterval(()=>{
            // Only the leader tab (or native mobile app) sends heartbeats
            if (!this.isLeaderTab && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
            if (!this.socket || !this.socket.connected) return;
            const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() : "web";
            const deviceId = this.getDeviceId();
            this.socket.emit("user:heartbeat", {
                state: this.currentState,
                deviceType: platform,
                deviceId,
                timestamp: Date.now()
            });
        }, this.HEARTBEAT_INTERVAL_MS);
    }
    /**
   * Multi-Tab Leader Election
   * Uses Web Locks API (navigator.locks) with fallback to BroadcastChannel
   */ setupMultiTabCoordination() {
        if ("undefined" === "undefined" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            this.isLeaderTab = true;
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    /**
   * 5-Minute Idle Detection
   */ setupIdleDetection() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const onUserInteraction = undefined;
        const options = undefined;
    }
    resetIdleTimer() {
        if (this.idleTimer) clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(()=>{
            // 5 minutes without interaction -> Transition to away
            if (this.currentState === "online") {
                this.transitionTo("away");
            }
        }, this.IDLE_TIMEOUT_MS);
    }
    /**
   * Web Visibility & Focus/Blur Lifecycle
   */ setupWebLifecycle() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    /**
   * Capacitor Native Mobile Lifecycle (Android / iOS)
   */ setupMobileLifecycle() {
        if ("undefined" === "undefined" || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
        //TURBOPACK unreachable
        ;
    }
    getDeviceId() {
        if ("TURBOPACK compile-time truthy", 1) return "unknown";
        //TURBOPACK unreachable
        ;
    }
    /**
   * Cleanup lifecycle listeners on logout
   */ destroy() {
        if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
        if (this.idleTimer) clearTimeout(this.idleTimer);
        if (this.pendingEmissionTimer) clearTimeout(this.pendingEmissionTimer);
        if (this.broadcastChannel) {
            try {
                this.broadcastChannel.close();
            } catch (_) {}
        }
        this.isInitialized = false;
        this.socket = null;
    }
}
const presenceLifecycleManager = new PresenceLifecycleManager();
}),
];

//# sourceMappingURL=src_services_presenceLifecycleManager_ts_2580248b._.js.map