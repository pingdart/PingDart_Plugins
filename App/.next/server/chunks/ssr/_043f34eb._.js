module.exports = [
"[project]/node_modules/@privacyresearch/libsignal-protocol-typescript/lib/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_@privacyresearch_curve25519-typescript_lib_3fe4a78a._.js",
  "server/chunks/ssr/node_modules_@privacyresearch_libsignal-protocol-typescript_lib_f91c5a53._.js",
  "server/chunks/ssr/node_modules_f568377a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@privacyresearch/libsignal-protocol-typescript/lib/index.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
    });
});
}),
];