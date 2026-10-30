(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=src_services_faceLandmarkerService_ts_3d0af2cb._.js.map