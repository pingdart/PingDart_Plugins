require('./rt/electron-rt');
//////////////////////////////
// User Defined Preload scripts below
const { contextBridge, ipcRenderer } = require('electron');

// Expose a reliable flag so the renderer can always detect it's running in Electron,
// even in dev mode when loading from http://localhost:4026
contextBridge.exposeInMainWorld('__ELECTRON__', true);

// Expose PingDart Workstation Tracker Desktop Agent IPC APIs
contextBridge.exposeInMainWorld('__ELECTRON_TRACKER__', {
  isInstalled: () => true,
  getSystemIdleTime: () => ipcRenderer.invoke('tracker:get-idle-time'),
  captureScreenshot: () => ipcRenderer.invoke('tracker:capture-screenshot'),
  getActiveWindow: () => ipcRenderer.invoke('tracker:get-active-window'),
  getWorkstationInfo: () => ipcRenderer.invoke('tracker:get-info'),
  savePairing: (code: string) => ipcRenderer.invoke('tracker:save-pairing', code),
  getPairing: () => ipcRenderer.invoke('tracker:get-pairing'),
});

// Expose Website-Hosted Auto-Updater APIs
contextBridge.exposeInMainWorld('__ELECTRON_UPDATER__', {
  checkForUpdates: () => ipcRenderer.invoke('updater:check'),
  startDownload: () => ipcRenderer.invoke('updater:start-download'),
  restartAndInstall: () => ipcRenderer.invoke('updater:restart-and-install'),
  onUpdateAvailable: (callback: (data: any) => void) => {
    const listener = (_: any, data: any) => callback(data);
    ipcRenderer.on('updater:available', listener);
    return () => ipcRenderer.removeListener('updater:available', listener);
  },
  onDownloadProgress: (callback: (data: any) => void) => {
    const listener = (_: any, data: any) => callback(data);
    ipcRenderer.on('updater:progress', listener);
    return () => ipcRenderer.removeListener('updater:progress', listener);
  },
  onUpdateDownloaded: (callback: (data: any) => void) => {
    const listener = (_: any, data: any) => callback(data);
    ipcRenderer.on('updater:downloaded', listener);
    return () => ipcRenderer.removeListener('updater:downloaded', listener);
  },
  onUpdateNotAvailable: (callback: (data: any) => void) => {
    const listener = (_: any, data: any) => callback(data);
    ipcRenderer.on('updater:not-available', listener);
    return () => ipcRenderer.removeListener('updater:not-available', listener);
  },
  onUpdateError: (callback: (err: any) => void) => {
    const listener = (_: any, err: any) => callback(err);
    ipcRenderer.on('updater:error', listener);
    return () => ipcRenderer.removeListener('updater:error', listener);
  }
});

console.log('User Preload! [Electron] - PingDart Workstation & Auto-Updater Bridge Ready');
