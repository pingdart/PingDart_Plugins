1:"$Sreact.fragment"
c:I[57150,[],""]
:HL["/_next/static/media/1cc5fa81ed27e86e-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/7543655c6ed562ba-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/media/d82c9d29a2d8fb64-s.p.otf","font",{"crossOrigin":"","type":"font/otf"}]
:HL["/_next/static/css/7af69bcda33768b7.css","style"]
:HL["/_next/static/css/fad8415b2506869a.css","style"]
:HL["/_next/static/css/bf5ed3c82d729a30.css","style"]
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
            0:{"P":null,"b":"-YOfQyaxjzdMo0NO61_Jh","p":"","c":["","user"],"i":false,"f":[[["",{"children":["user",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/7af69bcda33768b7.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/fad8415b2506869a.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"className":"__variable_dd0b60 h-full antialiased dark","style":{"backgroundColor":"#0b141a"},"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],"$L3","$L4","$L5","$L6","$L7"]}],"$L8"]}]]}],{"children":["user","$L9",{"children":["__PAGE__","$La",{},null,false]},null,false]},null,false],"$Lb",false]],"m":"$undefined","G":["$c",[]],"s":false,"S":true}
d:I[63479,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"ThemeProvider"]
e:I[64529,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"FontProvider"]
f:I[88718,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"CapacitorAuthSync"]
10:"$Sreact.suspense"
11:I[10411,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"NativeBackButtonHandler"]
12:I[89105,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"CapacitorDeepLinkHandler"]
13:I[78522,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"ForceUpdateModal"]
14:I[44443,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"DesktopUpdateModal"]
15:I[84012,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"PlanExpiryGuard"]
16:I[47672,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"OnboardingIntroLoader"]
17:I[47380,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"default"]
18:I[9766,[],""]
19:I[98924,[],""]
1a:I[4249,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"Toaster"]
1b:I[16806,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5854","static/chunks/5854-eeef417dd368a26e.js","263","static/chunks/263-aef0c6e453ad78d0.js","1665","static/chunks/1665-1339f4f1304884c6.js","4269","static/chunks/4269-df2fe55805bc7c56.js","6953","static/chunks/6953-662df6b286aad059.js","6842","static/chunks/6842-9f606211663ad5ed.js","7177","static/chunks/app/layout-3ca46356ec50b03c.js"],"DevIntroFloatingButton"]
1c:I[17989,[],"ClientSegmentRoot"]
1d:I[7763,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","3153","static/chunks/3153-e64ac4818944a32c.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","392","static/chunks/392-1df10cf7c7a270e4.js","2639","static/chunks/2639-16bce99d087289b4.js","9829","static/chunks/9829-cae4f96cfe6c2c2d.js","1855","static/chunks/1855-08251e2f8e49e4d0.js","6049","static/chunks/6049-a514961d48cc94a6.js","2790","static/chunks/2790-b144e0dc0d386b1d.js","7029","static/chunks/7029-d2938e58bcd8e3c3.js","773","static/chunks/773-c18f45a48c347396.js","4269","static/chunks/4269-df2fe55805bc7c56.js","1633","static/chunks/1633-4d87e47312d34d0d.js","6953","static/chunks/6953-662df6b286aad059.js","854","static/chunks/854-3634726a69bdffdf.js","3122","static/chunks/3122-3ebfc75848a8b69b.js","6687","static/chunks/6687-8ef6a0c65c2a9f58.js","5554","static/chunks/5554-d589b3ca1c5c1800.js","4053","static/chunks/4053-2b4efa8aa0c4221f.js","9826","static/chunks/9826-455a9d7a627f8b9a.js","5075","static/chunks/app/user/layout-9c325ec039dde533.js"],"default"]
1f:I[81959,[],"ClientPageRoot"]
20:I[28703,["3491","static/chunks/416e6ad5-dd3c5f0f5036c32c.js","2666","static/chunks/fcfb803e-6d015a352bb44e77.js","7501","static/chunks/144d3bae-186158f9e788c5ad.js","1761","static/chunks/d0deef33-59194872e4111dca.js","4909","static/chunks/4909-1f5c586e3e84e0a5.js","1241","static/chunks/1241-dffaf638f7ce49b5.js","8720","static/chunks/8720-bedb01d68cae4a63.js","5239","static/chunks/5239-9a33e3a80e63e22d.js","392","static/chunks/392-1df10cf7c7a270e4.js","2639","static/chunks/2639-16bce99d087289b4.js","9829","static/chunks/9829-cae4f96cfe6c2c2d.js","1855","static/chunks/1855-08251e2f8e49e4d0.js","6049","static/chunks/6049-a514961d48cc94a6.js","4654","static/chunks/4654-7ca9c26dacd1ab60.js","5238","static/chunks/5238-f0c8cc2e60697b6f.js","7851","static/chunks/7851-8a9cba785d1d1c11.js","3109","static/chunks/3109-cd31ef6e95b06758.js","4269","static/chunks/4269-df2fe55805bc7c56.js","1633","static/chunks/1633-4d87e47312d34d0d.js","6953","static/chunks/6953-662df6b286aad059.js","3122","static/chunks/3122-3ebfc75848a8b69b.js","6687","static/chunks/6687-8ef6a0c65c2a9f58.js","1977","static/chunks/1977-56f2415fed3a6b16.js","4053","static/chunks/4053-2b4efa8aa0c4221f.js","3960","static/chunks/3960-0d8b7759a1f0a43d.js","8703","static/chunks/8703-79ecde636c613fea.js","1584","static/chunks/app/user/page-407b89d6565e6402.js"],"default"]
23:I[24431,[],"OutletBoundary"]
25:I[15278,[],"AsyncMetadataOutlet"]
27:I[24431,[],"ViewportBoundary"]
29:I[24431,[],"MetadataBoundary"]
3:["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}]
4:["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}]
5:["$","link",null,{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"}]
6:["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet","media":"print","onLoad":"this.media='all'"}]
7:["$","noscript",null,{"children":["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Outfit:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap","rel":"stylesheet"}]}]
8:["$","body",null,{"suppressHydrationWarning":true,"className":"min-h-full flex flex-col bg-[#0b141a] text-[#e9edef]","children":["$","$Ld",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"storageKey":"pingdart-theme","disableTransitionOnChange":true,"children":["$","$Le",null,{"children":["$","$Lf",null,{"children":[["$","$10",null,{"fallback":null,"children":["$","$L11",null,{}]}],["$","$L12",null,{}],["$","$L13",null,{}],["$","$L14",null,{}],["$","$L15",null,{}],["$","$L16",null,{}],["$","$L17",null,{"children":["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","html",null,{"children":["$","body",null,{"style":{"margin":0,"background":"#0b141a","display":"flex","alignItems":"center","justifyContent":"center","minHeight":"100vh","fontFamily":"sans-serif"},"children":["$","div",null,{"style":{"textAlign":"center","color":"#94a3b8"},"children":[["$","h1",null,{"style":{"fontSize":48,"fontWeight":900,"color":"#fff","marginBottom":8},"children":"404"}],["$","p",null,{"style":{"fontSize":16,"marginBottom":24},"children":"Page not found"}],["$","a",null,{"href":"/","style":{"padding":"10px 24px","background":"linear-gradient(135deg,#2563eb,#4f46e5)","color":"#fff","borderRadius":999,"textDecoration":"none","fontWeight":700,"fontSize":14},"children":"Go Home"}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L1a",null,{"position":"top-right"}],["$","$L1b",null,{}]]}]}]}]}]
9:["$","$1","c",{"children":[null,["$","$L1c",null,{"Component":"$1d","slots":{"children":["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]},"params":{},"promise":"$@1e"}]]}]
a:["$","$1","c",{"children":[["$","$L1f",null,{"Component":"$20","searchParams":{},"params":"$9:props:children:1:props:params","promises":["$@21","$@22"]}],[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/bf5ed3c82d729a30.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","$L23",null,{"children":["$L24",["$","$L25",null,{"promise":"$@26"}]]}]]}]
b:["$","$1","h",{"children":[null,[["$","$L27",null,{"children":"$L28"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L29",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L2a"}]}]}]]}]
1e:"$9:props:children:1:props:params"
21:{}
22:"$9:props:children:1:props:params"
28:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"}],["$","meta","2",{"name":"color-scheme","content":"light dark"}]]
24:null
2b:I[80622,[],"IconMark"]
26:{"metadata":[["$","title","0",{"children":"PingDart"}],["$","meta","1",{"name":"description","content":"PingDart Mail Server"}],["$","link","2",{"rel":"icon","href":"/icon.png?9435aee28bc8a510","type":"image/png","sizes":"1254x1254"}],["$","$L2b","3",{}]],"error":null,"digest":"$undefined"}
2a:"$26:metadata"
