(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/stores/useReelsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_PRELOAD_REELS",
    ()=>FALLBACK_PRELOAD_REELS,
    "preloadReelsMedia",
    ()=>preloadReelsMedia,
    "useReelsStore",
    ()=>useReelsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const getApiBase = ()=>{
    return ("TURBOPACK compile-time value", "http://192.168.0.197:4025/api/v1") || "http://localhost:4025/api/v1";
};
const STORAGE_KEY = "pingdart_reels_taste_profile";
const REELS_CACHE_KEY = "pingdart_cached_reels";
const FALLBACK_PRELOAD_REELS = [
    {
        id: "tt_7701056271637548318",
        reelId: "tt_7701056271637548318",
        userName: "NFLonFOX",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/040e4341b0201067a378ee3e08044237~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=15183052&x-expires=1793188800&x-signature=Mvlt5MvBO4oQeTII5SNtPUUj9hY%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocWv8AqVvAvvIOPAQ2f0NjSEqef8gVtAI2UAQM~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=7ae7203e&x-expires=1793188800&x-signature=SyAIZ0z07koNd8wVT6MnDE%2BVmW8%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v19.tiktokcdn-us.com/753c62d96d3da02aecf4a2b4833af4e5/6ae0f415/video/tos/useast8/tos-useast8-ve-0068c004-tx2/o4UIJtLvggG8FRAAro4AepI3VfRjjFEIqIf0SC/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1755&ft=MnA8ZQc6U8ufubme2ThkFNNTjV0Xt-q7BwQEe2hJBSjD1Inz&mime_type=video_mp4&rc=MzhmOTg5ZzM7OWY1OzhpZUBpM3I3eG45cnJ0ZTMzaTczNEBgNWEzMjJfNV8xYTQyM19hYSMyMWZiMmRrXmNhLS1kMTJzcw%3D%3D&vvpl=1&l=20261027125712DF5D0FD73719E8043C59&btag=e000b0000",
        caption: "Whole team went crazy #nfl #detroitlions #lions #funny #football",
        likes: 250988,
        comments: 1666,
        shares: 22921,
        views: "2121K",
        songName: "original sound - melodiesinmotion634 • Melodies in Motion",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7681206916353166624",
        reelId: "tt_7681206916353166624",
        userName: "Britta",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/de74009c4748f5a69ba7ab9087de9f7f~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=bfd4a424&x-expires=1793188800&x-signature=xqqD8HjWoE2qwKO%2FiUIfkUvHLAU%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/oQADpEqKAIR0EJTEFSACpEIDZQSmmAeCTkflQm~tplv-tiktokx-origin.image?dr=8593&refresh_token=c02a8200&x-expires=1793188800&x-signature=TQ64uTqRxAacnymOwsrruTeoBzc%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&item=7681206916353166624&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v19.tiktokcdn-us.com/3a99384d96f7447fd5fedd94a08542f6/6ae0f412/video/tos/useast2a/tos-useast2a-ve-0068-euttp/oICegeKLGGcVLZxILyIQjnQiMDMIX6AgfKjg9A/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1370&ft=MnA8ZQc6U8ufubme2ThkFNNTjV0Xt-q7BwQEe2hJBSjD1Inz&mime_type=video_mp4&rc=OjdlOTQ4M2U1ZGQ8ZmU1ZkBpajg1c3k5cjxrZDMzZjczNUAyMzVjXmMyNS0xMy0yYDFiYSNiLWNpMmRjc2BhLS1kMTNzcw%3D%3D&vvpl=1&l=20261027125712DF5D0FD73719E8043C59&btag=e000b0000",
        caption: "This is what heaven must look like. A waterfall falling straight into the ocean! 🌊✨",
        likes: 2848796,
        comments: 9542,
        shares: 414959,
        views: "12414K",
        songName: "original sound - opheliasing • opheliaa",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7701115078514429198",
        reelId: "tt_7701115078514429198",
        userName: "House of Highlights",
        userAvatar: "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ddb1bae76544d73b74940b71b8bb112d~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=61005041&x-expires=1793188800&x-signature=oNGIzTWOsCm0mA5SfZQBuzPYzq4%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oct42AfWS3QA22RGElgoIjFECUAmAqf2DdD9CX~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=98f82174&x-expires=1793188800&x-signature=9BMvv0xUt5LBE2TNU0%2F5LWauNGE%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&s=FEED&sc=cover&biz_tag=tt_video",
        videoUrl: "https://v16m.tiktokcdn-us.com/c1038d3b626ff3b9cb401b5434cc9eb2/6ae0f413/video/tos/useast5/tos-useast5-ve-0068c003-tx/o8A289cejVIFekHCCVGfrRL7M37vAAugQG2GRI/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1536&ft=H3YMyvShQBKUxsurIWl2K4yqYl_Wg7N1GbHF.B7q8Z4ka&mime_type=video_mp4&rc=OTw4NTs6OzQzNGY4NDppOUBpandvNnU5cml3ZTMzZzczNEAvLWM0LzAvNjExXjRhMjRjYSNnaWxmMmRraGNhLS1kMS9zcw%3D%3D&vvpl=1&l=202610271257124B640F1601D06F04E2C9&btag=e000b0000",
        caption: "FAHHHH. 😂😭 #NBA #funny #basketball #tyresehaliburton #soundeffects",
        likes: 462234,
        comments: 640,
        shares: 27674,
        views: "3302K",
        songName: "original sound - houseofhighlights • House of Highlights",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7701177462306245902",
        reelId: "tt_7701177462306245902",
        userName: "TheLaurel",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/df6db3b930e900f3fc5616f29346afe0~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=683c215c&x-expires=1793188800&x-signature=EHfYBAqvDCDg5CjHdirR4MrEuZw%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&s=FEED&sc=avatar",
        posterUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-p-85c255-tx/oUCqG7QTNEFkAB5YgEF44FSDufEfzDBEDwBDgI~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=1c765702&x-expires=1793188800&x-signature=Es79cA8Gx2cnN%2FIkJ1TCTJ75HD0%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v16m.tiktokcdn-us.com/7c8364f472041471833a0194cf8ac244/6ae0f417/video/tos/useast5/tos-useast5-v-85c255-tx/oMEDgEz3BSKpTEEqT4FfDBgpfFWlQ4ICBvDkwu/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=452&ft=H3YMyvShQBKUxsurIWl2K4yqYl_Wg7N1GbHF.B7q8Z4ka&mime_type=video_mp4&rc=NjZlZGZlZjM6O2czNzk2M0BpM3k6amw5cmU0ZTQzZzM2NEA1XmA0NTBhNV8xMTIyXzAzYSNwZ2UtMmRrNWRhLS1kLS9zcw%3D%3D&vvpl=1&l=202610271257124B640F1601D06F04E2C9&btag=e000b0000",
        caption: "✨ Your next chapter starts here! 🌴🤍 Resort-style living & beautiful sunset vibes! 🏡☀️",
        likes: 8520,
        comments: 420,
        shares: 223,
        views: "89K",
        songName: "original sound - the_laurelchandler • TheLaurel",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    }
];
const preloadReelsMedia = (reelsList)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        reelsList.slice(0, 8).forEach((r)=>{
            if (r.posterUrl) {
                const img = new Image();
                img.src = r.posterUrl;
            }
            if (r.userAvatar) {
                const img = new Image();
                img.src = r.userAvatar;
            }
        });
    } catch (_) {}
};
const loadCachedReels = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(REELS_CACHE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const hasLegacyDummy = parsed.some((r)=>{
                    var _r_videoUrl, _r_videoUrl1, _r_videoUrl2;
                    return ((_r_videoUrl = r.videoUrl) === null || _r_videoUrl === void 0 ? void 0 : _r_videoUrl.includes("oceans.mp4")) || ((_r_videoUrl1 = r.videoUrl) === null || _r_videoUrl1 === void 0 ? void 0 : _r_videoUrl1.includes("elephants.mp4")) || ((_r_videoUrl2 = r.videoUrl) === null || _r_videoUrl2 === void 0 ? void 0 : _r_videoUrl2.includes("sea-turtle.mp4"));
                });
                if (!hasLegacyDummy) {
                    preloadReelsMedia(parsed);
                    return parsed;
                }
            }
        }
    } catch (_) {}
    preloadReelsMedia(FALLBACK_PRELOAD_REELS);
    return FALLBACK_PRELOAD_REELS;
};
const saveCachedReels = (reelsList)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(REELS_CACHE_KEY, JSON.stringify(reelsList.slice(0, 30)));
    } catch (_) {}
};
const loadTasteProfile = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (_) {}
    return {
        moodAffinities: {},
        categoryAffinities: {},
        locationAffinities: {},
        seenReelIds: [],
        likedReelIds: []
    };
};
const saveTasteProfile = (profile)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // Keep max 200 seen IDs to avoid bloating storage
        const trimmed = {
            ...profile,
            seenReelIds: profile.seenReelIds.slice(-200)
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (_) {}
};
const useReelsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        reels: loadCachedReels(),
        isLoading: false,
        activeFilter: "all",
        tasteProfile: loadTasteProfile(),
        recordInteraction: (reel, type)=>{
            const profile = {
                ...get().tasteProfile
            };
            const reelIdStr = String(reel.id || reel.reelId || "");
            const mood = (reel.mood || "").toLowerCase();
            const cat = (reel.category || "").toLowerCase();
            const loc = (reel.location || "").toLowerCase();
            if (type === "like") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 6;
                if (cat) profile.categoryAffinities[cat] = (profile.categoryAffinities[cat] || 0) + 4;
                if (loc) profile.locationAffinities[loc] = (profile.locationAffinities[loc] || 0) + 4;
                if (!profile.likedReelIds.includes(reelIdStr)) {
                    profile.likedReelIds.push(reelIdStr);
                }
            } else if (type === "unlike") {
                if (mood) profile.moodAffinities[mood] = Math.max(0, (profile.moodAffinities[mood] || 0) - 4);
                profile.likedReelIds = profile.likedReelIds.filter((id)=>id !== reelIdStr);
            } else if (type === "share") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 8;
                if (cat) profile.categoryAffinities[cat] = (profile.categoryAffinities[cat] || 0) + 6;
            } else if (type === "watch") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 2;
            }
            if (type === "seen" || type === "watch") {
                if (reelIdStr && !profile.seenReelIds.includes(reelIdStr)) {
                    profile.seenReelIds.push(reelIdStr);
                }
            }
            saveTasteProfile(profile);
            set({
                tasteProfile: profile
            });
        },
        clearSeenHistory: ()=>{
            const profile = {
                ...get().tasteProfile,
                seenReelIds: []
            };
            saveTasteProfile(profile);
            set({
                tasteProfile: profile
            });
        },
        fetchRecommendations: async (mood, category, location)=>{
            set({
                isLoading: true
            });
            try {
                if (category === "TikTok" || mood === "tiktok" || category === "Trending") {
                    try {
                        const ttRes = await fetch(`${getApiBase()}/reels/tiktok-feed?count=20`);
                        if (ttRes.ok) {
                            const ttJson = await ttRes.json();
                            if (ttJson && Array.isArray(ttJson.data) && ttJson.data.length > 0) {
                                saveCachedReels(ttJson.data);
                                preloadReelsMedia(ttJson.data);
                                set({
                                    reels: ttJson.data,
                                    isLoading: false
                                });
                                return;
                            }
                        }
                    } catch (_) {}
                }
                const profile = get().tasteProfile;
                // Get top 3 preferred moods sorted by affinity
                const topMoods = Object.entries(profile.moodAffinities).sort((a, b)=>b[1] - a[1]).slice(0, 3).map(([m])=>m);
                const params = new URLSearchParams();
                if (mood && mood !== "all") params.set("mood", mood);
                if (category && category !== "all") params.set("category", category);
                if (location && location !== "all") params.set("location", location);
                if (profile.seenReelIds.length > 0) {
                    params.set("seenIds", profile.seenReelIds.slice(-40).join(","));
                }
                if (topMoods.length > 0) {
                    params.set("preferredMoods", topMoods.join(","));
                }
                const res = await fetch(`${getApiBase()}/reels/recommendations?${params.toString()}`);
                if (res.ok) {
                    const json = await res.json();
                    if (json && Array.isArray(json.data) && json.data.length > 0) {
                        saveCachedReels(json.data);
                        preloadReelsMedia(json.data);
                        set({
                            reels: json.data,
                            isLoading: false
                        });
                        return;
                    }
                }
            } catch (err) {
                console.warn("[ReelsStore] Recommendations fallback error:", err);
            }
            // Fallback to fetchReels
            get().fetchReels(mood, category, location);
        },
        fetchReels: async (mood, category, location)=>{
            set({
                isLoading: true
            });
            try {
                const params = new URLSearchParams();
                if (mood && mood !== "all") params.set("mood", mood);
                if (category && category !== "all") params.set("category", category);
                if (location && location !== "all") params.set("location", location);
                const res = await fetch(`${getApiBase()}/reels?${params.toString()}`);
                if (res.ok) {
                    const json = await res.json();
                    if (json && Array.isArray(json.data)) {
                        saveCachedReels(json.data);
                        preloadReelsMedia(json.data);
                        set({
                            reels: json.data,
                            isLoading: false
                        });
                        return;
                    }
                }
            } catch (err) {
                console.warn("[ReelsStore] Failed to fetch reels from backend:", err);
            }
            set({
                isLoading: false
            });
        },
        seed10Reels: async ()=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/seed`, {
                    method: "POST"
                });
                if (res.ok) {
                    const json = await res.json();
                    if (json.data) {
                        set({
                            reels: json.data
                        });
                    }
                }
            } catch (err) {
                console.error("[ReelsStore] Seed error", err);
            }
        },
        addReel: async (reel, file)=>{
            // Optimistic local add
            set((state)=>({
                    reels: [
                        reel,
                        ...state.reels
                    ]
                }));
            try {
                let res;
                if (file) {
                    const formData = new FormData();
                    formData.append("video", file);
                    formData.append("caption", reel.caption);
                    formData.append("userName", reel.userName);
                    if (reel.userAvatar) formData.append("userAvatar", reel.userAvatar);
                    if (reel.songName) formData.append("songName", reel.songName);
                    if (reel.location) formData.append("location", reel.location);
                    if (reel.category) formData.append("category", reel.category);
                    if (reel.mood) formData.append("mood", reel.mood);
                    if (reel.tags) formData.append("tags", reel.tags);
                    formData.append("isUserUploaded", "true");
                    formData.append("source", reel.source || "user");
                    res = await fetch(`${getApiBase()}/reels`, {
                        method: "POST",
                        body: formData
                    });
                } else {
                    res = await fetch(`${getApiBase()}/reels`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(reel)
                    });
                }
                if (res.ok) {
                    get().fetchRecommendations();
                }
            } catch (err) {
                console.error("[ReelsStore] Add reel API error", err);
            }
        },
        deleteReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.filter((r)=>r.id !== id)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}`, {
                    method: "DELETE"
                });
            } catch (err) {
                console.error("[ReelsStore] Delete reel API error", err);
            }
        },
        blockReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            status: "blocked"
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/status`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: "blocked"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Block reel API error", err);
            }
        },
        unblockReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            status: "active"
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/status`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: "active"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Unblock reel API error", err);
            }
        },
        likeReel: async (id, isLiked)=>{
            const currentReel = get().reels.find((r)=>r.id === id);
            if (currentReel) {
                get().recordInteraction(currentReel, isLiked ? "like" : "unlike");
            }
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            likes: isLiked ? r.likes + 1 : Math.max(0, r.likes - 1)
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/like`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        isLiked,
                        action: isLiked ? "like" : "unlike"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Like API error", err);
            }
        },
        shareReel: async (id)=>{
            const currentReel = get().reels.find((r)=>r.id === id);
            if (currentReel) {
                get().recordInteraction(currentReel, "share");
            }
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            shares: r.shares + 1
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/share`, {
                    method: "POST"
                });
            } catch (err) {
                console.error("[ReelsStore] Share API error", err);
            }
        },
        fetchComments: async (id)=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/${id}/comments`);
                if (res.ok) {
                    const json = await res.json();
                    return json.data || [];
                }
            } catch (err) {
                console.error("[ReelsStore] Fetch comments error", err);
            }
            return [];
        },
        addComment: async (id, text, userName = "You", userAvatar)=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/${id}/comments`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text,
                        userName,
                        userAvatar
                    })
                });
                if (res.ok) {
                    const json = await res.json();
                    set((state)=>({
                            reels: state.reels.map((r)=>r.id === id ? {
                                    ...r,
                                    comments: r.comments + 1
                                } : r)
                        }));
                    return json.data;
                }
            } catch (err) {
                console.error("[ReelsStore] Add comment error", err);
            }
            return null;
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/TikTokImportScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TikTokImportScreen",
    ()=>TikTokImportScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RadioIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useReelsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TRENDING_SEARCHES = [
    "mrbeast",
    "khaby.lame",
    "charlidamelio",
    "bellapoarch",
    "zachking"
];
function TikTokImportScreen({ onBack, onOpenReels }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { fetchRecommendations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsStore"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileResults, setProfileResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchDone, setSearchDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchCursor, setSearchCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingMore, setIsLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedProfile, setSelectedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingVideos, setIsLoadingVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [previewVideo, setPreviewVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importProgress, setImportProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [importSuccess, setImportSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importedCount, setImportedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [needsSetup, setNeedsSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = async (overrideQuery)=>{
        const query = (overrideQuery !== null && overrideQuery !== void 0 ? overrideQuery : searchQuery).trim();
        if (!query) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a search term");
            return;
        }
        lastSearchQuery.current = query;
        setIsSearching(true);
        setProfileResults([]);
        setSearchDone(false);
        setSelectedProfile(null);
        setVideos([]);
        setNeedsSetup(false);
        setSearchCursor(0);
        setHasMore(false);
        try {
            var _res_data, _res_data1;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/reels/tiktok-search", {
                params: {
                    username: query,
                    cursor: 0
                }
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.needsSetup) {
                setNeedsSetup(true);
                return;
            }
            if ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.success) {
                const profiles = res.data.profiles || [];
                setProfileResults(profiles);
                setSearchDone(true);
                var _res_data_nextCursor;
                setSearchCursor((_res_data_nextCursor = res.data.nextCursor) !== null && _res_data_nextCursor !== void 0 ? _res_data_nextCursor : 0);
                var _res_data_hasMore;
                setHasMore((_res_data_hasMore = res.data.hasMore) !== null && _res_data_hasMore !== void 0 ? _res_data_hasMore : false);
                if (profiles.length === 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`No creators found for "${query}"`);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Found ${profiles.length} creator${profiles.length > 1 ? "s" : ""} matching "${query}"`);
                }
            } else {
                var _res_data2;
                throw new Error(((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.message) || "Search failed");
            }
        } catch (err) {
            var _err_response_data, _err_response, _err_response_data1, _err_response1;
            if ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.needsSetup) {
                setNeedsSetup(true);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data1 = _err_response1.data) === null || _err_response_data1 === void 0 ? void 0 : _err_response_data1.message) || err.message || "Search failed");
        } finally{
            setIsSearching(false);
        }
    };
    const handleLoadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TikTokImportScreen.useCallback[handleLoadMore]": async ()=>{
            if (isLoadingMore || !hasMore || !lastSearchQuery.current) return;
            setIsLoadingMore(true);
            try {
                var _res_data;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/reels/tiktok-search", {
                    params: {
                        username: lastSearchQuery.current,
                        cursor: searchCursor
                    }
                });
                if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                    const newProfiles = res.data.profiles || [];
                    setProfileResults({
                        "TikTokImportScreen.useCallback[handleLoadMore]": (prev)=>{
                            const existingIds = new Set(prev.map({
                                "TikTokImportScreen.useCallback[handleLoadMore]": (p)=>p.uniqueId
                            }["TikTokImportScreen.useCallback[handleLoadMore]"]));
                            return [
                                ...prev,
                                ...newProfiles.filter({
                                    "TikTokImportScreen.useCallback[handleLoadMore]": (p)=>!existingIds.has(p.uniqueId)
                                }["TikTokImportScreen.useCallback[handleLoadMore]"])
                            ];
                        }
                    }["TikTokImportScreen.useCallback[handleLoadMore]"]);
                    var _res_data_nextCursor;
                    setSearchCursor((_res_data_nextCursor = res.data.nextCursor) !== null && _res_data_nextCursor !== void 0 ? _res_data_nextCursor : 0);
                    var _res_data_hasMore;
                    setHasMore((_res_data_hasMore = res.data.hasMore) !== null && _res_data_hasMore !== void 0 ? _res_data_hasMore : false);
                }
            } catch (err) {
                var _err_response_data, _err_response;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message || "Failed to load more");
            } finally{
                setIsLoadingMore(false);
            }
        }
    }["TikTokImportScreen.useCallback[handleLoadMore]"], [
        isLoadingMore,
        hasMore,
        searchCursor
    ]);
    // IntersectionObserver: auto-load next page when sentinel scrolls into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TikTokImportScreen.useEffect": ()=>{
            const el = sentinelRef.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "TikTokImportScreen.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) handleLoadMore();
                }
            }["TikTokImportScreen.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "TikTokImportScreen.useEffect": ()=>observer.disconnect()
            })["TikTokImportScreen.useEffect"];
        }
    }["TikTokImportScreen.useEffect"], [
        handleLoadMore
    ]);
    const handleSelectProfile = async (profile)=>{
        setIsLoadingVideos(true);
        setSelectedProfile(null);
        setVideos([]);
        setImportSuccess(false);
        try {
            var _res_data, _res_data1;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/reels/tiktok-user-videos", {
                params: {
                    uniqueId: profile.uniqueId
                }
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
                var _data_videos;
                const data = res.data.data;
                setSelectedProfile(data);
                setVideos(data.videos || []);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎬 Loaded ${((_data_videos = data.videos) === null || _data_videos === void 0 ? void 0 : _data_videos.length) || 0} real videos from @${data.username}`);
            } else {
                var _res_data2;
                throw new Error(((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.message) || "Failed to load videos");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message || "Failed to load videos");
        } finally{
            setIsLoadingVideos(false);
        }
    };
    const toggleSelect = (id)=>setVideos((prev)=>prev.map((v)=>v.id === id ? {
                    ...v,
                    selected: !v.selected
                } : v));
    const selectAll = (status)=>setVideos((prev)=>prev.map((v)=>({
                    ...v,
                    selected: status
                })));
    const selectedVideos = videos.filter((v)=>v.selected);
    const filteredVideos = videos.filter((v)=>{
        if (activeFilter === "selected") return v.selected;
        if (activeFilter === "high") return v.viewCount > 500000;
        return true;
    });
    const handleStartImport = async ()=>{
        if (selectedVideos.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select at least 1 video");
            return;
        }
        setIsImporting(true);
        setImportProgress(30);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/reels/tiktok-import", {
                videos: selectedVideos,
                username: (selectedProfile === null || selectedProfile === void 0 ? void 0 : selectedProfile.username) || "creator",
                nickname: (selectedProfile === null || selectedProfile === void 0 ? void 0 : selectedProfile.nickname) || (user === null || user === void 0 ? void 0 : user.full_name) || "TikTok Creator",
                avatarUrl: (selectedProfile === null || selectedProfile === void 0 ? void 0 : selectedProfile.avatarUrl) || (user === null || user === void 0 ? void 0 : user.avatar)
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                setImportProgress(100);
                setImportSuccess(true);
                setImportedCount(selectedVideos.length);
                fetchRecommendations();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎉 ${selectedVideos.length} reels imported!`);
            } else {
                var _res_data1;
                throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Import failed");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message || "Import failed");
        } finally{
            setIsImporting(false);
        }
    };
    const goBackToResults = ()=>{
        setSelectedProfile(null);
        setVideos([]);
        setImportSuccess(false);
        setActiveFilter("all");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-lg shrink-0 pt-[calc(1.2rem+env(safe-area-inset-top,0px))] pb-4 px-4 z-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0 flex-1",
                            children: [
                                selectedProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: goBackToResults,
                                    className: "w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this) : onBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onBack,
                                    className: "w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 p-1 flex items-center justify-center shadow-md shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🎬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base font-black text-white uppercase tracking-wider truncate",
                                            children: selectedProfile ? `@${selectedProfile.username}` : "TikTok Creator Import"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-blue-100/90 font-medium truncate",
                                            children: selectedProfile ? `${selectedProfile.followers} followers • ${selectedProfile.videoCount} videos` : "Search → pick a creator → import their videos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md border border-white/30 text-white text-[14px] font-black uppercase tracking-wider shrink-0",
                            children: "✓ Live"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            !selectedProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border-b border-slate-200/90 dark:border-slate-800/80 p-3 px-4 shadow-xs shrink-0 space-y-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 rounded-2xl px-3.5 py-2 border border-slate-200 dark:border-slate-700/80 focus-within:border-blue-500 transition-all shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 14,
                                        className: "text-slate-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search any TikTok name (e.g. MrBeast, dance, comedy)...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && handleSearch(),
                                        className: "flex-1 bg-transparent border-none outline-none text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(""),
                                        className: "p-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSearch(),
                                disabled: isSearching || !searchQuery.trim(),
                                className: "px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-95 disabled:opacity-40 text-white font-bold text-xs shadow-md transition-all active:scale-95 shrink-0 flex items-center gap-1.5 cursor-pointer",
                                children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                            size: 14,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 304,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Searching..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 304,
                                            columnNumber: 78
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 304,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 304,
                                            columnNumber: 131
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar pt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] font-black uppercase text-slate-400 shrink-0",
                                children: "Trending:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            TRENDING_SEARCHES.map((handle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchQuery(handle);
                                        handleSearch(handle);
                                    },
                                    className: "flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 text-xs font-bold transition-all shrink-0 cursor-pointer",
                                    children: [
                                        "@",
                                        handle
                                    ]
                                }, handle, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar flex flex-col items-center bg-[#f8fafc] dark:bg-[#0b141a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-4xl space-y-4",
                    children: [
                        !isSearching && !searchDone && !needsSetup && !selectedProfile && !isLoadingVideos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] p-10 text-center border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-950/40 mx-auto flex items-center justify-center text-3xl",
                                    children: "🎵"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider",
                                            children: "Search TikTok Creators"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 leading-relaxed",
                                            children: "Search by name or keyword — see matching profiles, pick one, then browse & import their real videos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 justify-center text-[11px] text-slate-400 font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "1️⃣ Search a name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 338,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "2️⃣ Pick a creator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 339,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "3️⃣ Import their videos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] p-12 text-center border border-slate-200 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                    size: 28,
                                    className: "animate-spin mx-auto text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                    children: "Searching TikTok creators..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        !isSearching && searchDone && !selectedProfile && profileResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 animate-in fade-in duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                    children: [
                                        profileResults.length,
                                        " creators found — tap one to see their videos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this),
                                profileResults.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectProfile(profile),
                                        className: "w-full bg-white dark:bg-[#111827] rounded-2xl p-3.5 border border-slate-200/90 dark:border-slate-800 shadow-xs flex items-center gap-3.5 cursor-pointer hover:border-blue-400 hover:shadow-md active:scale-[0.99] transition-all text-left group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0",
                                                children: [
                                                    profile.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: profile.avatarUrl,
                                                        alt: profile.nickname,
                                                        className: "w-14 h-14 rounded-full object-cover border-2 border-slate-200 group-hover:border-blue-400 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this),
                                                    profile.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-black border-2 border-white dark:border-[#111827]",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0 space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-black text-slate-900 dark:text-white truncate",
                                                                children: profile.nickname
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[14px] px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border border-blue-200/60 shrink-0",
                                                                children: [
                                                                    "@",
                                                                    profile.uniqueId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this),
                                                    profile.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 line-clamp-1",
                                                        children: profile.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-400 pt-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "👥 ",
                                                                    profile.followers
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-300",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "🎥 ",
                                                                    profile.videoCount || "—",
                                                                    " videos"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/30 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                    size: 14,
                                                    className: "fill-current ml-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, profile.uniqueId, true, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this)),
                                hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: sentinelRef,
                                    className: "py-2 flex items-center justify-center",
                                    children: isLoadingMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs font-bold text-slate-500 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 14,
                                                className: "animate-spin text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 402,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Loading more creators..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 403,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 401,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLoadMore,
                                        className: "px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-all cursor-pointer shadow-xs",
                                        children: "Load more creators"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 406,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 399,
                                    columnNumber: 17
                                }, this),
                                !hasMore && profileResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-[14px] text-slate-400 font-medium py-2",
                                    children: [
                                        "Showing all ",
                                        profileResults.length,
                                        " creators"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this),
                        !isSearching && searchDone && profileResults.length === 0 && !selectedProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] p-10 text-center border border-slate-200 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-black text-slate-700 dark:text-slate-300",
                                    children: "No creators found"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: "Try a different name or keyword"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this),
                        isLoadingVideos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] p-12 text-center border border-slate-200 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                    size: 28,
                                    className: "animate-spin mx-auto text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                    children: "Loading real TikTok videos..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this),
                        selectedProfile && !isLoadingVideos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 animate-in fade-in duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] rounded-[22px] p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3.5 w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative shrink-0",
                                                    children: [
                                                        selectedProfile.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: selectedProfile.avatarUrl,
                                                            alt: selectedProfile.nickname,
                                                            className: "w-16 h-16 rounded-full object-cover border-2 border-blue-600 shadow-md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl border-2 border-blue-600",
                                                            children: "👤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedProfile.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[14px] font-black border-2 border-white dark:border-[#111827]",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 space-y-0.5 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-sm font-black text-slate-900 dark:text-white",
                                                                    children: selectedProfile.nickname
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[14px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 font-bold border border-blue-200/60",
                                                                    children: [
                                                                        "@",
                                                                        selectedProfile.username
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedProfile.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 line-clamp-2",
                                                            children: selectedProfile.bio
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 pt-0.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "👥 ",
                                                                        selectedProfile.followers
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "❤️ ",
                                                                        selectedProfile.likes
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "🎥 ",
                                                                        selectedProfile.videoCount,
                                                                        " videos"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-auto shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleStartImport,
                                                disabled: isImporting || selectedVideos.length === 0,
                                                className: "w-full px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-90 disabled:opacity-40 text-white font-black text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer",
                                                children: isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                            size: 14,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Importing ",
                                                                importProgress,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 73
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Import ",
                                                                selectedVideos.length,
                                                                " Selected"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between flex-wrap gap-2 px-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "all",
                                                "high",
                                                "selected"
                                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveFilter(f),
                                                    className: `px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${activeFilter === f ? "bg-blue-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,
                                                    children: f === "all" ? `All (${videos.length})` : f === "high" ? "🔥 Top" : `Selected (${selectedVideos.length})`
                                                }, f, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>selectAll(true),
                                                    className: "text-blue-600 hover:underline cursor-pointer",
                                                    children: "Select All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>selectAll(false),
                                                    className: "text-slate-500 hover:underline cursor-pointer",
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                isImporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                            size: 14,
                                                            className: "animate-spin text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 65
                                                        }, this),
                                                        "Saving to database..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        importProgress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 508,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-300",
                                                style: {
                                                    width: `${importProgress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 513,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 512,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 507,
                                    columnNumber: 17
                                }, this),
                                videos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] rounded-[22px] p-10 text-center border border-slate-200 dark:border-slate-800 shadow-xs space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl",
                                            children: "🎞️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 521,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-slate-500",
                                            children: "No videos found for this creator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 522,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 520,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",
                                    children: filteredVideos.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>toggleSelect(v.id),
                                            className: `relative rounded-2xl overflow-hidden bg-slate-900 aspect-[9/14] border-2 transition-all cursor-pointer select-none group shadow-xs ${v.selected ? "border-blue-600 ring-2 ring-blue-500/30 scale-[1.01]" : "border-transparent opacity-80 hover:opacity-100"}`,
                                            children: [
                                                v.posterUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: v.posterUrl,
                                                    alt: v.caption,
                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-4xl",
                                                    children: "🎬"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 left-2 right-2 flex items-center justify-between z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-extrabold text-[8px] flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                                    size: 7,
                                                                    className: "fill-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 27
                                                                }, this),
                                                                v.views
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-5 h-5 rounded-full flex items-center justify-center transition-all ${v.selected ? "bg-blue-600 text-white" : "bg-black/50 border border-white/60 text-transparent"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                size: 11,
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setPreviewVideo(v);
                                                        },
                                                        className: "w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                            size: 16,
                                                            className: "fill-white ml-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 right-0 p-2.5 z-10 space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[14px] text-white font-semibold line-clamp-2 leading-tight",
                                                            children: v.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 text-[8px] text-slate-300 truncate",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioIcon"], {
                                                                    size: 8,
                                                                    className: "shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: v.songName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, v.id, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 527,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 525,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        importSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] p-6 text-center border border-emerald-500/30 shadow-md space-y-4 animate-in zoom-in-95 duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 mx-auto flex items-center justify-center text-2xl",
                                    children: "🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-black text-slate-900 dark:text-white",
                                            children: [
                                                importedCount,
                                                " Reels Imported!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Synced to database and AI Reels feed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 576,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onOpenReels === null || onOpenReels === void 0 ? void 0 : onOpenReels(),
                                            className: "px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                    size: 14,
                                                    className: "fill-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Open Reels"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 60
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this),
                                        onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onBack,
                                            className: "px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs cursor-pointer",
                                            children: "Back to Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                            lineNumber: 585,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 574,
                            columnNumber: 13
                        }, this),
                        needsSetup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111827] rounded-[22px] border border-amber-400/40 shadow-md overflow-hidden animate-in fade-in duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🔑"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 596,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-black uppercase tracking-wider",
                                                        children: "API Key Required"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-amber-100 font-medium",
                                                        children: "Set RAPIDAPI_TIKTOK_KEY in Apis/.env and restart backend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 597,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "text-[11px] text-slate-600 dark:text-slate-400 space-y-1.5 list-decimal list-inside",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Go to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 font-bold",
                                                        children: "rapidapi.com/tikwm-tikwm-default/api/tiktok-scraper7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Subscribe → Free plan (500 req/month, works from India ✅)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 606,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Copy your ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "X-RapidAPI-Key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Open ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Apis/.env"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 28
                                                    }, this),
                                                    " → set ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "bg-slate-100 dark:bg-slate-800 px-1 rounded",
                                                        children: "RAPIDAPI_TIKTOK_KEY=your_key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 608,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Restart backend and search again"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                                lineNumber: 609,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                        lineNumber: 604,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            previewVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-xs aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPreviewVideo(null),
                            className: "absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer hover:bg-black/80 text-sm",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this),
                        previewVideo.videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: previewVideo.videoUrl,
                            poster: previewVideo.posterUrl,
                            autoPlay: true,
                            controls: true,
                            playsInline: true,
                            loop: true,
                            className: "absolute inset-0 w-full h-full object-contain mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 623,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewVideo.posterUrl,
                            alt: previewVideo.caption,
                            className: "absolute inset-0 w-full h-full object-contain mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                            lineNumber: 625,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                    lineNumber: 620,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
                lineNumber: 619,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/TikTokImportScreen.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s(TikTokImportScreen, "Y5iDauGIcnr20cT/iAzonV28Hg8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsStore"]
    ];
});
_c = TikTokImportScreen;
var _c;
__turbopack_context__.k.register(_c, "TikTokImportScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_291e8fe6._.js.map