import type { CapacitorElectronConfig } from '@capacitor-community/electron';
import { getCapacitorElectronConfig, setupElectronDeepLinking } from '@capacitor-community/electron';
import type { MenuItemConstructorOptions } from 'electron';
import { app, MenuItem, ipcMain, powerMonitor, desktopCapturer } from 'electron';
import os from 'os';
import electronIsDev from 'electron-is-dev';
import unhandled from 'electron-unhandled';
import { autoUpdater } from 'electron-updater';

import { ElectronCapacitorApp, setupContentSecurityPolicy, setupReloadWatcher } from './setup';

// Graceful handling of unhandled errors.
unhandled();

// Define our menu templates (these are optional)
const trayMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [new MenuItem({ label: 'Quit App', role: 'quit' })];
const appMenuBarMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [
  { role: process.platform === 'darwin' ? 'appMenu' : 'fileMenu' },
  { role: 'viewMenu' },
];

// Get Config options from capacitor.config
const capacitorFileConfig: CapacitorElectronConfig = getCapacitorElectronConfig();

// Initialize our app. You can pass menu templates into the app here.
// const myCapacitorApp = new ElectronCapacitorApp(capacitorFileConfig);
const myCapacitorApp = new ElectronCapacitorApp(capacitorFileConfig, trayMenuTemplate, appMenuBarMenuTemplate);

// If deeplinking is enabled then we will set it up here.
if (capacitorFileConfig.electron?.deepLinkingEnabled) {
  setupElectronDeepLinking(myCapacitorApp, {
    customProtocol: capacitorFileConfig.electron.deepLinkingCustomProtocol ?? 'mycapacitorapp',
  });
}

// If we are in Dev mode, use the file watcher components.
if (electronIsDev) {
  setupReloadWatcher(myCapacitorApp);
}

// Run Application
(async () => {
  // Wait for electron app to be ready.
  await app.whenReady();
  // Security - Set Content-Security-Policy based on whether or not we are in dev mode.
  setupContentSecurityPolicy(myCapacitorApp.getCustomURLScheme());
  // Initialize our app, build windows, and load content.
  await myCapacitorApp.init();
  try {
    const win = myCapacitorApp.getMainWindow();
    if (win?.webContents) {
      win.webContents.setBackgroundThrottling(false);
    }
  } catch (_) {}
  // Setup controlled auto-updater with renderer IPC bridge
  setupDesktopUpdater(myCapacitorApp);
})();

// Handle when all of our windows are close (platforms have their own expectations).
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// When the dock icon is clicked.
app.on('activate', async function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (myCapacitorApp.getMainWindow().isDestroyed()) {
    await myCapacitorApp.init();
  }
});

// Place all ipc or other electron api calls and custom functionality under this line

// ── Workstation Tracker Desktop Agent IPC Handlers ────────────
let savedPairingKey: string | null = null;

// Real system idle time via Electron powerMonitor (cross-platform OS idle timer)
ipcMain.handle('tracker:get-idle-time', () => {
  try {
    return powerMonitor.getSystemIdleTime(); // Returns idle time in seconds
  } catch (err) {
    return 0;
  }
});

// Desktop Workstation Metadata
ipcMain.handle('tracker:get-info', () => {
  try {
    return {
      platform: process.platform,
      arch: process.arch,
      osVersion: os.release(),
      hostname: os.hostname(),
      agentVersion: '2.4.2',
      isElectron: true,
    };
  } catch (err) {
    return {
      platform: process.platform,
      agentVersion: '2.4.2',
      isElectron: true,
    };
  }
});

// Periodic Workstation Screenshot Capture
ipcMain.handle('tracker:capture-screenshot', async () => {
  try {
    // 1. Try native desktopCapturer for full workstation screens and windows
    try {
      const sources = await desktopCapturer.getSources({
        types: ['screen', 'window'],
        thumbnailSize: { width: 1280, height: 720 },
      });
      if (sources && sources.length > 0) {
        for (const s of sources) {
          if (s.thumbnail && !s.thumbnail.isEmpty() && s.thumbnail.getSize().width > 0) {
            const dataUrl = s.thumbnail.toDataURL();
            if (dataUrl && dataUrl.length > 100) {
              return dataUrl;
            }
          }
        }
      }
    } catch (capturerErr) {
      console.warn('[Electron Workstation Tracker] desktopCapturer warning:', capturerErr);
    }

    // 2. High-fidelity Fallback: Capture the active main window's webContents
    const mainWindow = myCapacitorApp.getMainWindow();
    if (mainWindow && !mainWindow.isDestroyed() && mainWindow.webContents) {
      const pageImage = await mainWindow.webContents.capturePage();
      if (pageImage && !pageImage.isEmpty() && pageImage.getSize().width > 0) {
        return pageImage.toDataURL();
      }
    }

    return null;
  } catch (err) {
    console.warn('[Electron Workstation Tracker] Screenshot capture error:', err);
    try {
      const mainWindow = myCapacitorApp.getMainWindow();
      if (mainWindow && !mainWindow.isDestroyed() && mainWindow.webContents) {
        const pageImage = await mainWindow.webContents.capturePage();
        if (pageImage && !pageImage.isEmpty()) {
          return pageImage.toDataURL();
        }
      }
    } catch (_) {}
    return null;
  }
});

