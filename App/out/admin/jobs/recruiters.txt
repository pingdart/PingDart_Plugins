1:"$Sreact.fragment"
e:I[57150,[],""]
:HL["/_next/static/media/1cc5fa81ed27e86e-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/7543655c6ed562ba-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/d82c9d29a2d8fb64-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/css/7af69bcda33768b7.css","style"]
:HL["/_next/static/css/8012ec99be17929e.css","style"]
2:T167f,
              (function() {
                try {
                  var root = document.documentElement;
                  root.style.backgroundColor = '#0b141a';

                  var origError = console.error;
                  console.error = function() {
                    var args = Array.prototype.slice.call(arguments);
                    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && Object.keys(args[0]).length === 0) {
                      return;
                    }
                    return origError.apply(console, args);
                  };

                  // ── Electron check ────────────────────────────────
                  var isElectron = (
                    navigator.userAgent.toLowerCase().indexOf('electron') !== -1 ||
                    (typeof window !== 'undefined' && window.__ELECTRON__ === true)
                  );

                  var isNative = !isElectron && !!( 
                    (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) ||
                    (window.androidBridge !== undefined) ||
                    (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.bridge) ||
                    /PingDartNative|Android.*wv|Mobile.*Version\/[0-9]/i.test(navigator.userAgent) ||
                    window.location.protocol === 'capacitor:' ||
                    window.location.protocol === 'ionic:'
                  );

                  if (isNative) {
                    root.classList.add('is-native');
                    root.setAttribute('data-is-native', 'true');
                  }

                  // ── System Dark Mode Auto-Detection & Migration ───────────────
                  try {
                    var migrated = localStorage.getItem('pingdart-theme-v2-migrated');
                    if (!migrated) {
                      var stored = localStorage.getItem('pingdart-theme');
                      if (!stored || stored === 'light') {
                        localStorage.setItem('pingdart-theme', 'system');
                      }
                      localStorage.setItem('pingdart-theme-v2-migrated', 'true');
                    }

                    var activeTheme = localStorage.getItem('pingdart-theme') || 'system';
                    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var isDark = activeTheme === 'dark' || (activeTheme === 'system' && prefersDark);
                    if (isDark) {
                      root.classList.add('dark');
                      root.classList.remove('light');
                      root.style.colorScheme = 'dark';
                      root.style.backgroundColor = '#0b141a';
                    } else {
                      root.classList.remove('dark');
                      root.classList.add('light');
                      root.style.colorScheme = 'light';
                      root.style.backgroundColor = '#ffffff';
                    }
                  } catch(themeErr) {}

                  // ── Font Style & Size Auto-Restore ─────────────────────────
                  try {
                    var savedFont = localStorage.getItem('appearance_font_style') || localStorage.getItem('app-font') || 'default';
                    root.setAttribute('data-font-style', savedFont);
                    var savedFontSize = localStorage.getItem('appearance_font_size');
                    if (savedFontSize === 'Small') {
                      root.style.fontSize = '14px';
                    } else if (savedFontSize === 'Large') {
                      root.style.fontSize = '18px';
                    }
                  } catch(fontErr) {}
                  
                  // Show dark cover on native whenever user has no valid token and hasn't seen intro
                  var hasToken = !!localStorage.getItem('access_token') || !!localStorage.getItem('auth_token') || !!localStorage.getItem('token') || !!localStorage.getItem('user');
                  var hasSeenIntro = localStorage.getItem('hasSeenIntro') === 'true';
                  var isAuthRoute = window.location.pathname.indexOf('/login') !== -1 || window.location.pathname.indexOf('/register') !== -1;
                  if (isNative && !hasToken && !hasSeenIntro && !isAuthRoute) {
                    root.setAttribute('data-pending-onboarding', 'true');
                  }
                  window.addEventListener('error', function(e) {
                    if (e && e.message && (e.message.indexOf('Loading chunk') !== -1 || e.message.indexOf('ChunkLoadError') !== -1)) {
                      var reloadKey = 'pingdart-chunk-reload-attempted';
                      var reloadAttempted = false;
                      try {
                        reloadAttempted = sessionStorage.getItem(reloadKey) === 'true';
                      } catch (storageError) {}

                      if (reloadAttempted) {
                        console.error('[PingDart] Chunk load still failing after one reload; stopping reload loop.', e.message);
                        return;
                      }

                      try {
                        sessionStorage.setItem(reloadKey, 'true');
                      } catch (storageError) {}
                      console.warn('[PingDart] Chunk load error detected, retrying once...', e.message);
                      window.location.reload();
                    }
                  });
                } catch(e) {}
              })();
            0:{"P":null,"b":"fdW1qLccd3y2q-daJRkkY","p":"","c":["","admin","jobs","recruiters"],"i":false,"f":[[["",{"children":["admin",{"children":["jobs",{"children":["recruiters",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/7af69bcda33768b7.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/8012ec99be17929e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"__variable_dd0b60 h-full antialiased dark","style":{"backgroundColor":"#0b141a"},"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],"$L3","$L4","$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["admin","$L9",{"children":["jobs","$La",{"children":["recruiters","$Lb",{"children":["__PAGE__","$Lc",{},null,false]},null,false]},null,false]},null,false]},null,false],"$Ld",false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
f:I[63479,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"ThemeProvider"]
10:I[64529,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"FontProvider"]
11:I[88718,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"CapacitorAuthSync"]
12:"$Sreact.suspense"
13:I[10411,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"NativeBackButtonHandler"]
14:I[89105,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"CapacitorDeepLinkHandler"]
15:I[78522,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"ForceUpdateModal"]
16:I[44443,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"DesktopUpdateModal"]
17:I[84012,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"PlanExpiryGuard"]
18:I[47672,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"OnboardingIntroLoader"]
19:I[47380,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"default"]
1a:I[9766,[],""]
1b:I[98924,[],""]
1c:I[4249,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"Toaster"]
1d:I[16806,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"DevIntroFloatingButton"]
1e:I[17989,[],"ClientSegmentRoot"]
1f:I[12196,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","392","static/chunks/392-1df10cf7c7a270e4.js","2639","static/chunks/2639-16bce99d087289b4.js","1769","static/chunks/1769-42df7e2ce68bc64f.js","9829","static/chunks/9829-cae4f96cfe6c2c2d.js","1855","static/chunks/1855-08251e2f8e49e4d0.js","2790","static/chunks/2790-b144e0dc0d386b1d.js","5088","static/chunks/5088-9ecdb0ed9fbf8a9d.js","4269","static/chunks/4269-6625f599ff7059b0.js","1633","static/chunks/1633-745eda0fec0c4abb.js","6953","static/chunks/6953-662df6b286aad059.js","854","static/chunks/854-3634726a69bdffdf.js","6687","static/chunks/6687-8ef6a0c65c2a9f58.js","9826","static/chunks/9826-b09428ae0a28f72f.js","6555","static/chunks/6555-eff513ef12839b88.js","7581","static/chunks/app/admin/layout-31d0224f60c47969.js"],"default"]
21:I[81959,[],"ClientPageRoot"]
22:I[12079,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","4269","static/chunks/4269-6625f599ff7059b0.js","794","static/chunks/app/admin/jobs/recruiters/page-b365ef69eda30dc0.js"],"default"]
25:I[24431,[],"OutletBoundary"]
27:I[15278,[],"AsyncMetadataOutlet"]
29:I[24431,[],"ViewportBoundary"]
2b:I[24431,[],"MetadataBoundary"]
3:["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}]
4:["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"}]
6:["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet","media":"print","onLoad":"this.media='all'"}]
7:["$","noscript",null,{"children":["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet"}]}]
8:["$","body",null,{"suppressHydrationWarning":true,"className":"min-h-full flex flex-col bg-[#0b141a] text-[#e9edef]","children":["$","$Lf",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"storageKey":"pingdart-theme","disableTransitionOnChange":true,"children":["$","$L10",null,{"children":["$","$L11",null,{"children":[["$","$12",null,{"fallback":null,"children":["$","$L13",null,{}]}],["$","$L14",null,{}],["$","$L15",null,{}],["$","$L16",null,{}],["$","$L17",null,{}],["$","$L18",null,{}],["$","$L19",null,{"children":["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","html",null,{"children":["$","body",null,{"style":{"margin":0,"background":"#0b141a","display":"flex","alignItems":"center","justifyContent":"center","minHeight":"100vh","fontFamily":"sans-serif"},"children":["$","div",null,{"style":{"textAlign":"center","color":"#94a3b8"},"children":[["$","h1",null,{"style":{"fontSize":48,"fontWeight":900,"color":"#fff","marginBottom":8},"children":"404"}],["$","p",null,{"style":{"fontSize":16,"marginBottom":24},"children":"Page not found"}],["$","a",null,{"href":"/","style":{"padding":"10px 24px","background":"linear-gradient(135deg,#2563eb,#4f46e5)","color":"#fff","borderRadius":999,"textDecoration":"none","fontWeight":700,"fontSize":14},"children":"Go Home"}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L1c",null,{"position":"top-right"}],["$","$L1d",null,{}]]}]}]}]}]
9:["$","$1","c",{"children":[null,["$","$L1e",null,{"Component":"$1f","slots":{"children":["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]},"params":{},"promise":"$@20"}]]}]
a:["$","$1","c",{"children":[null,["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
b:["$","$1","c",{"children":[null,["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
c:["$","$1","c",{"children":[["$","$L21",null,{"Component":"$22","searchParams":{},"params":"$9:props:children:1:props:params","promises":["$@23","$@24"]}],null,["$","$L25",null,{"children":["$L26",["$","$L27",null,{"promise":"$@28"}]]}]]}]
d:["$","$1","h",{"children":[null,[["$","$L29",null,{"children":"$L2a"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L2b",null,{"children":["$","div",null,{"hidden":true,"children":["$","$12",null,{"fallback":null,"children":"$L2c"}]}]}]]}]
20:"$9:props:children:1:props:params"
23:{}
24:"$9:props:children:1:props:params"
2a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"}],["$","meta","2",{"name":"color-scheme","content":"light dark"}]]
26:null
2d:I[80622,[],"IconMark"]
28:{"metadata":[["$","title","0",{"children":"PingDart"}],["$","meta","1",{"name":"description","content":"PingDart Mail Server"}],["$","link","2",{"rel":"icon","href":"/icon.png?9435aee28bc8a510","type":"image/png","sizes":"1254x1254"}],["$","$L2d","3",{}]],"error":null,"digest":"$undefined"}
2c:"$28:metadata"
