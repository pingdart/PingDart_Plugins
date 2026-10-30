package minikart.in;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.webkit.PermissionRequest;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.splashscreen.SplashScreen;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebChromeClient;
import com.getcapacitor.BridgeWebViewClient;

import minikart.in.mesh.PingDartMeshPlugin;

public class MainActivity extends BridgeActivity {
    public static volatile boolean isAppReady = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        isAppReady = false;
        try {
            SplashScreen splashScreen = SplashScreen.installSplashScreen(this);
            splashScreen.setKeepOnScreenCondition(() -> !isAppReady);

            // Safety fallback: dismiss splash after 4000ms max so app never hangs
            new android.os.Handler(android.os.Looper.getMainLooper()).postDelayed(() -> {
                if (!isAppReady) {
                    android.util.Log.i("PingDartSplash", ">>> Safety timeout reached (4000ms), dismissing splash.");
                    isAppReady = true;
                }
            }, 4000);
        } catch (Exception e) {
            e.printStackTrace();
        }

        registerPlugin(SimCardPlugin.class);
        registerPlugin(PingDartMeshPlugin.class);
        super.onCreate(savedInstanceState);

        // 0. Enable full Edge-to-Edge: let WebView draw seamlessly behind status bar and navigation bar
        try {
            androidx.core.view.WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
            getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
            getWindow().setNavigationBarColor(android.graphics.Color.TRANSPARENT);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                getWindow().setStatusBarContrastEnforced(false);
                getWindow().setNavigationBarContrastEnforced(false);
            }

            // Status bar icons light/white for blue header
            androidx.core.view.WindowInsetsControllerCompat insetsController =
                androidx.core.view.WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
            if (insetsController != null) {
                insetsController.setAppearanceLightStatusBars(false);
            }

