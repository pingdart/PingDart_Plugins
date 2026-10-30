package minikart.in;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import androidx.core.app.RemoteInput;
import androidx.core.app.NotificationManagerCompat;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class PushNotificationReceiver extends BroadcastReceiver {
    private static final String TAG = "PushNotifReceiver";

    @Override
    public void onReceive(final Context context, Intent intent) {
        if (intent == null) return;
        final String action = intent.getAction();
        final String roomId = intent.getStringExtra("roomId");
        final int notificationId = intent.getIntExtra("notificationId", 1000);

        Log.d(TAG, "Notification Action received: action=" + action + " roomId=" + roomId);

        if ("ACTION_REPLY".equals(action) && roomId != null) {
            Bundle remoteInput = RemoteInput.getResultsFromIntent(intent);
            if (remoteInput != null) {
                CharSequence replyText = remoteInput.getCharSequence("key_text_reply");
                if (replyText != null && replyText.length() > 0) {
                    final String message = replyText.toString();
                    Log.d(TAG, "🚀 Quick reply sending to room " + roomId + ": " + message);

                    // Dismiss notification card
                    NotificationManagerCompat.from(context).cancel(notificationId);
                    NotificationManagerCompat.from(context).cancel(Math.abs(("summary_" + roomId).hashCode()));
                    PingFirebaseMessagingService.clearRoomBuffer(context, roomId);

                    // Launch app activity with reply payload so E2EE engine encrypts and sends safely
                    try {
                        Intent launchIntent = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
                        if (launchIntent != null) {
                            launchIntent.putExtra("roomId", roomId);
                            launchIntent.putExtra("pendingReplyText", message);
                            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                            context.startActivity(launchIntent);
                        }
                    } catch (Exception e) {
                        Log.e(TAG, "Failed to launch app for E2EE quick reply", e);
                    }
                }
            }
        } else if ("ACTION_DECLINE_CALL".equals(action)) {
            final String callId = intent.getStringExtra("callId");
            NotificationManagerCompat.from(context).cancel(99999);
            NotificationManagerCompat.from(context).cancel(notificationId);
            Log.d(TAG, "Declining incoming call: " + callId);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    sendApiRequest(context, "/calls/reject", "POST", "{\"callId\":\"" + (callId != null ? callId : "") + "\",\"roomId\":\"" + (roomId != null ? roomId : "") + "\"}");
                }
            }).start();
        } else if ("ACTION_MARK_READ".equals(action) && roomId != null) {
            NotificationManagerCompat.from(context).cancel(notificationId);
            NotificationManagerCompat.from(context).cancel(Math.abs(("summary_" + roomId).hashCode()));
            PingFirebaseMessagingService.clearRoomBuffer(context, roomId);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    sendApiRequest(context, "/chat/" + roomId + "/messages/read", "POST", "{}");
                }
            }).start();
        } else if ("ACTION_MUTE".equals(action) && roomId != null) {
            NotificationManagerCompat.from(context).cancel(notificationId);
            NotificationManagerCompat.from(context).cancel(Math.abs(("summary_" + roomId).hashCode()));
            new Thread(new Runnable() {
                @Override
                public void run() {
                    sendApiRequest(context, "/chat/rooms/" + roomId + "/mute", "PUT", "{}");
                }
            }).start();
        }
    }

    public static void sendApiRequest(Context context, String endpoint, String method, String jsonBody) {
        try {
            // Find token in CapacitorStorage
            String token = "";
            try {
                android.content.SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
                token = prefs.getString("access_token", "");
                if (token.isEmpty()) token = prefs.getString("auth_token", "");
                if (token.isEmpty()) token = prefs.getString("token", "");
                if (token.isEmpty()) {
                    String authStore = prefs.getString("pingdart-auth", "");
                    if (authStore.isEmpty()) authStore = prefs.getString("pingdart_auth", "");
                    if (!authStore.isEmpty()) {
                        try {
                            org.json.JSONObject json = new org.json.JSONObject(authStore);
                            org.json.JSONObject state = json.optJSONObject("state");
                            if (state != null) {
                                token = state.optString("accessToken", "");
                            }
                        } catch (Exception ignored) {}
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "Could not read SharedPreferences token", e);
            }

            // Determine Server Base URL
            String baseUrl = "https://api.chat.pingdart.com/api/v1";
            try {
                android.content.SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
                String customUrl = prefs.getString("api_base_url", "");
                if (customUrl != null && !customUrl.isEmpty()) {
                    baseUrl = customUrl;
                }
            } catch (Exception ignored) {}
            baseUrl = baseUrl.trim().replaceAll("/+$", "");
            if (!baseUrl.endsWith("/api/v1")) {
                baseUrl += "/api/v1";
            }

            String fullUrlStr = baseUrl + endpoint;
            Log.d(TAG, "Sending " + method + " request to " + fullUrlStr);

            URL url = new URL(fullUrlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod(method);
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setConnectTimeout(8000);
            conn.setReadTimeout(8000);

            if (!token.isEmpty()) {
                // Strip quotes if stored with JSON quotes
                token = token.replace("\"", "").trim();
                if (token.toLowerCase().startsWith("bearer ")) {
                    token = token.substring(7).trim();
                }
                conn.setRequestProperty("Authorization", "Bearer " + token);
            }

            conn.setDoOutput(true);
            byte[] input = jsonBody.getBytes(StandardCharsets.UTF_8);
            try (OutputStream os = conn.getOutputStream()) {
                os.write(input, 0, input.length);
            }

            int responseCode = conn.getResponseCode();
            Log.d(TAG, "🚀 Quick reply API response code: " + responseCode);

            if (responseCode >= 200 && responseCode < 300) {
                try (InputStream is = conn.getInputStream(); Scanner scanner = new Scanner(is, StandardCharsets.UTF_8.name())) {
                    String respText = scanner.useDelimiter("\\A").hasNext() ? scanner.next() : "";
                    Log.d(TAG, "Quick reply success response: " + respText);
                }
            } else {
                try (InputStream es = conn.getErrorStream()) {
                    if (es != null) {
                        try (Scanner scanner = new Scanner(es, StandardCharsets.UTF_8.name())) {
                            String errText = scanner.useDelimiter("\\A").hasNext() ? scanner.next() : "";
                            Log.e(TAG, "Quick reply error response: " + errText);
                        }
                    }
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to send API request in PushNotificationReceiver", e);
        }
    }

    private String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
    }
}
