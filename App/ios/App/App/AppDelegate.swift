import UIKit
import Capacitor
import UserNotifications
import CallKit
import PushKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate, PKPushRegistryDelegate, CXProviderDelegate {

    var window: UIWindow?
    var callKitProvider: CXProvider?
    var callController = CXCallController()
    var activeCallUUID: UUID?
    var voipRegistry: PKPushRegistry?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Ensure seamless background behind WKWebView so no white or black flicker occurs
        if #available(iOS 13.0, *) {
            window?.backgroundColor = .systemBackground
        }

        // Setup UserNotificationCenter delegate
        let center = UNUserNotificationCenter.current()
        center.delegate = self

        registerNotificationCategories(center: center)
        setupCallKit()
        setupVoipPushKit()

        // Request remote notification permissions
        center.requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            if granted {
                DispatchQueue.main.async {
                    application.registerForRemoteNotifications()
                }
            }
        }

        // Check if launched from a notification
        if let notificationPayload = launchOptions?[.remoteNotification] as? [AnyHashable: Any] {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                self.routeNotificationPayload(notificationPayload)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
                self.routeNotificationPayload(notificationPayload)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
                self.routeNotificationPayload(notificationPayload)
            }
        }

        return true
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Reset app icon badge when opening app
        UIApplication.shared.applicationIconBadgeNumber = 0
    }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }

    // ── Register Notification Categories (Quick Reply, Calls, Actions) ──────────
    private func registerNotificationCategories(center: UNUserNotificationCenter) {
        // 1. Chat Message Actions (Inline Reply, Mark as Read, Mute)
        let replyAction = UNTextInputNotificationAction(
            identifier: "ACTION_REPLY",
            title: "Reply",
            options: [],
            textInputButtonTitle: "Send",
            textInputPlaceholder: "Type a message..."
        )
        let markReadAction = UNNotificationAction(
            identifier: "ACTION_MARK_READ",
            title: "Mark as Read",
            options: []
        )
        let muteAction = UNNotificationAction(
            identifier: "ACTION_MUTE",
            title: "Mute",
            options: []
        )

        let chatCategory = UNNotificationCategory(
            identifier: "CHAT_MESSAGE_ACTIONS",
            actions: [replyAction, markReadAction, muteAction],
            intentIdentifiers: [],
            options: [.customDismissAction]
        )

        // 2. Incoming Call Actions
        let acceptCallAction = UNNotificationAction(
            identifier: "ACTION_ACCEPT_CALL",
            title: "🟢 Accept",
            options: [.foreground]
        )
        let declineCallAction = UNNotificationAction(
            identifier: "ACTION_DECLINE_CALL",
            title: "🔴 Decline",
            options: [.destructive]
        )

        let callCategory = UNNotificationCategory(
            identifier: "INCOMING_CALL",
            actions: [acceptCallAction, declineCallAction],
            intentIdentifiers: [],
            options: []
        )

        // 3. Group Call Actions
        let joinGroupCallAction = UNNotificationAction(
            identifier: "ACTION_JOIN_GROUP_CALL",
            title: "🟢 Join",
            options: [.foreground]
        )
        let dismissGroupCallAction = UNNotificationAction(
            identifier: "ACTION_DISMISS",
            title: "Dismiss",
            options: [.destructive]
        )

        let groupCallCategory = UNNotificationCategory(
            identifier: "GROUP_CALL",
            actions: [joinGroupCallAction, dismissGroupCallAction],
            intentIdentifiers: [],
            options: []
        )

        center.setNotificationCategories([chatCategory, callCategory, groupCallCategory])
    }

    // ── Foreground Notification Presentation ─────────────────────────────────────
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let userInfo = notification.request.content.userInfo
        let type = userInfo["type"] as? String ?? ""

        // If user is already active in that chat, suppress alert banner
        if type == "notification:dismiss" || type == "call:answered_elsewhere" {
            completionHandler([])
            return
        }

        if #available(iOS 14.0, *) {
            completionHandler([.banner, .sound, .badge])
        } else {
            completionHandler([.alert, .sound, .badge])
        }
    }

    // ── Tap Notification & Action Button Handling ────────────────────────────────
    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        let actionIdentifier = response.actionIdentifier

        // 1. Inline Quick Reply
        if actionIdentifier == "ACTION_REPLY", let textResponse = response as? UNTextInputNotificationResponse {
            let replyText = textResponse.userText
            let roomId = extractString(userInfo, keys: ["roomId", "chatId"]) ?? ""
            let escapedText = replyText.replacingOccurrences(of: "\\", with: "\\\\").replacingOccurrences(of: "'", with: "\\'").replacingOccurrences(of: "\"", with: "\\\"")
            dispatchScript("window.dispatchEvent(new CustomEvent('notificationQuickReply', { detail: { roomId: '\(roomId)', text: '\(escapedText)' } }));")
            completionHandler()
            return
        }

        // 2. Mark as Read
        if actionIdentifier == "ACTION_MARK_READ" {
            if let roomId = extractString(userInfo, keys: ["roomId", "chatId"]), !roomId.isEmpty {
                dismissDeliveredChatNotifications(roomId: roomId)
                sendApiRequest(endpoint: "/chat/\(roomId)/messages/read", method: "POST", jsonBody: [:])
                dispatchScript("window.dispatchEvent(new CustomEvent('markRoomAsRead', { detail: { roomId: '\(roomId)' } }));")
            }
            completionHandler()
            return
        }

        // 3. Mute Chat
        if actionIdentifier == "ACTION_MUTE" {
            if let roomId = extractString(userInfo, keys: ["roomId", "chatId"]), !roomId.isEmpty {
                sendApiRequest(endpoint: "/chat/rooms/\(roomId)/mute", method: "PUT", jsonBody: [:])
                dispatchScript("window.dispatchEvent(new CustomEvent('muteChatRoom', { detail: { roomId: '\(roomId)' } }));")
            }
            completionHandler()
            return
        }

        // 4. Accept Call
        if actionIdentifier == "ACTION_ACCEPT_CALL" {
            routeNotificationPayload(userInfo)
            if let callId = extractString(userInfo, keys: ["callId"]), !callId.isEmpty {
                dispatchScript("window.dispatchEvent(new CustomEvent('acceptIncomingCall', { detail: { callId: '\(callId)' } }));")
            }
            completionHandler()
            return
        }

        // 5. Decline Call
        if actionIdentifier == "ACTION_DECLINE_CALL" {
            if let callId = extractString(userInfo, keys: ["callId"]), !callId.isEmpty {
                sendApiRequest(endpoint: "/calls/reject", method: "POST", jsonBody: ["callId": callId])
                dispatchScript("window.dispatchEvent(new CustomEvent('declineIncomingCall', { detail: { callId: '\(callId)' } }));")
            }
            completionHandler()
            return
        }

        // 6. Tap to open or general notification
        routeNotificationPayload(userInfo)
        completionHandler()
    }

    // ── Multi-Device Read Sync & Background Notifications ────────────────────────
    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        let type = extractString(userInfo, keys: ["type"]) ?? ""

        // Multi-device read sync: automatically dismiss notifications on phone when read elsewhere
        if type == "notification:dismiss" || type == "notification:read_sync" {
            if let roomId = extractString(userInfo, keys: ["roomId", "chatId"]), !roomId.isEmpty {
                dismissDeliveredChatNotifications(roomId: roomId)
            }
            completionHandler(.newData)
            return
        }

        // Call answered on another device: remove ringing alert
        if type == "call:answered_elsewhere" || type == "call:ended" {
            self.endCallKitCall()
            UNUserNotificationCenter.current().getDeliveredNotifications { notifications in
                let callNotifs = notifications.filter {
                    ($0.request.content.userInfo["type"] as? String)?.contains("call") == true
                }.map { $0.request.identifier }
                UNUserNotificationCenter.current().removeDeliveredNotifications(withIdentifiers: callNotifs)
            }
            completionHandler(.newData)
            return
        }

        completionHandler(.noData)
    }

    // ── CallKit & PushKit Setup ──────────────────────────────────────────────────
    private func setupCallKit() {
        let config = CXProviderConfiguration(localizedName: "Ping")
        config.supportsVideo = true
        config.maximumCallsPerCallGroup = 1
        config.supportedHandleTypes = [.generic]
        callKitProvider = CXProvider(configuration: config)
        callKitProvider?.setDelegate(self, queue: nil)
    }

    private func setupVoipPushKit() {
        voipRegistry = PKPushRegistry(queue: DispatchQueue.main)
        voipRegistry?.delegate = self
        voipRegistry?.desiredPushTypes = [.voIP]
    }

    // ── PKPushRegistryDelegate ───────────────────────────────────────────────────
    func pushRegistry(_ registry: PKPushRegistry, didUpdate pushCredentials: PKPushCredentials, for type: PKPushType) {
        let tokenParts = pushCredentials.token.map { data in String(format: "%02.2hhx", data) }
        let voipToken = tokenParts.joined()
        print("[PushKit] 📲 VoIP Token: \(voipToken)")
        dispatchScript("localStorage.setItem('ios_voip_token', '\(voipToken)');")
    }

    func pushRegistry(_ registry: PKPushRegistry, didReceiveIncomingPushWith payload: PKPushPayload, for type: PKPushType, completionHandler: @escaping () -> Void) {
        let dict = payload.dictionaryPayload
        let callerName = dict["callerName"] as? String ?? "Someone"
        let hasVideo = dict["hasVideo"] as? Bool ?? false

        let callUUID = UUID()
        self.activeCallUUID = callUUID

        let update = CXCallUpdate()
        update.remoteHandle = CXHandle(type: .generic, value: callerName)
        update.localizedCallerName = callerName
        update.hasVideo = hasVideo

        callKitProvider?.reportNewIncomingCall(with: callUUID, update: update) { _ in
            completionHandler()
        }
    }

    // ── CXProviderDelegate ───────────────────────────────────────────────────────
    func providerDidReset(_ provider: CXProvider) {
        activeCallUUID = nil
    }

    func provider(_ provider: CXProvider, perform action: CXAnswerCallAction) {
        action.fulfill()
        DispatchQueue.main.async {
            self.dispatchScript("""
            window.dispatchEvent(new CustomEvent('notificationDeepLink', { detail: { type: 'call' } }));
            window.dispatchEvent(new CustomEvent('acceptIncomingCall', { detail: {} }));
            """)
        }
    }

    func provider(_ provider: CXProvider, perform action: CXEndCallAction) {
        action.fulfill()
        activeCallUUID = nil
        DispatchQueue.main.async {
            self.dispatchScript("""
            window.dispatchEvent(new CustomEvent('declineIncomingCall', { detail: {} }));
            """)
        }
    }

    private func endCallKitCall() {
        guard let uuid = activeCallUUID else { return }
        let endAction = CXEndCallAction(call: uuid)
        let transaction = CXTransaction(action: endAction)
        callController.request(transaction) { _ in }
        activeCallUUID = nil
    }

    private func dismissDeliveredChatNotifications(roomId: String) {
        UNUserNotificationCenter.current().getDeliveredNotifications { notifications in
            let matchingIds = notifications.filter {
                ($0.request.content.userInfo["roomId"] as? String) == roomId ||
                $0.request.content.threadIdentifier == "chat_room_\(roomId)"
            }.map { $0.request.identifier }
            UNUserNotificationCenter.current().removeDeliveredNotifications(withIdentifiers: matchingIds)
        }
    }

    private func extractString(_ dict: [AnyHashable: Any], keys: [String]) -> String? {
        for key in keys {
            if let val = dict[key] as? String, !val.isEmpty { return val }
            if let val = dict[key] as? NSNumber { return val.stringValue }
        }
        if let dataDict = dict["data"] as? [AnyHashable: Any] {
            for key in keys {
                if let val = dataDict[key] as? String, !val.isEmpty { return val }
                if let val = dataDict[key] as? NSNumber { return val.stringValue }
            }
        }
        return nil
    }

    private func routeNotificationPayload(_ payload: [AnyHashable: Any]) {
        let roomId = extractString(payload, keys: ["roomId", "chatId"]) ?? ""
        let type = extractString(payload, keys: ["type"]) ?? (roomId.isEmpty ? "general" : "chat")
        let deepLink = extractString(payload, keys: ["deepLink"]) ?? (roomId.isEmpty ? "" : "/user?tab=Chats&msgId=\(roomId)")
        let callId = extractString(payload, keys: ["callId"]) ?? ""
        let senderName = extractString(payload, keys: ["senderName", "roomName", "title"]) ?? "Chat"
        let avatarUrl = extractString(payload, keys: ["avatarUrl", "largeIcon"]) ?? ""
        let isGroup = extractString(payload, keys: ["isGroup"]) ?? "false"
        let senderId = extractString(payload, keys: ["senderId"]) ?? ""

        if !roomId.isEmpty {
            dismissDeliveredChatNotifications(roomId: roomId)
        }

        let escapedSender = senderName.replacingOccurrences(of: "\\", with: "\\\\").replacingOccurrences(of: "'", with: "\\'").replacingOccurrences(of: "\"", with: "\\\"")
        let escapedAvatar = avatarUrl.replacingOccurrences(of: "\\", with: "\\\\").replacingOccurrences(of: "'", with: "\\'").replacingOccurrences(of: "\"", with: "\\\"")
        let escapedDeepLink = deepLink.replacingOccurrences(of: "\\", with: "\\\\").replacingOccurrences(of: "'", with: "\\'").replacingOccurrences(of: "\"", with: "\\\"")

        let script = """
        (function() {
          var payload = {
            type: '\(type)',
            roomId: '\(roomId)',
            deepLink: '\(escapedDeepLink)',
            callId: '\(callId)',
            senderName: '\(escapedSender)',
            name: '\(escapedSender)',
            avatarUrl: '\(escapedAvatar)',
            avatar: '\(escapedAvatar)',
            isGroup: \(isGroup.lowercased() == "true" ? "true" : "false"),
            senderId: '\(senderId)'
          };
          window.__initialNotificationPayload = payload;
          try {
            localStorage.setItem('pending_notification_chat', JSON.stringify(payload));
            if ('\(roomId)' !== '') {
              sessionStorage.setItem('pending_chat_meta_' + '\(roomId)', JSON.stringify(payload));
            }
          } catch(e) {}
          window.dispatchEvent(new CustomEvent('notificationDeepLink', { detail: payload }));
          if ('\(roomId)' !== '') {
            window.dispatchEvent(new CustomEvent('openChatRoom', { detail: payload }));
          }
        })();
        """

        // Dispatch immediately
        dispatchScript(script)
        // Schedule retries with 150ms and 600ms backoff in case WebView was in background pause or still initializing
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            self?.dispatchScript(script)
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) { [weak self] in
            self?.dispatchScript(script)
        }
    }

    private func sendApiRequest(endpoint: String, method: String, jsonBody: [String: Any]) {
        let apiUrl = "https://api.chat.pingdart.com/api/v1"
        guard let url = URL(string: "\(apiUrl)\(endpoint)") else { return }

        var request = URLRequest(url: url)
        request.httpMethod = method
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let token = UserDefaults.standard.string(forKey: "CapacitorStorage.access_token") ??
                    UserDefaults.standard.string(forKey: "CapacitorStorage.auth_token") ??
                    UserDefaults.standard.string(forKey: "CapacitorStorage.token") ?? ""

        if !token.isEmpty {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        if method != "GET" && !jsonBody.isEmpty {
            request.httpBody = try? JSONSerialization.data(withJSONObject: jsonBody, options: [])
        }

        URLSession.shared.dataTask(with: request) { _, _, error in
            if let err = error {
                print("[PushNotification] ⚠️ Background API error: \(err.localizedDescription)")
            } else {
                print("[PushNotification] ✓ Background API \(method) \(endpoint) executed")
            }
        }.resume()
    }

    private func dispatchScript(_ script: String) {
        DispatchQueue.main.async {
            guard let bridgeViewController = self.window?.rootViewController as? CAPBridgeViewController else { return }
            bridgeViewController.bridge?.webView?.evaluateJavaScript(script, completionHandler: nil)
        }
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }
}
