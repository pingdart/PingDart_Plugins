1:"$Sreact.fragment"
b:I[57150,[],""]
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
            0:{"P":null,"b":"fdW1qLccd3y2q-daJRkkY","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/7af69bcda33768b7.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/8012ec99be17929e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"__variable_dd0b60 h-full antialiased dark","style":{"backgroundColor":"#0b141a"},"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],"$L3","$L4","$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["__PAGE__","$L9",{},null,false]},null,false],"$La",false]],"m":"$undefined","G":["$b",[]],"s":false,"S":true}
c:I[63479,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"ThemeProvider"]
d:I[64529,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"FontProvider"]
e:I[88718,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"CapacitorAuthSync"]
f:"$Sreact.suspense"
10:I[10411,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"NativeBackButtonHandler"]
11:I[89105,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"CapacitorDeepLinkHandler"]
12:I[78522,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"ForceUpdateModal"]
13:I[44443,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"DesktopUpdateModal"]
14:I[84012,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"PlanExpiryGuard"]
15:I[47672,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"OnboardingIntroLoader"]
16:I[47380,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"default"]
17:I[9766,[],""]
18:I[98924,[],""]
19:I[4249,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"Toaster"]
1a:I[16806,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-6625f599ff7059b0.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-ffff474e9aaa443a.js"],"DevIntroFloatingButton"]
1b:I[1734,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"NativeMobileGate"]
1c:I[66451,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"ElectronRedirect"]
1d:I[22297,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"LandingNav"]
1e:I[82546,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"HeroSection"]
1f:I[36552,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"PreloadChunks"]
2a:I[24431,[],"OutletBoundary"]
2c:I[15278,[],"AsyncMetadataOutlet"]
2e:I[24431,[],"ViewportBoundary"]
30:I[24431,[],"MetadataBoundary"]
3:["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}]
4:["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"}]
6:["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet","media":"print","onLoad":"this.media='all'"}]
7:["$","noscript",null,{"children":["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet"}]}]
8:["$","body",null,{"suppressHydrationWarning":true,"className":"min-h-full flex flex-col bg-[#0b141a] text-[#e9edef]","children":["$","$Lc",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"storageKey":"pingdart-theme","disableTransitionOnChange":true,"children":["$","$Ld",null,{"children":["$","$Le",null,{"children":[["$","$f",null,{"fallback":null,"children":["$","$L10",null,{}]}],["$","$L11",null,{}],["$","$L12",null,{}],["$","$L13",null,{}],["$","$L14",null,{}],["$","$L15",null,{}],["$","$L16",null,{"children":["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","html",null,{"children":["$","body",null,{"style":{"margin":0,"background":"#0b141a","display":"flex","alignItems":"center","justifyContent":"center","minHeight":"100vh","fontFamily":"sans-serif"},"children":["$","div",null,{"style":{"textAlign":"center","color":"#94a3b8"},"children":[["$","h1",null,{"style":{"fontSize":48,"fontWeight":900,"color":"#fff","marginBottom":8},"children":"404"}],["$","p",null,{"style":{"fontSize":16,"marginBottom":24},"children":"Page not found"}],["$","a",null,{"href":"/","style":{"padding":"10px 24px","background":"linear-gradient(135deg,#2563eb,#4f46e5)","color":"#fff","borderRadius":999,"textDecoration":"none","fontWeight":700,"fontSize":14},"children":"Go Home"}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L19",null,{"position":"top-right"}],["$","$L1a",null,{}]]}]}]}]}]
9:["$","$1","c",{"children":[["$","$L1b",null,{"children":[["$","$L1c",null,{}],["$","div",null,{"className":"relative min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-blue-500/25 dark:bg-[#050814] dark:text-white","children":[["$","div",null,{"aria-hidden":true,"className":"pointer-events-none absolute inset-x-0 top-0 h-[72vh] bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),_transparent_58%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.18),_transparent_55%)]"}],["$","$L1d",null,{}],["$","main",null,{"className":"relative","children":[["$","$L1e",null,{}],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/MetricsSection"]}],"$L20"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/EnterpriseServicesSection"]}],"$L21"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/ProblemSection"]}],"$L22"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/RoiCalculatorSection"]}],"$L23"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/SecuritySection"]}],"$L24"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/ModelsShowcaseSection"]}],"$L25"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/PricingSection"]}],"$L26"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/public/HomeFaqSection"]}],"$L27"],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/landing/FinalCtaSection"]}],"$L28"]]}],[["$","$L1f",null,{"moduleIds":["app/page.tsx -> @/components/public/PublicFooter"]}],"$L29"]]}]]}],null,["$","$L2a",null,{"children":["$L2b",["$","$L2c",null,{"promise":"$@2d"}]]}]]}]
a:["$","$1","h",{"children":[null,[["$","$L2e",null,{"children":"$L2f"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L30",null,{"children":["$","div",null,{"hidden":true,"children":["$","$f",null,{"fallback":null,"children":"$L31"}]}]}]]}]
32:I[62137,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"MetricsSection"]
33:I[57457,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"EnterpriseServicesSection"]
34:I[2215,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"ProblemSection"]
35:I[79566,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"RoiCalculatorSection"]
36:I[92228,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"SecuritySection"]
37:I[88117,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"ModelsShowcaseSection"]
38:I[75870,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"PricingSection"]
39:I[63573,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"HomeFaqSection"]
3a:I[49820,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"FinalCtaSection"]
3b:I[75019,["3491","static/chunks/416e6ad5-a69a9ac609e0cbda.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-a31e6e192173abd3.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-10182549734b390e.js","6677","static/chunks/6677-d43946a6945eeac8.js","2510","static/chunks/2510-1d69946e7f402db7.js","4269","static/chunks/4269-6625f599ff7059b0.js","9737","static/chunks/9737-7f328cb93f5614d4.js","5274","static/chunks/5274-2b462317eece06dd.js","5177","static/chunks/5177-141b7019122c52bb.js","8974","static/chunks/app/page-4f95a2ab7b2ba4de.js"],"PublicFooter"]
20:["$","$L32",null,{}]
21:["$","$L33",null,{}]
22:["$","$L34",null,{}]
23:["$","$L35",null,{}]
24:["$","$L36",null,{}]
25:["$","$L37",null,{}]
26:["$","$L38",null,{}]
27:["$","$L39",null,{}]
28:["$","$L3a",null,{}]
29:["$","$L3b",null,{}]
2f:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"}],["$","meta","2",{"name":"color-scheme","content":"light dark"}]]
2b:null
3c:I[80622,[],"IconMark"]
2d:{"metadata":[["$","title","0",{"children":"PingDart"}],["$","meta","1",{"name":"description","content":"PingDart Mail Server"}],["$","link","2",{"rel":"icon","href":"/icon.png?9435aee28bc8a510","type":"image/png","sizes":"1254x1254"}],["$","$L3c","3",{}]],"error":null,"digest":"$undefined"}
31:"$2d:metadata"