// Foreground Active Window & Process Detection
ipcMain.handle('tracker:get-active-window', async () => {
  try {
    if (process.platform === 'win32') {
      const { exec } = require('child_process');
      return new Promise((resolve) => {
        const psCmd = `powershell -NoProfile -Command "Add-Type '@\nusing System;\nusing System.Runtime.InteropServices;\nusing System.Text;\npublic class Win32 { [DllImport(\\\"user32.dll\\\")] public static extern IntPtr GetForegroundWindow(); [DllImport(\\\"user32.dll\\\")] public static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count); [DllImport(\\\"user32.dll\\\")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid); }\n@'; $h=[Win32]::GetForegroundWindow(); $sb=New-Object System.Text.StringBuilder 256; $null=[Win32]::GetWindowText($h, $sb, 256); $pid=0; $null=[Win32]::GetWindowThreadProcessId($h, [ref]$pid); $p=Get-Process -Id $pid -ErrorAction SilentlyContinue; @{ processName = if ($p) { $p.ProcessName + '.exe' } else { 'Workstation.exe' }; appName = if ($p -and $p.Description) { $p.Description } else { $p.ProcessName }; windowTitle = $sb.ToString() } | ConvertTo-Json -Compress"`;
        exec(psCmd, { timeout: 1500 }, (error: any, stdout: string) => {
          if (!error && stdout) {
            try {
              const parsed = JSON.parse(stdout.trim());
              return resolve(parsed);
            } catch (_) {}
          }
          resolve({
            processName: 'Workstation.exe',
            appName: 'Desktop Workspace',
            windowTitle: 'Active Desktop Window'
          });
        });
      });
    } else if (process.platform === 'darwin') {
      const { exec } = require('child_process');
      return new Promise((resolve) => {
        const script = `osascript -e 'tell application "System Events" to get {name, name of window 1} of (first application process whose frontmost is true)'`;
        exec(script, { timeout: 1500 }, (error: any, stdout: string) => {
          if (!error && stdout) {
            const parts = stdout.trim().split(', ');
            return resolve({
              processName: (parts[0] || 'App') + '.app',
              appName: parts[0] || 'Application',
              windowTitle: parts[1] || parts[0] || 'Active Window'
            });
          }
          resolve({ processName: 'Desktop.app', appName: 'Desktop', windowTitle: 'Workspace' });
        });
      });
    }
    return { processName: 'Workstation.bin', appName: 'Desktop', windowTitle: 'Workspace' };
  } catch (err) {
    return { processName: 'Workstation', appName: 'Desktop', windowTitle: 'Workspace' };
  }
});

// Save and retrieve pairing code in workstation memory
ipcMain.handle('tracker:save-pairing', (_event, code: string) => {
  savedPairingKey = code;
  return true;
});

ipcMain.handle('tracker:get-pairing', () => {
  return savedPairingKey;
});

// ── Controlled Website-Hosted Desktop Auto-Updater ────────────
autoUpdater.autoDownload = false; // User controls when to download
autoUpdater.autoInstallOnAppQuit = true;

function setupDesktopUpdater(capacitorApp: ElectronCapacitorApp) {
  if (electronIsDev) {
    console.log('[Desktop Updater] Skipping auto-update check in development mode');
  }

  const sendToRenderer = (channel: string, payload?: any) => {
    try {
      const win = capacitorApp.getMainWindow();
      if (win && !win.isDestroyed() && win.webContents) {
        win.webContents.send(channel, payload);
      }
    } catch (err) {
      console.warn('[Desktop Updater] Could not send message to renderer:', err);
    }
  };

  // 1. Update detected on https://pingdart.com/downloads/latest.yml
  autoUpdater.on('update-available', (info) => {
    console.log(`[Desktop Updater] Update available: ${info.version} (current: ${app.getVersion()})`);
    sendToRenderer('updater:available', {
      currentVersion: app.getVersion(),
      latestVersion: info.version,
      releaseDate: info.releaseDate,
      releaseNotes: info.releaseNotes || null
    });
  });

  // 2. Already up to date
  autoUpdater.on('update-not-available', (info) => {
    console.log(`[Desktop Updater] App is up to date: ${info.version}`);
    sendToRenderer('updater:not-available', {
      currentVersion: app.getVersion()
    });
  });

  // 3. Download Progress
  autoUpdater.on('download-progress', (progressObj) => {
    sendToRenderer('updater:progress', {
      percent: Math.round(progressObj.percent),
      bytesPerSecond: progressObj.bytesPerSecond,
      transferred: progressObj.transferred,
      total: progressObj.total
    });
  });

  // 4. Download Complete
  autoUpdater.on('update-downloaded', (info) => {
    console.log(`[Desktop Updater] Update downloaded: ${info.version}. Ready to restart.`);
    sendToRenderer('updater:downloaded', {
      version: info.version
    });
  });

  // 5. Error handling
  autoUpdater.on('error', (err) => {
    const errorMsg = err == null ? 'Unknown update error' : (err.message || String(err));
    console.error('[Desktop Updater] Error:', errorMsg);
    sendToRenderer('updater:error', {
      message: errorMsg
    });
  });

  // Check 3 seconds after startup in production
  if (!electronIsDev) {
    setTimeout(() => {
      autoUpdater.checkForUpdates().catch((err) => {
        console.warn('[Desktop Updater] Initial check error:', err?.message || err);
      });
    }, 3000);

    // Re-check periodically every 4 hours
    setInterval(() => {
      autoUpdater.checkForUpdates().catch(() => {});
    }, 4 * 60 * 60 * 1000);
  }
}

// IPC Handlers triggered by the React UI
ipcMain.handle('updater:check', async () => {
  if (electronIsDev) {
    return { success: true, isDev: true, currentVersion: app.getVersion() };
  }
  try {
    const result = await autoUpdater.checkForUpdates();
    return {
      success: true,
      currentVersion: app.getVersion(),
      latestVersion: result?.updateInfo?.version || app.getVersion(),
      updateInfo: result?.updateInfo
    };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('updater:start-download', async () => {
  try {
    await autoUpdater.downloadUpdate();
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('updater:restart-and-install', () => {
  autoUpdater.quitAndInstall(false, true);
});
