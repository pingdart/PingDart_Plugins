/* eslint-disable @typescript-eslint/no-var-requires */
let CapacitorCommunitySqlite = null;
try {
  CapacitorCommunitySqlite = require('../../../node_modules/@capacitor-community/sqlite/electron/dist/plugin.js');
} catch (e) {
  // SQLite is only used on iOS/Android native; Electron uses IndexedDB
}

module.exports = {
  ...(CapacitorCommunitySqlite ? { CapacitorCommunitySqlite } : {}),
};