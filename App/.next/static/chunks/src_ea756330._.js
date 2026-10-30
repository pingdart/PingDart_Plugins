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
"[project]/src/stores/useReelsSoundStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIO_CATEGORIES",
    ()=>AUDIO_CATEGORIES,
    "AUDIO_LANGUAGES",
    ()=>AUDIO_LANGUAGES,
    "DEFAULT_SOUND_TRACKS",
    ()=>DEFAULT_SOUND_TRACKS,
    "useReelsSoundStore",
    ()=>useReelsSoundStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"use client";
;
;
const DEFAULT_SOUND_TRACKS = [
    {
        id: "original_mic",
        title: "Original Sound",
        artist: "You (Camera Microphone)",
        duration: "Original",
        category: "Original",
        language: "All"
    },
    // Hindi Tracks
    {
        id: "hnd_1",
        title: "Kesariya Ishq Beat",
        artist: "Arijit Singh & Pritam",
        duration: "0:30",
        category: "Romantic",
        language: "Hindi",
        isPopular: true
    },
    {
        id: "hnd_2",
        title: "Raataan Lambiyan Chill",
        artist: "Jubin Nautiyal & Tanishk",
        duration: "0:45",
        category: "Romantic",
        language: "Hindi",
        isPopular: true
    },
    {
        id: "hnd_3",
        title: "Chaleya Viral Dance",
        artist: "Anirudh & Shilpa Rao",
        duration: "0:30",
        category: "Dance",
        language: "Hindi",
        isPopular: true
    },
    {
        id: "hnd_4",
        title: "Apna Bana Le Lofi",
        artist: "Arijit Singh & Sachin-Jigar",
        duration: "0:40",
        category: "Chill",
        language: "Hindi"
    },
    // English Tracks
    {
        id: "eng_1",
        title: "Viral Reel Beats 2026",
        artist: "PingDart Audio Lab",
        duration: "0:30",
        category: "Trending",
        language: "English",
        isPopular: true
    },
    {
        id: "eng_2",
        title: "Summer Nostalgia Chill",
        artist: "Lofi Vibes Studio",
        duration: "0:45",
        category: "Chill",
        language: "English"
    },
    {
        id: "eng_3",
        title: "Cinematic Ocean Memories",
        artist: "Aura Soundscapes",
        duration: "1:00",
        category: "Cinematic",
        language: "English"
    },
    {
        id: "eng_4",
        title: "Upbeat Electro Dance",
        artist: "Neon Beatbox",
        duration: "0:30",
        category: "Dance",
        language: "English"
    },
    {
        id: "eng_5",
        title: "Acoustic Sunset Melody",
        artist: "Indie Strings",
        duration: "0:45",
        category: "Acoustic",
        language: "English"
    },
    // Telugu Tracks
    {
        id: "tel_1",
        title: "Naatu Naatu Energetic Beat",
        artist: "MM Keeravaani & Rahul Sipligunj",
        duration: "0:30",
        category: "Dance",
        language: "Telugu",
        isPopular: true
    },
    {
        id: "tel_2",
        title: "Samajavaragamana Acoustic",
        artist: "Sid Sriram & Thaman S",
        duration: "0:45",
        category: "Romantic",
        language: "Telugu",
        isPopular: true
    },
    {
        id: "tel_3",
        title: "Pushpa Oo Antava Remix",
        artist: "DSP & Indravathi Chauhan",
        duration: "0:30",
        category: "Trending",
        language: "Telugu"
    },
    {
        id: "tel_4",
        title: "Inkem Inkem Kaavaale",
        artist: "Sid Sriram & Gopi Sundar",
        duration: "0:40",
        category: "Romantic",
        language: "Telugu"
    },
    // Tamil Tracks
    {
        id: "tam_1",
        title: "Arabic Kuthu Halamithi",
        artist: "Anirudh Ravichander & Jonita",
        duration: "0:30",
        category: "Dance",
        language: "Tamil",
        isPopular: true
    },
    {
        id: "tam_2",
        title: "Kaattumalli Folk Groove",
        artist: "GV Prakash & Ilaiyaraaja",
        duration: "0:40",
        category: "Acoustic",
        language: "Tamil"
    },
    {
        id: "tam_3",
        title: "Vaathi Coming Mass Beat",
        artist: "Anirudh Ravichander",
        duration: "0:30",
        category: "Trending",
        language: "Tamil"
    },
    // Punjabi Tracks
    {
        id: "pun_1",
        title: "Elevated Viral Bass",
        artist: "Shubh & Karan Aujla",
        duration: "0:30",
        category: "Trending",
        language: "Punjabi",
        isPopular: true
    },
    {
        id: "pun_2",
        title: "Softly Romantic Vibe",
        artist: "Karan Aujla & Ikky",
        duration: "0:35",
        category: "Romantic",
        language: "Punjabi"
    },
    {
        id: "pun_3",
        title: "295 Instrumental Tribute",
        artist: "Sidhu Moose Wala Beats",
        duration: "0:45",
        category: "Cinematic",
        language: "Punjabi"
    },
    // Spanish & Global
    {
        id: "esp_1",
        title: "Despacito Latin Breeze",
        artist: "Luis Fonsi & Daddy Yankee",
        duration: "0:30",
        category: "Dance",
        language: "Spanish"
    },
    {
        id: "arb_1",
        title: "Desert Oud Night Dream",
        artist: "Cairo Vibes Lab",
        duration: "0:45",
        category: "Cinematic",
        language: "Arabic"
    }
];
const AUDIO_LANGUAGES = [
    "All",
    "Hindi",
    "Telugu",
    "Tamil",
    "Punjabi",
    "English",
    "Spanish",
    "Arabic",
    "Kannada",
    "Malayalam"
];
const AUDIO_CATEGORIES = [
    "All",
    "Trending",
    "Romantic",
    "Dance",
    "Chill",
    "Cinematic",
    "Acoustic",
    "Devotional"
];
const useReelsSoundStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        sounds: DEFAULT_SOUND_TRACKS,
        addSound: (soundData)=>{
            const newTrack = {
                ...soundData,
                id: `snd_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`
            };
            set((state)=>({
                    sounds: [
                        newTrack,
                        ...state.sounds
                    ]
                }));
        },
        deleteSound: (id)=>{
            set((state)=>({
                    sounds: state.sounds.filter((s)=>s.id !== id)
                }));
        },
        updateSound: (id, updates)=>{
            set((state)=>({
                    sounds: state.sounds.map((s)=>s.id === id ? {
                            ...s,
                            ...updates
                        } : s)
                }));
        },
        resetToDefaults: ()=>{
            set({
                sounds: DEFAULT_SOUND_TRACKS
            });
        }
    }), {
    name: "pingdart-reels-sounds-store"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/arStickersRenderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AR_STICKERS_LIST",
    ()=>AR_STICKERS_LIST,
    "drawARSticker",
    ()=>drawARSticker
]);
"use client";
const AR_STICKERS_LIST = [
    {
        id: "none",
        name: "No Mask",
        emoji: "🚫",
        description: "Natural face"
    },
    {
        id: "crown",
        name: "Gold Crown",
        emoji: "👑",
        description: "Royal sparkling crown"
    },
    {
        id: "cat_ears",
        name: "Cute Kitty",
        emoji: "🐱",
        description: "Cat ears & whiskers"
    },
    {
        id: "sunglasses",
        name: "Cool Shades",
        emoji: "🕶️",
        description: "Dark summer sunglasses"
    },
    {
        id: "cyber_visor",
        name: "Cyber Visor",
        emoji: "🥽",
        description: "Sci-Fi neon visor"
    },
    {
        id: "heart_blush",
        name: "Heart Blush",
        emoji: "💖",
        description: "Cute pink cheek hearts"
    },
    {
        id: "angel_halo",
        name: "Angel Halo",
        emoji: "😇",
        description: "Floating glowing halo"
    },
    {
        id: "sparkle_eyes",
        name: "Star Sparkles",
        emoji: "✨",
        description: "Shining stars on cheeks"
    }
];
function drawARSticker(ctx, landmarks, sticker, width, height, timeMs) {
    if (sticker === "none" || !landmarks || landmarks.length < 468) return;
    // Key MediaPipe landmarks
    // 10 = Forehead top
    // 152 = Chin bottom
    // 33 = Left eye outer
    // 263 = Right eye outer
    // 168 = Nose bridge / center eyes
    // 1 = Nose tip
    // 234 = Left cheek edge
    // 454 = Right cheek edge
    // 205 = Left cheek center
    // 425 = Right cheek center
    const p10 = {
        x: landmarks[10].x * width,
        y: landmarks[10].y * height
    };
    const p168 = {
        x: landmarks[168].x * width,
        y: landmarks[168].y * height
    };
    const p33 = {
        x: landmarks[33].x * width,
        y: landmarks[33].y * height
    };
    const p263 = {
        x: landmarks[263].x * width,
        y: landmarks[263].y * height
    };
    const p205 = {
        x: landmarks[205].x * width,
        y: landmarks[205].y * height
    };
    const p425 = {
        x: landmarks[425].x * width,
        y: landmarks[425].y * height
    };
    const faceWidth = Math.hypot(p263.x - p33.x, p263.y - p33.y) * 1.8;
    const eyeAngle = Math.atan2(p263.y - p33.y, p263.x - p33.x);
    ctx.save();
    switch(sticker){
        case "crown":
            {
                // Royal Gold Crown anchored to forehead (p10)
                ctx.translate(p10.x, p10.y);
                ctx.rotate(eyeAngle);
                const crownW = faceWidth * 0.95;
                const crownH = crownW * 0.55;
                const bounce = Math.sin(timeMs * 0.004) * 4;
                ctx.translate(0, -crownH * 0.85 + bounce);
                // Gold Gradient
                const grad = ctx.createLinearGradient(-crownW / 2, -crownH, crownW / 2, 0);
                grad.addColorStop(0, "#FFD700");
                grad.addColorStop(0.5, "#FFA500");
                grad.addColorStop(1, "#FFD700");
                ctx.fillStyle = grad;
                ctx.strokeStyle = "#FFF275";
                ctx.lineWidth = 3;
                ctx.shadowColor = "rgba(255, 215, 0, 0.7)";
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ctx.moveTo(-crownW / 2, 0);
                ctx.lineTo(-crownW / 2, -crownH * 0.75);
                ctx.lineTo(-crownW * 0.25, -crownH * 0.45);
                ctx.lineTo(0, -crownH);
                ctx.lineTo(crownW * 0.25, -crownH * 0.45);
                ctx.lineTo(crownW / 2, -crownH * 0.75);
                ctx.lineTo(crownW / 2, 0);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                // Jewels
                const jewels = [
                    -crownW * 0.4,
                    0,
                    crownW * 0.4
                ];
                jewels.forEach((jx)=>{
                    ctx.fillStyle = "#FF1493";
                    ctx.beginPath();
                    ctx.arc(jx, -crownH * 0.35, crownW * 0.04, 0, Math.PI * 2);
                    ctx.fill();
                });
                break;
            }
        case "cat_ears":
            {
                // Cute Kitty Ears on top of forehead
                ctx.translate(p10.x, p10.y);
                ctx.rotate(eyeAngle);
                const earDist = faceWidth * 0.42;
                const earSize = faceWidth * 0.35;
                // Left Ear
                ctx.fillStyle = "#FF85A2";
                ctx.beginPath();
                ctx.moveTo(-earDist - earSize / 2, -earSize * 0.3);
                ctx.lineTo(-earDist, -earSize * 1.3);
                ctx.lineTo(-earDist + earSize / 2, -earSize * 0.3);
                ctx.closePath();
                ctx.fill();
                // Inner Left Ear
                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(-earDist - earSize * 0.25, -earSize * 0.4);
                ctx.lineTo(-earDist, -earSize * 1.05);
                ctx.lineTo(-earDist + earSize * 0.25, -earSize * 0.4);
                ctx.closePath();
                ctx.fill();
                // Right Ear
                ctx.fillStyle = "#FF85A2";
                ctx.beginPath();
                ctx.moveTo(earDist - earSize / 2, -earSize * 0.3);
                ctx.lineTo(earDist, -earSize * 1.3);
                ctx.lineTo(earDist + earSize / 2, -earSize * 0.3);
                ctx.closePath();
                ctx.fill();
                // Inner Right Ear
                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.moveTo(earDist - earSize * 0.25, -earSize * 0.4);
                ctx.lineTo(earDist, -earSize * 1.05);
                ctx.lineTo(earDist + earSize * 0.25, -earSize * 0.4);
                ctx.closePath();
                ctx.fill();
                break;
            }
        case "sunglasses":
            {
                // Cool Sunglasses centered on eye bridge (p168)
                ctx.translate(p168.x, p168.y);
                ctx.rotate(eyeAngle);
                const glassW = faceWidth * 0.95;
                const glassH = glassW * 0.36;
                ctx.fillStyle = "#111111";
                ctx.strokeStyle = "#D4AF37";
                ctx.lineWidth = 4;
                ctx.shadowColor = "rgba(0,0,0,0.8)";
                ctx.shadowBlur = 10;
                // Left Lens
                ctx.beginPath();
                ctx.roundRect(-glassW * 0.46, -glassH / 2, glassW * 0.42, glassH, 14);
                ctx.fill();
                ctx.stroke();
                // Right Lens
                ctx.beginPath();
                ctx.roundRect(glassW * 0.04, -glassH / 2, glassW * 0.42, glassH, 14);
                ctx.fill();
                ctx.stroke();
                // Bridge
                ctx.beginPath();
                ctx.moveTo(-glassW * 0.04, -glassH * 0.15);
                ctx.lineTo(glassW * 0.04, -glassH * 0.15);
                ctx.stroke();
                // Lens Reflection Flare
                ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(-glassW * 0.38, -glassH * 0.3);
                ctx.lineTo(-glassW * 0.18, glassH * 0.25);
                ctx.moveTo(glassW * 0.12, -glassH * 0.3);
                ctx.lineTo(glassW * 0.32, glassH * 0.25);
                ctx.stroke();
                break;
            }
        case "cyber_visor":
            {
                // Futuristic Neon Cyberpunk Visor
                ctx.translate(p168.x, p168.y);
                ctx.rotate(eyeAngle);
                const visorW = faceWidth * 1.05;
                const visorH = visorW * 0.28;
                const cyberGrad = ctx.createLinearGradient(-visorW / 2, 0, visorW / 2, 0);
                cyberGrad.addColorStop(0, "rgba(255, 0, 128, 0.75)");
                cyberGrad.addColorStop(0.5, "rgba(0, 255, 255, 0.85)");
                cyberGrad.addColorStop(1, "rgba(255, 0, 128, 0.75)");
                ctx.fillStyle = cyberGrad;
                ctx.strokeStyle = "#00FFFF";
                ctx.lineWidth = 3;
                ctx.shadowColor = "#00FFFF";
                ctx.shadowBlur = 18;
                ctx.beginPath();
                ctx.roundRect(-visorW / 2, -visorH / 2, visorW, visorH, 16);
                ctx.fill();
                ctx.stroke();
                // HUD Lines
                ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-visorW * 0.4, 0);
                ctx.lineTo(-visorW * 0.2, 0);
                ctx.moveTo(visorW * 0.2, 0);
                ctx.lineTo(visorW * 0.4, 0);
                ctx.stroke();
                break;
            }
        case "heart_blush":
            {
                // Pink Hearts on cheeks (p205 and p425)
                const heartSize = faceWidth * 0.14;
                const drawHeart = (cx, cy)=>{
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.fillStyle = "rgba(255, 105, 180, 0.75)";
                    ctx.beginPath();
                    ctx.moveTo(0, -heartSize * 0.3);
                    ctx.bezierCurveTo(-heartSize * 0.5, -heartSize * 0.7, -heartSize, -heartSize * 0.1, 0, heartSize * 0.6);
                    ctx.bezierCurveTo(heartSize, -heartSize * 0.1, heartSize * 0.5, -heartSize * 0.7, 0, -heartSize * 0.3);
                    ctx.fill();
                    ctx.restore();
                };
                drawHeart(p205.x, p205.y);
                drawHeart(p425.x, p425.y);
                break;
            }
        case "angel_halo":
            {
                // Glowing Angel Halo above forehead
                ctx.translate(p10.x, p10.y);
                ctx.rotate(eyeAngle);
                const haloW = faceWidth * 0.85;
                const haloH = haloW * 0.26;
                const floatY = -faceWidth * 0.65 + Math.sin(timeMs * 0.005) * 5;
                ctx.translate(0, floatY);
                ctx.strokeStyle = "#FFEE58";
                ctx.lineWidth = 8;
                ctx.shadowColor = "#FFF59D";
                ctx.shadowBlur = 24;
                ctx.beginPath();
                ctx.ellipse(0, 0, haloW / 2, haloH / 2, 0, 0, Math.PI * 2);
                ctx.stroke();
                break;
            }
        case "sparkle_eyes":
            {
                // Sparkling animated stars
                const starRadius = faceWidth * 0.06;
                const pulse = 1 + Math.sin(timeMs * 0.008) * 0.25;
                const drawSparkle = (cx, cy)=>{
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.scale(pulse, pulse);
                    ctx.fillStyle = "#FFF9C4";
                    ctx.shadowColor = "#FFEB3B";
                    ctx.shadowBlur = 12;
                    ctx.beginPath();
                    for(let i = 0; i < 4; i++){
                        ctx.rotate(Math.PI / 2);
                        ctx.lineTo(0, -starRadius);
                        ctx.lineTo(starRadius * 0.25, -starRadius * 0.25);
                    }
                    ctx.fill();
                    ctx.restore();
                };
                drawSparkle(p205.x - 10, p205.y - 5);
                drawSparkle(p425.x + 10, p425.y - 5);
                break;
            }
    }
    ctx.restore();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ea756330._.js.map