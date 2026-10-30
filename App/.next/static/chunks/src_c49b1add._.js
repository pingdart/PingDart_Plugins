(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/exploreApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * exploreApi.ts — Typed API service for Ping Explore Map Discovery
 */ __turbopack_context__.s([
    "exploreApi",
    ()=>exploreApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const exploreApi = {
    // Update user's ephemeral obfuscated location
    updateLocation: async (latitude, longitude)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/location/update', {
            latitude,
            longitude
        });
        return res.data;
    },
    // Discover nearby users
    getNearbyUsers: async (params = {})=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/explore/nearby', {
            params
        });
        return res.data;
    },
    // Send a connection request
    sendConnectionRequest: async (receiverId, message)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/request', {
            receiverId,
            message
        });
        return res.data;
    },
    // Respond to a connection request (accept/reject/block)
    respondConnectionRequest: async (requestId, action)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/respond', {
            requestId,
            action
        });
        return res.data;
    },
    // Get list of pending requests
    getConnectionRequests: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/explore/connection/requests');
        return res.data;
    },
    // Get user's explore settings
    getSettings: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/explore/settings');
        return res.data;
    },
    // Update user's explore settings
    updateSettings: async (settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put('/explore/settings', settings);
        return res.data;
    },
    // ── Face Match & People Discovery Endpoints ─────────────────
    getFaceStatus: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/explore/face/status');
        return res.data;
    },
    recordFaceConsent: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/face/consent', params);
        return res.data;
    },
    enrollFaceBiometric: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/face/enroll', params);
        return res.data;
    },
    matchFace: async (vector)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/explore/face/match', {
            vector
        });
        return res.data;
    },
    purgeFaceBiometrics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete('/explore/face/biometrics');
        return res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/faceLandmarkerService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            const vision = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript, async loader)");
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
                const vision = await __turbopack_context__.A("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/faceBiometrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("object" === "undefined" || !imageUrl) return null;
    try {
        const { getFaceLandmarker } = await __turbopack_context__.A("[project]/src/services/faceLandmarkerService.ts [app-client] (ecmascript, async loader)");
        const landmarker = await getFaceLandmarker();
        if (!landmarker) return null;
        const img = document.createElement("img");
        img.crossOrigin = "anonymous";
        await new Promise((resolve, reject)=>{
            img.onload = ()=>resolve();
            img.onerror = (e)=>reject(e);
            img.src = imageUrl;
        });
        const results = landmarker.detect(img);
        if (!results.faceLandmarks || results.faceLandmarks.length === 0) {
            return null;
        }
        return extractFaceBiometricVector(results.faceLandmarks[0]);
    } catch (err) {
        console.warn("[FaceBiometrics] extractFaceDescriptorFromImage note:", err);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceDiscoveryScannerModal",
    ()=>FaceDiscoveryScannerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserSearch01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Chat01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/exploreApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/faceLandmarkerService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/faceBiometrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
    var _profile_name;
    _s();
    const [loadFailed, setLoadFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [srcIndex, setSrcIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const candidateUrls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ProfileAvatar.useMemo[candidateUrls]": ()=>{
            const urls = [];
            // 1. Storage CDN URL (storage.pingdart.com)
            if (profile.storageAvatar) {
                urls.push(profile.storageAvatar);
            }
            // 2. Direct avatar with resolveMediaUrl
            if (profile.avatar) {
                const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(profile.avatar);
                if (resolved && !urls.includes(resolved)) urls.push(resolved);
                if (!urls.includes(profile.avatar)) urls.push(profile.avatar);
            }
            // 3. Raw avatar fallback
            if (profile.rawAvatar) {
                const resolvedRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(profile.rawAvatar);
                if (resolvedRaw && !urls.includes(resolvedRaw)) urls.push(resolvedRaw);
                if (!urls.includes(profile.rawAvatar)) urls.push(profile.rawAvatar);
            }
            return urls;
        }
    }["ProfileAvatar.useMemo[candidateUrls]"], [
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
    const initial = (((_profile_name = profile.name) === null || _profile_name === void 0 ? void 0 : _profile_name.trim().charAt(0)) || "U").toUpperCase();
    const dimensionClass = size === "lg" ? "w-20 h-20 text-2xl" : "w-16 h-16 text-xl";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${dimensionClass} rounded-full overflow-hidden border-2 ${profile.isSelf ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)]" : "border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)]"} bg-slate-900 flex items-center justify-center shrink-0`,
        children: [
            !loadFailed && currentSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: currentSrc,
                alt: "",
                className: "w-full h-full object-cover rounded-full select-none",
                onError: handleImageError
            }, void 0, false, {
                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center font-black bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white select-none",
                children: initial
            }, void 0, false, {
                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-black text-[9px] font-black uppercase tracking-wider flex items-center gap-0.5 shadow-lg ${profile.isSelf ? "bg-cyan-400" : "bg-emerald-400"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
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
_s(ProfileAvatar, "3zUU4NqO0W++ZNO9rJwdeKh5lBQ=");
_c = ProfileAvatar;
function FaceDiscoveryScannerModal({ isOpen, onClose, onOpenChat, mode = "discovery", onVectorCaptured, title, subtitle }) {
    _s1();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("checking_status");
    const [consentAudience, setConsentAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("public");
    const [isActivatingConsent, setIsActivatingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guidanceText, setGuidanceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Align face anywhere in camera view");
    const [isFaceDetected, setIsFaceDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detectedBox, setDetectedBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Multi-profile matched state
    const [matchedProfiles, setMatchedProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeCardIndex, setActiveCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sentRequests, setSentRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [connectingMap, setConnectingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cameraError, setCameraError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMobile && mode === "discovery" ? "environment" : "user");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lockProgress, setLockProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isProcessingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const consecutiveFaceCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const smoothedBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const missedFramesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastMatchAttemptTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Auto-dismiss transient error messages after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
            if (errorMessage) {
                const timer = setTimeout({
                    "FaceDiscoveryScannerModal.useEffect.timer": ()=>setErrorMessage(null)
                }["FaceDiscoveryScannerModal.useEffect.timer"], 5000);
                return ({
                    "FaceDiscoveryScannerModal.useEffect": ()=>clearTimeout(timer)
                })["FaceDiscoveryScannerModal.useEffect"];
            }
        }
    }["FaceDiscoveryScannerModal.useEffect"], [
        errorMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
            setMounted(true);
        }
    }["FaceDiscoveryScannerModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
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
            return ({
                "FaceDiscoveryScannerModal.useEffect": ()=>{
                    document.body.classList.remove("face-scanner-active");
                    document.documentElement.classList.remove("face-scanner-active");
                    window.dispatchEvent(new CustomEvent("app:face_scanner_state", {
                        detail: {
                            isOpen: false
                        }
                    }));
                }
            })["FaceDiscoveryScannerModal.useEffect"];
        }
    }["FaceDiscoveryScannerModal.useEffect"], [
        isOpen
    ]);
    const stopStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FaceDiscoveryScannerModal.useCallback[stopStream]": ()=>{
            if (streamRef.current) {
                streamRef.current.getTracks().forEach({
                    "FaceDiscoveryScannerModal.useCallback[stopStream]": (t)=>t.stop()
                }["FaceDiscoveryScannerModal.useCallback[stopStream]"]);
                streamRef.current = null;
            }
        }
    }["FaceDiscoveryScannerModal.useCallback[stopStream]"], []);
    // Safe camera initializer working across desktop webcams (720p/1080p) and mobile back/front cameras
    const startCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FaceDiscoveryScannerModal.useCallback[startCamera]": async (customFacing)=>{
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
                    videoRef.current.play().catch({
                        "FaceDiscoveryScannerModal.useCallback[startCamera]": ()=>{}
                    }["FaceDiscoveryScannerModal.useCallback[startCamera]"]);
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
                        videoRef.current.play().catch({
                            "FaceDiscoveryScannerModal.useCallback[startCamera]": ()=>{}
                        }["FaceDiscoveryScannerModal.useCallback[startCamera]"]);
                    }
                } catch (finalErr) {
                    console.error("[FaceScanner] Fallback camera failed:", finalErr);
                    setCameraError("Camera access denied or unavailable. Please grant camera permission in your browser.");
                }
            }
        }
    }["FaceDiscoveryScannerModal.useCallback[startCamera]"], [
        facingMode,
        stopStream
    ]);
    // Keep video element attached to stream whenever stage or DOM updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
            if (videoRef.current && streamRef.current && videoRef.current.srcObject !== streamRef.current) {
                videoRef.current.srcObject = streamRef.current;
                videoRef.current.play().catch({
                    "FaceDiscoveryScannerModal.useEffect": ()=>{}
                }["FaceDiscoveryScannerModal.useEffect"]);
            }
        }
    }["FaceDiscoveryScannerModal.useEffect"]);
    const toggleFlipCamera = ()=>{
        const next = facingMode === "user" ? "environment" : "user";
        setFacingMode(next);
        startCamera(next);
    };
    // Reset back to viewfinder for scanning another face
    const resetToScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FaceDiscoveryScannerModal.useCallback[resetToScanner]": ()=>{
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
        }
    }["FaceDiscoveryScannerModal.useCallback[resetToScanner]"], []);
    // Check enrollment & reciprocal status on open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
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
                return ({
                    "FaceDiscoveryScannerModal.useEffect": ()=>{
                        stopStream();
                    }
                })["FaceDiscoveryScannerModal.useEffect"];
            }
            let isMounted = true;
            async function checkStatus() {
                try {
                    var _res_data;
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].getFaceStatus();
                    if (!isMounted) return;
                    if (!((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.isEnabled)) {
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
            return ({
                "FaceDiscoveryScannerModal.useEffect": ()=>{
                    isMounted = false;
                    stopStream();
                }
            })["FaceDiscoveryScannerModal.useEffect"];
        }
    }["FaceDiscoveryScannerModal.useEffect"], [
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].recordFaceConsent({
                consentAgreed: true,
                discoveryAudience: consentAudience
            });
            setStage("viewfinder");
            await startCamera();
        } catch (err) {
            var _err_response_data, _err_response;
            setErrorMessage((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to activate Face Discovery.");
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
            const matchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].matchFace(primaryVector);
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
                        const extraRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].matchFace(extraVec);
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
            var _err_response_data, _err_response;
            console.error("[FaceScanner] Match error:", err);
            setErrorMessage((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || (err === null || err === void 0 ? void 0 : err.message) || "Failed to process face scan.");
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
            const primaryVector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(primaryLandmarks);
            const additionalVectors = [];
            for (const lms of allLandmarksList){
                if (lms !== primaryLandmarks) {
                    try {
                        additionalVectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(lms));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceDiscoveryScannerModal.useEffect": ()=>{
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
            const detectLoop = {
                "FaceDiscoveryScannerModal.useEffect.detectLoop": async ()=>{
                    try {
                        if (videoRef.current && videoRef.current.readyState >= 2 && !videoRef.current.paused && !isProcessingRef.current && stage === "viewfinder") {
                            const landmarker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFaceLandmarker"])();
                            if (landmarker && active && !isProcessingRef.current) {
                                const results = landmarker.detectForVideo(videoRef.current, performance.now());
                                if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                                    missedFramesRef.current = 0;
                                    // Find primary/largest face in view
                                    let primaryLandmarks = results.faceLandmarks[0];
                                    let primaryBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(primaryLandmarks);
                                    if (results.faceLandmarks.length > 1) {
                                        let maxArea = primaryBox.width * primaryBox.height;
                                        for(let i = 1; i < results.faceLandmarks.length; i++){
                                            const candidateLandmarks = results.faceLandmarks[i];
                                            const candidateBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(candidateLandmarks);
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
                        animId = requestAnimationFrame({
                            "FaceDiscoveryScannerModal.useEffect.detectLoop": ()=>{
                                setTimeout(detectLoop, 200); // 5fps CV landmark detection
                            }
                        }["FaceDiscoveryScannerModal.useEffect.detectLoop"]);
                    }
                }
            }["FaceDiscoveryScannerModal.useEffect.detectLoop"];
            detectLoop();
            return ({
                "FaceDiscoveryScannerModal.useEffect": ()=>{
                    active = false;
                    cancelAnimationFrame(animId);
                }
            })["FaceDiscoveryScannerModal.useEffect"];
        }
    }["FaceDiscoveryScannerModal.useEffect"], [
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
            const landmarker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFaceLandmarker"])();
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
                    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacePoseAndBounds"])(lms);
                    const area = box.width * box.height;
                    if (area > maxArea) {
                        maxArea = area;
                        primaryLandmarks = lms;
                    }
                }
            }
            const vector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(primaryLandmarks);
            const additionalVectors = [];
            for (const lms of results.faceLandmarks){
                if (lms !== primaryLandmarks) {
                    try {
                        additionalVectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceBiometricVector"])(lms));
                    } catch (_) {}
                }
            }
            await processFaceVector(vector, additionalVectors);
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("[FaceScanner] Capture error:", err);
            setErrorMessage((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || (err === null || err === void 0 ? void 0 : err.message) || "Failed to process face scan.");
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].sendConnectionRequest(targetUserId, "Hi! We met in person and found each other via Face Match.");
            setSentRequests((prev)=>({
                    ...prev,
                    [targetUserId]: true
                }));
        } catch (err) {
            var _err_response_data, _err_response;
            setErrorMessage((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Could not send connection request.");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[999999] flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-xl animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md h-[100dvh] md:h-[680px] bg-slate-950 border-0 md:border md:border-slate-800 rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 693,
                    columnNumber: 9
                }, this),
                (stage === "result_found" || stage === "no_match") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/45 backdrop-blur-[3px] transition-all duration-300 z-10 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                    lineNumber: 697,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 inset-x-0 z-30 flex items-center justify-between pt-[calc(1.1rem+env(safe-area-inset-top,24px))] pb-3 px-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0 pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 shrink-0 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-lg backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-white tracking-wide truncate",
                                            children: title || (mode === "login" ? "Face ID Sign-In" : mode === "enroll" ? "Enroll Face Biometrics" : "Face Match Discovery")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-9 h-9 shrink-0 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                stage === "checking_status" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex flex-col items-center justify-center p-6 bg-slate-950 text-white animate-fade-in space-y-4 z-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-16 h-16 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center shadow-lg backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-white",
                                    children: "Initializing Biometrics"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                stage === "enroll_prompt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex flex-col justify-between p-6 bg-slate-950 text-white animate-fade-in z-20 pt-[calc(5rem+env(safe-area-inset-top,24px))] pb-[calc(2rem+env(safe-area-inset-bottom,24px))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center space-y-4 my-auto max-w-sm mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-20 h-20 rounded-3xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.35)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-black text-white tracking-wide",
                                            children: "Enable Face Discovery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 751,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 space-y-2 text-left mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                            children: "Who Can Discover You?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setConsentAudience("public"),
                                                    className: `py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${consentAudience === "public" ? "bg-blue-600 border-blue-500 text-white shadow-md" : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white"}`,
                                                    children: "Public"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/50 border border-slate-800/60 rounded-xl p-2.5 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                            size: 15,
                                            className: "text-emerald-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 792,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 w-full max-w-sm mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                cameraError && stage !== "enroll_prompt" && stage !== "checking_status" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center text-white space-y-3 max-w-xs z-20 m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: cameraError
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none z-10 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 flex items-center justify-center transition-all duration-300 ${isFaceDetected ? "opacity-0 scale-95 pointer-events-none" : "opacity-60 scale-100"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64 h-80 flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-3xl border-2 border-blue-400/40 border-dashed animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -left-1 w-5 h-5 border-t-3 border-l-3 border-blue-300 rounded-tl-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 847,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 border-t-3 border-r-3 border-blue-300 rounded-tr-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-1 -left-1 w-5 h-5 border-b-3 border-l-3 border-blue-300 rounded-bl-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 849,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full border border-blue-400/30 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        detectedBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute transition-[left,top,width,height] duration-150 ease-out",
                            style: {
                                left: `${detectedBox.left}%`,
                                top: `${detectedBox.top}%`,
                                width: `${detectedBox.width}%`,
                                height: `${detectedBox.height}%`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full h-full rounded-2xl border-2 transition-all duration-200 ${stage === "matching" ? "border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.5)] bg-cyan-400/10" : lockProgress > 60 ? "border-emerald-300 shadow-[0_0_35px_rgba(52,211,153,0.55)] bg-emerald-500/10" : "border-emerald-400/90 shadow-[0_0_25px_rgba(52,211,153,0.35)] bg-emerald-500/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1.5 -left-1.5 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 879,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1.5 -right-1.5 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 880,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 881,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-4 border-r-4 border-white rounded-br-xl shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                        lineNumber: 882,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-12 h-12 flex items-center justify-center",
                                            children: [
                                                lockProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute inset-0 w-full h-full -rotate-90 pointer-events-none",
                                                    viewBox: "0 0 48 48",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-300 font-semibold tracking-wide shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-1.5 h-1.5 rounded-full ${lockProgress >= 75 ? "bg-cyan-400 animate-ping" : "bg-emerald-400"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 917,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: detectedBox.positionLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 918,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-50",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 919,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: detectedBox.angleLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                lineNumber: 920,
                                                columnNumber: 21
                                            }, this),
                                            lockProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-50",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    stage === "matching" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[calc(4.75rem+env(safe-area-inset-top,24px))] inset-x-0 z-20 flex justify-center pointer-events-none px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-xs text-white/95 font-medium shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2 h-2 rounded-full ${isFaceDetected ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" : "bg-blue-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                lineNumber: 943,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[calc(7.5rem+env(safe-area-inset-bottom,28px))] z-30 px-4 py-2.5 rounded-2xl bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs font-medium max-w-xs text-center backdrop-blur-md shadow-2xl animate-fade-in left-1/2 -translate-x-1/2 flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 955,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setErrorMessage(null),
                            className: "p-1 rounded-full hover:bg-rose-900/60 text-rose-300 hover:text-white transition-colors cursor-pointer shrink-0",
                            "aria-label": "Dismiss message",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                (stage === "viewfinder" || stage === "matching") && !cameraError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-20 pt-8 pb-[calc(2rem+env(safe-area-inset-bottom,28px))] px-8 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg",
                            title: "Cancel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCaptureAndMatch,
                            disabled: stage === "matching",
                            className: "w-20 h-20 rounded-full border-4 border-white/50 bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white backdrop-blur-md transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] disabled:opacity-50 cursor-pointer",
                            title: "Capture and Match",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center text-slate-950",
                                children: stage === "matching" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-3 border-slate-900 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 990,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleFlipCamera,
                            disabled: stage === "matching",
                            className: "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg",
                            title: `Switch to ${facingMode === "user" ? "Back" : "Front"} Camera`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
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
                stage === "result_found" && matchedProfiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.85)] pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom,20px))] px-4 animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1014,
                            columnNumber: 13
                        }, this),
                        matchedProfiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: matchedProfiles.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        matchedProfiles.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center space-y-3 pt-1 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileAvatar, {
                                    profile: matchedProfiles[0],
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-black tracking-wide text-white",
                                                    children: matchedProfiles[0].name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 21
                                                }, this),
                                                matchedProfiles[0].isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/40 text-[10px] text-blue-300 font-bold shrink-0",
                                                    children: "Your Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 23
                                                }, this) : matchedProfiles[0].isPublic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[10px] text-emerald-300 font-bold shrink-0",
                                                    children: "Public"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        matchedProfiles[0].username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        matchedProfiles[0].profession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300 font-medium",
                                            children: matchedProfiles[0].profession
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 21
                                        }, this),
                                        matchedProfiles[0].statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${matchedProfiles[0].confidenceBand === "high" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-amber-500/15 border-amber-500/40 text-amber-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full space-y-2 pt-2",
                                    children: matchedProfiles[0].isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-3.5 rounded-[50px] bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
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
                                    }, this) : matchedProfiles[0].connectionStatus === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onClose();
                                            if (onOpenChat) onOpenChat(matchedProfiles[0].id);
                                        },
                                        className: "w-full py-3.5 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat01Icon"], {
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
                                    }, this) : matchedProfiles[0].isPublic ? /* Public Profile: Direct Chat */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onClose();
                                            if (onOpenChat) onOpenChat(matchedProfiles[0].id);
                                        },
                                        className: "w-full py-3.5 rounded-[50px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat01Icon"], {
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
                                    }, this) : sentRequests[matchedProfiles[0].id] || matchedProfiles[0].connectionStatus === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-3.5 rounded-[50px] bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
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
                                    }, this) : /* Private Profile: Send Request */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSendConnectionRequest(matchedProfiles[0].id),
                                        disabled: connectingMap[matchedProfiles[0].id],
                                        className: "w-full py-3.5 rounded-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
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
                        }, this) : /* Multi-Profile Horizontal Swipeable Carousel */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: carouselRef,
                            onScroll: handleCarouselScroll,
                            className: "flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 px-1 scrollbar-none overscroll-x-contain",
                            style: {
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            },
                            children: matchedProfiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[78vw] max-w-[310px] shrink-0 snap-center bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center text-center shadow-xl backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileAvatar, {
                                            profile: profile,
                                            size: "md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 space-y-0.5 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-1.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-bold text-white tracking-wide truncate",
                                                            children: profile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1168,
                                                            columnNumber: 25
                                                        }, this),
                                                        profile.isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-[9px] text-cyan-300 font-bold shrink-0",
                                                            children: "You"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 27
                                                        }, this) : profile.isPublic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[9px] text-emerald-300 font-bold shrink-0",
                                                            children: "Public"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                profile.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                profile.profession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-300 font-medium truncate",
                                                    children: profile.profession
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 25
                                                }, this),
                                                profile.statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 ${profile.confidenceBand === "high" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-amber-500/15 border-amber-500/40 text-amber-300"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                        lineNumber: 1209,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full mt-3",
                                            children: profile.isSelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full py-2.5 rounded-[50px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
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
                                            }, this) : profile.connectionStatus === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onClose();
                                                    if (onOpenChat) onOpenChat(profile.id);
                                                },
                                                className: "w-full py-2.5 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat01Icon"], {
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
                                            }, this) : profile.isPublic ? /* Public Profile: Direct Chat */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onClose();
                                                    if (onOpenChat) onOpenChat(profile.id);
                                                },
                                                className: "w-full py-2.5 rounded-[50px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat01Icon"], {
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
                                            }, this) : sentRequests[profile.id] || profile.connectionStatus === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full py-2.5 rounded-[50px] bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
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
                                            }, this) : /* Private Profile: Send Request */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSendConnectionRequest(profile.id),
                                                disabled: connectingMap[profile.id],
                                                className: "w-full py-2.5 rounded-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetToScanner,
                                    className: "flex-1 py-2.5 rounded-[50px] bg-white/10 hover:bg-white/15 text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                stage === "no_match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.85)] pt-3 pb-[calc(1.75rem+env(safe-area-inset-bottom,24px))] px-6 animate-in slide-in-from-bottom duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-1 bg-slate-700 rounded-full mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                            lineNumber: 1295,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3.5 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 shrink-0 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-bold text-white tracking-wide",
                                                    children: "No Account Found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: resetToScanner,
                                                    className: "w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetToScanner,
                                    className: "flex-1 py-3 rounded-[50px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s1(FaceDiscoveryScannerModal, "530SbCegh6IlZUar6dp/7PdIm8U=");
_c1 = FaceDiscoveryScannerModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileAvatar");
__turbopack_context__.k.register(_c1, "FaceDiscoveryScannerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_c49b1add._.js.map