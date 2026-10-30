import type { NextConfig } from "next";
import path from "path";

const isExport = process.env.NEXT_OUTPUT_EXPORT === 'true';

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: isExport ? 'export' : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'cloudapi.pingdart.com' },
      { protocol: 'https', hostname: 'api.chat.pingdart.com' },
      { protocol: 'https', hostname: 'chat.pingdart.com' },
      { protocol: 'https', hostname: 'storage.pingdart.com' },
      { protocol: 'http', hostname: '192.168.0.197' },
      { protocol: 'http', hostname: '192.168.1.33' },
      { protocol: 'http', hostname: '192.168.0.109' },
    ],
  },
  allowedDevOrigins: [
    '192.168.0.197',
    'localhost',
    '127.0.0.1',
  ],
  devIndicators: false,
  transpilePackages: [
    "@privacyresearch/libsignal-protocol-typescript",
  ],
  experimental: {
    // Tree-shake heavy icon/component packages so only the used symbols
    // land in the bundle — this alone reduces module count significantly.
    optimizePackageImports: [
      "hugeicons-react",
      "lucide-react",
      "@livekit/components-react",
      "emoji-picker-react",
      "radix-ui",
      "framer-motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "@mediapipe/tasks-vision",
      "@tiptap/core",
      "@tiptap/react",
      "@tiptap/starter-kit",
      "@tiptap/extensions",
      "gsap",
      "@gsap/react",
    ],
  },
  async rewrites() {
    if (isExport) return [];
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.197:4025';
    return [
      { source: '/index.html', destination: '/' },
      { source: '/index.php', destination: '/' },
      { source: '/uploads/:path*', destination: `${backendUrl}/uploads/:path*` },
    ];
  },
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    if (dev) {
      // ─── Watch options ───────────────────────────────────────────────────
      // Stop watching directories that are unrelated to the web app.
      // This prevents spurious recompiles when Rust/Apis files change.
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.next/**',
          '**/android/**',
          '**/ios/**',
          '**/electron/**',
          '**/out/**',
          '**/.git/**',
          '**/game_ai/**',
          '**/Email/**',
          '**/Apis/**',
          '**/pingdartssd/**',
          '**/storage/**',
        ],
        aggregateTimeout: 400,
        poll: false,
      };
    }

    return config;
  },

  // ─── Turbopack config (used by `npm run dev` → --turbo) ──────────────────
  // Turbopack only compiles the page you're currently viewing (lazy),
  // which keeps memory usage low on machines with limited RAM.
  turbopack: {
    root: path.resolve(__dirname),
    resolveAlias: {
      fs: [],
      path: [],
      crypto: [],
    },
  },
};

export default nextConfig;