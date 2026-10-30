# PingDart Workspace Ecosystem — Complete Developer & Engineering Manual

> **Enterprise-Grade Real-Time Communications, Modular Business Suite & Cross-Platform Client**  
> Supporting **Web**, **Android (APK & AAB)**, **iOS**, and **Desktop (Electron)** with **Dual-Layer V8 Bytecode Security**.

---

## 📑 Table of Contents
1. [System Overview & Architecture](#1-system-overview--architecture)
2. [Security & Intellectual Property Protection](#2-security--intellectual-property-protection)
3. [Prerequisites & System Requirements](#3-prerequisites--system-requirements)
4. [Quick Start (Local Development)](#4-quick-start-local-development)
   - [Starting with Root Commands](#option-a-starting-with-root-commands)
   - [Starting Backend API (`Apis`)](#option-b-starting-backend-api-apis)
   - [Starting Frontend Web App (`App`)](#option-c-starting-frontend-web-app-app)
5. [Network Architecture & Dynamic LAN IP Auto-Detection](#5-network-architecture--dynamic-lan-ip-auto-detection)
6. [Cross-Platform Build & Deployment Guide](#6-cross-platform-build--deployment-guide)
   - [Android (Build APK, Bundle AAB, Device Run)](#-android-build-guide)
   - [iOS (Xcode & Capacitor Sync)](#-ios-build-guide)
   - [Desktop (Electron macOS, Windows, Linux)](#-desktop-electron-guide)
   - [Web (Production Next.js Build)](#-web-production-build)
7. [Pluggable Business Module Guide (e.g. HMS — Hospital Management)](#7-pluggable-business-module-guide)
   - [How Pluggable Modules Work](#how-pluggable-modules-work)
   - [Step 1: Create Frontend Manifest](#step-1-create-frontend-manifest)
   - [Step 2: Dynamic UI Integration (`MoreScreen.tsx`)](#step-2-dynamic-ui-integration-morescreentsx)
   - [Step 3: Add Backend API Routes & Controllers](#step-3-add-backend-api-routes--controllers)
   - [Step 4: Seamless Plain JS + Bytecode Coexistence](#step-4-seamless-plain-js--bytecode-coexistence)
8. [Adding New Packages & Dependencies](#8-adding-new-packages--dependencies)
9. [Automated Release & Code Encoding Pipeline](#9-automated-release--code-encoding-pipeline)
10. [Directory Structure Reference](#10-directory-structure-reference)
11. [Troubleshooting & Frequently Asked Questions](#11-troubleshooting--frequently-asked-questions)
12. [License & Confidentiality](#12-license--confidentiality)

---

## 1. System Overview & Architecture

The **PingDart Workspace** is an integrated full-stack ecosystem consisting of two major subsystems:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PingDart Full-Stack Ecosystem                   │
└────────────────────────────────────────────────────────────────────────┘
                 ▲                                       ▲
                 │                                       │
     ┌───────────┴──────────┐               ┌───────────┴──────────┐
     │   Backend API (Apis) │               │   Client App (App)   │
     │  Port 4025 (Dynamic) │               │  Port 4026 (Dynamic) │
     ├──────────────────────┤               ├──────────────────────┤
     │ • Node.js + Express  │               │ • Next.js 15+ & React│
     │ • V8 Machine Bytecode│               │ • Tailwind CSS + GSAP│
     │ • Socket.IO Realtime │               │ • Capacitor 8 Native │
     │ • Sequelize (MySQL)  │               │ • Dynamic Module Hub │
     │ • LiveKit Audio/Video│               │ • Android / iOS /    │
     │ • Zero-Disk Secrets  │               │   Desktop / Web      │
     └──────────────────────┘               └──────────────────────┘
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     ▼
                     ┌───────────────────────────────┐
                     │ Dynamic LAN IP Auto-Discovery │
                     │   (Same Wi-Fi / LAN Network)  │
                     └───────────────────────────────┘
```

- **`Apis/`**: High-performance backend services handling authentication, chat messaging, push notifications, LiveKit media rooms, file transfers, and modular API endpoints.
- **`App/`**: Unified frontend codebase that powers the Web portal, Android native APK/AAB builds, iOS Xcode builds, and Electron desktop apps with high-fidelity animations and dynamic module discovery.

---

## 2. Security & Intellectual Property Protection

PingDart distributions utilize a **Dual-Layer Code Encoding Engine** designed to safeguard proprietary source code, algorithmic weights, and database secrets from reverse-engineering:

### 🛡️ Layer 1: AST Code Obfuscation
- All identifiers, local variables, and function names are transformed into randomized hexadecimal symbols.
- Control flow is flattened into state machines with dead-code injection and opaque predicates.
- String literals are encrypted using RC4 ciphers and decrypted dynamically in memory at runtime.

### 🛡️ Layer 2: Google V8 Machine Bytecode Compilation (`bytenode`)
- Core JavaScript files (`routes/`, `controllers/`, `services/`, `models/`, `app.js`) are compiled into `.jsc` machine binary using Node's native V8 engine.
- There are **no JavaScript source files or parse trees** inside the protected distribution. Decompilers and AST tools cannot reconstruct the original source code.

### 🛡️ Secret Vault with Zero Plaintext on Disk (`envVault.jsc`)
- Sensitive database hostnames, MySQL passwords, JWT secrets, and encryption keys are **sealed inside compiled bytecode**.
- **No `.env` or `.env.example` files exist in the release distribution.**
- The application automatically initializes its database connection and secrets directly into RAM during startup.

---

## 3. Prerequisites & System Requirements

Before running or building the projects, ensure your development environment has the following installed:

| Tool | Recommended Version | Purpose |
| :--- | :--- | :--- |
| **Node.js** | `v20.x` or `v22.x` (LTS) | Backend runtime & Frontend build system |
| **npm** | `v10.x+` | Package manager |
| **Java JDK** | JDK 17 or JDK 21 | Android Gradle build toolchain |
| **Android Studio** | Ladybug / Iguana or later | Android SDK, NDK, and Emulator / Device debugging |
| **Xcode** *(macOS only)* | Xcode 15+ / 16+ | iOS build and archive (requires macOS) |
| **Git** | `2.x+` | Version control |

---

## 4. Quick Start (Local Development)

### Option A: Starting with Root Commands
From the project root directory, you can launch both services conveniently:

```bash
# 1. Start the Backend API (runs on Port 4025)
npm run start:apis

# 2. In a separate terminal, start the Frontend Web App (runs on Port 4026)
npm run start:app
```

---

### Option B: Starting Backend API (`Apis`)

```bash
cd Apis

# Step 1: Install production dependencies
npm install --omit=dev

# Step 2: Start server with live file watcher (Node native watch)
npm run dev

# Or run in standard production daemon mode
npm start
```

- **Health Check**: Visit `http://localhost:4025` in your browser.
- **Console Log Output**:
  ```text
  [EnvVault] Initializing dynamic environment vault...
  [EnvVault] Detected active local network IP: 192.168.0.197
  [EnvVault] Dynamic API_URL bound: http://192.168.0.197:4025
  [EnvVault] CORS Origins configured: [ 'http://192.168.0.197:4026', 'http://localhost:4026' ]
  🚀 PingDart Realtime Backend online on port 4025
  ```

---

### Option C: Starting Frontend Web App (`App`)

```bash
cd App

# Step 1: Install frontend dependencies
npm install

# Step 2: Run local development server
npm run dev
```

- **Web Portal**: Open `http://localhost:4026` in your browser.
- The web app automatically detects the host and communicates with the backend on port `4025`.

---

## 5. Network Architecture & Dynamic LAN IP Auto-Detection

PingDart features **automatic network resolution**, meaning you never need to manually hardcode local IP addresses when switching between home, office, or mobile hotspot Wi-Fi networks:

1. **Backend Discovery (`envVault.jsc`)**:  
   At boot, the backend inspects your machine's network interfaces (`os.networkInterfaces()`) and binds `process.env.API_URL` to your machine's primary non-internal IPv4 address (e.g. `192.168.x.x`). It also registers this IP in CORS origins so other devices on the network can communicate freely.
2. **Frontend Discovery (`App/src/lib/utils.ts`)**:  
   The frontend `getApiBaseUrl()` method evaluates `window.location.hostname`.
   - If accessed via `http://localhost:4026`, it queries `http://localhost:4025`.
   - If accessed from a mobile browser or tablet via `http://192.168.0.197:4026`, it automatically queries `http://192.168.0.197:4025`.

---

## 6. Cross-Platform Build & Deployment Guide

The `App/` directory contains complete native platform wrappers powered by **Capacitor 8** and **Electron**.

### 🤖 Android Build Guide

#### 1. Direct Release APK Generation (Recommended for quick testing)
To generate a standalone APK that can be installed on any Android phone:
```bash
cd App
npm run build:apk
```
- **Generated APK Output**:  
  `App/android/app/build/outputs/apk/release/app-release-unsigned.apk` (or signed if your keystore is configured in `android/app/build.gradle`).

#### 2. Google Play Store AAB Bundle Generation
To generate the release bundle required for uploading to Google Play Console:
```bash
cd App
npm run build:apkbundal
```
- **Generated AAB Output**:  
  `App/android/app/build/outputs/bundle/release/app-release.aab`

#### 3. Opening in Android Studio
To debug, inspect logs, or build using Android Studio's visual interface:
```bash
cd App
npm run build:android
```
This prepares the static export, syncs Capacitor assets, and launches Android Studio with the `android/` project loaded.

#### 4. Running Directly on a Connected Android Device via USB
1. Enable **Developer Options** and **USB Debugging** on your Android phone.
2. Connect your phone to your computer via USB.
3. Run:
```bash
cd App
npm run android
```
*(The script automatically sets up ADB reverse port forwarding for ports `4026`, `4025`, and `5001`).*

---

### 🍏 iOS Build Guide *(macOS & Xcode Required)*

1. Make sure CocoaPods is installed (`sudo gem install cocoapods` or `brew install cocoapods`).
2. Run the iOS build command:
```bash
cd App
npm run build:ios
```
3. Xcode will automatically open the project workspace (`App/ios/App/App.xcworkspace`).
4. Select your connected iPhone or a Simulator from the device dropdown at the top of Xcode.
5. Click the **Play / Run** button to build and install the app.

---

### 💻 Desktop (Electron) Guide *(macOS, Windows, Linux)*

To package the application as a native desktop application:
```bash
cd App
npm run build:desktop
```
This synchronizes the static web build into the `App/electron/` directory, ready to package with `electron-builder`.

---

### 🌐 Web Production Build

To build and run an optimized production build for Linux servers, Docker containers, or cloud VMs:
```bash
cd App

# Compile optimized Next.js production build
npm run build

# Start production server on port 4026
npm start
```

---

## 7. Pluggable Business Module Guide

PingDart is engineered with a **Hybrid Pluggable Architecture**. You can develop custom business suites (such as **HMS — Hospital Management System**, **CRM**, **Billing & ERP**, or **E-Commerce**) in **standard, unencrypted JavaScript/TypeScript**.

Your new files will run seamlessly alongside the protected core bytecode without breaking anything.

```
App/src/modules/
  └── hms/
      ├── manifest.json       <-- Auto-detected by manifestLoader.ts
      ├── screens/            <-- Patient OPD, Doctor Queue, Appointments
      └── components/         <-- Module-specific UI elements

Apis/src/
  ├── routes/hms.js           <-- Module API router (plain JS)
  └── controllers/hms/        <-- Module business logic (plain JS)
```

---

### Step 1: Create Frontend Manifest

Create a folder for your module under `App/src/modules/<module_name>/` and add a `manifest.json` file:

**Example: `App/src/modules/hms/manifest.json`**
```json
{
  "id": "hms_suite",
  "name": "Hospital Management Suite (HMS)",
  "category": "Business Modules",
  "desc": "Doctors, Patients, Appointments, Prescriptions & OPD Queues",
  "icon": "Building01Icon",
  "nav": "HMS",
  "status": "Active",
  "accentColor": "from-rose-500 to-red-600",
  "badgeColor": "bg-rose-50 text-rose-600 border-rose-200",
  "metrics": [
    { "label": "Active Doctors", "value": "48" },
    { "label": "Appointments", "value": "128" }
  ],
  "features": [
    "Patient health records & medical history",
    "Doctor OPD queue token issuance & prescription printing",
    "Laboratory & Pharmacy billing sync"
  ]
}
```

---

### Step 2: Dynamic UI Integration (`MoreScreen.tsx`)

The system's `manifestLoader.ts` automatically discovers any `manifest.json` present under `App/src/modules/` and registers it dynamically in `MoreScreen.tsx`:

- **Card Title, Description, and Badges** are rendered instantly.
- **Dynamic Metrics & Features** are displayed on the module card.
- Clicking **Launch Module** automatically routes to your module's designated screen or sub-view.

---

### Step 3: Add Backend API Routes & Controllers

Add your module's backend logic in clean, readable JavaScript:

1. **Create Controller**: `Apis/src/controllers/hms/appointmentController.js`
   ```javascript
   'use strict';

   exports.listAppointments = async (req, res) => {
     try {
       // Your database queries or business logic
       return res.json({
         success: true,
         data: [
           { id: 1, patient: "John Doe", doctor: "Dr. Smith", status: "Confirmed" }
         ]
       });
     } catch (err) {
       return res.status(500).json({ success: false, error: err.message });
     }
   };
   ```

2. **Create Route**: `Apis/src/routes/hms.js`
   ```javascript
   'use strict';
   const express = require('express');
   const router = express.Router();
   const appointmentController = require('../controllers/hms/appointmentController');

   router.get('/appointments', appointmentController.listAppointments);

   module.exports = router;
   ```

3. **Mount in `Apis/src/app.js`**:
   ```javascript
   app.use('/api/hms', require('./routes/hms'));
   ```

---

### Step 4: Seamless Plain JS + Bytecode Coexistence

Node.js handles both encrypted `.jsc` bytecode and plain `.js` files concurrently:
- Core engine files (`app.jsc`, `auth.jsc`, `chat.jsc`) execute in protected V8 machine binary.
- Your custom module files (`hms.js`, `appointmentController.js`) execute as normal JavaScript.
- You can `require()` core utilities into your custom modules and export data to core routes without any compilation errors.

---

## 8. Adding New Packages & Dependencies

Developers can install third-party packages at any time using standard npm commands:

### Installing Packages into Backend (`Apis`):
```bash
cd Apis
npm install lodash moment stripe
```
*The new packages are added to `Apis/package.json` and saved to `Apis/node_modules`.*

### Installing Packages into Frontend (`App`):
```bash
cd App
npm install recharts date-fns
```
*The new packages are added to `App/package.json` and saved to `App/node_modules`.*

---

## 9. Automated Release & Code Encoding Pipeline

When you have finished adding new features or modules and wish to produce a new protected, zero-leak release package for distribution to clients or other developers:

```bash
# In the project root directory:

# Option 1: Auto-increment patch version (e.g. 1.0.1 -> 1.0.2)
npm run encode

# Option 2: Auto-increment minor version (e.g. 1.0.1 -> 1.1.0)
npm run encode:minor

# Option 3: Auto-increment major version (e.g. 1.0.1 -> 2.0.0)
npm run encode:major

# Option 4: Build a specific version
node encode-release.js 1.2.0
```

### ⚙️ What the Master Packaging Script (`encode-release.js`) Performs:

1. **Version Synchronization**: Updates version numbers across root `package.json`, `Apis/package.json`, and `App/package.json`.
2. **Bytecode Compilation**: Obfuscates and compiles every `.js` file in `Apis/` into native `.jsc` machine bytecode.
3. **Secret Vaulting**: Embeds database credentials and encryption keys inside `envVault.jsc` in memory.
4. **Credential Sanitization**: Completely removes `.env` and `.env.example` files from the release folder to prevent credential leakage.
5. **Cross-Platform Bundling**: Copies clean Android, iOS, and Electron platform projects (excluding build artifacts and `.gradle` caches).
6. **Release Artifacts Created**:
   - **Distribution Directory**: `dist-release/pingdart-v{version}/`
   - **Standalone Zip Package**: `releases/pingdart-release-v{version}.zip`

---

## 10. Directory Structure Reference

```
PingDart Chat/
├── Apis/                           # Backend Node.js Server
│   ├── src/
│   │   ├── config/envVault.js      # Environment & Dynamic IP Resolver
│   │   ├── controllers/            # API Controllers (Chat, Mail, Auth, Modules)
│   │   ├── routes/                 # Express API Routes
│   │   ├── models/                 # Sequelize MySQL Database Models
│   │   ├── services/               # Realtime & Background Service Workers
│   │   └── app.js                  # Master Backend Server Entry
│   └── package.json
│
├── App/                            # Frontend Web, Mobile & Desktop Client
│   ├── src/
│   │   ├── app/                    # Next.js App Router (Pages & Layouts)
│   │   ├── modules/                # Pluggable Modules (e.g. HMS, CRM)
│   │   │   ├── manifestLoader.ts   # Dynamic Manifest Discovery
│   │   │   └── hms/
│   │   │       └── manifest.json   # HMS Module Manifest
│   │   ├── components/             # Reusable UI Component Library
│   │   └── lib/utils.ts            # Network & Dynamic Host Resolution
│   ├── android/                    # Android Studio & Gradle Native Project
│   ├── ios/                        # iOS Xcode & CocoaPods Native Project
│   ├── electron/                   # Desktop Native Wrapper
│   └── package.json
│
├── dist-release/                   # Compiled & Bytecode Protected Releases
│   └── pingdart-v1.0.1/
│       ├── Apis/                   # Encrypted Backend (460+ .jsc Bytecode Files)
│       ├── App/                    # Complete Multi-Platform Frontend
│       ├── README.md               # Developer Guide for this Release
│       └── package.json            # Root Starter for the Distribution
│
├── releases/                       # Ready-to-Deliver .zip Archives
│   └── pingdart-release-v1.0.1.zip
│
├── encode-release.js               # Master Code Protection & Packaging Tool
├── package.json                    # Root Orchestration Scripts
└── README.md                       # Master Engineering Documentation
```

---

## 11. Troubleshooting & Frequently Asked Questions

### Q1: "Port 4025 or Port 4026 is already in use"
If an old process is holding onto the port, terminate it using your terminal:
```bash
# On macOS / Linux:
lsof -ti :4025 | xargs kill -9 2>/dev/null
lsof -ti :4026 | xargs kill -9 2>/dev/null

# On Windows:
netstat -ano | findstr :4025
taskkill /PID <PID_FOUND> /F
```

### Q2: "Can another developer decompile the `.jsc` files back to JavaScript?"
**No.** V8 machine bytecode compiles source code into internal virtual machine instructions. Variable names, AST branches, and string structures are completely transformed. Bytecode cannot be reversed back into formatted source code.

### Q3: "How does Android connect to the backend during local development?"
- When testing on a physical phone on the same Wi-Fi, the app automatically connects using your computer's local IP (e.g. `http://192.168.0.197:4025`).
- When testing via USB cable, running `npm run android` automatically sets up `adb reverse tcp:4025 tcp:4025` and `adb reverse tcp:4026 tcp:4026`.

### Q4: "Where are the MySQL database credentials configured in the protected release?"
They are compiled directly into `Apis/src/config/envVault.jsc`. You do not need to provide or edit a `.env` file for the backend to boot and connect to the database.

---

## 12. License & Confidentiality

**Proprietary and Confidential.**  
Copyright © PingDart Ecosystem. All rights reserved.

No part of this software, including compiled bytecode binaries, encryption routines, and architectural manifests, may be decompiled, disassembled, or distributed without explicit authorization from the copyright holder.