            // Prevent system bars from injecting padding blocks into the decor view
            androidx.core.view.ViewCompat.setOnApplyWindowInsetsListener(getWindow().getDecorView(), (v, insets) -> {
                androidx.core.graphics.Insets statusInsets = insets.getInsets(
                    androidx.core.view.WindowInsetsCompat.Type.statusBars() |
                    androidx.core.view.WindowInsetsCompat.Type.displayCutout()
                );
                androidx.core.graphics.Insets navInsets = insets.getInsets(
                    androidx.core.view.WindowInsetsCompat.Type.navigationBars()
                );
                androidx.core.graphics.Insets imeInsets = insets.getInsets(
                    androidx.core.view.WindowInsetsCompat.Type.ime()
                );
                boolean keyboardVisible = insets.isVisible(
                    androidx.core.view.WindowInsetsCompat.Type.ime()
                );

                // Zero top padding so web header extends behind the status bar seamlessly
                v.setPadding(0, 0, 0, keyboardVisible ? imeInsets.bottom : 0);

                float density = getResources().getDisplayMetrics().density;
                int topDp = Math.round(statusInsets.top / density);
                int bottomDp = Math.round((keyboardVisible ? 0 : navInsets.bottom) / density);

                if (bridge != null && bridge.getWebView() != null) {
                    String script = String.format(
                        java.util.Locale.US,
                        "try {" +
                        "  document.documentElement.style.setProperty('--safe-area-inset-top', '%dpx');" +
                        "  document.documentElement.style.setProperty('--safe-area-inset-bottom', '%dpx');" +
                        "  document.documentElement.style.setProperty('--sat', '%dpx');" +
                        "  document.documentElement.style.setProperty('--sab', '%dpx');" +
                        "} catch(e) {}",
                        topDp, bottomDp, topDp, bottomDp
                    );
                    bridge.getWebView().evaluateJavascript(script, null);
                }
                return insets;
            });
        } catch (Exception e) {
            e.printStackTrace();
        }

        // 1. Request Android OS Hardware Permissions after initial frame renders
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            new android.os.Handler(android.os.Looper.getMainLooper()).postDelayed(() -> {
                try {
                    java.util.List<String> permList = new java.util.ArrayList<>();
                    permList.add(Manifest.permission.CAMERA);
                    permList.add(Manifest.permission.RECORD_AUDIO);
                    permList.add(Manifest.permission.MODIFY_AUDIO_SETTINGS);
                    permList.add(Manifest.permission.READ_PHONE_STATE);
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        permList.add(Manifest.permission.READ_PHONE_NUMBERS);
                    }
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        permList.add(Manifest.permission.POST_NOTIFICATIONS);
                    }

                    java.util.List<String> toRequest = new java.util.ArrayList<>();
                    for (String perm : permList) {
                        if (ContextCompat.checkSelfPermission(this, perm) != PackageManager.PERMISSION_GRANTED) {
                            toRequest.add(perm);
                        }
                    }
                    if (!toRequest.isEmpty() && !isFinishing() && !isDestroyed()) {
                        ActivityCompat.requestPermissions(this, toRequest.toArray(new String[0]), 1001);
                    }
                } catch (Exception ignored) {}
            }, 1500);
        }

        // 2. Extend BridgeWebChromeClient and BridgeWebViewClient for permissions and OOM crash recovery
        if (this.bridge != null && this.bridge.getWebView() != null) {
            this.bridge.getWebView().setBackgroundColor(android.graphics.Color.parseColor("#0B141A"));
            try {
                this.bridge.getWebView().addJavascriptInterface(new Object() {
                    @android.webkit.JavascriptInterface
                    public void notifyAppReady() {
                        android.util.Log.i("PingDartSplash", ">>> notifyAppReady called from JS! Dismissing splash.");
                        runOnUiThread(() -> {
                            isAppReady = true;
                        });
                    }
                }, "PingDartSplash");
            } catch (Exception ignored) {}
            try {
                String defaultUa = this.bridge.getWebView().getSettings().getUserAgentString();
                if (defaultUa != null && !defaultUa.contains("PingDartNative")) {
                    this.bridge.getWebView().getSettings().setUserAgentString(defaultUa + " PingDartNative/Android");
                }
            } catch (Exception e) {}
            this.bridge.getWebView().getSettings().setMediaPlaybackRequiresUserGesture(false);
            this.bridge.getWebView().getSettings().setDomStorageEnabled(true);
            this.bridge.getWebView().getSettings().setDatabaseEnabled(true);

            this.bridge.getWebView().setWebChromeClient(new BridgeWebChromeClient(this.bridge) {
                @Override
                public void onPermissionRequest(final PermissionRequest request) {
                    runOnUiThread(() -> {
                        try {
                            request.grant(request.getResources());
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    });
                }
            });

            this.bridge.getWebView().setWebViewClient(new BridgeWebViewClient(this.bridge) {
                @Override
                public void onPageFinished(WebView view, String url) {
                    super.onPageFinished(view, url);
                    handleNotificationIntent(getIntent());
                }

                @Override
                public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                    if (view != null) {
                        try {
                            view.reload();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    return true;
                }
            });
        }

        handleNotificationIntent(getIntent());
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        handleNotificationIntent(intent);
    }

    private void handleNotificationIntent(Intent intent) {
        if (intent == null) return;
        String roomId = intent.getStringExtra("roomId");
        if (roomId == null) roomId = intent.getStringExtra("chatId");
        String type = intent.getStringExtra("type");
        String deepLink = intent.getStringExtra("deepLink");
        String callId = intent.getStringExtra("callId");
        String senderName = intent.getStringExtra("senderName");
        String avatarUrl = intent.getStringExtra("avatarUrl");
        String isGroup = intent.getStringExtra("isGroup");
        if (isGroup == null) isGroup = String.valueOf(intent.getBooleanExtra("isGroup", false));
        String roomName = intent.getStringExtra("roomName");
        String senderId = intent.getStringExtra("senderId");

        final String finalRoomId = roomId != null ? roomId : "";
        final String finalType = type != null ? type : (finalRoomId.isEmpty() ? "general" : "chat");
        final String finalDeepLink = deepLink != null ? deepLink : (!finalRoomId.isEmpty() ? "/user?tab=Chats&msgId=" + finalRoomId : "");
        final String finalCallId = callId != null ? callId : "";
        final String finalSenderName = senderName != null ? senderName : (roomName != null ? roomName : "Chat");
        final String finalAvatarUrl = avatarUrl != null ? avatarUrl : "";
        final String finalIsGroup = isGroup != null ? isGroup : "false";
        final String finalSenderId = senderId != null ? senderId : "";

        // Force wake screen & show over lock screen for incoming calls (Samsung, Xiaomi, Vivo, Oppo)
        if ("call".equalsIgnoreCase(finalType) || intent.hasExtra("callAction") || intent.hasExtra("callId")) {
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
                    setShowWhenLocked(true);
                    setTurnScreenOn(true);
                } else {
                    getWindow().addFlags(
                        android.view.WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED |
                        android.view.WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON |
                        android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
                    );
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        if (!finalRoomId.isEmpty()) {
            try {
                android.app.NotificationManager nm = (android.app.NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                if (nm != null) {
                    nm.cancel(Math.abs(("chat_room_" + finalRoomId).hashCode()));
                    nm.cancel(Math.abs(("summary_" + finalRoomId).hashCode()));
                }
                PingFirebaseMessagingService.clearRoomBuffer(this, finalRoomId);
            } catch (Exception ignored) {}
        }

        if (!finalRoomId.isEmpty() || !finalDeepLink.isEmpty()) {
            if (this.bridge != null && this.bridge.getWebView() != null) {
                Runnable dispatchRunnable = () -> {
                    try {
                        String escapedSender = finalSenderName.replace("\\", "\\\\").replace("'", "\\'").replace("\"", "\\\"");
                        String escapedAvatar = finalAvatarUrl.replace("\\", "\\\\").replace("'", "\\'").replace("\"", "\\\"");
                        String escapedDeepLink = finalDeepLink.replace("\\", "\\\\").replace("'", "\\'").replace("\"", "\\\"");

                        String script = String.format(
                            "(function() {" +
                            "  var payload = {" +
                            "    type: '%s'," +
                            "    roomId: '%s'," +
                            "    deepLink: '%s'," +
                            "    callId: '%s'," +
                            "    senderName: '%s'," +
                            "    name: '%s'," +
                            "    avatarUrl: '%s'," +
                            "    avatar: '%s'," +
                            "    isGroup: %s," +
                            "    senderId: '%s'" +
                            "  };" +
                            "  window.__initialNotificationPayload = payload;" +
                            "  try {" +
                            "    localStorage.setItem('pending_notification_chat', JSON.stringify(payload));" +
                            "    if ('%s') {" +
                            "      sessionStorage.setItem('pending_chat_meta_' + '%s', JSON.stringify(payload));" +
                            "    }" +
                            "  } catch(e) {}" +
                            "  window.dispatchEvent(new CustomEvent('notificationDeepLink', { detail: payload }));" +
                            "  if ('%s') {" +
                            "    window.dispatchEvent(new CustomEvent('openChatRoom', { detail: payload }));" +
                            "  }" +
                            "})();",
                            finalType, finalRoomId, escapedDeepLink, finalCallId,
                            escapedSender, escapedSender, escapedAvatar, escapedAvatar,
                            "true".equalsIgnoreCase(finalIsGroup) ? "true" : "false", finalSenderId,
                            finalRoomId, finalRoomId,
                            finalRoomId
                        );
                        this.bridge.getWebView().evaluateJavascript(script, null);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                };

                // Dispatch immediately for 0ms transition if WebView is already ready
                runOnUiThread(dispatchRunnable);
                // Also schedule once with 150ms backoff in case WebView was in background pause
                this.bridge.getWebView().postDelayed(dispatchRunnable, 150);
            }
        }
    }

    @Override
    public void onConfigurationChanged(android.content.res.Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        try {
            if (this.bridge != null && this.bridge.getWebView() != null) {
                boolean isNight = (newConfig.uiMode & android.content.res.Configuration.UI_MODE_NIGHT_MASK) == android.content.res.Configuration.UI_MODE_NIGHT_YES;
                this.bridge.getWebView().evaluateJavascript(
                    "window.dispatchEvent(new CustomEvent('nativeThemeChanged', { detail: { isDark: " + isNight + " } }));",
                    null
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        try {
            if (this.bridge != null && this.bridge.getWebView() != null) {
                boolean isNight = (getResources().getConfiguration().uiMode & android.content.res.Configuration.UI_MODE_NIGHT_MASK) == android.content.res.Configuration.UI_MODE_NIGHT_YES;
                this.bridge.getWebView().evaluateJavascript(
                    "window.dispatchEvent(new CustomEvent('nativeThemeChanged', { detail: { isDark: " + isNight + " } }));",
                    null
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

