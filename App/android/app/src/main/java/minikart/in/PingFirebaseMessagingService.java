package minikart.in;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.Typeface;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.core.app.Person;
import androidx.core.app.RemoteInput;
import androidx.core.graphics.drawable.IconCompat;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * Enterprise WhatsApp/Telegram-style Push Notification Service for PingDart
 * Features:
 * - MessagingStyle per conversation (1 chat = 1 stacked notification thread)
 * - Message deduplication (prevents duplicate notification bursts)
 * - Conversation grouping (.setGroup + .setGroupSummary)
 * - Full-screen incoming audio & video call notifications
 * - Lock screen privacy levels (full, sender_only, hidden, secret chat)
 * - Direct inline reply (RemoteInput)
 * - Media type labels (📷 Photo, 🎥 Video, 🎤 Voice, 📄 Document)
 */
public class PingFirebaseMessagingService extends FirebaseMessagingService {
    private static final String TAG = "PingFCMService";

    public static final String CHANNEL_MESSAGES = "messages_v2";
    public static final String CHANNEL_GROUPS = "groups_v2";
    public static final String CHANNEL_CALLS = "calls_v2";
    public static final String CHANNEL_MEETINGS = "meetings_v2";
    public static final String CHANNEL_MENTIONS = "mentions_v2";
    public static final String CHANNEL_SYSTEM = "system_v2";
    public static final String CHANNEL_MARKETING = "marketing_v2";

    private static final String PREF_NOTIF_STORE = "ChatNotificationStore";
    private static final int MAX_MESSAGES_PER_ROOM = 25;

    // Tracking active incoming call ID to avoid multiple ringing cards
    private static String activeCallId = null;

    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        Log.d(TAG, "🔥 Native FCM onMessageReceived triggered!");

        Map<String, String> data = remoteMessage.getData();
        if (data == null || data.isEmpty()) {
            if (remoteMessage.getNotification() != null) {
                showBasicNotification(
                    remoteMessage.getNotification().getTitle(),
                    remoteMessage.getNotification().getBody(),
                    null
                );
            }
            return;
        }

        String type = data.get("type");
        if (type == null) type = "chat:message";

        // 1. Multi-device Read Sync / Dismissal
        if ("notification:dismiss".equals(type) || "notification:read_sync".equals(type)) {
            handleNotificationDismiss(data);
            return;
        }

        // 2. Call Cancellation / Answered on another device
        if ("call:answered_elsewhere".equals(type) || "call:ended".equals(type)) {
            handleCallCancellation();
            return;
        }

        // 3. Handle Group Call Invitation / Start
        if ("group_call:incoming".equals(type) || "group_call".equals(type)) {
            handleGroupCallNotification(data);
            return;
        }

        // 4. Handle Incoming Audio / Video Calls
        if ("call:incoming".equals(type) || "call".equals(type)) {
            handleIncomingCallNotification(data);
            return;
        }

        // 5. Handle Missed Calls
        if ("call:missed".equals(type)) {
            handleMissedCallNotification(data);
            return;
        }

