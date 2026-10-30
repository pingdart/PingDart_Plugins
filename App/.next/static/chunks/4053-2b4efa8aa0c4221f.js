"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4053],{6259:(e,t,a)=>{a.d(t,{SQ:()=>o,_2:()=>u,lp:()=>d,mB:()=>E,rI:()=>s,ty:()=>l});var i=a(95155);a(12115);var n=a(51855),r=a(64269);function s({...e}){return(0,i.jsx)(n.bL,{"data-slot":"dropdown-menu",...e})}function l({...e}){return(0,i.jsx)(n.l9,{"data-slot":"dropdown-menu-trigger",...e})}function o({className:e,align:t="start",sideOffset:a=4,...s}){return(0,i.jsx)(n.ZL,{children:(0,i.jsx)(n.UC,{"data-slot":"dropdown-menu-content",sideOffset:a,align:t,className:(0,r.cn)("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",e),...s})})}function u({className:e,inset:t,variant:a="default",...s}){return(0,i.jsx)(n.q7,{"data-slot":"dropdown-menu-item","data-inset":t,"data-variant":a,className:(0,r.cn)("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",e),...s})}function d({className:e,inset:t,...a}){return(0,i.jsx)(n.JU,{"data-slot":"dropdown-menu-label","data-inset":t,className:(0,r.cn)("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",e),...a})}function E({className:e,...t}){return(0,i.jsx)(n.wv,{"data-slot":"dropdown-menu-separator",className:(0,r.cn)("-mx-1 my-1 h-px bg-border",e),...t})}},59021:(e,t,a)=>{a.d(t,{h:()=>z});var i=a(63122),n=a(31315);let r="pingdart_chat",s=new n.jt(n.H8),l=null,o=`
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
`;async function u(){if(l)return l;let e=(await s.checkConnectionsConsistency()).result,t=(await s.isDatabase(r)).result;return l=e&&t?await s.retrieveConnection(r,!1):await s.createConnection(r,!1,"no-encryption",3,!1),await l.open(),await l.execute(o),l}function d(e){if(!e)return null;try{return JSON.parse(e)}catch(e){return null}}async function E(e,t,a=50){let i=await u();return((await i.query(t?"SELECT * FROM messages WHERE roomId=? AND createdAt<? ORDER BY createdAt DESC LIMIT ?":"SELECT * FROM messages WHERE roomId=? ORDER BY createdAt DESC LIMIT ?",t?[e,t,a]:[e,a])).values||[]).map(P).reverse()}async function c(e,t){var a,i,n,r,s,l,o,d,E,c,T,m,S,g,y,I,f;let v=await u(),R=await v.query("SELECT version FROM messages WHERE id=?",[String(t.id)]);null!=(a=R.values)&&a.length&&(null!=(i=R.values[0].version)?i:1)>(null!=(n=t.version)?n:1)||await v.run(`INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[String(t.id),Number(e),null!=(r=t.senderId)?r:null,null!=(s=t.senderName)?s:null,null!=(l=t.from)?l:"them",null!=(o=t.text)?o:"",null!=(d=t.type)?d:"text",t.data?JSON.stringify(t.data):null,null!=(E=t.status)?E:"sent",null!=(c=t.time)?c:null,t.createdAt?new Date(t.createdAt).toISOString():new Date().toISOString(),new Date().toISOString(),+!!t.isDeleted,null!=(T=t.version)?T:1,null!=(m=t.roomSeq)?m:0,null!=(S=t.globalSeq)?S:0,null!=(g=t.replyTo)?g:null,null!=(y=t.replyToText)?y:null,null!=(I=t.replyToSender)?I:null,t.linkPreview?JSON.stringify(t.linkPreview):null,null!=(f=t.clientMessageId)?f:null])}async function T(e,t){if(!(null==t?void 0:t.length))return;let a=await u(),i=t.map(t=>{var a,i,n,r,s,l,o,u,d,E,c,T,m,S;return{statement:`INSERT OR REPLACE INTO messages
       (id,roomId,senderId,senderName,fromVal,text,type,data,status,time,createdAt,updatedAt,
        isDeleted,version,roomSeq,globalSeq,replyTo,replyToText,replyToSender,linkPreview,clientMessageId)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,values:[String(t.id),Number(e),null!=(a=t.senderId)?a:null,null!=(i=t.senderName)?i:null,null!=(n=t.from)?n:"them",null!=(r=t.text)?r:"",null!=(s=t.type)?s:"text",t.data?JSON.stringify(t.data):null,null!=(l=t.status)?l:"sent",null!=(o=t.time)?o:null,t.createdAt?new Date(t.createdAt).toISOString():new Date().toISOString(),new Date().toISOString(),+!!t.isDeleted,null!=(u=t.version)?u:1,null!=(d=t.roomSeq)?d:0,null!=(E=t.globalSeq)?E:0,null!=(c=t.replyTo)?c:null,null!=(T=t.replyToText)?T:null,null!=(m=t.replyToSender)?m:null,t.linkPreview?JSON.stringify(t.linkPreview):null,null!=(S=t.clientMessageId)?S:null]}});await a.executeSet(i)}async function m(e,t,a,i="sent"){var n;let r=await u(),s=await r.query("SELECT * FROM messages WHERE id=?",[String(t)]);if(!(null==(n=s.values)?void 0:n.length))return;let l=P(s.values[0]);await r.run("DELETE FROM messages WHERE id=?",[String(t)]),await c(e,{...l,id:String(a),clientMessageId:String(t),status:i})}async function S(e,t){let a=await u();await a.run("UPDATE messages SET status=? WHERE id=?",[t,String(e)])}async function g(e,t="all"){let a=await u();"all"===t?await a.run("UPDATE messages SET isDeleted=1, text='', data=NULL WHERE id=?",[String(e)]):await a.run("UPDATE messages SET isDeleted=1 WHERE id=?",[String(e)])}async function y(e,t,a=50){let i=await u(),n=`%${e}%`;return((t?await i.query("SELECT * FROM messages WHERE roomId=? AND text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?",[t,n,a]):await i.query("SELECT * FROM messages WHERE text LIKE ? AND isDeleted=0 ORDER BY roomSeq DESC, createdAt DESC LIMIT ?",[n,a])).values||[]).map(P)}async function I(){let e=await u();return((await e.query("SELECT * FROM rooms ORDER BY lastMessageTimestamp DESC")).values||[]).map(k)}async function f(e){if(!(null==e?void 0:e.length))return;let t=await u(),a=e.filter(e=>e&&e.id);if(!a.length)return;let i=a.map(e=>{var t,a,i,n,r,s,l,o,u,d,E,c,T;return{statement:`INSERT OR REPLACE INTO rooms
       (id,name,sender,preview,time,unread,unreadCount,lastMessageTimestamp,lastMessageId,
        lastRoomSeq,avatar,avatarUrl,isOnline,isMuted,isLocked,isPinned,isFavorite,isArchived,
        type,otherUserId,subject,isMe,countryCode)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,values:[Number(e.id),null!=(t=e.name)?t:null,null!=(a=e.sender)?a:null,null!=(i=e.preview)?i:"",null!=(n=e.time)?n:"",+!!e.unread,Number(e.unreadCount)||0,e.lastMessageTimestamp?new Date(e.lastMessageTimestamp).toISOString():null,null!=(r=e.lastMessageId)?r:null,Number(e.lastRoomSeq)||0,null!=(l=null!=(s=e.avatar)?s:e.avatarUrl)?l:null,null!=(u=null!=(o=e.avatarUrl)?o:e.avatar)?u:null,+!!e.isOnline,+!!e.isMuted,+!!e.isLocked,+!!e.isPinned,+!!e.isFavorite,+!!e.isArchived,null!=(d=e.type)?d:"direct",null!=(E=e.otherUserId)?E:null,null!=(c=e.subject)?c:null,+!!e.isMe,null!=(T=e.countryCode)?T:null]}});await t.executeSet(i)}async function v(e,t,a,i=!1){let n=await u();await n.run("UPDATE rooms SET preview=?, time=?, lastMessageTimestamp=? WHERE id=?",[i?`You: ${t}`:t,a,new Date().toISOString(),e])}async function R(e){var t,a;let i=await u(),n=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return await i.run("INSERT INTO outbox_queue (queueId,roomId,tempId,text,type,payload,status,retryCount,createdAt) VALUES (?,?,?,?,?,?,?,?,?)",[n,e.roomId,String(e.tempId),null!=(t=e.text)?t:null,null!=(a=e.type)?a:"text",e.payload?JSON.stringify(e.payload):null,"pending",0,new Date().toISOString()]),n}async function N(){let e=await u();return((await e.query("SELECT * FROM outbox_queue WHERE status='pending' ORDER BY createdAt ASC")).values||[]).map(e=>({queueId:e.queueId,roomId:e.roomId,tempId:e.tempId,text:e.text,type:e.type,payload:d(e.payload),status:e.status,retryCount:e.retryCount,createdAt:e.createdAt}))}async function p(e){var t,a;let i=await u();return await i.run("UPDATE outbox_queue SET status='sending' WHERE queueId=? AND status='pending'",[e]),(null==(a=(await i.query("SELECT status FROM outbox_queue WHERE queueId=?",[e])).values)||null==(t=a[0])?void 0:t.status)==="sending"}async function A(e){let t=await u();await t.run("DELETE FROM outbox_queue WHERE queueId=?",[e])}async function w(e){let t=await u();await t.run("UPDATE outbox_queue SET status='pending', retryCount=retryCount+1 WHERE queueId=?",[e])}async function L(e){var t;let a=await u(),i=await a.query("SELECT * FROM sync_meta WHERE roomId=?",[e]);if(null==(t=i.values)?void 0:t.length)return{roomId:i.values[0].roomId,lastRoomSeq:i.values[0].lastRoomSeq,lastSyncedAt:i.values[0].lastSyncedAt}}async function O(e,t){let a=await u();await a.run("INSERT OR REPLACE INTO sync_meta (roomId, lastRoomSeq, lastSyncedAt) VALUES (?,?,?)",[e,t,new Date().toISOString()])}async function h(e="main"){var t;let a=await u(),i=await a.query("SELECT * FROM global_sync_meta WHERE key=?",[e]);if(null==(t=i.values)?void 0:t.length)return{key:i.values[0].key,globalSeq:i.values[0].globalSeq,lastSyncedAt:i.values[0].lastSyncedAt}}async function D(e,t="main"){let a=await u();await a.run("INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES (?,?,?)",[t,e,new Date().toISOString()])}async function _(){try{var e;let t=await u(),a=await t.query("SELECT key FROM global_sync_meta WHERE key='cached_statuses'");if(!(null==(e=a.values)?void 0:e.length))return[];return d(a.values[0].key)||[]}catch(e){return console.warn("[SQLiteAdapter] sqliteGetStatuses error:",e),[]}}async function M(e){try{let e=await u();await e.run("INSERT OR REPLACE INTO global_sync_meta (key, globalSeq, lastSyncedAt) VALUES ('cached_statuses',0,?)",[new Date().toISOString()])}catch(e){console.warn("[SQLiteAdapter] sqliteSaveStatuses error:",e)}}async function x(e,t,a=50){if(!e)return[];try{var i;let n=await u(),r=await n.query("SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) ORDER BY date DESC LIMIT ?",[e,t,a]);if(!(null==(i=r.values)?void 0:i.length))return[];let s=r.values.map(e=>d(e.rawJson)).filter(Boolean);if("drafts"===t.toLowerCase())return s.filter(t=>{if(String(t.uid).startsWith("draft_")||String(t.uid).startsWith("temp_"))return!0;let a=(t.sender||t.from||t.fromName||"").toLowerCase();return a&&(a.includes(e.toLowerCase())||e.toLowerCase().includes(a))});return s}catch(e){return console.warn("[SQLiteAdapter] sqliteGetLocalEmails error:",e),[]}}async function X(e,t,a){if(e)try{let n=await u();if(!a||0===a.length)return void await n.run("DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?)",[e,t]);let r=a.map(e=>String(e.uid)).filter(Boolean);if(r.length>0){let a=r.map(()=>"?").join(",");await n.run(`DELETE FROM local_emails 
         WHERE LOWER(emailKey) = LOWER(?) 
           AND LOWER(folder) = LOWER(?) 
           AND uid NOT IN (${a})
           AND uid NOT LIKE 'draft_%'
           AND uid NOT LIKE 'temp_%'`,[e,t,...r])}for(let r of a){var i;if(!r||!r.uid)continue;let a=String(r.uid),s=+!!r.isRead,l=+!!r.isStarred,o=r.hasAttachments||(null==(i=r.attachments)?void 0:i.length)?1:0,u=r.date||new Date().toISOString(),d=JSON.stringify(r);await n.run(`INSERT OR REPLACE INTO local_emails (
          uid, emailKey, folder, fromVal, fromName, toVal, subject,
          bodyText, bodyHtml, date, snippet, category, isRead, isStarred,
          hasAttachments, attachments, status, rawJson
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[a,e.toLowerCase(),t.toLowerCase(),r.from||"",r.fromName||"",Array.isArray(r.to)?r.to.join(", "):r.to||"",r.subject||"",r.bodyText||"",r.bodyHtml||"",u,r.snippet||"",r.category||"Primary",s,l,o,r.attachments?JSON.stringify(r.attachments):null,r.status||"",d])}}catch(e){console.warn("[SQLiteAdapter] sqliteSaveLocalEmails error:",e)}}async function C(e,t,a){return X(e,t,[a])}async function b(e,t,a){if(e)try{let i=await u();await i.run("DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND (LOWER(folder) = LOWER(?) OR uid = ?)",[e,t,String(a)])}catch(e){console.warn("[SQLiteAdapter] sqliteDeleteLocalEmail error:",e)}}async function U(e,t,a){if(e&&a&&0!==a.length)try{let t=await u(),i=a.map(()=>"?").join(","),n=[e,...a.map(e=>String(e))];await t.run(`DELETE FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND uid IN (${i})`,n)}catch(e){console.warn("[SQLiteAdapter] sqliteDeleteMultipleLocalEmails error:",e)}}async function F(e,t,a,i){if(e)try{var n;let r=await u(),s=await r.query("SELECT rawJson FROM local_emails WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?",[e,t,String(a)]);if(null==(n=s.values)?void 0:n.length){let n=d(s.values[0].rawJson);if(n){"boolean"==typeof i.isRead&&(n.isRead=i.isRead),"boolean"==typeof i.isStarred&&(n.isStarred=i.isStarred);let s=JSON.stringify(n);await r.run("UPDATE local_emails SET rawJson = ?, isRead = COALESCE(?, isRead), isStarred = COALESCE(?, isStarred) WHERE LOWER(emailKey) = LOWER(?) AND LOWER(folder) = LOWER(?) AND uid = ?",[s,"boolean"==typeof i.isRead?+!!i.isRead:null,"boolean"==typeof i.isStarred?+!!i.isStarred:null,e,t,String(a)])}}}catch(e){console.warn("[SQLiteAdapter] sqliteUpdateEmailFlags error:",e)}}async function q(e){if(!e)return null;try{var t;let a=await u(),i=await a.query("SELECT stats FROM local_mail_stats WHERE LOWER(emailKey) = LOWER(?)",[e]);if(!(null==(t=i.values)?void 0:t.length))return null;return d(i.values[0].stats)}catch(e){return console.warn("[SQLiteAdapter] sqliteGetMailStats error:",e),null}}async function W(e,t){if(e)try{let a=await u();await a.run("INSERT OR REPLACE INTO local_mail_stats (emailKey, stats, updatedAt) VALUES (?, ?, ?)",[e.toLowerCase(),JSON.stringify(t),new Date().toISOString()])}catch(e){console.warn("[SQLiteAdapter] sqliteSaveMailStats error:",e)}}function P(e){var t,a,i;return{id:e.id,roomId:e.roomId,senderId:e.senderId,senderName:e.senderName,from:e.fromVal||e.from||"them",text:e.text||"",type:e.type||"text",data:d(e.data),status:e.status||"sent",time:e.time||"",createdAt:e.createdAt,updatedAt:e.updatedAt,isDeleted:!!e.isDeleted,version:null!=(t=e.version)?t:1,roomSeq:null!=(a=e.roomSeq)?a:0,globalSeq:null!=(i=e.globalSeq)?i:0,replyTo:d(e.replyTo),replyToText:e.replyToText,replyToSender:e.replyToSender,linkPreview:d(e.linkPreview),clientMessageId:e.clientMessageId}}function k(e){return{id:e.id,name:e.name,sender:e.sender,preview:e.preview,time:e.time,unread:!!e.unread,unreadCount:e.unreadCount,lastMessageTimestamp:e.lastMessageTimestamp,lastMessageId:e.lastMessageId,lastRoomSeq:e.lastRoomSeq,avatar:e.avatar,avatarUrl:e.avatarUrl,isOnline:!1,isMuted:!!e.isMuted,isLocked:!!e.isLocked,isPinned:!!e.isPinned,isFavorite:!!e.isFavorite,isArchived:!!e.isArchived,type:e.type,otherUserId:e.otherUserId,subject:e.subject,isMe:!!e.isMe,countryCode:e.countryCode}}class G{getMessages(e,t,a=30){return this.isNative?E(e,t,a):(0,i.Em)(e,t,a)}saveMessage(e,t){return this.isNative?c(e,t):(0,i.Oj)(e,t)}saveMessages(e,t){return this.isNative?T(e,t):(0,i.b4)(e,t)}reconcileMessage(e,t,a,n="sent"){return this.isNative?m(e,t,a,n):(0,i.Bz)(e,t,a,n)}updateMessageStatus(e,t){return this.isNative?S(e,t):(0,i.i8)(e,t)}deleteMessage(e,t="all"){return this.isNative?g(e,t):(0,i.MB)(e,t)}searchMessages(e,t,a=50){return this.isNative?y(e,t,a):(0,i.CA)(e,t,a)}getRooms(){return this.isNative?I():(0,i.uh)()}saveRooms(e){return this.isNative?f(e):(0,i.lM)(e)}updateRoomPreview(e,t,a,n=!1){return this.isNative?v(e,t,a,n):(0,i.updateLocalRoomPreview)(e,t,a,n)}enqueueOutbox(e){return this.isNative?R(e):(0,i.uU)(e)}getPendingOutbox(){return this.isNative?N():(0,i.lV)()}lockOutboxItem(e){return this.isNative?p(e):(0,i.Uf)(e)}dequeueOutbox(e){return this.isNative?A(e):(0,i.Q5)(e)}incrementOutboxRetry(e){return this.isNative?w(e):(0,i.fK)(e)}getSyncMeta(e){return this.isNative?L(e):(0,i.$F)(e)}saveSyncMeta(e,t){return this.isNative?O(e,t):(0,i.Ye)(e,t)}getGlobalSyncMeta(e="main"){return this.isNative?h(e):(0,i.Qs)(e)}saveGlobalSyncMeta(e,t="main"){return this.isNative?D(e,t):(0,i.pK)(e,t)}getStatuses(){return this.isNative?_():(0,i.UX)()}saveStatuses(e){return this.isNative?M(e):(0,i.ZK)(e)}async getEmails(e,t,a=50){if(!e)return[];if(this.isNative){let i=await x(e,t,a);if(i&&i.length>0)return i}return K(e,t,a)}async saveEmails(e,t,a){e&&(H(e,t,a).catch(()=>{}),this.isNative&&await X(e,t,a))}async saveSingleEmail(e,t,a){e&&a&&(Y(e,t,a).catch(()=>{}),this.isNative&&await C(e,t,a))}async deleteEmail(e,t,a){e&&(B(e,t,a).catch(()=>{}),this.isNative&&await b(e,t,a))}async deleteMultipleEmails(e,t,a){e&&a&&0!==a.length&&(J(e,t,a).catch(()=>{}),this.isNative&&await U(e,t,a))}async updateEmailFlags(e,t,a,i){e&&(j(e,t,a,i).catch(()=>{}),this.isNative&&await F(e,t,a,i))}async getMailStats(e){if(!e)return null;if(this.isNative){let t=await q(e);if(t)return t}return V(e)}async saveMailStats(e,t){e&&($(e,t).catch(()=>{}),this.isNative&&await W(e,t))}constructor(){this.isNative=!1;try{let e=window.Capacitor;this.isNative=!!(e&&e.isNativePlatform&&e.isNativePlatform())}catch(e){this.isNative=!1}console.log(`[StorageAdapter] Backend: ${this.isNative?"\uD83D\uDDC4 SQLite (native)":"\uD83D\uDCE6 IndexedDB (web)"}`)}}async function K(e,t,a=50){if(!e)return[];try{let i=localStorage.getItem(`pingdart_mail_cache_${e}`);if(!i)return[];let n=JSON.parse(i),r=n[t]||n[t.toLowerCase()]||[];if("drafts"===t.toLowerCase())return r.filter(t=>{if(String(t.uid).startsWith("draft_")||String(t.uid).startsWith("temp_"))return!0;let a=(t.sender||t.from||t.fromName||"").toLowerCase();return a&&(a.includes(e.toLowerCase())||e.toLowerCase().includes(a))}).slice(0,a);return r.slice(0,a)}catch(e){return[]}}async function H(e,t,a){if(e)try{let i=localStorage.getItem(`pingdart_mail_cache_${e}`),n=i?JSON.parse(i):{};n[t]=(a||[]).slice(0,50),localStorage.setItem(`pingdart_mail_cache_${e}`,JSON.stringify(n))}catch(e){}}async function Y(e,t,a){if(e&&a)try{let i=localStorage.getItem(`pingdart_mail_cache_${e}`),n=i?JSON.parse(i):{},r=(n[t]||[]).filter(e=>String(e.uid)!==String(a.uid));n[t]=[a,...r].slice(0,50),localStorage.setItem(`pingdart_mail_cache_${e}`,JSON.stringify(n))}catch(e){}}async function B(e,t,a){return J(e,t,[a])}async function J(e,t,a){if(e&&a&&0!==a.length)try{let t=new Set(a.map(e=>String(e))),i=localStorage.getItem(`pingdart_mail_cache_${e}`);if(!i)return;let n=JSON.parse(i),r=!1;for(let e of Object.keys(n))if(Array.isArray(n[e])){let a=n[e].length;n[e]=n[e].filter(e=>!t.has(String(e.uid))),n[e].length!==a&&(r=!0)}r&&localStorage.setItem(`pingdart_mail_cache_${e}`,JSON.stringify(n))}catch(e){}}async function j(e,t,a,i){if(e)try{let n=localStorage.getItem(`pingdart_mail_cache_${e}`);if(!n)return;let r=JSON.parse(n);r[t]&&(r[t]=r[t].map(e=>String(e.uid)===String(a)?{...e,...i}:e),localStorage.setItem(`pingdart_mail_cache_${e}`,JSON.stringify(r)))}catch(e){}}async function V(e){if(!e)return null;try{let t=localStorage.getItem(`pingdart_mail_stats_${e}`);return t?JSON.parse(t):null}catch(e){return null}}async function $(e,t){if(e)try{localStorage.setItem(`pingdart_mail_stats_${e}`,JSON.stringify(t))}catch(e){}}let z=new G},59158:(e,t,a)=>{a.d(t,{Vj:()=>o,uo:()=>l});var i=a(32587),n=a(12115);let r={os:"Unknown",platform:"web",isNative:!1,isWeb:!0,isAndroid:!1,isIOS:!1,isMobile:!1,isDesktop:!1,isElectron:!1,isPWA:!1,isTouchDevice:!1},s=null;function l(){if(s)return s;let e=!1,t=!1,a="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"";try{var n,r,l,o,u,d;t=a.includes("electron")||!!(null==(r=window)||null==(n=r.process)?void 0:n.type)||!!(null==(l=window)?void 0:l.__ELECTRON__)||!!(null==(d=window)||null==(u=d.process)||null==(o=u.versions)?void 0:o.electron)||window.location.protocol.includes("capacitor-electron")}catch(e){t=!1}if(!t)try{e=i.Capacitor.isNativePlatform()||"undefined"!=typeof document&&(document.documentElement.classList.contains("is-native")||"true"===document.documentElement.getAttribute("data-is-native"))||a.includes("pingdartnative")||void 0!==window.androidBridge||"capacitor:"===window.location.protocol||"ionic:"===window.location.protocol}catch(t){e=!1}let E="Unknown";try{let e=i.Capacitor.getPlatform();"android"===e||void 0!==window.androidBridge?E="Android":"ios"===e&&(E="iOS")}catch(e){}if("Unknown"===E){let e=navigator.userAgent;/Android/i.test(e)?E="Android":/iPhone|iPad|iPod/i.test(e)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1?E="iOS":/Win/i.test(e)?E="Windows":/Mac/i.test(e)?E="MacOS":/Linux/i.test(e)&&(E="Linux")}let c="Android"===E,T="iOS"===E,m=c||T||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),S="Windows"===E||"MacOS"===E||"Linux"===E,g=window.matchMedia("(display-mode: standalone)").matches||!!navigator.standalone,y={os:E,platform:t?"electron":e?"native":"web",isNative:!t&&e,isWeb:!!t||!e,isAndroid:!t&&c,isIOS:!t&&T,isMobile:!t&&m,isDesktop:!!t||S,isElectron:t,isPWA:!t&&g,isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0};return s=y,y}function o(){let[e,t]=(0,n.useState)(r);return(0,n.useEffect)(()=>{s=null,t(l())},[]),e}},85897:(e,t,a)=>{a.d(t,{BK:()=>l,eu:()=>s,q5:()=>o});var i=a(95155);a(12115);var n=a(7870),r=a(64269);function s({className:e,size:t="default",...a}){return(0,i.jsx)(n.bL,{"data-slot":"avatar","data-size":t,className:(0,r.cn)("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",e),...a})}function l({className:e,src:t,...a}){let s="string"==typeof t?(0,r.resolveMediaUrl)(t):t;return(0,i.jsx)(n._V,{"data-slot":"avatar-image",src:s,className:(0,r.cn)("aspect-square size-full rounded-full object-cover",e),...a})}function o({className:e,...t}){return(0,i.jsx)(n.H4,{"data-slot":"avatar-fallback",className:(0,r.cn)("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",e),...t})}}}]);