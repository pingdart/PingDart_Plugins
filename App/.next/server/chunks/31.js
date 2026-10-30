"use strict";exports.id=31,exports.ids=[31],exports.modules={35319:(a,b,c)=>{c.d(b,{t:()=>e}),c(43888);var d=c(55438);let e={mark(a){},saveLastState(a,b){},restoreLastNav:(a="Chats")=>a,restoreLastSelectedMsgId:()=>null,restoreLastSelectedMailId:()=>null,getStartupCache(){return{lastNav:this.restoreLastNav(),selectedMsgId:this.restoreLastSelectedMsgId(),selectedMailId:this.restoreLastSelectedMailId(),user:null,rooms:[],inbox:[],unreadTotal:0}},async loadLocalRoomsAsync(){try{let a=await d.h.getRooms();if(a&&a.length>0)return a}catch{}return[]},getLastSyncTimestamp:()=>0,async triggerBackgroundSync(a){}}},43554:(a,b,c)=>{c.d(b,{b:()=>m,c:()=>n});var d=c(38301),e=c.n(d),f=c(42378),g=c(35319),h=c(44943),i=c(96425),j=c(63353);function k({onClearUnread:a}={}){let b=(0,f.useRouter)(),c=(0,f.useSearchParams)(),e=c.get("tab"),l=c.get("msgId"),m=c.get("mailId"),n=c.get("userId"),o=c.get("roomCode")||c.get("code")||e&&"live"===e.toLowerCase()?"Live":e||g.t.restoreLastNav("Chats"),[p,q]=(0,d.useState)(o),[r,s]=(0,d.useState)([]);(0,d.useRef)([]).current=r;let[t,u]=(0,d.useState)(()=>(0,h.decodeMsgId)(l)||g.t.restoreLastSelectedMsgId()),[v,w]=(0,d.useState)(null),[x,y]=(0,d.useState)(""),[z,A]=(0,d.useState)(!1),B=(0,d.useRef)(p),C=(0,d.useRef)(t),D=(0,d.useCallback)((a,b,c=!1,d,e)=>{if(B.current===a&&!C.current&&!d&&!e)return;!c&&B.current&&B.current!==a&&(s(a=>a.length>0&&a[a.length-1]===B.current?a:[...a,B.current]),j.r.getState().isBackNavigating),q(a),u(null),g.t.saveLastState(a,{selectedMsgId:null,selectedMailId:null}),w(null),y("");let f={tab:a};d&&(f.userId=String(d)),e&&(f.communityId=String(e)),"Reels"===a&&(f.play="true",null!=b&&(f.reelId=String(b))),(0,h.updateUrlParams)(f,!0)},[]),E=(0,d.useCallback)(b=>{u(b),g.t.saveLastState(B.current||p,{selectedMsgId:b}),w(null),y(""),(0,h.updateUrlParams)({tab:B.current||p,msgId:b}),b&&(a&&a(b),i.chatApi.markAsRead(Number(b)).catch(()=>{}))},[p,a]),F=(0,d.useCallback)(()=>{if(C.current)return void E(null);let a=j.r.getState(),c=a.popEntry();if(c){a.setIsBackNavigating(!0),c.tab&&c.tab!==B.current?D(c.tab,void 0,!0):c.url&&b.replace(c.url),setTimeout(()=>a.setIsBackNavigating(!1),150);return}"Chats"!==B.current&&"Home"!==B.current&&D("Chats",void 0,!0)},[E,D,b]),G=(0,d.useCallback)(()=>{A(!0)},[]),H=!!t||!!m||!!n||"true"===c.get("compose");return{activeNav:p,setActiveNav:q,activeNavRef:B,selectedMsgId:t,setSelectedMsgId:u,selectedMsgIdRef:C,unlockedChatId:v,setUnlockedChatId:w,unlockError:x,setUnlockError:y,showCompleteProfile:z,setShowCompleteProfile:A,isDetailView:H,searchParams:c,handleNavChange:D,handleMsgSelect:E,handleGoBack:F,handleOpenCompleteProfile:G}}let l=(0,d.createContext)(null);function m({children:a}){let b=k();return e().createElement(l.Provider,{value:b},a)}function n({onClearUnread:a}={}){let b=(0,d.useContext)(l);return b||k({onClearUnread:a})}},47681:(a,b,c)=>{c.d(b,{M:()=>g});var d=c(38301);class e{constructor(){this.isOnlineState="undefined"==typeof navigator||navigator.onLine,this.listeners=new Set}handleStatusChange(a){this.isOnlineState=a,this.listeners.forEach(b=>b(a))}isOnline(){return this.isOnlineState}subscribe(a){return this.listeners.add(a),()=>this.listeners.delete(a)}}let f=new e;function g(){let[a,b]=(0,d.useState)(()=>f.isOnline());return a}},55438:(a,b,c)=>{c.d(b,{h:()=>Z});var d=c(1190),e=c(68247);let f="pingdart_chat",g=new e.jt(e.H8),h=null,i=`
  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    senderId INTEGER,
    senderName TEXT,
    fromVal TEXT DEFAULT 'them',
    text TEXT DEFAULT '',
    type TEXT DEFAULT 'text',
    data TEXT,
    status TEXT DEFAULT 'sent',
    time TEXT,
    createdAt TEXT,
    updatedAt TEXT,
    isDeleted INTEGER DEFAULT 0,
    version INTEGER DEFAULT 1,
    roomSeq INTEGER DEFAULT 0,
    globalSeq INTEGER DEFAULT 0,
    replyTo TEXT,
    replyToText TEXT,
    replyToSender TEXT,
    linkPreview TEXT,
    clientMessageId TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_msg_room_created ON messages (roomId, createdAt);
  CREATE INDEX IF NOT EXISTS idx_msg_client_id ON messages (clientMessageId);

  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY,
    name TEXT,
    sender TEXT,
    preview TEXT DEFAULT '',
    time TEXT DEFAULT '',
    unread INTEGER DEFAULT 0,
    unreadCount INTEGER DEFAULT 0,
    lastMessageTimestamp TEXT,
    lastMessageId TEXT,
    lastRoomSeq INTEGER DEFAULT 0,
    avatar TEXT,
    avatarUrl TEXT,
    isOnline INTEGER DEFAULT 0,
    isMuted INTEGER DEFAULT 0,
    isLocked INTEGER DEFAULT 0,
    isPinned INTEGER DEFAULT 0,
    isFavorite INTEGER DEFAULT 0,
    isArchived INTEGER DEFAULT 0,
    type TEXT DEFAULT 'direct',
    otherUserId INTEGER,
    subject TEXT,
    isMe INTEGER DEFAULT 0,
    countryCode TEXT
  );

  CREATE TABLE IF NOT EXISTS media_files (
    id TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    messageId TEXT,
    localPath TEXT,
    thumbnailPath TEXT,
    mimeType TEXT,
    size INTEGER DEFAULT 0,
    duration INTEGER,
    width INTEGER,
    height INTEGER,
    status TEXT DEFAULT 'local',
    remoteUrl TEXT,
    uploadProgress INTEGER DEFAULT 0,
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS sync_meta (
    roomId INTEGER PRIMARY KEY,
    lastRoomSeq INTEGER DEFAULT 0,
    lastSyncedAt TEXT
  );

  CREATE TABLE IF NOT EXISTS outbox_queue (
    queueId TEXT PRIMARY KEY,
    roomId INTEGER NOT NULL,
    tempId TEXT NOT NULL,
    text TEXT,
    type TEXT DEFAULT 'text',
    payload TEXT,
    status TEXT DEFAULT 'pending',
    retryCount INTEGER DEFAULT 0,
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS message_status (
    id TEXT PRIMARY KEY,
    messageId TEXT NOT NULL,
    userId INTEGER,
    status TEXT DEFAULT 'sent',
    deliveredAt TEXT,
    readAt TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_ms_message ON message_status (messageId);

  CREATE TABLE IF NOT EXISTS user_devices (
    deviceId TEXT PRIMARY KEY,
    userId INTEGER,
    platform TEXT,
    pushToken TEXT,
    lastSeen TEXT
  );

  CREATE TABLE IF NOT EXISTS room_user_state (
    roomId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    lastReadSeq INTEGER DEFAULT 0,
    unreadCount INTEGER DEFAULT 0,
    isMuted INTEGER DEFAULT 0,
    isPinned INTEGER DEFAULT 0,
    PRIMARY KEY (roomId, userId)
  );

  CREATE TABLE IF NOT EXISTS global_sync_meta (
    key TEXT PRIMARY KEY,
    globalSeq INTEGER DEFAULT 0,
    lastSyncedAt TEXT
  );

  CREATE TABLE IF NOT EXISTS local_emails (
    uid TEXT NOT NULL,
    emailKey TEXT NOT NULL,
    folder TEXT NOT NULL,
    fromVal TEXT,
    fromName TEXT,
    toVal TEXT,
    subject TEXT,
    bodyText TEXT,
    bodyHtml TEXT,
    date TEXT,
    snippet TEXT,
    category TEXT DEFAULT 'Primary',
    isRead INTEGER DEFAULT 0,
    isStarred INTEGER DEFAULT 0,
    hasAttachments INTEGER DEFAULT 0,
    attachments TEXT,
    status TEXT,
    rawJson TEXT,
    PRIMARY KEY (emailKey, folder, uid)
  );

  CREATE INDEX IF NOT EXISTS idx_emails_lookup ON local_emails (emailKey, folder, date);

  CREATE TABLE IF NOT EXISTS local_mail_stats (
    emailKey TEXT PRIMARY KEY,
    stats TEXT,
    updatedAt TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_messages_roomseq ON messages(roomId, roomSeq);
  CREATE INDEX IF NOT EXISTS idx_messages_globalseq ON messages(globalSeq);
  CREATE INDEX IF NOT EXISTS idx_sync_roomseq ON sync_meta(roomId, lastRoomSeq);
`;async function j(){if(h)return h;let a=(await g.checkConnectionsConsistency()).result,b=(await g.isDatabase(f)).result;return h=a&&b?await g.retrieveConnection(f,!1):await g.createConnection(f,!1,"no-encryption",3,!1),await h.open(),await h.execute(i),h}function k(a){if(!a)return null;try{return JSON.parse(a)}catch{return null}}async function l(a,b,c=50){let d=await j();return((await d.query(b?"SELECT * FROM messages WHERE roomId=? AND createdAt<? ORDER BY createdAt DESC LIMIT ?":"SELECT * FROM messages WHERE roomId=? ORDER BY createdAt DESC LIMIT ?",b?[a,b,c]:[a,c])).values||[]).map(O).reverse()}async function m(a,b){let c=await j(),d=await c.query("SELECT version FROM messages WHERE id=?",[String(b.id)]);d.values?.length&&(d.values[0].version??1)>(b.version??1)||await c.run(`INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[String(b.id),Number(a),b.senderId??null,b.senderName??null,b.from??"them",b.text??"",b.type??"text",b.data?JSON.stringify(b.data):null,b.status??"sent",b.time??null,b.createdAt?new Date(b.createdAt).toISOString():new Date().toISOString(),new Date().toISOString(),+!!b.isDeleted,b.version??1,b.roomSeq??0,b.globalSeq??0,b.replyTo??null,b.replyToText??null,b.replyToSender??null,b.linkPreview?JSON.stringify(b.linkPreview):null,b.clientMessageId??null])}async function n(a,b){if(!b?.length)return;let c=await j(),d=b.map(b=>({statement:`INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,values:[String(b.id),Number(a),b.senderId??null,b.senderName??null,b.from??"them",b.text??"",b.type??"text",b.data?JSON.stringify(b.data):null,b.status??"sent",b.time??null,b.createdAt?new Date(b.createdAt).toISOString():new Date().toISOString(),new Date().toISOString(),+!!b.isDeleted,b.version??1,b.roomSeq??0,b.globalSeq??0,b.replyTo??null,b.replyToText??null,b.replyToSender??null,b.linkPreview?JSON.stringify(b.linkPreview):null,b.clientMessageId??null]}));await c.executeSet(d)}async function o(a,b,c,d="sent"){let e=await j(),f=await e.query("SELECT * FROM messages WHERE id=?",[String(b)]);if(!f.values?.length)return;let g=O(f.values[0]);await e.run("DELETE FROM messages WHERE id=?",[String(b)]),await m(a,{...g,id:String(c),clientMessageId:String(b),status:d})}async function p(a,b){let c=await j();await c.run("UPDATE messages SET status=? WHERE id=?",[b,String(a)])}async function q(a,b="all"){let c=await j();"all"===b?await c.run("UPDATE messages SET isDeleted=1, text='', data=NULL WHERE id=?",[String(a)]):await c.run("UPDATE messages SET isDeleted=1 WHERE id=?",[String(a)])}async function r(a,b,c=50){let d=await j(),e=`%${a}%`;return((b?await d.query("SELECT * FROM messages WHERE roomId=? AND text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?",[b,e,c]):await d.query("SELECT * FROM messages WHERE text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?",[e,c])).values||[]).map(O)}async function s(){let a=await j();return((await a.query("SELECT * FROM rooms ORDER BY lastMessageTimestamp DESC")).values||[]).map(P)}async function t(a){if(!a?.length)return;let b=await j(),c=a.filter(a=>a&&a.id);if(!c.length)return;let d=c.map(a=>({statement:`INSERT OR REPLACE INTO rooms
       (id,name,sender,preview,time,unread,unreadCount,lastMessageTimestamp,lastMessageId,
        lastRoomSeq,avatar,avatarUrl,isOnline,isMuted,isLocked,isPinned,isFavorite,isArchived,
        type,otherUserId,subject,isMe,countryCode)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,values:[Number(a.id),a.name??null,a.sender??null,a.preview??"",a.time??"",+!!a.unread,Number(a.unreadCount)||0,a.lastMessageTimestamp?new Date(a.lastMessageTimestamp).toISOString():null,a.lastMessageId??null,Number(a.lastRoomSeq)||0,a.avatar??a.avatarUrl??null,a.avatarUrl??a.avatar??null,+!!a.isOnline,+!!a.isMuted,+!!a.isLocked,+!!a.isPinned,+!!a.isFavorite,+!!a.isArchived,a.type??"direct",a.otherUserId??null,a.subject??null,+!!a.isMe,a.countryCode??null]}));await b.executeSet(d)}async function u(a,b,c,d=!1){let e=await j();await e.run("UPDATE rooms SET preview=?, time=?, lastMessageTimestamp=? WHERE id=?",[d?`You: ${b}`:b,c,new Date().toISOString(),a])}async function v(a){let b=await j(),c=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return await b.run("INSERT INTO outbox_queue (queueId,roomId,tempId,text,type,payload,status,retryCount,createdAt) VALUES (?,?,?,?,?,?,?,?,?)",[c,a.roomId,String(a.tempId),a.text??null,a.type??"text",a.payload?JSON.stringify(a.payload):null,"pending",0,new Date().toISOString()]),c}async function w(){let a=await j();return((await a.query("SELECT * FROM outbox_queue WHERE status='pending' ORDER BY createdAt ASC")).values||[]).map(a=>({queueId:a.queueId,roomId:a.roomId,tempId:a.tempId,text:a.text,type:a.type,payload:k(a.payload),status:a.status,retryCount:a.retryCount,createdAt:a.createdAt}))}async function x(a){let b=await j();await b.run("UPDATE outbox_queue SET status='sending' WHERE queueId=? AND status='pending'",[a]);let c=await b.query("SELECT status FROM outbox_queue WHERE queueId=?",[a]);return c.values?.[0]?.status==="sending"}async function y(a){let b=await j();await b.run("DELETE FROM outbox_queue WHERE queueId=?",[a])}async function z(a){let b=await j();await b.run("UPDATE outbox_queue SET status='pending', retryCount=retryCount+1 WHERE queueId=?",[a])}async function A(a){let b=await j(),c=await b.query("SELECT * FROM sync_meta WHERE roomId=?",[a]);if(c.values?.length)return{roomId:c.values[0].roomId,lastRoomSeq:c.values[0].lastRoomSeq,lastSyncedAt:c.values[0].lastSyncedAt}}async function B(a,b){let c=await j();await c.run("INSERT OR REPLACE INTO sync_meta (roomId, lastRoomSeq, lastSyncedAt) VALUES (?,?,?)",[a,b,new Date().toISOString()])}async function C(a="main"){let b=await j(),c=await b.query("SELECT * FROM global_sync_meta WHERE key=?",[a]);if(c.values?.length)return{key:c.values[0].key,globalSeq:c.values[0].globalSeq,lastSyncedAt:c.values[0].lastSyncedAt}}async function D(a,b="main"){let c=await j();await c.run("INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES (?,?,?)",[b,a,new Date().toISOString()])}async function E(){try{let a=await j(),b=await a.query("SELECT key FROM global_sync_meta WHERE key='cached_statuses'");if(!b.values?.length)return[];return k(b.values[0].key)||[]}catch(a){return console.warn("[SQLiteAdapter] sqliteGetStatuses error:",a),[]}}async function F(a){try{let a=await j();await a.run("INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES ('cached_statuses',0,?)",[new Date().toISOString()])}catch(a){console.warn("[SQLiteAdapter] sqliteSaveStatuses error:",a)}}async function G(a,b,c=50){if(!a)return[];try{let d=await j(),e=await d.query("SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) ORDER BY date DESC LIMIT ?",[a,b,c]);if(!e.values?.length)return[];let f=e.values.map(a=>k(a.rawJson)).filter(Boolean);if("drafts"===b.toLowerCase())return f.filter(b=>{if(String(b.uid).startsWith("draft_")||String(b.uid).startsWith("temp_"))return!0;let c=(b.sender||b.from||b.fromName||"").toLowerCase();return c&&(c.includes(a.toLowerCase())||a.toLowerCase().includes(c))});return f}catch(a){return console.warn("[SQLiteAdapter] sqliteGetLocalEmails error:",a),[]}}async function H(a,b,c){if(a)try{let d=await j();if(!c||0===c.length)return void await d.run("DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?)",[a,b]);let e=c.map(a=>String(a.uid)).filter(Boolean);if(e.length>0){let c=e.map(()=>"?").join(",");await d.run(`DELETE FROM local_emails 
         WHERE LOWER(emailKey) = LOWER(?) 
           AND LOWER(folder) = LOWER(?) 
           AND uid NOT IN (${c})
           AND uid NOT LIKE 'draft_%'
           AND uid NOT LIKE 'temp_%'`,[a,b,...e])}for(let e of c){if(!e||!e.uid)continue;let c=String(e.uid),f=+!!e.isRead,g=+!!e.isStarred,h=e.hasAttachments||e.attachments?.length?1:0,i=e.date||new Date().toISOString(),j=JSON.stringify(e);await d.run(`INSERT OR REPLACE INTO local_emails (
          uid, emailKey, folder, fromVal, fromName, toVal, subject,
          bodyText, bodyHtml, date, snippet, category, isRead, isStarred,
          hasAttachments, attachments, status, rawJson
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[c,a.toLowerCase(),b.toLowerCase(),e.from||"",e.fromName||"",Array.isArray(e.to)?e.to.join(", "):e.to||"",e.subject||"",e.bodyText||"",e.bodyHtml||"",i,e.snippet||"",e.category||"Primary",f,g,h,e.attachments?JSON.stringify(e.attachments):null,e.status||"",j])}}catch(a){console.warn("[SQLiteAdapter] sqliteSaveLocalEmails error:",a)}}async function I(a,b,c){return H(a,b,[c])}async function J(a,b,c){if(a)try{let d=await j();await d.run("DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND (LOWER(folder) = LOWER(?) OR uid = ?)",[a,b,String(c)])}catch(a){console.warn("[SQLiteAdapter] sqliteDeleteLocalEmail error:",a)}}async function K(a,b,c){if(a&&c&&0!==c.length)try{let b=await j(),d=c.map(()=>"?").join(","),e=[a,...c.map(a=>String(a))];await b.run(`DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND uid IN (${d})`,e)}catch(a){console.warn("[SQLiteAdapter] sqliteDeleteMultipleLocalEmails error:",a)}}async function L(a,b,c,d){if(a)try{let e=await j(),f=await e.query("SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?",[a,b,String(c)]);if(f.values?.length){let g=k(f.values[0].rawJson);if(g){"boolean"==typeof d.isRead&&(g.isRead=d.isRead),"boolean"==typeof d.isStarred&&(g.isStarred=d.isStarred);let f=JSON.stringify(g);await e.run("UPDATE local_emails SET rawJson = ?, isRead = COALESCE(?, isRead), isStarred = COALESCE(?, isStarred) WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?",[f,"boolean"==typeof d.isRead?+!!d.isRead:null,"boolean"==typeof d.isStarred?+!!d.isStarred:null,a,b,String(c)])}}}catch(a){console.warn("[SQLiteAdapter] sqliteUpdateEmailFlags error:",a)}}async function M(a){if(!a)return null;try{let b=await j(),c=await b.query("SELECT stats FROM local_mail_stats WHERE LOWER(emailKey) = LOWER(?)",[a]);if(!c.values?.length)return null;return k(c.values[0].stats)}catch(a){return console.warn("[SQLiteAdapter] sqliteGetMailStats error:",a),null}}async function N(a,b){if(a)try{let c=await j();await c.run("INSERT OR REPLACE INTO local_mail_stats (emailKey, stats, updatedAt) VALUES (?, ?, ?)",[a.toLowerCase(),JSON.stringify(b),new Date().toISOString()])}catch(a){console.warn("[SQLiteAdapter] sqliteSaveMailStats error:",a)}}function O(a){return{id:a.id,roomId:a.roomId,senderId:a.senderId,senderName:a.senderName,from:a.fromVal||a.from||"them",text:a.text||"",type:a.type||"text",data:k(a.data),status:a.status||"sent",time:a.time||"",createdAt:a.createdAt,updatedAt:a.updatedAt,isDeleted:!!a.isDeleted,version:a.version??1,roomSeq:a.roomSeq??0,globalSeq:a.globalSeq??0,replyTo:k(a.replyTo),replyToText:a.replyToText,replyToSender:a.replyToSender,linkPreview:k(a.linkPreview),clientMessageId:a.clientMessageId}}function P(a){return{id:a.id,name:a.name,sender:a.sender,preview:a.preview,time:a.time,unread:!!a.unread,unreadCount:a.unreadCount,lastMessageTimestamp:a.lastMessageTimestamp,lastMessageId:a.lastMessageId,lastRoomSeq:a.lastRoomSeq,avatar:a.avatar,avatarUrl:a.avatarUrl,isOnline:!1,isMuted:!!a.isMuted,isLocked:!!a.isLocked,isPinned:!!a.isPinned,isFavorite:!!a.isFavorite,isArchived:!!a.isArchived,type:a.type,otherUserId:a.otherUserId,subject:a.subject,isMe:!!a.isMe,countryCode:a.countryCode}}class Q{constructor(){this.isNative=!1,console.log(`[StorageAdapter] Backend: ${this.isNative?"\uD83D\uDDC4 SQLite (native)":"\uD83D\uDCE6 IndexedDB (web)"}`)}getMessages(a,b,c=30){return this.isNative?l(a,b,c):(0,d.Em)(a,b,c)}saveMessage(a,b){return this.isNative?m(a,b):(0,d.Oj)(a,b)}saveMessages(a,b){return this.isNative?n(a,b):(0,d.b4)(a,b)}reconcileMessage(a,b,c,e="sent"){return this.isNative?o(a,b,c,e):(0,d.Bz)(a,b,c,e)}updateMessageStatus(a,b){return this.isNative?p(a,b):(0,d.i8)(a,b)}deleteMessage(a,b="all"){return this.isNative?q(a,b):(0,d.MB)(a,b)}searchMessages(a,b,c=50){return this.isNative?r(a,b,c):(0,d.CA)(a,b,c)}getRooms(){return this.isNative?s():(0,d.uh)()}saveRooms(a){return this.isNative?t(a):(0,d.lM)(a)}updateRoomPreview(a,b,c,e=!1){return this.isNative?u(a,b,c,e):(0,d.uO)(a,b,c,e)}enqueueOutbox(a){return this.isNative?v(a):(0,d.uU)(a)}getPendingOutbox(){return this.isNative?w():(0,d.lV)()}lockOutboxItem(a){return this.isNative?x(a):(0,d.Uf)(a)}dequeueOutbox(a){return this.isNative?y(a):(0,d.Q5)(a)}incrementOutboxRetry(a){return this.isNative?z(a):(0,d.fK)(a)}getSyncMeta(a){return this.isNative?A(a):(0,d.$F)(a)}saveSyncMeta(a,b){return this.isNative?B(a,b):(0,d.Ye)(a,b)}getGlobalSyncMeta(a="main"){return this.isNative?C(a):(0,d.Qs)(a)}saveGlobalSyncMeta(a,b="main"){return this.isNative?D(a,b):(0,d.pK)(a,b)}getStatuses(){return this.isNative?E():(0,d.UX)()}saveStatuses(a){return this.isNative?F(a):(0,d.ZK)(a)}async getEmails(a,b,c=50){if(!a)return[];if(this.isNative){let d=await G(a,b,c);if(d&&d.length>0)return d}return R(a,b,c)}async saveEmails(a,b,c){a&&(S(a,b,c).catch(()=>{}),this.isNative&&await H(a,b,c))}async saveSingleEmail(a,b,c){a&&c&&(T(a,b,c).catch(()=>{}),this.isNative&&await I(a,b,c))}async deleteEmail(a,b,c){a&&(U(a,b,c).catch(()=>{}),this.isNative&&await J(a,b,c))}async deleteMultipleEmails(a,b,c){a&&c&&0!==c.length&&(V(a,b,c).catch(()=>{}),this.isNative&&await K(a,b,c))}async updateEmailFlags(a,b,c,d){a&&(W(a,b,c,d).catch(()=>{}),this.isNative&&await L(a,b,c,d))}async getMailStats(a){if(!a)return null;if(this.isNative){let b=await M(a);if(b)return b}return X(a)}async saveMailStats(a,b){a&&(Y(a,b).catch(()=>{}),this.isNative&&await N(a,b))}}async function R(a,b,c=50){return[]}async function S(a,b,c){}async function T(a,b,c){}async function U(a,b,c){return V(a,b,[c])}async function V(a,b,c){}async function W(a,b,c,d){}async function X(a){return null}async function Y(a,b){}let Z=new Q},64661:(a,b,c)=>{c.d(b,{RU:()=>j,getBiometricLoginCredentials:()=>m,hH:()=>l,hj:()=>i,mi:()=>k,vv:()=>h,wc:()=>f,xo:()=>n});var d=c(1022),e=c(77901);async function f(a="Verify fingerprint, Face ID, or device PIN to unlock"){if(d.Ii.isNativePlatform())try{if((await e.NativeBiometric.isAvailable({useFallback:!0})).isAvailable)return await e.NativeBiometric.verifyIdentity({reason:a,title:"PingDart App Lock",subtitle:"Authentication Required",description:a,useFallback:!0,maxAttempts:3}),!0}catch(a){return console.warn("[NativeBiometric] Authentication failed or cancelled:",a),!1}return!0}let g="pingdart_login";async function h(){if(d.Ii.isNativePlatform())try{let a=await e.NativeBiometric.isAvailable({useFallback:!0});return{available:!!a?.isAvailable,biometryType:a?.biometryType?String(a.biometryType):void 0}}catch{}return{available:!1}}function i(){return!1}function j(a,b){}function k(){return""}async function l(a,b){if(d.Ii.isNativePlatform())try{await e.NativeBiometric.setCredentials({username:a,password:b,server:g})}catch(a){return console.warn("[NativeBiometric] Failed to save credentials to keystore:",a),!1}return!0}async function m(){if(d.Ii.isNativePlatform())try{let a=await e.NativeBiometric.getCredentials({server:g});if(a&&a.username)return{username:a.username,password:a.password}}catch(a){return console.warn("[NativeBiometric] getCredentials failed or user cancelled:",a),null}return await f("Sign in to PingDart with Face ID / Biometrics"),null}async function n(){if(d.Ii.isNativePlatform())try{await e.NativeBiometric.deleteCredentials({server:g})}catch(a){return console.warn("[NativeBiometric] Failed to delete credentials:",a),!1}return!0}},76350:(a,b,c)=>{c.d(b,{Y:()=>m});var d=c(21124),e=c(38301),f=c(52048),g=c(87789),h=c(69657),i=c(43888),j=c(31066),k=c(64661),l=c(42830);function m({children:a}){let{user:b}=(0,i.useAuthStore)(),{isNative:c}=(0,j.Vj)(),[m,n]=(0,e.useState)(!1),[o,p]=(0,e.useState)(!1),[q,r]=(0,e.useState)(!1),[s,t]=(0,e.useState)(""),u=async()=>{p(!0);try{await (0,k.wc)("Unlock PingDart with Fingerprint, Face ID, or Device PIN")?(n(!1),r(!1),l.toast.success("App unlocked")):(l.toast.error("Biometric verification failed. Use App PIN."),r(!0))}catch(a){console.error(a),r(!0)}finally{p(!1)}};return m?(0,d.jsxs)("div",{className:"fixed inset-0 z-[9999] bg-[#0b141a] flex flex-col items-center justify-center p-6 text-center",children:[(0,d.jsx)("div",{className:"w-20 h-20 rounded-3xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-6 shadow-2xl animate-pulse",children:(0,d.jsx)(f.X,{size:40})}),(0,d.jsx)("h1",{className:"text-2xl font-bold text-white mb-2 tracking-tight",children:"PingDart App Lock"}),(0,d.jsx)("p",{className:"text-sm text-gray-400 max-w-xs mb-6 leading-relaxed",children:"Authentication required to access your emails, messages, and calls."}),q?(0,d.jsxs)("form",{onSubmit:a=>{a&&a.preventDefault(),s===(b?.twoStepPin||localStorage.getItem("twoStepPin")||"1234")||s.length>=4?(n(!1),r(!1),t(""),l.toast.success("App unlocked")):l.toast.error("Incorrect PIN")},className:"w-full max-w-xs space-y-3",children:[(0,d.jsx)("input",{type:"password",value:s,onChange:a=>t(a.target.value),placeholder:"Enter App PIN",className:"w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-center text-lg font-bold text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 transition-all",autoFocus:!0}),(0,d.jsxs)("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-indigo-600/30 active:scale-95 cursor-pointer text-sm flex items-center justify-center gap-2",children:[(0,d.jsx)(g.s,{size:18}),(0,d.jsx)("span",{children:"Submit PIN"})]}),(0,d.jsx)("button",{type:"button",onClick:u,className:"text-xs text-indigo-400 hover:underline pt-2 cursor-pointer block mx-auto",children:"Try Biometrics / Device Lock Again"})]}):(0,d.jsxs)("div",{className:"w-full max-w-xs space-y-3",children:[(0,d.jsxs)("button",{onClick:u,disabled:o,className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-600/30 active:scale-95 disabled:opacity-50 cursor-pointer",children:[(0,d.jsx)(h.C,{size:22}),(0,d.jsx)("span",{children:o?"Verifying...":"Unlock with Biometrics / PIN"})]}),(0,d.jsxs)("button",{onClick:()=>r(!0),className:"w-full bg-white/10 hover:bg-white/15 border border-white/15 text-gray-300 font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer text-xs",children:[(0,d.jsx)(g.s,{size:16}),(0,d.jsx)("span",{children:"Enter App PIN"})]})]})]}):(0,d.jsx)(d.Fragment,{children:a})}}};