        // 6. Handle Standard Chat Messages with MessagingStyle
        handleChatMessageNotification(data);
    }


    /**
     * Handle Incoming Audio / Video Call (Full-Screen Notification)
     */
    private void handleIncomingCallNotification(Map<String, String> data) {
        final Context ctx = (getApplicationContext() != null) ? getApplicationContext() : this;

        String callId = data.get("callId");
        if (callId == null) callId = data.get("roomId");
        if (callId == null) callId = "call_" + System.currentTimeMillis();

        // Lock to single active incoming call
        if (activeCallId != null && activeCallId.equals(callId)) {
            Log.d(TAG, "Call notification already active for callId: " + callId);
            return;
        }
        activeCallId = callId;

        String callerName = data.get("callerName");
        if (callerName == null) callerName = data.get("senderName");
        if (callerName == null) callerName = "Incoming Call";

        String callerAvatar = data.get("callerAvatar");
        if (callerAvatar == null) callerAvatar = data.get("avatarUrl");

        String callerId = data.get("callerId");
        if (callerId == null) callerId = data.get("fromUserId");

        boolean isVideo = "video".equalsIgnoreCase(data.get("callType"));
        String roomId = data.get("roomId");

        // 0. Check if user is currently on another call (GSM/Cellular call or other VoIP call)
        AudioManager audioManager = (AudioManager) ctx.getSystemService(Context.AUDIO_SERVICE);
        boolean isAudioInCall = (audioManager != null && (audioManager.getMode() == AudioManager.MODE_IN_CALL || audioManager.getMode() == AudioManager.MODE_IN_COMMUNICATION));
        if (isAudioInCall) {
            Log.d(TAG, "Device is on another call (audio mode). Replying busy.");
            final String finalCallerId = callerId;
            final String finalRoomId = roomId;
            new Thread(() -> {
                PushNotificationReceiver.sendApiRequest(ctx, "/calls/busy", "POST", "{\"callerId\":\"" + (finalCallerId != null ? finalCallerId : "") + "\",\"roomId\":\"" + (finalRoomId != null ? finalRoomId : "") + "\",\"message\":\"User is on another call\"}");
            }).start();
            return;
        }

        createNotificationChannels(ctx);

        int notificationId = 99999; // Dedicated ID for active call

        // 1. Full-screen Intent (Wakes up locked device)
        Intent fullScreenIntent = new Intent(ctx, MainActivity.class);
        fullScreenIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        fullScreenIntent.putExtra("type", "call");
        fullScreenIntent.putExtra("callId", callId);
        if (roomId != null) fullScreenIntent.putExtra("roomId", roomId);
        fullScreenIntent.putExtra("callType", isVideo ? "video" : "audio");
        fullScreenIntent.putExtra("callerName", callerName);
        fullScreenIntent.putExtra("avatarUrl", callerAvatar != null ? callerAvatar : "");

        PendingIntent fullScreenPendingIntent = PendingIntent.getActivity(
            ctx,
            notificationId,
            fullScreenIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        // 2. Action: Accept Call
        Intent acceptIntent = new Intent(ctx, MainActivity.class);
        acceptIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        acceptIntent.putExtra("type", "call");
        acceptIntent.putExtra("callAction", "accept");
        acceptIntent.putExtra("callId", callId);
        if (roomId != null) acceptIntent.putExtra("roomId", roomId);
        acceptIntent.putExtra("callerName", callerName);
        acceptIntent.putExtra("avatarUrl", callerAvatar != null ? callerAvatar : "");

        PendingIntent acceptPendingIntent = PendingIntent.getActivity(
            ctx,
            notificationId + 1,
            acceptIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        // 3. Action: Decline Call
        Intent declineIntent = new Intent(ctx, PushNotificationReceiver.class);
        declineIntent.setAction("ACTION_DECLINE_CALL");
        declineIntent.putExtra("callId", callId);
        if (roomId != null) declineIntent.putExtra("roomId", roomId);
        declineIntent.putExtra("notificationId", notificationId);

        PendingIntent declinePendingIntent = PendingIntent.getBroadcast(
            ctx,
            notificationId + 2,
            declineIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        // 4. Download and create circular avatar bitmap (or initials circular DP)
        String resolvedAvatarUrl = resolveAvatarUrl(ctx, callerAvatar);
        Bitmap avatarBitmap = null;
        if (resolvedAvatarUrl != null && !resolvedAvatarUrl.isEmpty()) {
            Bitmap downloaded = downloadBitmap(resolvedAvatarUrl);
            if (downloaded != null) {
                avatarBitmap = getCircularBitmap(downloaded);
            }
        }
        if (avatarBitmap == null) {
            avatarBitmap = createInitialsBitmap(callerName, 180);
        }

        Uri ringtoneUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_CALLS)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle("Incoming " + (isVideo ? "Video" : "Audio") + " Call")
            .setContentText(callerName)
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setCategory(NotificationCompat.CATEGORY_CALL)
            .setSound(ringtoneUri)
            .setOngoing(true)
            .setAutoCancel(false)
            .setFullScreenIntent(fullScreenPendingIntent, true)
            .setContentIntent(fullScreenPendingIntent)
            .addAction(R.mipmap.ic_launcher, "🟢 Accept", acceptPendingIntent)
            .addAction(R.mipmap.ic_launcher, "🔴 Decline", declinePendingIntent);

        if (avatarBitmap != null) {
            builder.setLargeIcon(avatarBitmap);
        }

        NotificationManager notificationManager = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (notificationManager != null) {
            notificationManager.notify(notificationId, builder.build());
            Log.d(TAG, "📞 Full-screen incoming call notification posted with DP for: " + callerName);
        }

        // 5. Notify server that the call is actually ringing on this device (switches caller UI from "Calling..." to "Ringing...")
        final String finalCallerId = callerId;
        final String finalRoomId = roomId;
        new Thread(() -> {
            PushNotificationReceiver.sendApiRequest(ctx, "/calls/ringing", "POST", "{\"callerId\":\"" + (finalCallerId != null ? finalCallerId : "") + "\",\"roomId\":\"" + (finalRoomId != null ? finalRoomId : "") + "\"}");
        }).start();
    }

    /**
     * Handle Missed Call Notification
     */
    private void handleMissedCallNotification(Map<String, String> data) {
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;

        activeCallId = null; // Clear active call lock
        NotificationManager notificationManager = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (notificationManager != null) {
            notificationManager.cancel(99999); // Cancel ringing notification
        }

        String callerName = data.get("callerName");
        if (callerName == null) callerName = data.get("senderName");
        if (callerName == null) callerName = "Someone";

        String roomId = data.get("roomId");
        boolean isVideo = "video".equalsIgnoreCase(data.get("callType"));

        Intent openAppIntent = new Intent(ctx, MainActivity.class);
        openAppIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        openAppIntent.putExtra("type", "missed_call");
        if (roomId != null) openAppIntent.putExtra("roomId", roomId);

        PendingIntent pendingIntent = PendingIntent.getActivity(
            ctx,
            (int) System.currentTimeMillis(),
            openAppIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_MESSAGES)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle("📞 Missed " + (isVideo ? "Video" : "Audio") + " Call")
            .setContentText("Missed call from " + callerName)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent);

        if (notificationManager != null) {
            int notifId = (roomId != null) ? Math.abs(("missed_" + roomId).hashCode()) : (int) System.currentTimeMillis();
            notificationManager.notify(notifId, builder.build());
        }
    }

    /**
     * Handle Chat Message with MessagingStyle & Conversation Grouping
     */
    private void handleChatMessageNotification(Map<String, String> data) {
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;

        createNotificationChannels(ctx);

        String roomId = data.get("roomId");
        if (roomId == null) roomId = "general";

        String messageId = data.get("messageId");
        if (messageId == null) messageId = data.get("id");
        if (messageId == null) messageId = "msg_" + System.currentTimeMillis();

        String senderName = data.get("senderName");
        if (senderName == null) senderName = data.get("title");
        if (senderName == null) senderName = "New Message";

        String messageText = data.get("body");
        if (messageText == null) messageText = data.get("text");
        if (messageText == null) messageText = "Sent a message";

        String avatarUrl = data.get("avatarUrl");
        if (avatarUrl == null) avatarUrl = data.get("largeIcon");

        boolean isGroup = "true".equalsIgnoreCase(data.get("isGroup"));
        String roomName = data.get("roomName");
        if (roomName == null && isGroup) roomName = data.get("title");

        boolean isSecret = "true".equalsIgnoreCase(data.get("isSecret"));
        boolean isPrivate = "true".equalsIgnoreCase(data.get("isPrivate"));

        // Deduplication Check
        if (isMessageDuplicate(ctx, roomId, messageId)) {
            Log.d(TAG, "Duplicate message ignored: " + messageId);
            acknowledgeMessageDelivered(ctx, roomId, messageId, data.get("apiUrl"));
            return;
        }

        // Add to persistent conversation buffer (Max 25 per room)
        long timestamp = System.currentTimeMillis();
        try {
            if (data.containsKey("createdAt")) {
                timestamp = Long.parseLong(data.get("createdAt"));
            }
        } catch (Exception ignored) {}

        saveMessageToRoomBuffer(ctx, roomId, messageId, senderName, messageText, timestamp);

        // This native callback runs even when Android has killed the app process.
        // The JS pushNotificationReceived listener does not, so acknowledge here
        // after the message is durably added to the device notification buffer.
        acknowledgeMessageDelivered(ctx, roomId, messageId, data.get("apiUrl"));

        // Read Privacy Mode from CapacitorStorage
        SharedPreferences appPrefs = ctx.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
        String privacyMode = appPrefs.getString("notification_privacy", "full");

        int notificationId = Math.abs(("chat_room_" + roomId).hashCode());

        // 1. Tap Intent
        Intent openAppIntent = new Intent(ctx, MainActivity.class);
        openAppIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        openAppIntent.putExtra("type", "chat");
        openAppIntent.putExtra("roomId", roomId);
        openAppIntent.putExtra("senderName", senderName);
        openAppIntent.putExtra("avatarUrl", avatarUrl != null ? avatarUrl : "");
        openAppIntent.putExtra("isGroup", isGroup);
        openAppIntent.putExtra("roomName", roomName != null ? roomName : senderName);
        openAppIntent.putExtra("senderId", data.get("senderId") != null ? data.get("senderId") : "");
        openAppIntent.putExtra("deepLink", "/user?tab=Chats&msgId=" + roomId);

        PendingIntent openAppPendingIntent = PendingIntent.getActivity(
            ctx,
            notificationId,
            openAppIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationManager notificationManager = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);

        // 2. Secret Chat or "hidden" Privacy Mode (Signal-like total privacy)
        if (isSecret || "hidden".equalsIgnoreCase(privacyMode)) {
            NotificationCompat.Builder secretBuilder = new NotificationCompat.Builder(ctx, CHANNEL_MESSAGES)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("Ping")
                .setContentText(isSecret ? "New Secure Message" : "New Message")
                .setAutoCancel(true)
                .setPriority(NotificationCompat.PRIORITY_HIGH)
                .setContentIntent(openAppPendingIntent);

            if (notificationManager != null) {
                notificationManager.notify(notificationId, secretBuilder.build());
            }
            return;
        }

        // 3. "sender_only" Privacy Mode
        if (isPrivate || "sender_only".equalsIgnoreCase(privacyMode)) {
            NotificationCompat.Builder senderOnlyBuilder = new NotificationCompat.Builder(ctx, CHANNEL_MESSAGES)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(senderName)
                .setContentText(isPrivate ? "Private Message" : "New Message")
                .setAutoCancel(true)
                .setPriority(NotificationCompat.PRIORITY_HIGH)
                .setContentIntent(openAppPendingIntent);

            if (notificationManager != null) {
                notificationManager.notify(notificationId, senderOnlyBuilder.build());
            }
            return;
        }

        // 4. Standard Full MessagingStyle (WhatsApp-style stacked conversation thread)
        Person currentUser = new Person.Builder().setName("You").build();
        NotificationCompat.MessagingStyle messagingStyle = new NotificationCompat.MessagingStyle(currentUser);

        if (isGroup && roomName != null) {
            messagingStyle.setConversationTitle(roomName);
            messagingStyle.setGroupConversation(true);
        }

        // Retrieve sorted conversation buffer
        List<JSONObject> roomMsgs = getRoomMessages(ctx, roomId);
        for (JSONObject m : roomMsgs) {
            try {
                String mSender = m.optString("sender", "Someone");
                String mText = m.optString("text", "");
                long mTime = m.optLong("time", System.currentTimeMillis());

                Person senderPerson = new Person.Builder()
                    .setName(mSender)
                    .build();

                messagingStyle.addMessage(new NotificationCompat.MessagingStyle.Message(mText, mTime, senderPerson));
            } catch (Exception ignored) {}
        }

        // Action: Inline Reply
        RemoteInput remoteInput = new RemoteInput.Builder("key_text_reply")
            .setLabel("Reply")
            .build();

        Intent replyIntent = new Intent(ctx, PushNotificationReceiver.class);
        replyIntent.setAction("ACTION_REPLY");
        replyIntent.putExtra("roomId", roomId);
        replyIntent.putExtra("notificationId", notificationId);

        int flags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            flags |= PendingIntent.FLAG_MUTABLE;
        }

        PendingIntent replyPendingIntent = PendingIntent.getBroadcast(ctx, notificationId + 1, replyIntent, flags);

        NotificationCompat.Action replyAction = new NotificationCompat.Action.Builder(
            R.mipmap.ic_launcher,
            "Reply",
            replyPendingIntent
        ).addRemoteInput(remoteInput).build();

        // Action: Mark as read
        Intent readIntent = new Intent(ctx, PushNotificationReceiver.class);
        readIntent.setAction("ACTION_MARK_READ");
        readIntent.putExtra("roomId", roomId);
        readIntent.putExtra("notificationId", notificationId);

        PendingIntent readPendingIntent = PendingIntent.getBroadcast(
            ctx,
            notificationId + 2,
            readIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Action markReadAction = new NotificationCompat.Action.Builder(
            R.mipmap.ic_launcher,
            "Mark as read",
            readPendingIntent
        ).build();

        Bitmap largeIcon = downloadBitmap(avatarUrl);

        int unreadCount = roomMsgs.size();

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_MESSAGES)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setStyle(messagingStyle)
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setDefaults(NotificationCompat.DEFAULT_ALL)
            .setCategory(NotificationCompat.CATEGORY_MESSAGE)
            .setContentIntent(openAppPendingIntent)
            .setNumber(unreadCount)
            .setShortcutId(roomId)
            .addAction(replyAction)
            .addAction(markReadAction);

        if (largeIcon != null) {
            builder.setLargeIcon(largeIcon);
        } else {
            try {
                Bitmap appLogo = BitmapFactory.decodeResource(ctx.getResources(), R.mipmap.ic_launcher);
                if (appLogo != null) builder.setLargeIcon(appLogo);
            } catch (Exception ignored) {}
        }

        if (notificationManager != null) {
            notificationManager.notify(notificationId, builder.build());
            Log.d(TAG, "🚀 MessagingStyle notification posted for room " + roomId + " (thread size: " + unreadCount + ")");
        }
    }

    /**
     * Multi-device read sync: automatically dismisses notification cards
     * when the conversation is read on Desktop or Web.
     */
    private void handleNotificationDismiss(Map<String, String> data) {
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;
        String roomId = data.get("roomId");
        if (roomId != null && !roomId.isEmpty()) {
            NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm != null) {
                nm.cancel(Math.abs(("chat_room_" + roomId).hashCode()));
                nm.cancel(Math.abs(("summary_" + roomId).hashCode()));
            }
            clearRoomBuffer(ctx, roomId);
            Log.d(TAG, "Dismissed notification for room " + roomId + " via multi-device read sync");
        }
    }

    /**
     * Call cancellation: dismisses ringing alert when answered on another device or ended
     */
    private void handleCallCancellation() {
        activeCallId = null;
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm != null) {
            nm.cancel(99999);
        }
        Log.d(TAG, "Call notification dismissed (call ended or answered elsewhere)");
    }

    /**
     * Handle Incoming Group Call Notification
     */
    private void handleGroupCallNotification(Map<String, String> data) {
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;

        createNotificationChannels(ctx);

        String roomId = data.get("roomId");
        String roomName = data.get("roomName");
        if (roomName == null) roomName = "Group Call";
        String callerName = data.get("callerName");
        if (callerName == null) callerName = "Someone";
        String groupCallId = data.get("groupCallId");
        if (groupCallId == null) groupCallId = roomId;

        Intent joinIntent = new Intent(ctx, MainActivity.class);
        joinIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        joinIntent.putExtra("type", "group_call");
        joinIntent.putExtra("roomId", roomId);
        joinIntent.putExtra("callId", groupCallId);
        joinIntent.putExtra("deepLink", "/user?tab=Live&roomId=" + roomId);

        int notifId = Math.abs(("group_call_" + roomId).hashCode());
        PendingIntent joinPendingIntent = PendingIntent.getActivity(
            ctx,
            notifId,
            joinIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        Intent dismissIntent = new Intent(ctx, PushNotificationReceiver.class);
        dismissIntent.setAction("ACTION_MARK_READ");
        dismissIntent.putExtra("roomId", roomId);
        dismissIntent.putExtra("notificationId", notifId);

        PendingIntent dismissPendingIntent = PendingIntent.getBroadcast(
            ctx,
            notifId + 1,
            dismissIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        String avatarUrl = data.get("avatarUrl");
        if (avatarUrl == null) avatarUrl = data.get("callerAvatar");
        if (avatarUrl == null) avatarUrl = data.get("roomAvatar");
        String resolvedAvatar = resolveAvatarUrl(ctx, avatarUrl);
        Bitmap groupAvatarBitmap = null;
        if (resolvedAvatar != null && !resolvedAvatar.isEmpty()) {
            Bitmap downloaded = downloadBitmap(resolvedAvatar);
            if (downloaded != null) {
                groupAvatarBitmap = getCircularBitmap(downloaded);
            }
        }
        if (groupAvatarBitmap == null) {
            groupAvatarBitmap = createInitialsBitmap(roomName, 180);
        }

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_MEETINGS)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(roomName)
            .setContentText(callerName + " started a group call")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(joinPendingIntent)
            .addAction(R.mipmap.ic_launcher, "🟢 Join", joinPendingIntent)
            .addAction(R.mipmap.ic_launcher, "Dismiss", dismissPendingIntent);

        if (groupAvatarBitmap != null) {
            builder.setLargeIcon(groupAvatarBitmap);
        }

        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm != null) {
            nm.notify(notifId, builder.build());
        }
    }

    /**
     * Fallback for raw basic notifications
     */
    private void showBasicNotification(String title, String body, String roomId) {
        Context ctx = getApplicationContext();
        if (ctx == null) ctx = this;

        createNotificationChannels(ctx);

        Intent openAppIntent = new Intent(ctx, MainActivity.class);
        openAppIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        if (roomId != null) openAppIntent.putExtra("roomId", roomId);

        PendingIntent pendingIntent = PendingIntent.getActivity(
            ctx,
            (int) System.currentTimeMillis(),
            openAppIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, CHANNEL_MESSAGES)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title != null ? title : "PingDart")
            .setContentText(body != null ? body : "You have a new notification")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent);

        try {
            Bitmap appLogo = BitmapFactory.decodeResource(ctx.getResources(), R.mipmap.ic_launcher);
            if (appLogo != null) builder.setLargeIcon(appLogo);
        } catch (Exception ignored) {}

        NotificationManager mgr = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (mgr != null) {
            int notifId = (roomId != null) ? Math.abs(roomId.hashCode()) : (int) System.currentTimeMillis();
            mgr.notify(notifId, builder.build());
        }
    }

    // ── SharedPreferences Conversation Message Buffer ──────────────────────────

    private static synchronized boolean isMessageDuplicate(Context ctx, String roomId, String messageId) {
        if (messageId == null || messageId.isEmpty()) return false;
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NOTIF_STORE, Context.MODE_PRIVATE);
        String seen = prefs.getString("seen_ids_" + roomId, "");
        String[] parts = seen.split(",");
        for (String seenId : parts) {
            if (messageId.equals(seenId)) return true;
        }

        // Keep last 50 seen IDs
        StringBuilder sb = new StringBuilder(messageId);
        int count = 1;
        for (String p : parts) {
            if (!p.isEmpty() && count < 50) {
                sb.append(",").append(p);
                count++;
            }
        }
        prefs.edit().putString("seen_ids_" + roomId, sb.toString()).apply();
        return false;
    }

    public static synchronized void saveMessageToRoomBuffer(Context ctx, String roomId, String msgId, String sender, String text, long time) {
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NOTIF_STORE, Context.MODE_PRIVATE);
        String raw = prefs.getString("room_msgs_" + roomId, "[]");
        try {
            JSONArray arr = new JSONArray(raw);
            JSONObject obj = new JSONObject();
            obj.put("id", msgId);
            obj.put("sender", sender);
            obj.put("text", text);
            obj.put("time", time);

            arr.put(obj);

            // Cap at MAX_MESSAGES_PER_ROOM (25 latest)
            while (arr.length() > MAX_MESSAGES_PER_ROOM) {
                arr.remove(0);
            }

            prefs.edit().putString("room_msgs_" + roomId, arr.toString()).apply();
        } catch (Exception e) {
            Log.e(TAG, "Error saving message to room buffer", e);
        }
    }

    public static synchronized List<JSONObject> getRoomMessages(Context ctx, String roomId) {
        List<JSONObject> list = new ArrayList<>();
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NOTIF_STORE, Context.MODE_PRIVATE);
        String raw = prefs.getString("room_msgs_" + roomId, "[]");
        try {
            JSONArray arr = new JSONArray(raw);
            for (int i = 0; i < arr.length(); i++) {
                list.add(arr.getJSONObject(i));
            }
            // Sort ascending by time
            Collections.sort(list, (a, b) -> Long.compare(a.optLong("time"), b.optLong("time")));
        } catch (Exception e) {
            Log.e(TAG, "Error reading room messages buffer", e);
        }
        return list;
    }

    public static synchronized void clearRoomBuffer(Context ctx, String roomId) {
        SharedPreferences prefs = ctx.getSharedPreferences(PREF_NOTIF_STORE, Context.MODE_PRIVATE);
        prefs.edit().remove("room_msgs_" + roomId).apply();
    }

    /**
     * Acknowledge receipt from the native FCM handler so delivery checkmarks
     * update even when the WebView/app is closed. If the device has no network,
     * the request fails and normal reconnect sync will acknowledge it later.
     */
    private void acknowledgeMessageDelivered(Context ctx, String roomId, String messageId, String directApiUrl) {
        final String cleanRoomId = roomId != null ? roomId.replaceAll("\\D+", "") : "";
        final String cleanMsgId = messageId != null ? messageId.replaceAll("\\D+", "") : "";

        Runnable ackTask = () -> {
            try {
                SharedPreferences prefs = ctx.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
                String token = prefs.getString("access_token", "");
                if (token.isEmpty()) token = prefs.getString("auth_token", "");
                if (token.isEmpty()) token = prefs.getString("token", "");
                if (token.isEmpty()) {
                    String authStore = prefs.getString("pingdart-auth", "");
                    if (authStore.isEmpty()) authStore = prefs.getString("pingdart_auth", "");
                    if (!authStore.isEmpty()) {
                        try {
                            if (authStore.startsWith("\"") && authStore.endsWith("\"")) {
                                authStore = authStore.substring(1, authStore.length() - 1).replace("\\\"", "\"");
                            }
                            JSONObject json = new JSONObject(authStore);
                            JSONObject state = json.optJSONObject("state");
                            if (state != null) {
                                token = state.optString("accessToken", "");
                            }
                        } catch (Exception ignored) {}
                    }
                }
                if (token == null || token.isEmpty()) {
                    Log.w(TAG, "Cannot acknowledge message delivery: no stored auth token in CapacitorStorage");
                    return;
                }

                token = token.replace("\"", "").trim();
                if (token.toLowerCase().startsWith("bearer ")) {
                    token = token.substring(7).trim();
                }

                // Build candidate URLs with fallback
                List<String> candidateUrls = new ArrayList<>();
                if (directApiUrl != null && !directApiUrl.trim().isEmpty()) {
                    candidateUrls.add(directApiUrl.trim());
                }
                String prefBase = prefs.getString("api_base_url", "");
                if (prefBase != null && !prefBase.trim().isEmpty() && !candidateUrls.contains(prefBase.trim())) {
                    candidateUrls.add(prefBase.trim());
                }
                if (!candidateUrls.contains("https://api.chat.pingdart.com/api/v1")) {
                    candidateUrls.add("https://api.chat.pingdart.com/api/v1");
                }

                boolean ackSuccess = false;
                for (String rawBase : candidateUrls) {
                    if (ackSuccess) break;
                    String baseUrl = rawBase.replaceAll("/+$", "");
                    if (!baseUrl.endsWith("/api/v1")) {
                        baseUrl += "/api/v1";
                    }

                    String endpoint = !cleanRoomId.isEmpty()
                        ? baseUrl + "/chat/" + cleanRoomId + "/messages/delivered"
                        : baseUrl + "/chat/messages/delivered";

                    HttpURLConnection connection = null;
                    try {
                        URL url = new URL(endpoint);
                        Log.d(TAG, "🚀 Sending delivery acknowledgement to: " + url + " for msg " + cleanMsgId);
                        connection = (HttpURLConnection) url.openConnection();
                        connection.setRequestMethod("POST");
                        connection.setRequestProperty("Content-Type", "application/json; charset=utf-8");
                        connection.setRequestProperty("Authorization", "Bearer " + token);
                        connection.setConnectTimeout(4000);
                        connection.setReadTimeout(4000);
                        connection.setDoOutput(true);

                        String bodyJson;
                        if (!cleanMsgId.isEmpty()) {
                            bodyJson = "{\"messageIds\":[" + cleanMsgId + "]}";
                        } else if (!cleanRoomId.isEmpty()) {
                            bodyJson = "{\"roomId\":" + cleanRoomId + "}";
                        } else {
                            bodyJson = "{}";
                        }

                        byte[] body = bodyJson.getBytes(StandardCharsets.UTF_8);
                        try (OutputStream output = connection.getOutputStream()) {
                            output.write(body);
                        }

                        int responseCode = connection.getResponseCode();
                        if (responseCode >= 200 && responseCode < 300) {
                            Log.d(TAG, "✅ Delivery acknowledged for message " + cleanMsgId + " via " + url);
                            ackSuccess = true;
                        } else {
                            Log.w(TAG, "Delivery acknowledgement HTTP " + responseCode + " from " + url);
                        }
                    } catch (Exception e) {
                        Log.w(TAG, "Failed delivery attempt to " + endpoint + ": " + e.getMessage());
                    } finally {
                        if (connection != null) connection.disconnect();
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "Could not acknowledge push delivery; reconnect sync will retry: " + e.getMessage());
            }
        };

        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            // Already on Firebase worker thread — runs under FCM WakeLock so the OS doesn't sleep the process
            ackTask.run();
        } else {
            Thread ackThread = new Thread(ackTask, "chat-delivery-ack");
            ackThread.start();
            try {
                ackThread.join(3000);
            } catch (InterruptedException ignored) {}
        }
    }

    // ── Channel Setup ──────────────────────────────────────────────────────────

    public static void createNotificationChannels(Context ctx) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            // 1. Messages Channel
            NotificationChannel msgChannel = new NotificationChannel(
                CHANNEL_MESSAGES,
                "Direct Messages",
                NotificationManager.IMPORTANCE_HIGH
            );
            msgChannel.setDescription("Notifications for 1-to-1 direct chat messages");
            msgChannel.enableVibration(true);
            msgChannel.enableLights(true);
            msgChannel.setShowBadge(true);
            nm.createNotificationChannel(msgChannel);

            // 2. Groups Channel
            NotificationChannel groupChannel = new NotificationChannel(
                CHANNEL_GROUPS,
                "Group Messages",
                NotificationManager.IMPORTANCE_HIGH
            );
            groupChannel.setDescription("Notifications for team, community, and group chats");
            groupChannel.enableVibration(true);
            groupChannel.enableLights(true);
            groupChannel.setShowBadge(true);
            nm.createNotificationChannel(groupChannel);

            // 3. Calls Channel (High Importance, Ringtone sound)
            NotificationChannel callChannel = new NotificationChannel(
                CHANNEL_CALLS,
                "Incoming Calls",
                NotificationManager.IMPORTANCE_HIGH
            );
            callChannel.setDescription("Notifications and full-screen alerts for incoming audio and video calls");
            callChannel.enableVibration(true);
            callChannel.enableLights(true);
            callChannel.setShowBadge(true);
            callChannel.setSound(
                RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE),
                new AudioAttributes.Builder()
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION_RINGTONE)
                    .build()
            );
            nm.createNotificationChannel(callChannel);

            // 4. Meetings Channel
            NotificationChannel meetChannel = new NotificationChannel(
                CHANNEL_MEETINGS,
                "Team Meetings & Rooms",
                NotificationManager.IMPORTANCE_HIGH
            );
            meetChannel.setDescription("Live room invites and conference call alerts");
            meetChannel.enableVibration(true);
            meetChannel.setShowBadge(true);
            nm.createNotificationChannel(meetChannel);

            // 5. Mentions Channel
            NotificationChannel mentionChannel = new NotificationChannel(
                CHANNEL_MENTIONS,
                "Mentions & Replies",
                NotificationManager.IMPORTANCE_HIGH
            );
            mentionChannel.setDescription("Notifications when someone @mentions or replies to you");
            nm.createNotificationChannel(mentionChannel);

            // 6. System Channel
            NotificationChannel sysChannel = new NotificationChannel(
                CHANNEL_SYSTEM,
                "System & Security",
                NotificationManager.IMPORTANCE_DEFAULT
            );
            sysChannel.setDescription("System announcements, security alerts, and device logins");
            nm.createNotificationChannel(sysChannel);

            // 7. Marketing Channel
            NotificationChannel mktChannel = new NotificationChannel(
                CHANNEL_MARKETING,
                "Updates & News",
                NotificationManager.IMPORTANCE_LOW
            );
            mktChannel.setDescription("Product updates, feature announcements, and tips");
            nm.createNotificationChannel(mktChannel);
        }
    }

    private String resolveAvatarUrl(Context ctx, String rawUrl) {
        if (rawUrl == null || rawUrl.trim().isEmpty()) return null;
        String trimmed = rawUrl.trim();
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
            return trimmed;
        }

        String baseUrl = "https://api.chat.pingdart.com";
        try {
            SharedPreferences prefs = ctx.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
            String customUrl = prefs.getString("api_base_url", "");
            if (customUrl != null && !customUrl.trim().isEmpty()) {
                baseUrl = customUrl.trim();
            }
        } catch (Exception ignored) {}

        baseUrl = baseUrl.replaceAll("/api/v1/?$", "").replaceAll("/+$", "");
        if (!trimmed.startsWith("/")) {
            trimmed = "/" + trimmed;
        }
        return baseUrl + trimmed;
    }

    private Bitmap getCircularBitmap(Bitmap bitmap) {
        if (bitmap == null) return null;
        try {
            int width = bitmap.getWidth();
            int height = bitmap.getHeight();
            int size = Math.min(width, height);
            Bitmap output = Bitmap.createBitmap(size, size, Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(output);

            Paint paint = new Paint();
            paint.setAntiAlias(true);
            paint.setFilterBitmap(true);

            BitmapShader shader = new BitmapShader(bitmap, Shader.TileMode.CLAMP, Shader.TileMode.CLAMP);
            paint.setShader(shader);

            float r = size / 2f;
            canvas.drawCircle(r, r, r, paint);
            return output;
        } catch (Exception e) {
            return bitmap;
        }
    }

    private Bitmap createInitialsBitmap(String name, int sizePx) {
        try {
            Bitmap output = Bitmap.createBitmap(sizePx, sizePx, Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(output);

            Paint bgPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
            bgPaint.setColor(0xFF00A884); // WhatsApp teal green
            canvas.drawCircle(sizePx / 2f, sizePx / 2f, sizePx / 2f, bgPaint);

            Paint textPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
            textPaint.setColor(0xFFFFFFFF);
            textPaint.setTextSize(sizePx * 0.42f);
            textPaint.setTypeface(Typeface.create(Typeface.DEFAULT, Typeface.BOLD));
            textPaint.setTextAlign(Paint.Align.CENTER);

            String initials = "U";
            if (name != null && !name.trim().isEmpty()) {
                String[] parts = name.trim().split("\\s+");
                if (parts.length >= 2) {
                    initials = (parts[0].substring(0, 1) + parts[1].substring(0, 1)).toUpperCase();
                } else {
                    initials = name.trim().substring(0, Math.min(2, name.trim().length())).toUpperCase();
                }
            }

            Rect bounds = new Rect();
            textPaint.getTextBounds(initials, 0, initials.length(), bounds);
            float y = (sizePx / 2f) + (bounds.height() / 2f) - bounds.bottom;
            canvas.drawText(initials, sizePx / 2f, y, textPaint);
            return output;
        } catch (Exception e) {
            return null;
        }
    }

    private Bitmap downloadBitmap(String urlStr) {
        if (urlStr == null || urlStr.isEmpty()) return null;
        try {
            URL url = new URL(urlStr);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.setConnectTimeout(4000);
            connection.setReadTimeout(4000);
            connection.connect();
            InputStream input = connection.getInputStream();
            return BitmapFactory.decodeStream(input);
        } catch (Exception e) {
            return null;
        }
    }
}
