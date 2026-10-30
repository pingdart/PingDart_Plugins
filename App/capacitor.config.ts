import type { CapacitorConfig } from "@capacitor/cli";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env.local and .env
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const isDev = process.env.NODE_ENV !== "production";
const capServerUrl =
  process.env.CAP_SERVER_URL ||
  (isDev ? "http://localhost:4026" : undefined);

const isHttps = capServerUrl?.startsWith("https://");

const config: CapacitorConfig = {
  appId: "minikart.in",
  appName: "Ping",

  webDir: "out",

  // ...(isDev && capServerUrl
  //   ? {
  //     server: {
  //       url: capServerUrl,
  //       cleartext: !isHttps,
  //       androidScheme: isHttps ? "https" : "http",
  //     },
  //   }
  //   : {}),

  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  },

  ios: {
    contentInset: "automatic",
    scrollEnabled: true,
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 800,
      launchAutoHide: true,
      backgroundColor: "#0B141A",
      androidSplashResourceName: "splash",
      showSpinner: false,
    },

    SystemBars: {
      insetsHandling: "disable",
      style: "DARK",
    },

    StatusBar: {
      style: "DARK",
      backgroundColor: "#2563EB",
      overlaysWebView: true,
    },

    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },

    PushNotifications: {
      presentationOptions: [],
    },
  },
};

export default config;