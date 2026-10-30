(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/chat/hooks/useChatHandlers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHighestMessageStatus",
    ()=>getHighestMessageStatus,
    "globalDeliveredReceipts",
    ()=>globalDeliveredReceipts,
    "globalMessageCache",
    ()=>globalMessageCache,
    "globalReadReceipts",
    ()=>globalReadReceipts,
    "useChatHandlers",
    ()=>useChatHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$linkPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/linkPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshChatManager.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
/**
 * Bounded message cache — keeps at most MAX_CACHED_ROOMS entries so that
 * long sessions on low-memory Android devices don't accumulate stale DOM
 * trees and trigger aggressive GC pauses.
 */ const MAX_CACHED_ROOMS = 20;
class BoundedMessageCache {
    get(key) {
        return this.map.get(key);
    }
    set(key, value) {
        // Re-insert to move to the most-recently-used position
        this.map.delete(key);
        this.map.set(key, value);
        // Evict the oldest entry when over the limit
        if (this.map.size > MAX_CACHED_ROOMS) {
            const oldest = this.map.keys().next().value;
            if (oldest !== undefined) this.map.delete(oldest);
        }
    }
    delete(key) {
        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "map", new Map());
    }
}
const globalMessageCache = new BoundedMessageCache();
const globalReadReceipts = new Set(); // Tracks message IDs that were marked as read before their HTTP response finished
const globalDeliveredReceipts = new Set(); // Tracks delivery events that arrive before optimistic IDs are reconciled
function getHighestMessageStatus(...statuses) {
    const rank = {
        failed: 0,
        error: 0,
        sending: 1,
        sent: 2,
        delivered: 3,
        read: 4
    };
    return statuses.filter((status)=>Boolean(status)).reduce((highest, status)=>{
        var _rank_status, _rank_highest;
        return ((_rank_status = rank[status]) !== null && _rank_status !== void 0 ? _rank_status : 0) > ((_rank_highest = rank[highest]) !== null && _rank_highest !== void 0 ? _rank_highest : 0) ? status : highest;
    }, 'sent');
}
function useChatHandlers({ chat, socket, message, setMessage, setMessages, textareaRef, isGroupChat, setMentionStartIndex, setMentionQuery, setMentionListVisible, mentionStartIndex, mentionQuery, setReplyTarget, replyTarget, isBulkDelete, selectedMessages, setSelectedMessages, setIsSelectionMode, setDeleteModalOpen, deleteMsgTarget, setDeleteMsgTarget, setForwardMsg, setForwardOpen, setReactions, setShowEmojiPicker, onMessageSent, onRoomUpdated, showAttachmentMenu, setShowAttachmentMenu, selectedFiles, setSelectedFiles, setActiveFileIndex, setFileCaption, setShowCameraModal, setShowContactModal, setShowPollModal, setShowEventModal, setShowMicModal, setShowAudioCallModal, setShowVideoCallModal }) {
    _s();
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTypingActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const messageQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const [linkPreview, setLinkPreview] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const stopTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatHandlers.useCallback[stopTyping]": ()=>{
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
                typingTimerRef.current = null;
            }
            if (isTypingActiveRef.current) {
                isTypingActiveRef.current = false;
                if (socket && (chat === null || chat === void 0 ? void 0 : chat.id)) {
                    socket.emit('chat:typing', {
                        roomId: chat.id,
                        isTyping: false
                    });
                }
            }
        }
    }["useChatHandlers.useCallback[stopTyping]"], [
        socket,
        chat === null || chat === void 0 ? void 0 : chat.id
    ]);
    const handleInput = (e)=>{
        const val = e.target.value;
        setMessage(val);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
        const urlMatch = val.match(/(https?:\/\/[^\s]+|www\.[^\s]+)/i);
        if (urlMatch) {
            const detectedUrl = urlMatch[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$linkPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLinkPreview"])(detectedUrl).then((data)=>{
                if (data) setLinkPreview(data);
            });
        } else {
            setLinkPreview(null);
        }
        if (socket && (chat === null || chat === void 0 ? void 0 : chat.id)) {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            if (val.trim().length > 0) {
                if (!isTypingActiveRef.current) {
                    isTypingActiveRef.current = true;
                    socket.emit('chat:typing', {
                        roomId: chat.id,
                        isTyping: true,
                        username: (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.username) || 'Someone'
                    });
                }
                if (typingTimerRef.current) {
                    clearTimeout(typingTimerRef.current);
                }
                typingTimerRef.current = setTimeout(()=>{
                    stopTyping();
                }, 2500);
            } else {
                stopTyping();
            }
        }
        if (isGroupChat) {
            const cursor = e.target.selectionStart || 0;
            const textBeforeCursor = val.slice(0, cursor);
            const match = textBeforeCursor.match(/(?:^|\s)@([^\s]*)$/);
            if (match) {
                setMentionStartIndex(cursor - match[1].length - 1);
                setMentionQuery(match[1]);
                setMentionListVisible(true);
            } else {
                setMentionListVisible(false);
            }
        }
    };
    const handleMentionSelect = (memberName)=>{
        const beforeMention = message.slice(0, mentionStartIndex);
        const afterMention = message.slice(mentionStartIndex + mentionQuery.length + 1);
        const newMessage = `${beforeMention}@${memberName} ${afterMention}`;
        setMessage(newMessage);
        setMentionListVisible(false);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    const handleReply = (msg)=>{
        var _textareaRef_current;
        setReplyTarget(msg);
        (_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.focus();
    };
    const handleDeleteMessage = async (scope)=>{
        if (isBulkDelete) {
            const msgsToDelete = [
                ...selectedMessages
            ];
            for (const id of msgsToDelete){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deleteMessage(id, scope);
                } catch (e) {
                    console.error("Failed to delete message", id, e);
                }
            }
            setMessages((prev)=>{
                let updated;
                if (scope === 'all') {
                    updated = prev.map((m)=>msgsToDelete.includes(m.id) ? {
                            ...m,
                            type: 'deleted',
                            text: '🚫 This message was deleted',
                            data: null
                        } : m);
                } else {
                    updated = prev.filter((m)=>!msgsToDelete.includes(m.id));
                }
                const lastMsg = updated.length > 0 ? updated[updated.length - 1] : null;
                let newPreview = 'No messages yet';
                if (lastMsg) {
                    if (lastMsg.type === 'deleted') newPreview = '🚫 This message was deleted';
                    else if (lastMsg.type === 'text' || lastMsg.type === 'system') newPreview = lastMsg.text || 'No messages yet';
                    else newPreview = lastMsg.type ? `[${lastMsg.type}]` : 'Attachment';
                }
                setTimeout(()=>{
                    onRoomUpdated === null || onRoomUpdated === void 0 ? void 0 : onRoomUpdated(chat.id, {
                        preview: newPreview,
                        time: lastMsg ? lastMsg.time : ''
                    });
                }, 0);
                return updated;
            });
            setSelectedMessages([]);
            setIsSelectionMode(false);
            setDeleteModalOpen(false);
        } else if (deleteMsgTarget) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deleteMessage(deleteMsgTarget.id, scope);
                setMessages((prev)=>{
                    let updated;
                    if (scope === 'all') {
                        updated = prev.map((m)=>m.id === deleteMsgTarget.id ? {
                                ...m,
                                type: 'deleted',
                                text: '🚫 This message was deleted',
                                data: null
                            } : m);
                    } else {
                        updated = prev.filter((m)=>m.id !== deleteMsgTarget.id);
                    }
                    const lastMsg = updated.length > 0 ? updated[updated.length - 1] : null;
                    let newPreview = 'No messages yet';
                    if (lastMsg) {
                        if (lastMsg.type === 'deleted') newPreview = '🚫 This message was deleted';
                        else if (lastMsg.type === 'text' || lastMsg.type === 'system') newPreview = lastMsg.text || 'No messages yet';
                        else newPreview = lastMsg.type ? `[${lastMsg.type}]` : 'Attachment';
                    }
                    setTimeout(()=>{
                        onRoomUpdated === null || onRoomUpdated === void 0 ? void 0 : onRoomUpdated(chat.id, {
                            preview: newPreview,
                            time: lastMsg ? lastMsg.time : ''
                        });
                    }, 0);
                    return updated;
                });
                setDeleteModalOpen(false);
                setDeleteMsgTarget(null);
            } catch (e) {
                console.error("Failed to delete message", e);
            }
        }
    };
    const handleForward = (msg)=>{
        setForwardMsg(msg);
        setForwardOpen(true);
    };
    const handleReact = async (msg, emoji)=>{
        if (!msg || !msg.id) return;
        // Optimistic update
        setReactions((prev)=>{
            const msgR = {
                ...prev[msg.id] || {}
            };
            msgR[emoji] = (msgR[emoji] || 0) + 1;
            return {
                ...prev,
                [msg.id]: msgR
            };
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].reactMessage(chat.id, msg.id, emoji);
            if (res && res.success && res.data) {
                var _updatedMsg_data;
                const updatedMsg = res.data;
                const serverReactions = (_updatedMsg_data = updatedMsg.data) === null || _updatedMsg_data === void 0 ? void 0 : _updatedMsg_data.reactions;
                if (serverReactions && typeof serverReactions === 'object') {
                    const normalized = {};
                    for (const [em, val] of Object.entries(serverReactions)){
                        const count = Array.isArray(val) ? val.length : typeof val === 'number' ? val : Number(val) || 0;
                        if (count > 0) normalized[em] = count;
                    }
                    setReactions((prev)=>({
                            ...prev,
                            [msg.id]: normalized
                        }));
                }
                // Also update message in messages array and cache
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        var _updatedMsg_data;
                        return String(m.id) === String(msg.id) ? {
                            ...m,
                            data: {
                                ...m.data || {},
                                reactions: (_updatedMsg_data = updatedMsg.data) === null || _updatedMsg_data === void 0 ? void 0 : _updatedMsg_data.reactions
                            }
                        } : m;
                    });
                    globalMessageCache.set(chat.id, next);
                    try {
                        localStorage.setItem(`ping_chat_msgs_${chat.id}`, JSON.stringify(next.slice(-50)));
                    } catch (_) {}
                    return next;
                });
            }
        } catch (e) {
            console.error("React failed:", e);
        }
    };
    const sendMessage = async ()=>{
        var _replyToData_mimetype_split, _replyToData_mimetype;
        if (!message.trim()) return;
        const tempId = Date.now();
        const msgText = message;
        const currentReplyTarget = replyTarget;
        const currentLinkPreview = linkPreview;
        const getReplyPreviewText = (msg)=>{
            var _msg_data, _msg_data1, _msg_data2, _msg_data3;
            if (!msg) return undefined;
            const type = msg.type;
            if (type === "attachment" || type === "image") return ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.caption) ? `📷 ${msg.data.caption}` : "📷 Photo";
            if (type === "video") return ((_msg_data1 = msg.data) === null || _msg_data1 === void 0 ? void 0 : _msg_data1.caption) ? `🎥 ${msg.data.caption}` : "🎥 Video";
            if (type === "voice") return "🎙️ Voice message";
            if (type === "contact") return "👤 Contact";
            if (type === "poll") return `📊 ${((_msg_data2 = msg.data) === null || _msg_data2 === void 0 ? void 0 : _msg_data2.question) || "Poll"}`;
            if (type === "event") return `📅 ${((_msg_data3 = msg.data) === null || _msg_data3 === void 0 ? void 0 : _msg_data3.title) || "Event"}`;
            if (type === "document") return "📄 Document";
            if (type === "call") return "📞 Call";
            if (msg.text && typeof msg.text === "string" && !msg.text.includes('"__e2ee"') && !msg.text.includes('{"__e2ee"')) {
                return msg.text;
            }
            return msg.text || "Message";
        };
        const replyToText = getReplyPreviewText(currentReplyTarget);
        const replyToData = (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.data) || {};
        const replyToType = (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.type) || ((_replyToData_mimetype = replyToData.mimetype) === null || _replyToData_mimetype === void 0 ? void 0 : (_replyToData_mimetype_split = _replyToData_mimetype.split('/')) === null || _replyToData_mimetype_split === void 0 ? void 0 : _replyToData_mimetype_split[0]);
        const replyToMediaUrl = replyToData.url || replyToData.fileUrl || (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.text);
        const replyToMime = replyToData.mimetype || replyToData.mime || '';
        const replyToFileName = replyToData.filename || replyToData.name;
        const replyToSender = currentReplyTarget ? currentReplyTarget.from === "me" || currentReplyTarget.isMe ? "You" : currentReplyTarget.senderName || currentReplyTarget.sender || chat.sender || "User" : undefined;
        setMessages((m)=>{
            const optimisticMsg = {
                id: tempId,
                clientMessageId: String(tempId),
                from: "me",
                text: msgText,
                time: new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                }),
                createdAt: new Date().toISOString(),
                status: "sending",
                replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                replyToText,
                replyToSender,
                linkPreview: currentLinkPreview || undefined,
                data: {
                    ...currentReplyTarget ? {
                        replyToId: currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        replyToType,
                        replyToMediaUrl,
                        replyToMime,
                        replyToFileName,
                        replyToCaption: replyToData.caption || ''
                    } : {},
                    ...currentLinkPreview ? {
                        linkPreview: currentLinkPreview
                    } : {}
                }
            };
            const next = [
                ...m,
                optimisticMsg
            ];
            globalMessageCache.set(chat.id, next);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), optimisticMsg).catch(()=>{});
            return next;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playConversationTone"])('outgoing');
        setMessage("");
        stopTyping();
        setReplyTarget(null);
        setLinkPreview(null);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
        setShowEmojiPicker(false);
        // A mobile tap normally blurs the textarea before the send handler runs.
        // Restore focus after React swaps the send button back to the mic button.
        if ("TURBOPACK compile-time truthy", 1) {
            window.requestAnimationFrame(()=>{
                var _textareaRef_current;
                (_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.focus({
                    preventScroll: true
                });
            });
        }
        messageQueueRef.current = messageQueueRef.current.then(async ()=>{
            let textToSend = msgText;
            if (!isGroupChat && chat.otherUserId) {
                let encrypted = null;
                try {
                    encrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptMessage"](chat.otherUserId, msgText);
                } catch (e) {
                //console.error('[E2EE] Encryption failed:', e);
                }
                if (!encrypted) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].isAvailable()) {
                        console.warn(`[E2EE] Initial Signal session not yet established with recipient ${chat.otherUserId} while offline. Proceeding with Mesh direct transport.`);
                        textToSend = msgText;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to send secure message — E2EE encryption failed.");
                        console.error(`[E2EE] Encryption failed for recipient ${chat.otherUserId}. Aborting send.`);
                        setMessages((m)=>{
                            const next = m.map((msg)=>msg.id === tempId ? {
                                    ...msg,
                                    status: 'failed'
                                } : msg);
                            globalMessageCache.set(chat.id, next);
                            return next;
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'failed').catch(()=>{});
                        return;
                    }
                } else {
                    textToSend = encrypted;
                }
            }
            const isEncrypted = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEncryptedPayload"](textToSend);
            const payload = {
                clientMessageId: String(tempId),
                ...currentReplyTarget ? {
                    replyToId: currentReplyTarget.id,
                    replyToText,
                    replyToSender,
                    replyToType,
                    replyToMediaUrl,
                    replyToMime,
                    replyToFileName,
                    replyToCaption: replyToData.caption || ''
                } : {},
                ...currentLinkPreview ? {
                    linkPreview: currentLinkPreview
                } : {},
                pushPreview: msgText,
                otherUserId: chat.otherUserId
            };
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, textToSend, 'text', payload);
                if (res.success) {
                    var _res_data, _res_data1, _res_data2, _res_data3;
                    const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                    const serverId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                    const messageId = String(serverId);
                    const finalStatus = getHighestMessageStatus(apiStatus, globalReadReceipts.has(messageId) ? 'read' : undefined, globalDeliveredReceipts.has(messageId) ? 'delivered' : undefined);
                    globalReadReceipts.delete(messageId);
                    globalDeliveredReceipts.delete(messageId);
                    const now = new Date();
                    const timeStr2 = now.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    setMessages((m)=>{
                        const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(serverId));
                        if (alreadyHasServerId) {
                            // Preserve stronger delivery/read state if the socket event raced the HTTP response.
                            const next = m.filter((msg)=>msg.id !== tempId).map((msg)=>String(msg.id) === String(serverId) ? {
                                    ...msg,
                                    status: getHighestMessageStatus(msg.status, finalStatus)
                                } : msg);
                            globalMessageCache.set(chat.id, next);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](serverId, finalStatus).catch(()=>{});
                            return next;
                        }
                        const next = m.map((msg)=>{
                            var _res_data;
                            return msg.id === tempId ? {
                                ...msg,
                                id: serverId,
                                clientMessageId: String(tempId),
                                status: finalStatus,
                                replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                                replyToText,
                                replyToSender,
                                data: {
                                    ...((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || {},
                                    ...currentReplyTarget ? {
                                        replyToId: currentReplyTarget.id,
                                        replyToText,
                                        replyToSender
                                    } : {}
                                }
                            } : msg;
                        });
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    // Reconcile tempId → serverId in IndexedDB (removes stale 'sending' record)
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileMessageId"](Number(chat.id), tempId, serverId, finalStatus).catch(()=>{});
                    // Also persist full message details so next load shows correct data
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: serverId,
                        roomId: Number(chat.id),
                        text: msgText,
                        from: 'me',
                        type: 'text',
                        time: timeStr2,
                        createdAt: now.toISOString(),
                        status: finalStatus,
                        replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        linkPreview: currentLinkPreview || undefined,
                        data: {
                            ...((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.data) || {},
                            ...currentReplyTarget ? {
                                replyToId: currentReplyTarget.id,
                                replyToText,
                                replyToSender
                            } : {}
                        }
                    }).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, msgText, ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.id) || tempId);
                    const timeStr = new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    const nowIso = new Date().toISOString();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(chat.id), msgText, timeStr, true).catch(()=>{});
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('room:preview_updated', {
                            detail: {
                                roomId: Number(chat.id),
                                preview: msgText,
                                time: timeStr,
                                isMe: true,
                                status: finalStatus,
                                lastMessageTimestamp: nowIso
                            }
                        }));
                    }
                    if (onMessageSent) {
                        var _res_data4;
                        onMessageSent(msgText, timeStr, finalStatus, ((_res_data4 = res.data) === null || _res_data4 === void 0 ? void 0 : _res_data4.id) || tempId);
                    }
                    if (onRoomUpdated) {
                        onRoomUpdated(chat.id, {
                            preview: msgText,
                            time: timeStr,
                            isMe: true,
                            status: finalStatus,
                            lastMessageTimestamp: nowIso,
                            bumpToTop: true
                        });
                    }
                }
            } catch (err) {
                console.warn("Network error sending message, checking PingDart Mesh transport:", err);
                let sentViaMesh = false;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].isAvailable()) {
                    try {
                        sentViaMesh = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].sendOfflineMessage({
                            chat,
                            tempId,
                            textToSend,
                            msgText,
                            payload,
                            currentReplyTarget,
                            replyToText,
                            replyToSender,
                            currentLinkPreview
                        });
                    } catch (meshErr) {
                        console.warn('[useChatHandlers] Mesh send error:', meshErr);
                    }
                }
                if (sentViaMesh) {
                    const now = new Date();
                    const timeStr2 = now.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    setMessages((m)=>{
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                status: 'sent',
                                data: {
                                    ...msg.data || {},
                                    isMesh: true
                                }
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'sent').catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: tempId,
                        roomId: Number(chat.id),
                        text: msgText,
                        from: 'me',
                        type: 'text',
                        time: timeStr2,
                        createdAt: now.toISOString(),
                        status: 'sent',
                        replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        linkPreview: currentLinkPreview || undefined,
                        data: {
                            isMesh: true,
                            ...currentReplyTarget ? {
                                replyToId: currentReplyTarget.id,
                                replyToText,
                                replyToSender
                            } : {}
                        }
                    }).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, msgText, tempId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(chat.id), msgText, timeStr2, true).catch(()=>{});
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('room:preview_updated', {
                            detail: {
                                roomId: Number(chat.id),
                                preview: msgText,
                                time: timeStr2,
                                isMe: true,
                                status: 'sent',
                                lastMessageTimestamp: now.toISOString()
                            }
                        }));
                    }
                    if (onMessageSent) {
                        onMessageSent(msgText, timeStr2, 'sent', tempId);
                    }
                    if (onRoomUpdated) {
                        onRoomUpdated(chat.id, {
                            preview: msgText,
                            time: timeStr2,
                            isMe: true,
                            status: 'sent',
                            lastMessageTimestamp: now.toISOString(),
                            bumpToTop: true
                        });
                    }
                } else {
                    // Standard fail-safe outbox fallback when offline and mesh peer not in range
                    setMessages((m)=>{
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                status: 'failed'
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'failed').catch(()=>{});
                    // Enqueue for retry when back online
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueOutbox"]({
                        roomId: Number(chat.id),
                        tempId,
                        text: msgText,
                        type: 'text',
                        payload
                    }).catch(()=>{});
                }
            }
        });
    };
    const handleAttachment = ()=>{
        setShowAttachmentMenu(!showAttachmentMenu);
    };
    const onFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            setSelectedFiles((prev)=>{
                if (prev.length > 0) return [
                    ...prev,
                    ...newFiles
                ];
                setActiveFileIndex(0);
                return newFiles;
            });
            setFileCaption("");
            setShowAttachmentMenu(false);
        }
        if (e.target) {
            e.target.value = '';
        }
    };
    const handleSendAttachment = async (caption)=>{
        if (selectedFiles.length === 0) return;
        const files = [
            ...selectedFiles
        ];
        setSelectedFiles([]);
        setFileCaption("");
        setActiveFileIndex(0);
        for (const file of files){
            const tempId = Date.now() + Math.floor(Math.random() * 1000);
            const fileUrl = URL.createObjectURL(file);
            const isVideo = file.type.startsWith('video/');
            const isImage = file.type.startsWith('image/');
            const isAudio = file.type.startsWith('audio/');
            const msgType = isImage ? "image" : isVideo ? "video" : isAudio ? "audio" : "document";
            setMessages((m)=>{
                const next = [
                    ...m,
                    {
                        id: tempId,
                        clientMessageId: String(tempId),
                        from: "me",
                        type: msgType,
                        text: fileUrl,
                        uploadProgress: 0,
                        data: {
                            filename: file.name,
                            size: file.size,
                            mimetype: file.type,
                            caption,
                            uploadProgress: 0,
                            attachments: [
                                {
                                    name: file.name,
                                    type: file.type,
                                    size: file.size,
                                    url: fileUrl
                                }
                            ]
                        },
                        time: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        }),
                        createdAt: new Date().toISOString(),
                        status: "sending"
                    }
                ];
                globalMessageCache.set(chat.id, next);
                return next;
            });
            try {
                const handleProgress = (percent)=>{
                    setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                uploadProgress: percent,
                                data: {
                                    ...msg.data,
                                    uploadProgress: percent
                                }
                            } : msg));
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendAttachment(chat.id, file, caption, undefined, undefined, undefined, undefined, handleProgress, String(tempId));
                if (res.success) {
                    var _res_data, _res_data1, _res_data2, _res_data3, _res_data4, _res_data5;
                    const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                    const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                    const finalType = ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.type) || msgType;
                    const finalText = ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.text) || ((_res_data4 = res.data) === null || _res_data4 === void 0 ? void 0 : _res_data4.fileUrl) || fileUrl;
                    const serverData = ((_res_data5 = res.data) === null || _res_data5 === void 0 ? void 0 : _res_data5.data) || {};
                    const finalData = {
                        filename: file.name,
                        size: file.size,
                        mimetype: file.type,
                        caption,
                        ...serverData,
                        attachments: [
                            {
                                name: file.name,
                                type: file.type,
                                size: file.size,
                                url: finalText
                            }
                        ]
                    };
                    setMessages((m)=>{
                        const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                        if (alreadyHasServerId) {
                            const next = m.filter((msg)=>msg.id !== tempId);
                            globalMessageCache.set(chat.id, next);
                            return next;
                        }
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                id: finalId,
                                clientMessageId: String(tempId),
                                type: finalType,
                                text: finalText,
                                status: apiStatus,
                                data: finalData
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    const timeStr = new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    // Reconcile tempId -> finalId in IndexedDB and persist attachment locally
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileMessageId"](Number(chat.id), tempId, finalId, apiStatus).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: finalId,
                        roomId: Number(chat.id),
                        text: finalText,
                        from: 'me',
                        type: finalType,
                        time: timeStr,
                        createdAt: new Date().toISOString(),
                        status: apiStatus,
                        data: finalData
                    }).catch(()=>{});
                    const previewText = caption || (isImage ? '📷 Photo' : isVideo ? '🎥 Video' : isAudio ? '🎵 Audio' : `📄 ${file.name}`);
                    if (onMessageSent) onMessageSent(previewText, timeStr, apiStatus, finalId);
                    if (onRoomUpdated) onRoomUpdated(chat.id, {
                        preview: previewText,
                        time: timeStr,
                        isMe: true,
                        status: apiStatus,
                        lastMessageTimestamp: new Date().toISOString(),
                        bumpToTop: true
                    });
                }
            } catch (err) {
                console.error("Error sending attachment:", err);
                setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            status: "error"
                        } : msg));
            }
        }
    };
    const handleCameraCapture = (file)=>{
        setSelectedFiles([
            file
        ]);
        setActiveFileIndex(0);
        setShowCameraModal(false);
    };
    const handleSendContact = async (contacts)=>{
        setShowContactModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "contact",
                    data: contacts,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, '', 'contact', {
                contacts,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent("👤 Contact", timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: "👤 Contact",
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending contact:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendPoll = async (pollData)=>{
        setShowPollModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "poll",
                    data: pollData,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, pollData.question || '', 'poll', {
                ...pollData,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent(`📊 Poll: ${pollData.question}`, timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: `📊 Poll: ${pollData.question}`,
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending poll:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendEvent = async (eventData)=>{
        setShowEventModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "event",
                    data: eventData,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, eventData.title || '', 'event', {
                ...eventData,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent(`📅 Event: ${eventData.title}`, timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: `📅 Event: ${eventData.title}`,
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending event:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendVoice = async (file, duration)=>{
        setShowMicModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "voice",
                    data: {
                        file,
                        duration,
                        url: URL.createObjectURL(file)
                    },
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendAttachment(chat.id, file, '', 'voice', undefined, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>{
                        var _res_data, _msg_data;
                        return msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus,
                            data: {
                                ...msg.data,
                                url: ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.fileUrl) || ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.url)
                            }
                        } : msg;
                    });
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent("🎤 Voice message", timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: "🎤 Voice message",
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending voice message:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleCallEnd = (callType, duration)=>{
        setMessages((m)=>[
                ...m,
                {
                    id: Date.now(),
                    from: "me",
                    type: "call",
                    data: {
                        callType,
                        duration
                    },
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sent"
                }
            ]);
        if (callType === 'audio' && setShowAudioCallModal) setShowAudioCallModal(false);
        if (callType === 'video' && setShowVideoCallModal) setShowVideoCallModal(false);
    };
    return {
        handleInput,
        handleMentionSelect,
        handleReply,
        handleDeleteMessage,
        handleForward,
        handleReact,
        sendMessage,
        handleAttachment,
        onFileChange,
        handleSendAttachment,
        handleCameraCapture,
        handleSendContact,
        handleSendPoll,
        handleSendEvent,
        handleSendVoice,
        handleCallEnd,
        linkPreview,
        onRemoveLinkPreview: ()=>setLinkPreview(null)
    };
}
_s(useChatHandlers, "aa7D7Jj/4670q1dQkKRWSqbSMJo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/chat/hooks/useUserPresence.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserPresence",
    ()=>useUserPresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$presenceUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/presenceUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/userPresenceService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$call$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/call/CallContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useUserPresence(options = {}) {
    _s();
    // Resolve user ID
    const resolvedUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUserPresence.useMemo[resolvedUserId]": ()=>{
            if (options.userId !== undefined && options.userId !== null) {
                return options.userId;
            }
            if (options.user !== undefined && options.user !== null) {
                if (typeof options.user === "object") {
                    var _id, _ref;
                    return (_ref = (_id = options.user.id) !== null && _id !== void 0 ? _id : options.user.userId) !== null && _ref !== void 0 ? _ref : null;
                }
                return options.user;
            }
            return null;
        }
    }["useUserPresence.useMemo[resolvedUserId]"], [
        options.user,
        options.userId
    ]);
    // Extract initial values
    const initialData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUserPresence.useMemo[initialData]": ()=>{
            const fromObj = typeof options.user === "object" ? options.user : null;
            var _options_initialOnline, _ref, _options_initialLastSeen, _ref1, _options_countryCode, _ref2;
            return {
                isOnline: (_ref = (_options_initialOnline = options.initialOnline) !== null && _options_initialOnline !== void 0 ? _options_initialOnline : fromObj === null || fromObj === void 0 ? void 0 : fromObj.isOnline) !== null && _ref !== void 0 ? _ref : false,
                lastSeen: (_ref1 = (_options_initialLastSeen = options.initialLastSeen) !== null && _options_initialLastSeen !== void 0 ? _options_initialLastSeen : fromObj === null || fromObj === void 0 ? void 0 : fromObj.lastSeen) !== null && _ref1 !== void 0 ? _ref1 : null,
                countryCode: (_ref2 = (_options_countryCode = options.countryCode) !== null && _options_countryCode !== void 0 ? _options_countryCode : fromObj === null || fromObj === void 0 ? void 0 : fromObj.countryCode) !== null && _ref2 !== void 0 ? _ref2 : null
            };
        }
    }["useUserPresence.useMemo[initialData]"], [
        options.user,
        options.initialOnline,
        options.initialLastSeen,
        options.countryCode
    ]);
    // Check cache or initialize state
    const [presence, setPresence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useUserPresence.useState": ()=>{
            const cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].getPresence(resolvedUserId);
            var _cached_isOnline, _cached_lastSeen, _cached_countryCode;
            return {
                userId: resolvedUserId || "",
                isOnline: (_cached_isOnline = cached === null || cached === void 0 ? void 0 : cached.isOnline) !== null && _cached_isOnline !== void 0 ? _cached_isOnline : initialData.isOnline,
                lastSeen: (_cached_lastSeen = cached === null || cached === void 0 ? void 0 : cached.lastSeen) !== null && _cached_lastSeen !== void 0 ? _cached_lastSeen : initialData.lastSeen,
                countryCode: (_cached_countryCode = cached === null || cached === void 0 ? void 0 : cached.countryCode) !== null && _cached_countryCode !== void 0 ? _cached_countryCode : initialData.countryCode
            };
        }
    }["useUserPresence.useState"]);
    // Obtain socket
    let callCtxSocket = null;
    try {
        const callCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
        callCtxSocket = (callCtx === null || callCtx === void 0 ? void 0 : callCtx.socket) || null;
    } catch (e) {}
    const activeSocket = options.socket || callCtxSocket;
    // Subscribe to userPresenceService
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserPresence.useEffect": ()=>{
            if (!resolvedUserId) return;
            // Seed cache if initialData is provided and cache is empty
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].getPresence(resolvedUserId) && (initialData.isOnline || initialData.lastSeen)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].setPresence({
                    userId: resolvedUserId,
                    isOnline: initialData.isOnline,
                    lastSeen: initialData.lastSeen,
                    countryCode: initialData.countryCode
                });
            }
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].subscribe(resolvedUserId, {
                "useUserPresence.useEffect.unsub": (updated)=>{
                    setPresence(updated);
                }
            }["useUserPresence.useEffect.unsub"]);
            return unsub;
        }
    }["useUserPresence.useEffect"], [
        resolvedUserId,
        initialData.isOnline,
        initialData.lastSeen,
        initialData.countryCode
    ]);
    // Listen to socket and auto-query presence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserPresence.useEffect": ()=>{
            if (!activeSocket || !resolvedUserId || options.isBlocked) return;
            // Query online status if autoQuery is true (default true)
            if (options.autoQuery !== false) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].queryOnlineStatus(activeSocket, resolvedUserId);
            }
            const handleSocketOnline = {
                "useUserPresence.useEffect.handleSocketOnline": (data)=>{
                    if (String(data.userId) === String(resolvedUserId)) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].setPresence({
                            userId: resolvedUserId,
                            isOnline: !!data.isOnline,
                            lastSeen: data.lastSeen
                        });
                    }
                }
            }["useUserPresence.useEffect.handleSocketOnline"];
            activeSocket.on("user:online_status", handleSocketOnline);
            return ({
                "useUserPresence.useEffect": ()=>{
                    activeSocket.off("user:online_status", handleSocketOnline);
                }
            })["useUserPresence.useEffect"];
        }
    }["useUserPresence.useEffect"], [
        activeSocket,
        resolvedUserId,
        options.isBlocked,
        options.autoQuery
    ]);
    // Listen to window presence sync event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserPresence.useEffect": ()=>{
            if (!resolvedUserId || "object" === "undefined") return;
            const handlePresenceSync = {
                "useUserPresence.useEffect.handlePresenceSync": (e)=>{
                    const detail = e.detail;
                    if (detail && String(detail.userId) === String(resolvedUserId)) {
                        setPresence({
                            "useUserPresence.useEffect.handlePresenceSync": (prev)=>({
                                    ...prev,
                                    isOnline: typeof detail.isOnline === "boolean" ? detail.isOnline : prev.isOnline,
                                    lastSeen: detail.lastSeen !== undefined ? detail.lastSeen : prev.lastSeen
                                })
                        }["useUserPresence.useEffect.handlePresenceSync"]);
                    }
                }
            }["useUserPresence.useEffect.handlePresenceSync"];
            window.addEventListener("user:presence_sync", handlePresenceSync);
            return ({
                "useUserPresence.useEffect": ()=>{
                    window.removeEventListener("user:presence_sync", handlePresenceSync);
                }
            })["useUserPresence.useEffect"];
        }
    }["useUserPresence.useEffect"], [
        resolvedUserId
    ]);
    // Periodic tick to keep relative time ("Just now", "Yesterday at 10:30 AM") accurate
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserPresence.useEffect": ()=>{
            const timer = setInterval({
                "useUserPresence.useEffect.timer": ()=>{
                    setTick({
                        "useUserPresence.useEffect.timer": (t)=>t + 1
                    }["useUserPresence.useEffect.timer"]);
                }
            }["useUserPresence.useEffect.timer"], 60000);
            return ({
                "useUserPresence.useEffect": ()=>clearInterval(timer)
            })["useUserPresence.useEffect"];
        }
    }["useUserPresence.useEffect"], []);
    // Formatted last seen string
    const formattedLastSeen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUserPresence.useMemo[formattedLastSeen]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$presenceUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLastSeen"])(presence.lastSeen, presence.countryCode || options.countryCode);
        }
    }["useUserPresence.useMemo[formattedLastSeen]"], [
        presence.lastSeen,
        presence.countryCode,
        options.countryCode
    ]);
    const isBlocked = !!options.isBlocked;
    const isTyping = !!options.isTyping;
    const isOnline = isBlocked ? false : presence.isOnline;
    const currentState = presence.state || (isOnline ? 'online' : 'offline');
    // Status text
    const statusText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUserPresence.useMemo[statusText]": ()=>{
            if (isBlocked) return "Blocked";
            if (isTyping) {
                return options.typingUsername ? `${options.typingUsername} typing...` : "typing...";
            }
            if (currentState === "in_call_group") return "in a group call";
            if (currentState === "in_call" || currentState === "in_call_direct" || currentState === "busy") return "in another call";
            if (currentState === "online") return "online";
            if (currentState === "away") return "away";
            if (formattedLastSeen) return `last seen ${formattedLastSeen}`;
            return "click for info";
        }
    }["useUserPresence.useMemo[statusText]"], [
        isBlocked,
        isTyping,
        options.typingUsername,
        currentState,
        formattedLastSeen
    ]);
    return {
        userId: resolvedUserId,
        state: currentState,
        isOnline,
        lastSeen: presence.lastSeen,
        formattedLastSeen,
        isTyping,
        typingUsername: options.typingUsername,
        isBlocked,
        statusText
    };
}
_s(useUserPresence, "4+LuNsaBDB5rWQnLO6JcteBtLVM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/chat/hooks/useMessageGesture.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessageGesture",
    ()=>useMessageGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const REPLY_TRIGGER = 24;
const MAX_TRANSLATE = 72;
function useMessageGesture({ direction = 'right', onSwipeReply, onLongPress, threshold = REPLY_TRIGGER, disabled = false }) {
    _s();
    const [translateX, setTranslateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSwiping, setIsSwiping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isThresholdReached, setIsThresholdReached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const longPressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isLongPressTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isHorizontalSwipeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasVibratedThresholdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // RAF references for smooth 60fps touch and drag animation
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const latestTranslateXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cancelPendingRaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[cancelPendingRaf]": ()=>{
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        }
    }["useMessageGesture.useCallback[cancelPendingRaf]"], []);
    const clearLongPressTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[clearLongPressTimer]": ()=>{
            if (longPressTimerRef.current) {
                clearTimeout(longPressTimerRef.current);
                longPressTimerRef.current = null;
            }
        }
    }["useMessageGesture.useCallback[clearLongPressTimer]"], []);
    // Calculate smooth responsive offset with progressive rubber-banding
    const calculateOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[calculateOffset]": (dx)=>{
            if (direction === 'right') {
                const raw = Math.max(0, dx);
                if (raw <= 30) {
                    return Math.min(raw * 0.85, MAX_TRANSLATE);
                }
                return Math.min(25.5 + (raw - 30) * 0.35, MAX_TRANSLATE);
            } else {
                const raw = Math.min(0, dx);
                const abs = Math.abs(raw);
                let absOffset = 0;
                if (abs <= 30) {
                    absOffset = Math.min(abs * 0.85, MAX_TRANSLATE);
                } else {
                    absOffset = Math.min(25.5 + (abs - 30) * 0.35, MAX_TRANSLATE);
                }
                return -absOffset;
            }
        }
    }["useMessageGesture.useCallback[calculateOffset]"], [
        direction
    ]);
    // ── Touch Events ───────────────────────────────────────────
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleTouchStart]": (e)=>{
            if (disabled) {
                isLongPressTriggeredRef.current = false;
                return;
            }
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            touchStartRef.current = {
                x: touch.clientX,
                y: touch.clientY,
                time: Date.now()
            };
            isLongPressTriggeredRef.current = false;
            isHorizontalSwipeRef.current = null;
            hasVibratedThresholdRef.current = false;
            cancelPendingRaf();
            setIsSwiping(false);
            setIsThresholdReached(false);
            clearLongPressTimer();
            longPressTimerRef.current = setTimeout({
                "useMessageGesture.useCallback[handleTouchStart]": ()=>{
                    isLongPressTriggeredRef.current = true;
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        try {
                            navigator.vibrate(40);
                        } catch (_) {}
                    }
                    onLongPress();
                }
            }["useMessageGesture.useCallback[handleTouchStart]"], 400);
        }
    }["useMessageGesture.useCallback[handleTouchStart]"], [
        disabled,
        clearLongPressTimer,
        onLongPress,
        cancelPendingRaf
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleTouchMove]": (e)=>{
            if (!touchStartRef.current || e.touches.length === 0) return;
            const touch = e.touches[0];
            const dx = touch.clientX - touchStartRef.current.x;
            const dy = touch.clientY - touchStartRef.current.y;
            // Any small movement cancels long-press
            if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
                clearLongPressTimer();
            }
            // Determine whether user is scrolling vertically or swiping horizontally
            if (isHorizontalSwipeRef.current === null) {
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
                    if (direction === 'right' && dx > 0 || direction === 'left' && dx < 0) {
                        isHorizontalSwipeRef.current = true;
                        setIsSwiping(true);
                    } else {
                        isHorizontalSwipeRef.current = false;
                    }
                } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) {
                    isHorizontalSwipeRef.current = false;
                }
            }
            if (isHorizontalSwipeRef.current) {
                const offset = calculateOffset(dx);
                latestTranslateXRef.current = offset;
                if (!rafRef.current) {
                    rafRef.current = requestAnimationFrame({
                        "useMessageGesture.useCallback[handleTouchMove]": ()=>{
                            setTranslateX(latestTranslateXRef.current);
                            rafRef.current = null;
                        }
                    }["useMessageGesture.useCallback[handleTouchMove]"]);
                }
                const reached = Math.abs(offset) >= threshold;
                setIsThresholdReached(reached);
                if (reached && !hasVibratedThresholdRef.current) {
                    hasVibratedThresholdRef.current = true;
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        try {
                            navigator.vibrate(25);
                        } catch (_) {}
                    }
                } else if (!reached) {
                    hasVibratedThresholdRef.current = false;
                }
            }
        }
    }["useMessageGesture.useCallback[handleTouchMove]"], [
        direction,
        threshold,
        clearLongPressTimer,
        calculateOffset
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleTouchEnd]": ()=>{
            clearLongPressTimer();
            cancelPendingRaf();
            if (isHorizontalSwipeRef.current && isThresholdReached) {
                if (typeof navigator !== 'undefined' && navigator.vibrate) {
                    try {
                        navigator.vibrate(30);
                    } catch (_) {}
                }
                onSwipeReply();
            }
            setIsSwiping(false);
            setTranslateX(0);
            setIsThresholdReached(false);
            touchStartRef.current = null;
            isHorizontalSwipeRef.current = null;
            if (isLongPressTriggeredRef.current) {
                setTimeout({
                    "useMessageGesture.useCallback[handleTouchEnd]": ()=>{
                        isLongPressTriggeredRef.current = false;
                    }
                }["useMessageGesture.useCallback[handleTouchEnd]"], 180);
            }
        }
    }["useMessageGesture.useCallback[handleTouchEnd]"], [
        clearLongPressTimer,
        cancelPendingRaf,
        isThresholdReached,
        onSwipeReply
    ]);
    // ── Mouse Events (for Desktop / Web drag testing) ───────────
    const mouseDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleMouseDown]": (e)=>{
            if (disabled) {
                isLongPressTriggeredRef.current = false;
                return;
            }
            if (e.button !== 0) return; // Left-click only
            mouseDownRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            isLongPressTriggeredRef.current = false;
            hasVibratedThresholdRef.current = false;
            cancelPendingRaf();
            clearLongPressTimer();
            longPressTimerRef.current = setTimeout({
                "useMessageGesture.useCallback[handleMouseDown]": ()=>{
                    isLongPressTriggeredRef.current = true;
                    onLongPress();
                }
            }["useMessageGesture.useCallback[handleMouseDown]"], 420);
        }
    }["useMessageGesture.useCallback[handleMouseDown]"], [
        disabled,
        clearLongPressTimer,
        onLongPress,
        cancelPendingRaf
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleMouseMove]": (e)=>{
            if (!mouseDownRef.current) return;
            const dx = e.clientX - mouseDownRef.current.x;
            const dy = e.clientY - mouseDownRef.current.y;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                clearLongPressTimer();
            }
            if (direction === 'right' && dx > 6 || direction === 'left' && dx < -6) {
                setIsSwiping(true);
                const offset = calculateOffset(dx);
                latestTranslateXRef.current = offset;
                if (!rafRef.current) {
                    rafRef.current = requestAnimationFrame({
                        "useMessageGesture.useCallback[handleMouseMove]": ()=>{
                            setTranslateX(latestTranslateXRef.current);
                            rafRef.current = null;
                        }
                    }["useMessageGesture.useCallback[handleMouseMove]"]);
                }
                const reached = Math.abs(offset) >= threshold;
                setIsThresholdReached(reached);
                if (reached && !hasVibratedThresholdRef.current) {
                    hasVibratedThresholdRef.current = true;
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        try {
                            navigator.vibrate(20);
                        } catch (_) {}
                    }
                } else if (!reached) {
                    hasVibratedThresholdRef.current = false;
                }
            }
        }
    }["useMessageGesture.useCallback[handleMouseMove]"], [
        direction,
        threshold,
        clearLongPressTimer,
        calculateOffset
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessageGesture.useCallback[handleMouseUp]": ()=>{
            clearLongPressTimer();
            cancelPendingRaf();
            if (mouseDownRef.current && isThresholdReached) {
                onSwipeReply();
            }
            mouseDownRef.current = null;
            setIsSwiping(false);
            setTranslateX(0);
            setIsThresholdReached(false);
            if (isLongPressTriggeredRef.current) {
                setTimeout({
                    "useMessageGesture.useCallback[handleMouseUp]": ()=>{
                        isLongPressTriggeredRef.current = false;
                    }
                }["useMessageGesture.useCallback[handleMouseUp]"], 180);
            }
        }
    }["useMessageGesture.useCallback[handleMouseUp]"], [
        clearLongPressTimer,
        cancelPendingRaf,
        isThresholdReached,
        onSwipeReply
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessageGesture.useEffect": ()=>{
            if (disabled) {
                isLongPressTriggeredRef.current = false;
                clearLongPressTimer();
                cancelPendingRaf();
            }
        }
    }["useMessageGesture.useEffect"], [
        disabled,
        clearLongPressTimer,
        cancelPendingRaf
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessageGesture.useEffect": ()=>{
            return ({
                "useMessageGesture.useEffect": ()=>{
                    clearLongPressTimer();
                    cancelPendingRaf();
                }
            })["useMessageGesture.useEffect"];
        }
    }["useMessageGesture.useEffect"], [
        clearLongPressTimer,
        cancelPendingRaf
    ]);
    const gestureProps = {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp
    };
    return {
        translateX,
        isSwiping,
        isThresholdReached,
        isLongPressTriggered: isLongPressTriggeredRef.current,
        gestureProps
    };
}
_s(useMessageGesture, "j38Jwqc4SL5KCzazTjzzAIIITRA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/chat/hooks/useChatRooms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatRooms",
    ()=>useChatRooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$outboxWorker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/outboxWorker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/decryptPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/incomingChatSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/userPresenceService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function useChatRooms({ activeNav, selectedMsgId, onSelectMsg, onNavigateToChats }) {
    _s();
    // ── Instant cache hydration: seed chat list from user-scoped background prefetch
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useChatRooms.useState": ()=>{
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.removeItem('prefetch_chat_rooms'); // Wipe legacy unscoped key
                    let currentUserId = null;
                    try {
                        var _JSON_parse_state_user, _JSON_parse_state, _JSON_parse;
                        const authRaw = localStorage.getItem('pingdart-auth') || localStorage.getItem('auth-storage');
                        if (authRaw) currentUserId = (_JSON_parse = JSON.parse(authRaw)) === null || _JSON_parse === void 0 ? void 0 : (_JSON_parse_state = _JSON_parse.state) === null || _JSON_parse_state === void 0 ? void 0 : (_JSON_parse_state_user = _JSON_parse_state.user) === null || _JSON_parse_state_user === void 0 ? void 0 : _JSON_parse_state_user.id;
                    } catch (_) {}
                    if (!currentUserId) {
                        try {
                            var _JSON_parse1;
                            currentUserId = (_JSON_parse1 = JSON.parse(localStorage.getItem('user') || '{}')) === null || _JSON_parse1 === void 0 ? void 0 : _JSON_parse1.id;
                        } catch (_) {}
                    }
                    if (currentUserId) {
                        const raw = localStorage.getItem(`prefetch_chat_rooms_${currentUserId}`);
                        if (raw) {
                            var _cached_data;
                            const cached = JSON.parse(raw);
                            var _cached_data_data, _ref;
                            const rooms = (_ref = (_cached_data_data = cached === null || cached === void 0 ? void 0 : (_cached_data = cached.data) === null || _cached_data === void 0 ? void 0 : _cached_data.data) !== null && _cached_data_data !== void 0 ? _cached_data_data : cached === null || cached === void 0 ? void 0 : cached.data) !== null && _ref !== void 0 ? _ref : [];
                            if (Array.isArray(rooms) && rooms.length > 0) {
                                return rooms.map({
                                    "useChatRooms.useState": (r)=>r.sender === "PingDart Admin" ? {
                                            ...r,
                                            sender: "PingDart System",
                                            name: "PingDart System"
                                        } : r
                                }["useChatRooms.useState"]);
                            }
                        }
                    }
                }
            } catch (e) {}
            return [];
        }
    }["useChatRooms.useState"]);
    const [isLoadingChats, setIsLoadingChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useChatRooms.useState": ()=>{
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    let currentUserId = null;
                    try {
                        var _JSON_parse_state_user, _JSON_parse_state, _JSON_parse;
                        const authRaw = localStorage.getItem('pingdart-auth') || localStorage.getItem('auth-storage');
                        if (authRaw) currentUserId = (_JSON_parse = JSON.parse(authRaw)) === null || _JSON_parse === void 0 ? void 0 : (_JSON_parse_state = _JSON_parse.state) === null || _JSON_parse_state === void 0 ? void 0 : (_JSON_parse_state_user = _JSON_parse_state.user) === null || _JSON_parse_state_user === void 0 ? void 0 : _JSON_parse_state_user.id;
                    } catch (_) {}
                    if (!currentUserId) {
                        try {
                            var _JSON_parse1;
                            currentUserId = (_JSON_parse1 = JSON.parse(localStorage.getItem('user') || '{}')) === null || _JSON_parse1 === void 0 ? void 0 : _JSON_parse1.id;
                        } catch (_) {}
                    }
                    if (currentUserId) {
                        const raw = localStorage.getItem(`prefetch_chat_rooms_${currentUserId}`);
                        if (raw) {
                            var _cached_data;
                            const cached = JSON.parse(raw);
                            var _cached_data_data, _ref;
                            const rooms = (_ref = (_cached_data_data = cached === null || cached === void 0 ? void 0 : (_cached_data = cached.data) === null || _cached_data === void 0 ? void 0 : _cached_data.data) !== null && _cached_data_data !== void 0 ? _cached_data_data : cached === null || cached === void 0 ? void 0 : cached.data) !== null && _ref !== void 0 ? _ref : [];
                            if (Array.isArray(rooms) && rooms.length > 0) return false;
                        }
                    }
                }
            } catch (e) {}
            return true;
        }
    }["useChatRooms.useState"]);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messages);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatRooms.useEffect": ()=>{
            messagesRef.current = messages;
        }
    }["useChatRooms.useEffect"], [
        messages
    ]);
    // Derived filtered properties: instant activeMessage resolution (0ms delay)
    const activeMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatRooms.useMemo[activeMessage]": ()=>{
            if (!selectedMsgId) return undefined;
            const found = messages.find({
                "useChatRooms.useMemo[activeMessage].found": (m)=>String(m.id) === String(selectedMsgId)
            }["useChatRooms.useMemo[activeMessage].found"]);
            if (found) {
                if (found.sender === "PingDart Admin") {
                    return {
                        ...found,
                        sender: "PingDart System",
                        name: "PingDart System"
                    };
                }
                return found;
            }
            // Instant stub fallback: if room is not yet in messages array (e.g. cold-start notification click),
            // immediately build a stub ChatPreview so ChatDetail mounts instantly with 0ms delay!
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    const metaRaw = sessionStorage.getItem(`pending_chat_meta_${selectedMsgId}`);
                    if (metaRaw) {
                        const meta = JSON.parse(metaRaw);
                        return {
                            id: Number(selectedMsgId),
                            name: meta.name || 'Chat',
                            sender: meta.name || 'Chat',
                            avatar: meta.avatar || meta.avatarUrl || '',
                            avatarUrl: meta.avatar || meta.avatarUrl || '',
                            type: meta.isGroup ? 'group' : 'direct',
                            otherUserId: meta.senderId,
                            isOnline: false,
                            status: 'delivered',
                            isPinned: false,
                            isMuted: false,
                            isArchived: false,
                            unread: false,
                            unreadCount: 0,
                            preview: '',
                            time: ''
                        };
                    }
                }
            } catch (_) {}
            return {
                id: Number(selectedMsgId),
                name: 'Chat',
                sender: 'Chat',
                avatar: '',
                avatarUrl: '',
                type: 'direct',
                isOnline: false,
                status: 'delivered',
                isPinned: false,
                isMuted: false,
                isArchived: false,
                unread: false,
                unreadCount: 0,
                preview: '',
                time: ''
            };
        }
    }["useChatRooms.useMemo[activeMessage]"], [
        messages,
        selectedMsgId
    ]);
    const chatsFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatRooms.useMemo[chatsFiltered]": ()=>messages.filter({
                "useChatRooms.useMemo[chatsFiltered]": (m)=>!m.type || m.type === 'direct' || m.type === 'group' || m.type === 'broadcast'
            }["useChatRooms.useMemo[chatsFiltered]"])
    }["useChatRooms.useMemo[chatsFiltered]"], [
        messages
    ]);
    const channelsFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatRooms.useMemo[channelsFiltered]": ()=>messages.filter({
                "useChatRooms.useMemo[channelsFiltered]": (m)=>m.type === 'channel' || m.type === 'broadcast'
            }["useChatRooms.useMemo[channelsFiltered]"])
    }["useChatRooms.useMemo[channelsFiltered]"], [
        messages
    ]);
    const communitiesFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatRooms.useMemo[communitiesFiltered]": ()=>messages.filter({
                "useChatRooms.useMemo[communitiesFiltered]": (m)=>m.type === 'community' && !m.isRemoved && m.memberStatus !== 'left' && m.memberStatus !== 'removed' && m.memberStatus !== 'pending'
            }["useChatRooms.useMemo[communitiesFiltered]"])
    }["useChatRooms.useMemo[communitiesFiltered]"], [
        messages
    ]);
    const archivedFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatRooms.useMemo[archivedFiltered]": ()=>messages.filter({
                "useChatRooms.useMemo[archivedFiltered]": (m)=>m.isArchived
            }["useChatRooms.useMemo[archivedFiltered]"])
    }["useChatRooms.useMemo[archivedFiltered]"], [
        messages
    ]);
    /**
   * fetchRooms
   * Fetches active user chat rooms, statuses, and initializes E2EE encryption keys.
   * Decrypts preview messages for display in the left-hand chat list.
   */ const fetchRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[fetchRooms]": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable");
            if (!token) return;
            Promise.all([
                __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/services/statusApi.ts [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)")
            ]).then({
                "useChatRooms.useCallback[fetchRooms]": async ([{ chatApi }, { statusApi }, { initializeKeys }])=>{
                    // Initialize E2EE keys in background without blocking instant room fetch
                    initializeKeys().catch({
                        "useChatRooms.useCallback[fetchRooms]": ()=>{}
                    }["useChatRooms.useCallback[fetchRooms]"]);
                    Promise.all([
                        chatApi.getRooms(),
                        statusApi.getStatuses()
                    ]).then({
                        "useChatRooms.useCallback[fetchRooms]": async ([chatRes, statusRes])=>{
                            if (chatRes.success) {
                                let statusMap = {};
                                if (statusRes.success && statusRes.data) {
                                    var _useAuthStore_getState_user;
                                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                                    statusRes.data.forEach({
                                        "useChatRooms.useCallback[fetchRooms]": (s)=>{
                                            if (!statusMap[s.userId]) {
                                                statusMap[s.userId] = {
                                                    hasUnviewed: false,
                                                    count: 0
                                                };
                                            }
                                            statusMap[s.userId].count += 1;
                                            const isViewed = s.views && s.views.some({
                                                "useChatRooms.useCallback[fetchRooms]": (v)=>v.viewerId === currentUserId
                                            }["useChatRooms.useCallback[fetchRooms]"]);
                                            if (!isViewed) {
                                                statusMap[s.userId].hasUnviewed = true;
                                            }
                                        }
                                    }["useChatRooms.useCallback[fetchRooms]"]);
                                }
                                // Decrypt E2EE preview messages so the chat list shows actual text (WhatsApp-like)
                                const currentRoomsById = new Map(messagesRef.current.map({
                                    "useChatRooms.useCallback[fetchRooms]": (room)=>[
                                            String(room.id),
                                            room
                                        ]
                                }["useChatRooms.useCallback[fetchRooms]"]));
                                const rooms = await Promise.all(chatRes.data.map({
                                    "useChatRooms.useCallback[fetchRooms]": async (room)=>{
                                        const uId = room.otherUserId;
                                        if (uId && statusMap[uId]) {
                                            room.hasStatus = true;
                                            room.statusCount = statusMap[uId].count;
                                            room.hasUnviewedStatus = statusMap[uId].hasUnviewed;
                                        } else {
                                            room.hasStatus = false;
                                            room.statusCount = 0;
                                            room.hasUnviewedStatus = false;
                                        }
                                        const localRoom = currentRoomsById.get(String(room.id));
                                        // Keep local state when:
                                        //  (a) local has the SAME or NEWER message (API hasn't caught up yet), OR
                                        //  (b) local has a message that API doesn't know about yet (id 0 from API)
                                        const apiIsNewer = localRoom && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRoomMessageNewer"])(localRoom, room.lastMessageId, room.lastMessageTimestamp);
                                        const livePresence = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].getPresence(room.otherUserId);
                                        const isOnlineResolved = livePresence !== null ? livePresence.isOnline : room.isOnline !== undefined ? Boolean(room.isOnline) : false;
                                        var _livePresence_lastSeen;
                                        const lastSeenResolved = (_livePresence_lastSeen = livePresence === null || livePresence === void 0 ? void 0 : livePresence.lastSeen) !== null && _livePresence_lastSeen !== void 0 ? _livePresence_lastSeen : room.lastSeen !== undefined ? room.lastSeen : localRoom === null || localRoom === void 0 ? void 0 : localRoom.lastSeen;
                                        if (localRoom && !apiIsNewer) {
                                            return {
                                                ...localRoom,
                                                ...room,
                                                isOnline: isOnlineResolved,
                                                lastSeen: lastSeenResolved,
                                                canViewLastSeen: room.canViewLastSeen,
                                                preview: localRoom.preview,
                                                time: localRoom.time,
                                                lastMessageTimestamp: localRoom.lastMessageTimestamp || room.lastMessageTimestamp,
                                                lastMessageId: localRoom.lastMessageId || room.lastMessageId,
                                                unread: localRoom.unread,
                                                unreadCount: localRoom.unreadCount
                                            };
                                        }
                                        if (typeof room.preview === 'string' && room.preview.startsWith('{') && room.preview.includes('__e2ee')) {
                                            const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptPreview"])(room.preview, !!room.isMe, room.id, room.otherUserId);
                                            return {
                                                ...room,
                                                preview: decrypted
                                            };
                                        }
                                        const finalRoom = room.sender === 'PingDart Admin' ? {
                                            ...room,
                                            sender: 'PingDart System',
                                            name: 'PingDart System'
                                        } : room;
                                        return finalRoom;
                                    }
                                }["useChatRooms.useCallback[fetchRooms]"]));
                                setMessages(rooms);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalRooms"](rooms).catch({
                                    "useChatRooms.useCallback[fetchRooms]": ()=>{}
                                }["useChatRooms.useCallback[fetchRooms]"]);
                                try {
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        var _useAuthStore_getState_user1;
                                        const currentUserId = (_useAuthStore_getState_user1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user1 === void 0 ? void 0 : _useAuthStore_getState_user1.id;
                                        if (currentUserId) {
                                            localStorage.setItem(`prefetch_chat_rooms_${currentUserId}`, JSON.stringify(rooms));
                                        }
                                    }
                                } catch (_) {}
                                // If the app was killed, native push delivery cannot update IndexedDB.
                                // Hydrate unread rooms on the next app start without clearing unread state.
                                await Promise.all(rooms.filter({
                                    "useChatRooms.useCallback[fetchRooms]": (room)=>Number(room.unreadCount) > 0
                                }["useChatRooms.useCallback[fetchRooms]"]).map({
                                    "useChatRooms.useCallback[fetchRooms]": (room)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncIncomingChatHistory"])(Number(room.id))
                                }["useChatRooms.useCallback[fetchRooms]"]));
                            }
                        }
                    }["useChatRooms.useCallback[fetchRooms]"]).catch(console.error).finally({
                        "useChatRooms.useCallback[fetchRooms]": ()=>{
                            setIsLoadingChats(false);
                        }
                    }["useChatRooms.useCallback[fetchRooms]"]);
                }
            }["useChatRooms.useCallback[fetchRooms]"]);
        }
    }["useChatRooms.useCallback[fetchRooms]"], []);
    /**
   * Effect: IndexedDB hydration & window event listeners
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatRooms.useEffect": ()=>{
            // 1. Initialize outbox worker & storage pruning
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$outboxWorker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["outboxWorker"].init();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pruneOldMessages"](180).catch({
                "useChatRooms.useEffect": ()=>{}
            }["useChatRooms.useEffect"]);
            // 2. Load rooms from IndexedDB immediately for 0ms initial render
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalRooms"]().then({
                "useChatRooms.useEffect": (rooms)=>{
                    if (rooms && rooms.length > 0) {
                        setMessages(rooms);
                        setIsLoadingChats(false);
                        try {
                            if ("TURBOPACK compile-time truthy", 1) {
                                var _useAuthStore_getState_user;
                                const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                                if (currentUserId) {
                                    localStorage.setItem(`prefetch_chat_rooms_${currentUserId}`, JSON.stringify(rooms));
                                }
                            }
                        } catch (_) {}
                    }
                }
            }["useChatRooms.useEffect"]).catch({
                "useChatRooms.useEffect": ()=>{}
            }["useChatRooms.useEffect"]);
            const handleChatUpdated = {
                "useChatRooms.useEffect.handleChatUpdated": (e)=>{
                    const customEvent = e;
                    const { roomId, isFavorite } = customEvent.detail || {};
                    if (roomId !== undefined && isFavorite !== undefined) {
                        setMessages({
                            "useChatRooms.useEffect.handleChatUpdated": (prev)=>prev.map({
                                    "useChatRooms.useEffect.handleChatUpdated": (m)=>String(m.id) === String(roomId) ? {
                                            ...m,
                                            isFavorite
                                        } : m
                                }["useChatRooms.useEffect.handleChatUpdated"])
                        }["useChatRooms.useEffect.handleChatUpdated"]);
                    }
                }
            }["useChatRooms.useEffect.handleChatUpdated"];
            const handleChatCleared = {
                "useChatRooms.useEffect.handleChatCleared": (e)=>{
                    const customEvent = e;
                    const { roomId } = customEvent.detail || {};
                    if (roomId !== undefined) {
                        setMessages({
                            "useChatRooms.useEffect.handleChatCleared": (prev)=>prev.map({
                                    "useChatRooms.useEffect.handleChatCleared": (m)=>String(m.id) === String(roomId) ? {
                                            ...m,
                                            preview: 'No messages yet',
                                            unreadCount: 0,
                                            unread: false,
                                            time: ''
                                        } : m
                                }["useChatRooms.useEffect.handleChatCleared"])
                        }["useChatRooms.useEffect.handleChatCleared"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(roomId), 'No messages yet').catch({
                            "useChatRooms.useEffect.handleChatCleared": ()=>{}
                        }["useChatRooms.useEffect.handleChatCleared"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(roomId)).catch({
                            "useChatRooms.useEffect.handleChatCleared": ()=>{}
                        }["useChatRooms.useEffect.handleChatCleared"]);
                        if ("TURBOPACK compile-time truthy", 1) {
                            try {
                                localStorage.removeItem(`ping_chat_msgs_${roomId}`);
                            } catch (_) {}
                        }
                    }
                }
            }["useChatRooms.useEffect.handleChatCleared"];
            fetchRooms();
            const handleRoomPreviewUpdated = {
                "useChatRooms.useEffect.handleRoomPreviewUpdated": (e)=>{
                    const customEvent = e;
                    const { roomId, preview, time, isMe, status, unread, unreadCount, lastMessageTimestamp, senderId } = customEvent.detail || {};
                    if (roomId !== undefined) {
                        setMessages({
                            "useChatRooms.useEffect.handleRoomPreviewUpdated": (prev)=>{
                                const updated = prev.map({
                                    "useChatRooms.useEffect.handleRoomPreviewUpdated.updated": (m)=>{
                                        const isMatch = String(m.id) === String(roomId) || senderId && m.otherUserId && String(m.otherUserId) === String(senderId);
                                        if (isMatch) {
                                            return {
                                                ...m,
                                                preview: preview !== undefined ? preview : m.preview,
                                                time: time || m.time || new Date().toLocaleTimeString('en-US', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: true
                                                }),
                                                isMe: isMe !== undefined ? isMe : m.isMe,
                                                status: status || m.status,
                                                lastMessageTimestamp: lastMessageTimestamp ? new Date(lastMessageTimestamp) : new Date(),
                                                unread: unread !== undefined ? unread : m.unread,
                                                unreadCount: unreadCount !== undefined ? unreadCount : m.unreadCount
                                            };
                                        }
                                        return m;
                                    }
                                }["useChatRooms.useEffect.handleRoomPreviewUpdated.updated"]);
                                const idx = updated.findIndex({
                                    "useChatRooms.useEffect.handleRoomPreviewUpdated.idx": (m)=>String(m.id) === String(roomId) || senderId && m.otherUserId && String(m.otherUserId) === String(senderId)
                                }["useChatRooms.useEffect.handleRoomPreviewUpdated.idx"]);
                                if (idx > 0) {
                                    const [room] = updated.splice(idx, 1);
                                    // Ensure timestamp is set so the sort in ChatList agrees with this position
                                    if (lastMessageTimestamp) {
                                        room.lastMessageTimestamp = new Date(lastMessageTimestamp);
                                    } else if (!room.lastMessageTimestamp) {
                                        room.lastMessageTimestamp = new Date();
                                    }
                                    updated.unshift(room);
                                }
                                return [
                                    ...updated
                                ];
                            }
                        }["useChatRooms.useEffect.handleRoomPreviewUpdated"]);
                    }
                }
            }["useChatRooms.useEffect.handleRoomPreviewUpdated"];
            const handleMessagesReadOffline = {
                "useChatRooms.useEffect.handleMessagesReadOffline": (e)=>{
                    var _useAuthStore_getState_user;
                    const customEvent = e;
                    const { roomId, userId } = customEvent.detail || {};
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    if (roomId !== undefined) {
                        setMessages({
                            "useChatRooms.useEffect.handleMessagesReadOffline": (prev)=>prev.map({
                                    "useChatRooms.useEffect.handleMessagesReadOffline": (m)=>{
                                        if (String(m.id) === String(roomId)) {
                                            if (!userId || String(userId) === String(currentUserId)) {
                                                return {
                                                    ...m,
                                                    unread: false,
                                                    unreadCount: 0
                                                };
                                            }
                                            if (m.isMe || m.from === 'me') {
                                                return {
                                                    ...m,
                                                    status: 'read'
                                                };
                                            }
                                        }
                                        return m;
                                    }
                                }["useChatRooms.useEffect.handleMessagesReadOffline"])
                        }["useChatRooms.useEffect.handleMessagesReadOffline"]);
                    }
                }
            }["useChatRooms.useEffect.handleMessagesReadOffline"];
            const handleMessagesDeliveredOffline = {
                "useChatRooms.useEffect.handleMessagesDeliveredOffline": (e)=>{
                    const customEvent = e;
                    const { roomId } = customEvent.detail || {};
                    if (roomId !== undefined) {
                        setMessages({
                            "useChatRooms.useEffect.handleMessagesDeliveredOffline": (prev)=>prev.map({
                                    "useChatRooms.useEffect.handleMessagesDeliveredOffline": (m)=>{
                                        if (String(m.id) === String(roomId) && (m.isMe || m.from === 'me') && m.status !== 'read') {
                                            return {
                                                ...m,
                                                status: 'delivered'
                                            };
                                        }
                                        return m;
                                    }
                                }["useChatRooms.useEffect.handleMessagesDeliveredOffline"])
                        }["useChatRooms.useEffect.handleMessagesDeliveredOffline"]);
                    }
                }
            }["useChatRooms.useEffect.handleMessagesDeliveredOffline"];
            window.addEventListener('blocked_contacts_updated', fetchRooms);
            window.addEventListener('chat_cleared', handleChatCleared);
            window.addEventListener('chat_updated', handleChatUpdated);
            window.addEventListener('room:preview_updated', handleRoomPreviewUpdated);
            window.addEventListener('chat:messages_read', handleMessagesReadOffline);
            window.addEventListener('chat:messages_delivered', handleMessagesDeliveredOffline);
            return ({
                "useChatRooms.useEffect": ()=>{
                    window.removeEventListener('blocked_contacts_updated', fetchRooms);
                    window.removeEventListener('chat_cleared', handleChatCleared);
                    window.removeEventListener('chat_updated', handleChatUpdated);
                    window.removeEventListener('room:preview_updated', handleRoomPreviewUpdated);
                    window.removeEventListener('chat:messages_read', handleMessagesReadOffline);
                    window.removeEventListener('chat:messages_delivered', handleMessagesDeliveredOffline);
                }
            })["useChatRooms.useEffect"];
        }
    }["useChatRooms.useEffect"], [
        fetchRooms
    ]);
    /**
   * Effect: Handle status viewed events
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatRooms.useEffect": ()=>{
            const handleStatusViewed = {
                "useChatRooms.useEffect.handleStatusViewed": (e)=>{
                    const customEvent = e;
                    const { userId } = customEvent.detail || {};
                    if (userId) {
                        setMessages({
                            "useChatRooms.useEffect.handleStatusViewed": (prev)=>prev.map({
                                    "useChatRooms.useEffect.handleStatusViewed": (m)=>{
                                        if (m.otherUserId === userId) {
                                            return {
                                                ...m,
                                                hasUnviewedStatus: false
                                            };
                                        }
                                        return m;
                                    }
                                }["useChatRooms.useEffect.handleStatusViewed"])
                        }["useChatRooms.useEffect.handleStatusViewed"]);
                    }
                }
            }["useChatRooms.useEffect.handleStatusViewed"];
            window.addEventListener('status_viewed', handleStatusViewed);
            return ({
                "useChatRooms.useEffect": ()=>window.removeEventListener('status_viewed', handleStatusViewed)
            })["useChatRooms.useEffect"];
        }
    }["useChatRooms.useEffect"], []);
    /**
   * Effect: Handle select_chat_room custom event
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatRooms.useEffect": ()=>{
            const handleSelectChatRoom = {
                "useChatRooms.useEffect.handleSelectChatRoom": async (e)=>{
                    const customEvent = e;
                    const { roomId } = customEvent.detail || {};
                    if (roomId) {
                        if (onNavigateToChats) onNavigateToChats();
                        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                        const rooms = await chatApi.getRooms();
                        if (rooms === null || rooms === void 0 ? void 0 : rooms.data) setMessages(rooms.data);
                        onSelectMsg(roomId);
                    }
                }
            }["useChatRooms.useEffect.handleSelectChatRoom"];
            window.addEventListener('select_chat_room', handleSelectChatRoom);
            return ({
                "useChatRooms.useEffect": ()=>{
                    window.removeEventListener('select_chat_room', handleSelectChatRoom);
                }
            })["useChatRooms.useEffect"];
        }
    }["useChatRooms.useEffect"], [
        onSelectMsg,
        onNavigateToChats
    ]);
    /**
   * Effect: Automatically mark unread messages as read when opening an active chat.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatRooms.useEffect": ()=>{
            if ([
                'Chats',
                'Channels'
            ].includes(activeNav) && selectedMsgId) {
                setMessages({
                    "useChatRooms.useEffect": (prev)=>prev.map({
                            "useChatRooms.useEffect": (m)=>String(m.id) === String(selectedMsgId) ? {
                                    ...m,
                                    unread: false,
                                    unreadCount: 0
                                } : m
                        }["useChatRooms.useEffect"])
                }["useChatRooms.useEffect"]);
                __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                    "useChatRooms.useEffect": ({ chatApi })=>{
                        chatApi.markAsRead(Number(selectedMsgId)).catch({
                            "useChatRooms.useEffect": ()=>{}
                        }["useChatRooms.useEffect"]);
                    }
                }["useChatRooms.useEffect"]);
            }
        }
    }["useChatRooms.useEffect"], [
        activeNav,
        selectedMsgId
    ]);
    /**
   * handleMessageSent
   */ const handleMessageSent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleMessageSent]": (roomId, preview, time, status, msgId)=>{
            if (roomId && msgId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](Number(roomId), preview, msgId);
            }
            const now = new Date();
            setMessages({
                "useChatRooms.useCallback[handleMessageSent]": (prev)=>{
                    const updated = prev.map({
                        "useChatRooms.useCallback[handleMessageSent].updated": (m)=>String(m.id) === String(roomId) ? {
                                ...m,
                                preview,
                                time,
                                lastMessageTimestamp: now,
                                isMe: true,
                                status: status || 'sent',
                                subject: m.type === 'direct' ? '' : 'You'
                            } : m
                    }["useChatRooms.useCallback[handleMessageSent].updated"]);
                    const idx = updated.findIndex({
                        "useChatRooms.useCallback[handleMessageSent].idx": (m)=>String(m.id) === String(roomId)
                    }["useChatRooms.useCallback[handleMessageSent].idx"]);
                    if (idx > 0) {
                        const [room] = updated.splice(idx, 1);
                        updated.unshift(room);
                    }
                    return [
                        ...updated
                    ];
                }
            }["useChatRooms.useCallback[handleMessageSent]"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(roomId), preview, time, true).catch({
                "useChatRooms.useCallback[handleMessageSent]": ()=>{}
            }["useChatRooms.useCallback[handleMessageSent]"]);
        }
    }["useChatRooms.useCallback[handleMessageSent]"], []);
    /**
   * handleArchiveChat
   */ const handleArchiveChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleArchiveChat]": (id)=>{
            setMessages({
                "useChatRooms.useCallback[handleArchiveChat]": (prev)=>prev.map({
                        "useChatRooms.useCallback[handleArchiveChat]": (m)=>String(m.id) === String(id) ? {
                                ...m,
                                isArchived: true
                            } : m
                    }["useChatRooms.useCallback[handleArchiveChat]"])
            }["useChatRooms.useCallback[handleArchiveChat]"]);
        }
    }["useChatRooms.useCallback[handleArchiveChat]"], []);
    /**
   * handleMuteChat
   */ const handleMuteChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleMuteChat]": (id)=>{
            setMessages({
                "useChatRooms.useCallback[handleMuteChat]": (prev)=>prev.map({
                        "useChatRooms.useCallback[handleMuteChat]": (m)=>String(m.id) === String(id) ? {
                                ...m,
                                isMuted: !m.isMuted
                            } : m
                    }["useChatRooms.useCallback[handleMuteChat]"])
            }["useChatRooms.useCallback[handleMuteChat]"]);
        }
    }["useChatRooms.useCallback[handleMuteChat]"], []);
    /**
   * handleFavoriteChat
   */ const handleFavoriteChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleFavoriteChat]": (id, isFav)=>{
            setMessages({
                "useChatRooms.useCallback[handleFavoriteChat]": (prev)=>prev.map({
                        "useChatRooms.useCallback[handleFavoriteChat]": (m)=>String(m.id) === String(id) ? {
                                ...m,
                                isFavorite: isFav
                            } : m
                    }["useChatRooms.useCallback[handleFavoriteChat]"])
            }["useChatRooms.useCallback[handleFavoriteChat]"]);
        }
    }["useChatRooms.useCallback[handleFavoriteChat]"], []);
    /**
   * handleClearChat
   */ const handleClearChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleClearChat]": (id)=>{
            setMessages({
                "useChatRooms.useCallback[handleClearChat]": (prev)=>prev.map({
                        "useChatRooms.useCallback[handleClearChat]": (m)=>String(m.id) === String(id) ? {
                                ...m,
                                preview: "No messages yet",
                                unreadCount: 0,
                                unread: false
                            } : m
                    }["useChatRooms.useCallback[handleClearChat]"])
            }["useChatRooms.useCallback[handleClearChat]"]);
        }
    }["useChatRooms.useCallback[handleClearChat]"], []);
    /**
   * handleDeleteChat
   */ const handleDeleteChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleDeleteChat]": (id)=>{
            setMessages({
                "useChatRooms.useCallback[handleDeleteChat]": (prev)=>prev.filter({
                        "useChatRooms.useCallback[handleDeleteChat]": (m)=>String(m.id) !== String(id)
                    }["useChatRooms.useCallback[handleDeleteChat]"])
            }["useChatRooms.useCallback[handleDeleteChat]"]);
            if (String(selectedMsgId) === String(id)) {
                onSelectMsg(null);
            }
        }
    }["useChatRooms.useCallback[handleDeleteChat]"], [
        selectedMsgId,
        onSelectMsg
    ]);
    /**
   * handleCreateChat
   */ const handleCreateChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatRooms.useCallback[handleCreateChat]": async (type, name, members, description, avatarFile)=>{
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            const res = await chatApi.createRoom(name, type, members || [], description, avatarFile || undefined);
            if (res.success) {
                var _res_data, _res_data1;
                const rooms = await chatApi.getRooms();
                setMessages(rooms.data);
                if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.id) {
                    onSelectMsg(res.data.id);
                }
                var _res_data_id;
                return (_res_data_id = (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) !== null && _res_data_id !== void 0 ? _res_data_id : null;
            }
            return null;
        }
    }["useChatRooms.useCallback[handleCreateChat]"], [
        onSelectMsg
    ]);
    return {
        messages,
        setMessages,
        messagesRef,
        isLoadingChats,
        activeMessage,
        chatsFiltered,
        channelsFiltered,
        communitiesFiltered,
        archivedFiltered,
        fetchRooms,
        handleMessageSent,
        handleArchiveChat,
        handleMuteChat,
        handleFavoriteChat,
        handleClearChat,
        handleDeleteChat,
        handleCreateChat
    };
}
_s(useChatRooms, "xIq7ixbeoPrvIxz8n5fs5MEJmrA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_chat_hooks_5af69e24._.js.map