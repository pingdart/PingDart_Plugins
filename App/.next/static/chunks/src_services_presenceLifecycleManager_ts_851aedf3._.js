(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
;
class PresenceLifecycleManager {
    /**
   * Initialize lifecycle monitoring with the active socket instance.
   */ init(socketInstance) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.socket = socketInstance;
        this.abortController = new AbortController();
        if (!this.isInitialized) {
            this.isInitialized = true;
            this.setupMultiTabCoordination();
            this.setupWebLifecycle();
            this.setupIdleDetection();
            this.setupMobileLifecycle();
        }
        this.startHeartbeat();
        // Re-synchronize state whenever socket reconnects
        this.socket.on("connect", ()=>{
            this.emitState(this.currentState, true);
            if (this.activeRoomId && this.socket) {
                this.socket.emit("presence:focus_room", {
                    roomId: this.activeRoomId
                });
            }
        });
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
        const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() : "web";
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
            if (!this.isLeaderTab && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
            if (!this.socket || !this.socket.connected) return;
            const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() : "web";
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
        var _locks;
        if ("object" === "undefined" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            this.isLeaderTab = true;
            return;
        }
        try {
            if (typeof window.BroadcastChannel !== "undefined") {
                this.broadcastChannel = new BroadcastChannel("pingdart_presence_channel");
                this.broadcastChannel.onmessage = (event)=>{
                    var _event_data, _event_data1;
                    if (((_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.type) === "presence_state_change" && ((_event_data1 = event.data) === null || _event_data1 === void 0 ? void 0 : _event_data1.state)) {
                        // When another tab becomes actively online, sync this tab's state
                        if (event.data.state === "online" && this.currentState === "away") {
                            this.currentState = "online";
                            this.resetIdleTimer();
                        }
                    }
                };
            }
        } catch (_) {}
        // Web Locks API: zero split-brain leader tab election
        if (typeof navigator !== "undefined" && "locks" in navigator && typeof ((_locks = navigator.locks) === null || _locks === void 0 ? void 0 : _locks.request) === "function") {
            this.isLeaderTab = false; // default until lock is acquired
            navigator.locks.request("pingdart_presence_leader", async ()=>{
                this.isLeaderTab = true;
                // Keep lock until window is closed
                await new Promise((resolve)=>{
                    window.addEventListener("beforeunload", ()=>resolve(), {
                        once: true
                    });
                });
            }).catch(()=>{
                this.isLeaderTab = true;
            });
        } else {
            this.isLeaderTab = true;
        }
    }
    /**
   * 5-Minute Idle Detection
   */ setupIdleDetection() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const onUserInteraction = ()=>{
            const now = Date.now();
            // Throttle interaction checks to once every 2 seconds
            if (now - this.lastActivityTime < 2000) return;
            this.lastActivityTime = now;
            // If user was away due to idle, instantly restore online state
            if (this.currentState === "away" && !document.hidden) {
                this.transitionTo("online");
            }
            this.resetIdleTimer();
        };
        const options = {
            passive: true
        };
        window.addEventListener("mousemove", onUserInteraction, options);
        window.addEventListener("mousedown", onUserInteraction, options);
        window.addEventListener("keydown", onUserInteraction, options);
        window.addEventListener("touchstart", onUserInteraction, options);
        window.addEventListener("scroll", onUserInteraction, options);
        this.resetIdleTimer();
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Document Visibility Change (Tab switch / minimize)
        document.addEventListener("visibilitychange", ()=>{
            if (document.hidden) {
                if (this.hiddenTimer) clearTimeout(this.hiddenTimer);
                this.hiddenTimer = setTimeout(()=>{
                    this.transitionTo("away");
                }, 3000);
            } else {
                if (this.hiddenTimer) {
                    clearTimeout(this.hiddenTimer);
                    this.hiddenTimer = null;
                }
                this.resetIdleTimer();
                this.transitionTo("online");
            }
        });
        // Window Focus / Blur
        window.addEventListener("focus", ()=>{
            if (this.hiddenTimer) {
                clearTimeout(this.hiddenTimer);
                this.hiddenTimer = null;
            }
            this.resetIdleTimer();
            this.transitionTo("online");
        });
        window.addEventListener("blur", ()=>{
            // Don't immediately mark away on blur, start idle countdown unless tab is hidden
            if (document.hidden) {
                if (this.hiddenTimer) clearTimeout(this.hiddenTimer);
                this.hiddenTimer = setTimeout(()=>{
                    this.transitionTo("away");
                }, 3000);
            }
        });
        // Network Connectivity
        window.addEventListener("online", ()=>{
            this.transitionTo("online");
        });
        window.addEventListener("offline", ()=>{
            this.transitionTo("offline");
        });
        // Before Unload (graceful window close)
        window.addEventListener("beforeunload", ()=>{
            if (this.socket && this.socket.connected) {
                try {
                    this.socket.emit("user:app_closed");
                } catch (_) {}
            }
        });
    }
    /**
   * Capacitor Native Mobile Lifecycle (Android / iOS)
   */ setupMobileLifecycle() {
        if ("object" === "undefined" || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
        try {
            __turbopack_context__.A("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript, async loader)").then(({ App })=>{
                App.addListener("appStateChange", ({ isActive })=>{
                    if (isActive) {
                        this.resetIdleTimer();
                        this.transitionTo("online");
                    } else {
                        this.transitionTo("background");
                    }
                });
            }).catch(()=>{});
        } catch (_) {}
    }
    getDeviceId() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            let id = localStorage.getItem("pingdart_device_id");
            if (!id) {
                const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() : "web";
                id = `${platform}_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
                localStorage.setItem("pingdart_device_id", id);
            }
            return id;
        } catch (_) {
            return "web_unknown";
        }
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
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "socket", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentState", "online");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "previousState", "online");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isLeaderTab", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isInitialized", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inCall", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "activeRoomId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "heartbeatInterval", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "idleTimer", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastEmissionTime", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastActivityTime", Date.now());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pendingEmissionTimer", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hiddenTimer", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "broadcastChannel", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "abortController", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "HEARTBEAT_INTERVAL_MS", 10000); // 10s
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "IDLE_TIMEOUT_MS", 300000); // 5 minutes
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "EMISSION_RATE_LIMIT_MS", 1000); // 1s
    }
}
const presenceLifecycleManager = new PresenceLifecycleManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_services_presenceLifecycleManager_ts_851aedf3._.js.map