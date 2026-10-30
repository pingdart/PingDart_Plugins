1:"$Sreact.fragment"
e:I[57150,[],""]
:HL["/_next/static/media/1cc5fa81ed27e86e-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/7543655c6ed562ba-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/d82c9d29a2d8fb64-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/css/7af69bcda33768b7.css","style"]
:HL["/_next/static/css/fad8415b2506869a.css","style"]
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
            0:{"P":null,"b":"-YOfQyaxjzdMo0NO61_Jh","p":"","c":["","pages","terms"],"i":false,"f":[[["",{"children":["(public)",{"children":["pages",{"children":[["slug","terms","d"],{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/7af69bcda33768b7.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/fad8415b2506869a.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"__variable_dd0b60 h-full antialiased dark","style":{"backgroundColor":"#0b141a"},"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],"$L3","$L4","$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["(public)","$L9",{"children":["pages","$La",{"children":[["slug","terms","d"],"$Lb",{"children":["__PAGE__","$Lc",{},null,false]},null,false]},null,false]},null,false]},null,false],"$Ld",false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
f:I[63479,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"ThemeProvider"]
10:I[64529,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"FontProvider"]
11:I[88718,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"CapacitorAuthSync"]
12:"$Sreact.suspense"
13:I[10411,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"NativeBackButtonHandler"]
14:I[89105,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"CapacitorDeepLinkHandler"]
15:I[78522,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"ForceUpdateModal"]
16:I[44443,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"DesktopUpdateModal"]
17:I[84012,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"PlanExpiryGuard"]
18:I[47672,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"OnboardingIntroLoader"]
19:I[47380,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"default"]
1a:I[9766,[],""]
1b:I[98924,[],""]
1c:I[4249,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"Toaster"]
1d:I[16806,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"DevIntroFloatingButton"]
1e:I[78272,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","2619","static/chunks/2619-b8db57ac19da49ac.js","3153","static/chunks/3153-e64ac4818944a32c.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","6132","static/chunks/6132-c080d0a2446addd4.js","4269","static/chunks/4269-df2fe55805bc7c56.js","9737","static/chunks/9737-7f328cb93f5614d4.js","1752","static/chunks/app/(public)/pages/%5Bslug%5D/page-eecc90405c1106ed.js"],"DynamicPublicPageClient"]
1f:I[24431,[],"OutletBoundary"]
21:I[15278,[],"AsyncMetadataOutlet"]
23:I[24431,[],"ViewportBoundary"]
25:I[24431,[],"MetadataBoundary"]
3:["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}]
4:["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"}]
6:["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet","media":"print","onLoad":"this.media='all'"}]
7:["$","noscript",null,{"children":["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet"}]}]
8:["$","body",null,{"suppressHydrationWarning":true,"className":"min-h-full flex flex-col bg-[#0b141a] text-[#e9edef]","children":["$","$Lf",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"storageKey":"pingdart-theme","disableTransitionOnChange":true,"children":["$","$L10",null,{"children":["$","$L11",null,{"children":[["$","$12",null,{"fallback":null,"children":["$","$L13",null,{}]}],["$","$L14",null,{}],["$","$L15",null,{}],["$","$L16",null,{}],["$","$L17",null,{}],["$","$L18",null,{}],["$","$L19",null,{"children":["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","html",null,{"children":["$","body",null,{"style":{"margin":0,"background":"#0b141a","display":"flex","alignItems":"center","justifyContent":"center","minHeight":"100vh","fontFamily":"sans-serif"},"children":["$","div",null,{"style":{"textAlign":"center","color":"#94a3b8"},"children":[["$","h1",null,{"style":{"fontSize":48,"fontWeight":900,"color":"#fff","marginBottom":8},"children":"404"}],["$","p",null,{"style":{"fontSize":16,"marginBottom":24},"children":"Page not found"}],["$","a",null,{"href":"/","style":{"padding":"10px 24px","background":"linear-gradient(135deg,#2563eb,#4f46e5)","color":"#fff","borderRadius":999,"textDecoration":"none","fontWeight":700,"fontSize":14},"children":"Go Home"}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L1c",null,{"position":"top-right"}],["$","$L1d",null,{}]]}]}]}]}]
9:["$","$1","c",{"children":[null,["$","div",null,{"className":"flex-1 flex flex-col","children":["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]}]]}]
a:["$","$1","c",{"children":[null,["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
b:["$","$1","c",{"children":[null,["$","$L1a",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1b",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
c:["$","$1","c",{"children":[["$","$L1e",null,{}],null,["$","$L1f",null,{"children":["$L20",["$","$L21",null,{"promise":"$@22"}]]}]]}]
d:["$","$1","h",{"children":[null,[["$","$L23",null,{"children":"$L24"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L25",null,{"children":["$","div",null,{"hidden":true,"children":["$","$12",null,{"fallback":null,"children":"$L26"}]}]}]]}]
24:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"}],["$","meta","2",{"name":"color-scheme","content":"light dark"}]]
20:null
27:I[80622,[],"IconMark"]
22:{"metadata":[["$","title","0",{"children":"PingDart"}],["$","meta","1",{"name":"description","content":"PingDart Mail Server"}],["$","link","2",{"rel":"icon","href":"/icon.png?9435aee28bc8a510","type":"image/png","sizes":"1254x1254"}],["$","$L27","3",{}]],"error":null,"digest":"$undefined"}
26:"$22:metadata"
