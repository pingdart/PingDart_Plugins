# Project specific ProGuard rules for PingDart / MeddyList (Capacitor)

# Keep Capacitor Bridge & Plugins
-keep public class * extends com.getcapacitor.BridgeActivity
-keep public class * extends com.getcapacitor.Plugin
-keep class com.getcapacitor.** { *; }
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod public *;
}

# Keep JavaScript Interface methods
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep Cordova plugin interfaces
-keep class org.apache.cordova.** { *; }

# Keep Firebase Messaging & Play Services
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**

# Preserve line numbers for debugging stack traces
-keepattributes SourceFile,LineNumberTable
