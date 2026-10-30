(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/games/strategic-mill/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOARD_NODES",
    ()=>BOARD_NODES,
    "POSITION_TO_LINES",
    ()=>POSITION_TO_LINES,
    "TOTAL_COINS_PER_PLAYER",
    ()=>TOTAL_COINS_PER_PLAYER,
    "WINNING_LINES",
    ()=>WINNING_LINES,
    "WINNING_LINE_NAMES",
    ()=>WINNING_LINE_NAMES,
    "canUseLine",
    ()=>canUseLine,
    "checkMillsForPosition",
    ()=>checkMillsForPosition,
    "checkNewlyFormedLines",
    ()=>checkNewlyFormedLines,
    "createInitialGameState",
    ()=>createInitialGameState,
    "getAllMillsForPlayer",
    ()=>getAllMillsForPlayer,
    "getLegalMovesForPosition",
    ()=>getLegalMovesForPosition,
    "getRemovableCoins",
    ()=>getRemovableCoins,
    "hasLegalMoves",
    ()=>hasLegalMoves,
    "isCoinInMill",
    ()=>isCoinInMill,
    "markLineUsed",
    ()=>markLineUsed
]);
const TOTAL_COINS_PER_PLAYER = 9;
const BOARD_NODES = {
    // Outer Ring
    1: {
        id: 1,
        x: 10,
        y: 10,
        ring: "outer",
        neighbors: [
            2,
            10
        ]
    },
    2: {
        id: 2,
        x: 50,
        y: 10,
        ring: "outer",
        neighbors: [
            1,
            3,
            5
        ]
    },
    3: {
        id: 3,
        x: 90,
        y: 10,
        ring: "outer",
        neighbors: [
            2,
            15
        ]
    },
    10: {
        id: 10,
        x: 10,
        y: 50,
        ring: "outer",
        neighbors: [
            1,
            11,
            22
        ]
    },
    15: {
        id: 15,
        x: 90,
        y: 50,
        ring: "outer",
        neighbors: [
            3,
            14,
            24
        ]
    },
    22: {
        id: 22,
        x: 10,
        y: 90,
        ring: "outer",
        neighbors: [
            10,
            23
        ]
    },
    23: {
        id: 23,
        x: 50,
        y: 90,
        ring: "outer",
        neighbors: [
            20,
            22,
            24
        ]
    },
    24: {
        id: 24,
        x: 90,
        y: 90,
        ring: "outer",
        neighbors: [
            15,
            23
        ]
    },
    // Middle Ring
    4: {
        id: 4,
        x: 24,
        y: 24,
        ring: "middle",
        neighbors: [
            5,
            11
        ]
    },
    5: {
        id: 5,
        x: 50,
        y: 24,
        ring: "middle",
        neighbors: [
            2,
            4,
            6,
            8
        ]
    },
    6: {
        id: 6,
        x: 76,
        y: 24,
        ring: "middle",
        neighbors: [
            5,
            14
        ]
    },
    11: {
        id: 11,
        x: 24,
        y: 50,
        ring: "middle",
        neighbors: [
            4,
            10,
            12,
            19
        ]
    },
    14: {
        id: 14,
        x: 76,
        y: 50,
        ring: "middle",
        neighbors: [
            6,
            13,
            15,
            21
        ]
    },
    19: {
        id: 19,
        x: 24,
        y: 76,
        ring: "middle",
        neighbors: [
            11,
            20
        ]
    },
    20: {
        id: 20,
        x: 50,
        y: 76,
        ring: "middle",
        neighbors: [
            17,
            19,
            21,
            23
        ]
    },
    21: {
        id: 21,
        x: 76,
        y: 76,
        ring: "middle",
        neighbors: [
            14,
            20
        ]
    },
    // Inner Ring
    7: {
        id: 7,
        x: 37,
        y: 37,
        ring: "inner",
        neighbors: [
            8,
            12
        ]
    },
    8: {
        id: 8,
        x: 50,
        y: 37,
        ring: "inner",
        neighbors: [
            5,
            7,
            9
        ]
    },
    9: {
        id: 9,
        x: 63,
        y: 37,
        ring: "inner",
        neighbors: [
            8,
            13
        ]
    },
    12: {
        id: 12,
        x: 37,
        y: 50,
        ring: "inner",
        neighbors: [
            7,
            11,
            16
        ]
    },
    13: {
        id: 13,
        x: 63,
        y: 50,
        ring: "inner",
        neighbors: [
            9,
            14,
            18
        ]
    },
    16: {
        id: 16,
        x: 37,
        y: 63,
        ring: "inner",
        neighbors: [
            12,
            17
        ]
    },
    17: {
        id: 17,
        x: 50,
        y: 63,
        ring: "inner",
        neighbors: [
            16,
            18,
            20
        ]
    },
    18: {
        id: 18,
        x: 63,
        y: 63,
        ring: "inner",
        neighbors: [
            13,
            17
        ]
    }
};
const WINNING_LINES = [
    // 0: Outer Top (Display ID 1)
    [
        1,
        2,
        3
    ],
    // 1: Outer Left (Display ID 2)
    [
        1,
        10,
        22
    ],
    // 2: Outer Bottom (Display ID 3)
    [
        22,
        23,
        24
    ],
    // 3: Outer Right (Display ID 4)
    [
        3,
        15,
        24
    ],
    // 4: Middle Top (Display ID 5)
    [
        4,
        5,
        6
    ],
    // 5: Middle Left (Display ID 6)
    [
        4,
        11,
        19
    ],
    // 6: Middle Bottom (Display ID 7)
    [
        19,
        20,
        21
    ],
    // 7: Middle Right (Display ID 8)
    [
        6,
        14,
        21
    ],
    // 8: Inner Top (Display ID 9)
    [
        7,
        8,
        9
    ],
    // 9: Inner Left (Display ID 10)
    [
        7,
        12,
        16
    ],
    // 10: Inner Bottom (Display ID 11)
    [
        16,
        17,
        18
    ],
    // 11: Inner Right (Display ID 12)
    [
        9,
        13,
        18
    ],
    // 12: Top Cross-Strut (Display ID 13)
    [
        2,
        5,
        8
    ],
    // 13: Left Cross-Strut (Display ID 14)
    [
        10,
        11,
        12
    ],
    // 14: Right Cross-Strut (Display ID 15)
    [
        13,
        14,
        15
    ],
    // 15: Bottom Cross-Strut (Display ID 16)
    [
        17,
        20,
        23
    ]
];
const WINNING_LINE_NAMES = {
    0: "Outer Top",
    1: "Outer Left",
    2: "Outer Bottom",
    3: "Outer Right",
    4: "Middle Top",
    5: "Middle Left",
    6: "Middle Bottom",
    7: "Middle Right",
    8: "Inner Top",
    9: "Inner Left",
    10: "Inner Bottom",
    11: "Inner Right",
    12: "Top Cross-Strut",
    13: "Left Cross-Strut",
    14: "Right Cross-Strut",
    15: "Bottom Cross-Strut"
};
const POSITION_TO_LINES = {};
for(let pos = 1; pos <= 24; pos++){
    POSITION_TO_LINES[pos] = [];
    WINNING_LINES.forEach((line, idx)=>{
        if (line.includes(pos)) {
            POSITION_TO_LINES[pos].push(idx);
        }
    });
}
function canUseLine(usedLines, player, lineId) {
    const pRecord = usedLines[player];
    if (!pRecord) return true;
    if (Array.isArray(pRecord)) {
        return !pRecord.includes(lineId);
    }
    return !pRecord.has(lineId);
}
function markLineUsed(usedLines, player, lineId) {
    const current = usedLines[player] || [];
    if (current.includes(lineId)) return usedLines;
    return {
        ...usedLines,
        [player]: [
            ...current,
            lineId
        ]
    };
}
function checkNewlyFormedLines(board, pos, player, usedLines) {
    const newlyFormed = [];
    const candidateLineIds = POSITION_TO_LINES[pos] || [];
    for (const lineId of candidateLineIds){
        if (!canUseLine(usedLines, player, lineId)) {
            continue;
        }
        const line = WINNING_LINES[lineId];
        if (line.every((p)=>board[p] === player)) {
            newlyFormed.push(lineId);
        }
    }
    return newlyFormed;
}
function createInitialGameState(mode = "PASS_AND_PLAY") {
    const board = {};
    for(let i = 1; i <= 24; i++){
        board[i] = null;
    }
    const initialStats = {
        coinsToPlace: TOTAL_COINS_PER_PLAYER,
        coinsOnBoard: 0,
        coinsCaptured: 0,
        millsFormed: 0,
        timerSeconds: 120
    };
    return {
        board,
        currentPlayer: 1,
        phase: {
            1: "PLACEMENT",
            2: "PLACEMENT"
        },
        subState: "NORMAL",
        selectedPos: null,
        history: [],
        winner: null,
        gameOverReason: null,
        stats: {
            1: {
                ...initialStats
            },
            2: {
                ...initialStats
            }
        },
        mode,
        aiDifficulty: "Adaptive",
        activeMillLines: [],
        usedLines: {
            1: [],
            2: []
        },
        pendingRemovals: 0
    };
}
function checkMillsForPosition(board, pos, player, usedLines) {
    const candidateLineIds = POSITION_TO_LINES[pos] || [];
    const formedMills = [];
    for (const lineId of candidateLineIds){
        if (usedLines && !canUseLine(usedLines, player, lineId)) {
            continue;
        }
        const line = WINNING_LINES[lineId];
        if (line.every((p)=>board[p] === player)) {
            formedMills.push(line);
        }
    }
    return formedMills;
}
function getAllMillsForPlayer(board, player) {
    const mills = [];
    for (const line of WINNING_LINES){
        if (line.every((p)=>board[p] === player)) {
            mills.push(line);
        }
    }
    return mills;
}
function isCoinInMill(board, pos, player) {
    for (const line of WINNING_LINES){
        if (line.includes(pos) && line.every((p)=>board[p] === player)) {
            return true;
        }
    }
    return false;
}
function getRemovableCoins(board, opponent) {
    const opponentCoins = [];
    for(let i = 1; i <= 24; i++){
        if (board[i] === opponent) {
            opponentCoins.push(i);
        }
    }
    const unprotected = opponentCoins.filter((pos)=>!isCoinInMill(board, pos, opponent));
    // If all coins are in mills, any coin can be removed
    return unprotected.length > 0 ? unprotected : opponentCoins;
}
function getLegalMovesForPosition(state, pos) {
    var _BOARD_NODES_pos;
    const player = state.board[pos];
    if (!player) return [];
    // Flying Phase: can jump to ANY empty position
    if (state.phase[player] === "FLYING") {
        const emptyPositions = [];
        for(let i = 1; i <= 24; i++){
            if (state.board[i] === null) emptyPositions.push(i);
        }
        return emptyPositions;
    }
    // Normal movement: adjacent empty neighbors
    const neighbors = ((_BOARD_NODES_pos = BOARD_NODES[pos]) === null || _BOARD_NODES_pos === void 0 ? void 0 : _BOARD_NODES_pos.neighbors) || [];
    return neighbors.filter((n)=>state.board[n] === null);
}
function hasLegalMoves(state, player) {
    if (state.phase[player] === "PLACEMENT") return true;
    for(let i = 1; i <= 24; i++){
        if (state.board[i] === player) {
            if (getLegalMovesForPosition(state, i).length > 0) return true;
        }
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameBoard",
    ()=>GameBoard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/engine.ts [app-client] (ecmascript)");
"use client";
;
;
function GameBoard({ state, onSelectNode, disabled = false, themeMode = "dark", size }) {
    const { board, currentPlayer, subState, selectedPos, activeMillLines } = state;
    const isLight = themeMode === "light";
    // Compute legal destination targets if a coin is selected
    const validTargets = selectedPos ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(state, selectedPos) : [];
    // Compute removable opponent coins if in REMOVAL state
    const opponent = currentPlayer === 1 ? 2 : 1;
    const removableCoins = subState === "REMOVAL" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovableCoins"])(board, opponent) : [];
    // Track & node colors
    const trackColor = isLight ? "#94a3b8" : "#334155";
    const nodeDefaultFill = isLight ? "#f8fafc" : "#0f172a";
    const nodeDefaultStroke = isLight ? "#cbd5e1" : "#475569";
    const nodeTextColor = isLight ? "#94a3b8" : "#64748b";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: size ? {
            width: `${size}px`,
            height: `${size}px`
        } : undefined,
        className: `relative w-full aspect-square mx-auto p-2 rounded-[8px] select-none flex items-center justify-center ${!size ? "max-w-[min(100%,45dvh,370px)]" : ""} ${isLight ? "bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "bg-[#0f172a]/95 border border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[8px] overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -top-10 -left-10 w-40 h-40 rounded-full blur-2xl transition-opacity ${isLight ? "bg-rose-400/8" : "bg-rose-500/10"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl transition-opacity ${isLight ? "bg-blue-400/8" : "bg-blue-500/10"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 100",
                className: "w-full h-full relative z-10",
                style: {
                    touchAction: "manipulation"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "coin-3d-shadow",
                                x: "-30%",
                                y: "-30%",
                                width: "160%",
                                height: "180%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                    dx: "0",
                                    dy: "1.4",
                                    stdDeviation: "0.9",
                                    floodColor: "#000000",
                                    floodOpacity: isLight ? "0.28" : "0.55"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "p1-coin-body",
                                cx: "36%",
                                cy: "32%",
                                r: "68%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#ff4d79"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#e11d48"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#881337"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "p2-coin-body",
                                cx: "36%",
                                cy: "32%",
                                r: "68%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#38bdf8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#0284c7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#075985"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "mill-beam-glow",
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "1.5",
                                    floodColor: "#f59e0b",
                                    floodOpacity: "0.9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "10,10 90,10 90,90 10,90",
                        fill: "none",
                        stroke: trackColor,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "24,24 76,24 76,76 24,76",
                        fill: "none",
                        stroke: trackColor,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "37,37 63,37 63,63 37,63",
                        fill: "none",
                        stroke: trackColor,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "50",
                        y1: "10",
                        x2: "50",
                        y2: "37",
                        stroke: trackColor,
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "50",
                        y1: "63",
                        x2: "50",
                        y2: "90",
                        stroke: trackColor,
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "10",
                        y1: "50",
                        x2: "37",
                        y2: "50",
                        stroke: trackColor,
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "63",
                        y1: "50",
                        x2: "90",
                        y2: "50",
                        stroke: trackColor,
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    activeMillLines.map((line, idx)=>{
                        const pStart = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][line[0]];
                        const pEnd = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][line[2]];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: pStart.x,
                            y1: pStart.y,
                            x2: pEnd.x,
                            y2: pEnd.y,
                            stroke: "#f59e0b",
                            strokeWidth: "2.8",
                            strokeLinecap: "round",
                            filter: "url(#mill-beam-glow)",
                            className: "animate-pulse"
                        }, `mill-line-${idx}`, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this);
                    }),
                    Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"]).map((node)=>{
                        const coin = board[node.id];
                        const isSelected = selectedPos === node.id;
                        const isValidTarget = validTargets.includes(node.id);
                        const isRemovable = removableCoins.includes(node.id);
                        const isMovableCoin = !disabled && subState === "NORMAL" && coin === currentPlayer && selectedPos === null && (state.phase[currentPlayer] === "MOVEMENT" || state.phase[currentPlayer] === "FLYING") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(state, node.id).length > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onClick: ()=>!disabled && onSelectNode(node.id),
                            className: "cursor-pointer transition-transform duration-150",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: "6.8",
                                    fill: "transparent",
                                    className: "cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                isMovableCoin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: "5.1",
                                    fill: "none",
                                    stroke: coin === 1 ? "#f43f5e" : "#38bdf8",
                                    strokeWidth: "1.2",
                                    strokeDasharray: "2 1.5",
                                    className: "animate-pulse opacity-90 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: "5.5",
                                    fill: "none",
                                    stroke: isLight ? "#2563eb" : "#38bdf8",
                                    strokeWidth: "1.4",
                                    className: "animate-ping opacity-75 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this),
                                isValidTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    className: "pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: "4.8",
                                            fill: isLight ? "#2563eb20" : "#38bdf820",
                                            stroke: isLight ? "#2563eb" : "#38bdf8",
                                            strokeWidth: "1.3",
                                            strokeDasharray: "1.8 1.4",
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: "1.6",
                                            fill: isLight ? "#2563eb" : "#38bdf8",
                                            className: "animate-ping opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                isRemovable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: "5.4",
                                    fill: "#f59e0b22",
                                    stroke: "#f59e0b",
                                    strokeWidth: "1.4",
                                    strokeDasharray: "2 1.2",
                                    className: "animate-pulse pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: node.x,
                                    cy: node.y,
                                    r: "3.2",
                                    fill: nodeDefaultFill,
                                    stroke: isSelected ? isLight ? "#2563eb" : "#38bdf8" : isRemovable ? "#f59e0b" : isValidTarget ? isLight ? "#2563eb" : "#38bdf8" : nodeDefaultStroke,
                                    strokeWidth: isSelected || isRemovable ? "1.4" : "1.0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                !coin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: node.x,
                                    y: node.y + 0.1,
                                    fontSize: "2.1",
                                    fontWeight: "600",
                                    fill: nodeTextColor,
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    className: "pointer-events-none select-none font-mono",
                                    children: node.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this),
                                coin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#coin-3d-shadow)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: "3.7",
                                            fill: coin === 1 ? "#9f1239" : "#0369a1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: "3.4",
                                            fill: `url(#${coin === 1 ? "p1" : "p2"}-coin-body)`,
                                            stroke: isSelected ? "#ffffff" : coin === 1 ? "#f43f5e" : "#38bdf8",
                                            strokeWidth: isSelected ? "0.9" : "0.4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: node.x - 0.9,
                                            cy: node.y - 1.1,
                                            rx: "1.4",
                                            ry: "0.8",
                                            fill: "#ffffff",
                                            opacity: "0.55",
                                            className: "pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: "1.2",
                                            fill: "none",
                                            stroke: "#ffffff",
                                            strokeWidth: "0.3",
                                            opacity: "0.35",
                                            className: "pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `node-${node.id}`, true, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = GameBoard;
const __TURBOPACK__default__export__ = GameBoard;
var _c;
__turbopack_context__.k.register(_c, "GameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerVersusHeader",
    ()=>PlayerVersusHeader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PlayerVersusHeader({ state, player1Name = "Player 1 (You)", player2Name = state.mode === "VS_AI" ? "Chinnu AI" : "Player 2", themeMode = "dark" }) {
    var _state_usedLines_, _state_usedLines, _state_usedLines_1, _state_usedLines1;
    const { currentPlayer, phase, winner, stats } = state;
    const isLight = themeMode === "light";
    const p1Stats = stats[1];
    const p2Stats = stats[2];
    // Calculate advantage ratio
    const p1TotalStrength = p1Stats.coinsOnBoard * 2 + p1Stats.millsFormed * 3 + p1Stats.coinsCaptured * 2;
    const p2TotalStrength = p2Stats.coinsOnBoard * 2 + p2Stats.millsFormed * 3 + p2Stats.coinsCaptured * 2;
    const totalWeight = Math.max(1, p1TotalStrength + p2TotalStrength);
    const p1AdvantagePct = Math.round(p1TotalStrength / totalWeight * 100);
    var _state_usedLines__length, _state_usedLines__length1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full rounded-[8px] border p-1.5 xs:p-2 space-y-1 xs:space-y-1.5 select-none ${isLight ? "bg-white/95 border-slate-200 shadow-2xs text-slate-800" : "bg-[#111827]/95 border-slate-800 shadow-xs text-slate-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 p-1.5 rounded-[6px] flex-1 transition-all ${currentPlayer === 1 && !winner ? isLight ? "bg-rose-50/80 border border-rose-200 shadow-2xs ring-1 ring-rose-500/20" : "bg-rose-950/20 border border-rose-900/50 shadow-2xs ring-1 ring-rose-500/30" : "border border-transparent opacity-85"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-[6px] bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-xs",
                                        children: "P1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    currentPlayer === 1 && !winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 border-2 border-white dark:border-slate-900 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-rose-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[11px] font-bold truncate",
                                                children: player1Name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 mt-0.5 text-[9.5px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`,
                                                children: phase[1] === "PLACEMENT" ? "DROP" : phase[1] === "FLYING" ? "FLY" : "SLIDE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 dark:text-slate-600",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-rose-600 dark:text-rose-400",
                                                children: phase[1] === "PLACEMENT" ? `${p1Stats.coinsToPlace} to drop` : `${p1Stats.coinsOnBoard} coins`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center shrink-0 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500",
                                children: "VS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[8.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-[4px] mt-0.5 transition-colors ${winner ? "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300" : currentPlayer === 1 ? "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-300" : "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"}`,
                                children: winner ? winner === "DRAW" ? "DRAW" : `P${winner} WON` : state.subState === "REMOVAL" ? `P${currentPlayer} CAPTURE` : phase[currentPlayer] === "PLACEMENT" ? `P${currentPlayer} DROP` : `P${currentPlayer} SLIDE`
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-end gap-2 p-1.5 rounded-[6px] flex-1 transition-all ${currentPlayer === 2 && !winner ? isLight ? "bg-blue-50/80 border border-blue-200 shadow-2xs ring-1 ring-blue-500/20" : "bg-blue-950/20 border border-blue-900/50 shadow-2xs ring-1 ring-blue-500/30" : "border border-transparent opacity-85"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[11px] font-bold truncate",
                                                children: player2Name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-blue-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end gap-1.5 mt-0.5 text-[9.5px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-blue-600 dark:text-blue-400",
                                                children: phase[2] === "PLACEMENT" ? `${p2Stats.coinsToPlace} to drop` : `${p2Stats.coinsOnBoard} coins`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 dark:text-slate-600",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`,
                                                children: phase[2] === "PLACEMENT" ? "DROP" : phase[2] === "FLYING" ? "FLY" : "SLIDE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-[6px] bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xs shadow-xs",
                                        children: state.mode === "VS_AI" ? "AI" : "P2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    currentPlayer === 2 && !winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pt-1.5 border-t flex items-center justify-between text-[10px] ${isLight ? "border-slate-100" : "border-slate-800/80"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-500 font-semibold",
                                title: "Scored lines used (max 16)",
                                children: [
                                    "★ ",
                                    (_state_usedLines__length = (_state_usedLines = state.usedLines) === null || _state_usedLines === void 0 ? void 0 : (_state_usedLines_ = _state_usedLines[1]) === null || _state_usedLines_ === void 0 ? void 0 : _state_usedLines_.length) !== null && _state_usedLines__length !== void 0 ? _state_usedLines__length : p1Stats.millsFormed,
                                    "/16"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${isLight ? "text-slate-600" : "text-slate-400"}`,
                                children: [
                                    "⚔ ",
                                    p1Stats.coinsCaptured
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-1 max-w-[130px] mx-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono font-bold text-rose-500",
                                children: [
                                    p1AdvantagePct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 h-1 rounded-full overflow-hidden flex ${isLight ? "bg-slate-200" : "bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-rose-500 transition-all duration-300",
                                        style: {
                                            width: `${p1AdvantagePct}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-blue-500 transition-all duration-300",
                                        style: {
                                            width: `${100 - p1AdvantagePct}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono font-bold text-blue-500",
                                children: [
                                    100 - p1AdvantagePct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${isLight ? "text-slate-600" : "text-slate-400"}`,
                                children: [
                                    "⚔ ",
                                    p2Stats.coinsCaptured
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-500 font-semibold",
                                title: "Scored lines used (max 16)",
                                children: [
                                    "★ ",
                                    (_state_usedLines__length1 = (_state_usedLines1 = state.usedLines) === null || _state_usedLines1 === void 0 ? void 0 : (_state_usedLines_1 = _state_usedLines1[2]) === null || _state_usedLines_1 === void 0 ? void 0 : _state_usedLines_1.length) !== null && _state_usedLines__length1 !== void 0 ? _state_usedLines__length1 : p2Stats.millsFormed,
                                    "/16"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = PlayerVersusHeader;
const __TURBOPACK__default__export__ = PlayerVersusHeader;
var _c;
__turbopack_context__.k.register(_c, "PlayerVersusHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameControls",
    ()=>GameControls,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CpuIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CpuIcon.js [app-client] (ecmascript)");
"use client";
;
;
function GameControls({ state, onRestart, onToggleMode, themeMode = "dark", hintNotice }) {
    const { currentPlayer, subState, phase, winner, mode } = state;
    const isLight = themeMode === "light";
    // Compute concise status guidance message
    let statusMessage = "";
    if (winner) {
        statusMessage = winner === "DRAW" ? "Match ended in a DRAW!" : `Victory! Player ${winner} wins the match!`;
    } else if (subState === "REMOVAL") {
        statusMessage = state.pendingRemovals > 1 ? `⚡ Double Mill! Player ${currentPlayer}, tap an opponent coin to capture (${state.pendingRemovals} captures remaining).` : `⚡ Mill Formed! Player ${currentPlayer}, tap an opponent coin to capture.`;
    } else if (phase[currentPlayer] === "PLACEMENT") {
        statusMessage = `Player ${currentPlayer}: Tap empty node to place coin (${state.stats[currentPlayer].coinsToPlace} left in hand).`;
    } else if (phase[currentPlayer] === "FLYING") {
        statusMessage = state.selectedPos ? `Flying Jump: Tap ANY open circle on the board!` : `Player ${currentPlayer} (Flying): Tap your coin, then jump anywhere.`;
    } else {
        statusMessage = state.selectedPos ? `Player ${currentPlayer}: Tap a connected glowing circle to move.` : `Slide Phase: Tap one of your coins to select & slide it.`;
    }
    const messageToDisplay = hintNotice || statusMessage;
    const isAlert = Boolean(hintNotice);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full rounded-[8px] border p-1.5 xs:p-2 space-y-1 select-none transition-colors ${isAlert ? isLight ? "bg-amber-50 border-amber-300 shadow-2xs text-amber-900" : "bg-amber-950/40 border-amber-600/60 shadow-xs text-amber-200" : isLight ? "bg-white/95 border-slate-200 shadow-2xs text-slate-800" : "bg-[#111827]/95 border-slate-800 shadow-xs text-slate-200"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 text-center py-0.5 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-2 h-2 rounded-full shrink-0 ${isAlert ? "bg-amber-500 animate-bounce" : winner ? "bg-amber-400 animate-ping" : subState === "REMOVAL" ? "bg-amber-400 animate-pulse" : currentPlayer === 1 ? "bg-rose-500" : "bg-blue-500"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[11px] font-semibold tracking-normal truncate ${isAlert ? "font-bold" : ""}`,
                        children: messageToDisplay
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 pt-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggleMode(mode === "VS_AI" ? "PASS_AND_PLAY" : "VS_AI"),
                        className: `flex-1 py-1.5 px-3 rounded-[6px] font-bold text-[11px] border flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer ${isLight ? "bg-slate-50/80 hover:bg-slate-100 text-slate-800 border-slate-200/90 shadow-2xs" : "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700/80 shadow-xs"}`,
                        children: [
                            mode === "VS_AI" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CpuIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CpuIcon"], {
                                size: 14,
                                className: "text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                size: 14,
                                className: "text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: mode === "VS_AI" ? "vs Chinnu AI" : "2 Players (Local)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRestart,
                        className: `py-1.5 px-3 rounded-[6px] font-bold text-[11px] border flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer ${isLight ? "bg-slate-50/80 hover:bg-slate-100 text-slate-800 border-slate-200/90 shadow-2xs" : "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700/80 shadow-xs"}`,
                        title: "Restart Match",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                size: 14,
                                className: "text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = GameControls;
const __TURBOPACK__default__export__ = GameControls;
var _c;
__turbopack_context__.k.register(_c, "GameControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomAdsBanner",
    ()=>BottomAdsBanner,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeOffIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PauseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PauseIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Maximize01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Maximize01Icon.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_VIDEO_ADS = [
    {
        id: "pingdart-cloud-ad",
        title: "PingDart Cloud Workspace",
        subtitle: "Real-time sync, WebRTC HD voice & instant game replays.",
        ctaText: "Get Free",
        ctaLink: "https://cloud.pingdart.com",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
        posterUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
        mediaType: "video"
    },
    {
        id: "pingdart-voice-ad",
        title: "Ping Tactical Voice Chat",
        subtitle: "Crystal clear in-game communication with zero lag.",
        ctaText: "Explore",
        ctaLink: "https://pingdart.com",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        posterUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        mediaType: "video"
    }
];
function BottomAdsBanner({ themeMode = "dark" }) {
    _s();
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ad, setAd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_VIDEO_ADS[0]);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVideoModalOpen, setIsVideoModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoError, setVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isLight = themeMode === "light";
    // Try fetching public banners from API if available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BottomAdsBanner.useEffect": ()=>{
            let isMounted = true;
            __turbopack_context__.A("[project]/src/services/api.ts [app-client] (ecmascript, async loader)").then({
                "BottomAdsBanner.useEffect": ({ api })=>api.get("/user/banners/public")
            }["BottomAdsBanner.useEffect"]).then({
                "BottomAdsBanner.useEffect": (res)=>{
                    var _res_data;
                    if (!isMounted) return;
                    if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.banners) && res.data.banners.length > 0) {
                        const videoBanner = res.data.banners.find({
                            "BottomAdsBanner.useEffect.videoBanner": (b)=>b.mediaType === "video" || typeof b.imageUrl === "string" && b.imageUrl.match(/\.(mp4|webm|mov)$/i)
                        }["BottomAdsBanner.useEffect.videoBanner"]);
                        if (videoBanner) {
                            setAd({
                                id: String(videoBanner.id || "api-banner"),
                                title: videoBanner.title || "PingDart Sponsored",
                                subtitle: videoBanner.subtitle || videoBanner.desc || "Experience the next level of gaming.",
                                ctaText: videoBanner.buttonText || "Learn More",
                                ctaLink: videoBanner.link || "https://pingdart.com",
                                videoUrl: videoBanner.imageUrl,
                                posterUrl: videoBanner.posterUrl || DEFAULT_VIDEO_ADS[0].posterUrl,
                                mediaType: "video"
                            });
                        }
                    }
                }
            }["BottomAdsBanner.useEffect"]).catch({
                "BottomAdsBanner.useEffect": ()=>{
                // Fallback to default video ads smoothly
                }
            }["BottomAdsBanner.useEffect"]);
            return ({
                "BottomAdsBanner.useEffect": ()=>{
                    isMounted = false;
                }
            })["BottomAdsBanner.useEffect"];
        }
    }["BottomAdsBanner.useEffect"], []);
    const toggleMute = (e)=>{
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    const togglePlay = (e)=>{
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().catch(()=>{});
                setIsPlaying(true);
            }
        }
    };
    const handleOpenLink = (e)=>{
        if (e) e.stopPropagation();
        if (ad.ctaLink) {
            window.open(ad.ctaLink, "_blank", "noopener,noreferrer");
        }
    };
    if (closed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-1 text-center select-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[10px] font-medium ${isLight ? "text-slate-400" : "text-slate-500"}`,
                children: "Ad closed • Ping Games Arcade"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full relative overflow-hidden rounded-[8px] border p-2.5 space-y-2 select-none ${isLight ? "bg-white/95 border-slate-200 shadow-2xs text-slate-800" : "bg-[#111827]/95 border-slate-800 shadow-xs text-slate-100"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[9px] font-bold uppercase tracking-wider ${isLight ? "text-slate-400" : "text-slate-500"}`,
                                        children: "Sponsored • Video Ad"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setClosed(true),
                                className: `p-1 rounded-[6px] transition-colors cursor-pointer ${isLight ? "text-slate-400 hover:text-slate-700 hover:bg-slate-100" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,
                                title: "Dismiss Ad",
                                "aria-label": "Dismiss Ad",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsVideoModalOpen(true),
                        className: "relative w-full h-32 xs:h-32 sm:h-36 rounded-[8px] overflow-hidden bg-black border border-slate-700/60 cursor-pointer group shadow-inner",
                        title: "Tap to expand video",
                        children: [
                            ad.mediaType === "video" && !videoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                src: ad.videoUrl,
                                poster: ad.posterUrl,
                                autoPlay: true,
                                loop: true,
                                muted: isMuted,
                                playsInline: true,
                                onError: ()=>setVideoError(true),
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: ad.posterUrl || DEFAULT_VIDEO_ADS[0].posterUrl,
                                alt: ad.title,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-black/60 backdrop-blur-md text-[9.5px] font-bold text-white/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Maximize01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Maximize01Icon"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Full Video"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 right-2 z-10 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: togglePlay,
                                        className: "p-1.5 rounded-[6px] bg-black/70 backdrop-blur-md text-white hover:bg-black/90 active:scale-90 transition-all cursor-pointer",
                                        title: isPlaying ? "Pause" : "Play",
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PauseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 217,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 217,
                                            columnNumber: 50
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: toggleMute,
                                        className: "px-2 py-1 rounded-[6px] bg-black/70 backdrop-blur-md text-white hover:bg-black/90 active:scale-90 transition-all cursor-pointer flex items-center gap-1 text-[10px] font-medium",
                                        title: isMuted ? "Unmute" : "Mute",
                                        children: [
                                            isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeOffIcon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                                lineNumber: 226,
                                                columnNumber: 26
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                                lineNumber: 226,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isMuted ? "Muted" : "Sound"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 pt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        onClick: handleOpenLink,
                                        className: `text-xs font-bold truncate cursor-pointer hover:underline ${isLight ? "text-slate-900" : "text-white"}`,
                                        children: ad.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] line-clamp-1 leading-snug mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`,
                                        children: ad.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleOpenLink,
                                className: "px-3.5 py-1.5 rounded-[6px] bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer shrink-0",
                                children: ad.ctaText
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            isVideoModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full max-w-sm rounded-[10px] overflow-hidden border shadow-2xl transition-all ${isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#111827] border-slate-800 text-white"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-inherit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            children: "Sponsored Video"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsVideoModalOpen(false),
                                    className: "p-1 rounded-[6px] text-slate-400 hover:text-white transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video bg-black w-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: modalVideoRef,
                                src: ad.videoUrl,
                                poster: ad.posterUrl,
                                autoPlay: true,
                                controls: true,
                                playsInline: true,
                                className: "w-full h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold",
                                            children: ad.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs mt-1 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`,
                                            children: ad.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleOpenLink,
                                            className: "flex-1 py-2 rounded-[8px] bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer",
                                            children: [
                                                ad.ctaText,
                                                " • Visit Sponsor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsVideoModalOpen(false),
                                            className: `py-2 px-3 rounded-[8px] border text-xs font-semibold cursor-pointer transition-colors ${isLight ? "border-slate-200 text-slate-700 hover:bg-slate-50" : "border-slate-700 text-slate-300 hover:bg-slate-800"}`,
                                            children: "Return"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                    lineNumber: 262,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(BottomAdsBanner, "QiX4anT9glDIicNl9inVs5vbBtM=");
_c = BottomAdsBanner;
const __TURBOPACK__default__export__ = BottomAdsBanner;
var _c;
__turbopack_context__.k.register(_c, "BottomAdsBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrategicMillGame",
    ()=>StrategicMillGame,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InformationCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Moon01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/components/GameBoard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$PlayerVersusHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/components/PlayerVersusHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$GameControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/components/GameControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$BottomAdsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/components/BottomAdsBanner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function StrategicMillGame({ onBack }) {
    _s();
    const { resolvedTheme, theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StrategicMillGame.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])("VS_AI")
    }["StrategicMillGame.useState"]);
    const [showRules, setShowRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hintNotice, setHintNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StrategicMillGame.useEffect": ()=>{
            if (!hintNotice) return;
            const t = setTimeout({
                "StrategicMillGame.useEffect.t": ()=>setHintNotice(null)
            }["StrategicMillGame.useEffect.t"], 3500);
            return ({
                "StrategicMillGame.useEffect": ()=>clearTimeout(t)
            })["StrategicMillGame.useEffect"];
        }
    }["StrategicMillGame.useEffect"], [
        hintNotice
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StrategicMillGame.useEffect": ()=>{
            // Explicitly hide the mobile bottom navigation bar while inside the game
            window.dispatchEvent(new CustomEvent("app:hide_bottom_nav", {
                detail: {
                    hide: true
                }
            }));
            if (typeof document !== "undefined") {
                document.body.classList.add("hide-bottom-bar");
            }
            return ({
                "StrategicMillGame.useEffect": ()=>{
                    // Restore bottom navigation when game unmounts
                    window.dispatchEvent(new CustomEvent("app:hide_bottom_nav", {
                        detail: {
                            hide: false
                        }
                    }));
                    if (typeof document !== "undefined") {
                        document.body.classList.remove("hide-bottom-bar");
                    }
                }
            })["StrategicMillGame.useEffect"];
        }
    }["StrategicMillGame.useEffect"], []);
    const handleBack = ()=>{
        window.dispatchEvent(new CustomEvent("app:hide_bottom_nav", {
            detail: {
                hide: false
            }
        }));
        if (typeof document !== "undefined") {
            document.body.classList.remove("hide-bottom-bar");
        }
        onBack === null || onBack === void 0 ? void 0 : onBack();
    };
    // Synchronously resolve theme without defaulting to dark during initial render
    const isLight = resolvedTheme === "light" || theme === "light" || !resolvedTheme && !theme && typeof document !== "undefined" && !document.documentElement.classList.contains("dark");
    const themeMode = isLight ? "light" : "dark";
    const handleToggleTheme = ()=>{
        setTheme(isLight ? "dark" : "light");
    };
    // Restart match
    const handleRestart = ()=>{
        setHintNotice(null);
        setGameState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])(gameState.mode));
    };
    // Toggle Mode (vs AI or 2 Players)
    const handleToggleMode = (newMode)=>{
        setHintNotice(null);
        const fresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])(newMode);
        setGameState(fresh);
    };
    // Atomic movement executor for both human and AI
    const executeMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StrategicMillGame.useCallback[executeMove]": (fromPos, toPos)=>{
            setGameState({
                "StrategicMillGame.useCallback[executeMove]": (prev)=>{
                    const { board, currentPlayer, stats, phase, usedLines } = prev;
                    const opponent = currentPlayer === 1 ? 2 : 1;
                    const legalMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(prev, fromPos);
                    if (!legalMoves.includes(toPos)) return prev;
                    // Move the coin
                    const newBoard = {
                        ...board,
                        [fromPos]: null,
                        [toPos]: currentPlayer
                    };
                    // Rule: Check for newly completed, previously unused lines
                    const newlyFormedLineIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNewlyFormedLines"])(newBoard, toPos, currentPlayer, usedLines);
                    const countNewLines = newlyFormedLineIds.length;
                    // Mark newly completed lines as used for currentPlayer
                    let updatedUsedLines = usedLines;
                    for (const lineId of newlyFormedLineIds){
                        updatedUsedLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markLineUsed"])(updatedUsedLines, currentPlayer, lineId);
                    }
                    const newStats = {
                        ...stats,
                        [currentPlayer]: {
                            ...stats[currentPlayer],
                            millsFormed: stats[currentPlayer].millsFormed + countNewLines
                        }
                    };
                    const opponentCoinsOnBoard = newStats[opponent].coinsOnBoard;
                    // User notification if reforming a previously used line
                    if (countNewLines === 0) {
                        const structuralMills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMillsForPosition"])(newBoard, toPos, currentPlayer);
                        if (structuralMills.length > 0) {
                            setHintNotice(`Line already used by Player ${currentPlayer}! Each line awards a removal only once per player.`);
                        }
                    }
                    if (countNewLines > 0 && opponentCoinsOnBoard > 0) {
                        return {
                            ...prev,
                            board: newBoard,
                            selectedPos: null,
                            subState: "REMOVAL",
                            pendingRemovals: countNewLines,
                            usedLines: updatedUsedLines,
                            stats: newStats,
                            activeMillLines: [
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                            ]
                        };
                    } else {
                        // Check if opponent is immobilized (stalemate)
                        let winner = null;
                        let gameOverReason = null;
                        const simulatedState = {
                            ...prev,
                            board: newBoard,
                            usedLines: updatedUsedLines
                        };
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasLegalMoves"])(simulatedState, opponent)) {
                            winner = currentPlayer;
                            gameOverReason = `Player ${opponent} has no legal moves (Stalemate).`;
                        }
                        return {
                            ...prev,
                            board: newBoard,
                            selectedPos: null,
                            currentPlayer: opponent,
                            subState: "NORMAL",
                            pendingRemovals: 0,
                            usedLines: updatedUsedLines,
                            stats: newStats,
                            winner: winner || prev.winner,
                            gameOverReason: gameOverReason || prev.gameOverReason,
                            activeMillLines: [
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                            ]
                        };
                    }
                }
            }["StrategicMillGame.useCallback[executeMove]"]);
        }
    }["StrategicMillGame.useCallback[executeMove]"], []);
    // Handle Board Click Interaction
    const handleNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StrategicMillGame.useCallback[handleNodeClick]": (pos)=>{
            if (gameState.winner) return;
            const { board, currentPlayer, subState, phase, selectedPos, stats } = gameState;
            const opponent = currentPlayer === 1 ? 2 : 1;
            // ── SUBSTATE: REMOVAL (Player just formed a mill and must remove opponent coin) ──
            if (subState === "REMOVAL") {
                const removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovableCoins"])(board, opponent);
                if (!removable.includes(pos)) {
                    if (board[pos] === currentPlayer) {
                        setHintNotice("You must capture an opponent coin, not your own!");
                    } else if (board[pos] === null) {
                        setHintNotice("Tap one of the glowing opponent coins to capture it!");
                    } else {
                        setHintNotice("This coin is protected in a mill! Pick an unprotected coin.");
                    }
                    return;
                }
                setHintNotice(null);
                // Apply removal
                const newBoard = {
                    ...board,
                    [pos]: null
                };
                const newStats = {
                    ...stats,
                    [currentPlayer]: {
                        ...stats[currentPlayer],
                        coinsCaptured: stats[currentPlayer].coinsCaptured + 1
                    },
                    [opponent]: {
                        ...stats[opponent],
                        coinsOnBoard: stats[opponent].coinsOnBoard - 1
                    }
                };
                // Check if opponent was reduced to flying (< 4) or lost (< 3)
                const opponentCoinsLeft = newStats[opponent].coinsOnBoard;
                const opponentUnplaced = newStats[opponent].coinsToPlace;
                const newPhase = {
                    ...phase
                };
                let winner = null;
                let gameOverReason = null;
                if (opponentUnplaced === 0) {
                    if (opponentCoinsLeft < 3) {
                        winner = currentPlayer;
                        gameOverReason = `Player ${opponent} has fewer than 3 coins left.`;
                    } else if (opponentCoinsLeft === 3) {
                        newPhase[opponent] = "FLYING";
                    }
                }
                const remainingRemovals = (gameState.pendingRemovals || 1) - 1;
                if (!winner && remainingRemovals > 0 && opponentCoinsLeft > 0) {
                    // More removals pending in this turn (e.g. cross-mill)
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                board: newBoard,
                                pendingRemovals: remainingRemovals,
                                stats: newStats,
                                phase: newPhase,
                                activeMillLines: [
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                                ]
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                } else {
                    // All pending removals executed, switch turn back to opponent
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                board: newBoard,
                                currentPlayer: opponent,
                                subState: "NORMAL",
                                pendingRemovals: 0,
                                selectedPos: null,
                                phase: newPhase,
                                stats: newStats,
                                winner: winner || prev.winner,
                                gameOverReason: gameOverReason || prev.gameOverReason,
                                activeMillLines: [
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                                ]
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                }
                return;
            }
            // ── PHASE 1: PLACEMENT ──
            if (phase[currentPlayer] === "PLACEMENT") {
                if (board[pos] !== null) {
                    setHintNotice("That node is already occupied! Tap an empty circle.");
                    return;
                }
                setHintNotice(null);
                const newBoard = {
                    ...board,
                    [pos]: currentPlayer
                };
                const unplacedLeft = stats[currentPlayer].coinsToPlace - 1;
                const newCoinsOnBoard = stats[currentPlayer].coinsOnBoard + 1;
                // Rule: Check if new eligible mill was formed by this drop
                const newlyFormedLineIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNewlyFormedLines"])(newBoard, pos, currentPlayer, gameState.usedLines);
                const countNewLines = newlyFormedLineIds.length;
                // Mark lines as used for currentPlayer
                let updatedUsedLines = gameState.usedLines;
                for (const lineId of newlyFormedLineIds){
                    updatedUsedLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markLineUsed"])(updatedUsedLines, currentPlayer, lineId);
                }
                const newStats = {
                    ...stats,
                    [currentPlayer]: {
                        ...stats[currentPlayer],
                        coinsToPlace: unplacedLeft,
                        coinsOnBoard: newCoinsOnBoard,
                        millsFormed: stats[currentPlayer].millsFormed + countNewLines
                    }
                };
                const newPhase = {
                    ...phase
                };
                // Check if current player completed all placement coins
                if (unplacedLeft === 0) {
                    newPhase[currentPlayer] = "MOVEMENT";
                }
                const opponentCoinsOnBoard = newStats[opponent].coinsOnBoard;
                if (countNewLines === 0) {
                    const structuralMills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMillsForPosition"])(newBoard, pos, currentPlayer);
                    if (structuralMills.length > 0) {
                        setHintNotice(`Line already used by Player ${currentPlayer}! Each line awards a removal only once per player.`);
                    }
                }
                if (countNewLines > 0 && opponentCoinsOnBoard > 0) {
                    // Enter REMOVAL substate (turn remains with currentPlayer to pick removals)
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                board: newBoard,
                                stats: newStats,
                                phase: newPhase,
                                subState: "REMOVAL",
                                pendingRemovals: countNewLines,
                                usedLines: updatedUsedLines,
                                activeMillLines: [
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                                ]
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                } else {
                    // Switch turn to opponent
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                board: newBoard,
                                currentPlayer: opponent,
                                stats: newStats,
                                phase: newPhase,
                                subState: "NORMAL",
                                pendingRemovals: 0,
                                usedLines: updatedUsedLines,
                                activeMillLines: [
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 1),
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllMillsForPlayer"])(newBoard, 2)
                                ]
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                }
                return;
            }
            // ── PHASE 2 & 3: MOVEMENT & FLYING ──
            if (selectedPos === null) {
                // Tapped empty spot when no coin is selected
                if (board[pos] === null) {
                    setHintNotice("All coins are placed! Tap one of your coins first to slide it.");
                    return;
                }
                // Tapped opponent's coin
                if (board[pos] === opponent) {
                    setHintNotice("That is your opponent's coin. Tap one of your own coins!");
                    return;
                }
                // Select own coin to move
                if (board[pos] === currentPlayer) {
                    const legalMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(gameState, pos);
                    if (legalMoves.length === 0) {
                        setHintNotice("This coin is trapped (no open adjacent paths). Select another coin.");
                    } else {
                        setHintNotice(null);
                    }
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                selectedPos: pos
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                }
            } else {
                // Destination or re-selection clicked
                if (pos === selectedPos) {
                    // Deselect
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                selectedPos: null
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                    setHintNotice(null);
                    return;
                }
                // If clicking another of own coins, re-select it
                if (board[pos] === currentPlayer) {
                    const legalMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(gameState, pos);
                    if (legalMoves.length === 0) {
                        setHintNotice("This coin is trapped (no open adjacent paths). Select another coin.");
                    } else {
                        setHintNotice(null);
                    }
                    setGameState({
                        "StrategicMillGame.useCallback[handleNodeClick]": (prev)=>({
                                ...prev,
                                selectedPos: pos
                            })
                    }["StrategicMillGame.useCallback[handleNodeClick]"]);
                    return;
                }
                // Validate legal move destination
                const legalMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(gameState, selectedPos);
                if (!legalMoves.includes(pos)) {
                    setHintNotice(phase[currentPlayer] === "FLYING" ? "Choose an open circle to jump to!" : "Can only slide along connected paths to an open circle!");
                    return;
                }
                setHintNotice(null);
                executeMove(selectedPos, pos);
            }
        }
    }["StrategicMillGame.useCallback[handleNodeClick]"], [
        gameState,
        executeMove
    ]);
    // ── AI Automaton (Player 2) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StrategicMillGame.useEffect": ()=>{
            if (gameState.mode !== "VS_AI" || gameState.currentPlayer !== 2 || gameState.winner) {
                return;
            }
            const timer = setTimeout({
                "StrategicMillGame.useEffect.timer": ()=>{
                    const { board, subState, phase, usedLines } = gameState;
                    // 1. AI Removal
                    if (subState === "REMOVAL") {
                        const removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovableCoins"])(board, 1);
                        if (removable.length > 0) {
                            const chosen = removable.sort({
                                "StrategicMillGame.useEffect.timer": (a, b)=>{
                                    var _BOARD_NODES_b, _BOARD_NODES_a;
                                    return (((_BOARD_NODES_b = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][b]) === null || _BOARD_NODES_b === void 0 ? void 0 : _BOARD_NODES_b.neighbors.length) || 0) - (((_BOARD_NODES_a = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][a]) === null || _BOARD_NODES_a === void 0 ? void 0 : _BOARD_NODES_a.neighbors.length) || 0);
                                }
                            }["StrategicMillGame.useEffect.timer"])[0];
                            handleNodeClick(chosen);
                        }
                        return;
                    }
                    // 2. AI Placement
                    if (phase[2] === "PLACEMENT") {
                        const emptyNodes = Object.keys(board).map(Number).filter({
                            "StrategicMillGame.useEffect.timer.emptyNodes": (id)=>board[id] === null
                        }["StrategicMillGame.useEffect.timer.emptyNodes"]);
                        if (emptyNodes.length > 0) {
                            // Form mill if possible (must be eligible and unused for AI!)
                            let bestNode = emptyNodes.find({
                                "StrategicMillGame.useEffect.timer.bestNode": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNewlyFormedLines"])({
                                        ...board,
                                        [id]: 2
                                    }, id, 2, usedLines).length > 0
                            }["StrategicMillGame.useEffect.timer.bestNode"]);
                            // Block human mill if possible (human must still be eligible to score it!)
                            if (!bestNode) {
                                bestNode = emptyNodes.find({
                                    "StrategicMillGame.useEffect.timer": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNewlyFormedLines"])({
                                            ...board,
                                            [id]: 1
                                        }, id, 1, usedLines).length > 0
                                }["StrategicMillGame.useEffect.timer"]);
                            }
                            // Pick node with most strategic connections
                            if (!bestNode) {
                                bestNode = emptyNodes.sort({
                                    "StrategicMillGame.useEffect.timer": (a, b)=>{
                                        var _BOARD_NODES_b, _BOARD_NODES_a;
                                        return (((_BOARD_NODES_b = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][b]) === null || _BOARD_NODES_b === void 0 ? void 0 : _BOARD_NODES_b.neighbors.length) || 0) - (((_BOARD_NODES_a = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_NODES"][a]) === null || _BOARD_NODES_a === void 0 ? void 0 : _BOARD_NODES_a.neighbors.length) || 0);
                                    }
                                }["StrategicMillGame.useEffect.timer"])[0];
                            }
                            handleNodeClick(bestNode);
                        }
                        return;
                    }
                    // 3. AI Movement / Flying Phase
                    const aiCoins = Object.keys(board).map(Number).filter({
                        "StrategicMillGame.useEffect.timer.aiCoins": (id)=>board[id] === 2
                    }["StrategicMillGame.useEffect.timer.aiCoins"]);
                    const allMoves = [];
                    for (const coin of aiCoins){
                        const legal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegalMovesForPosition"])(gameState, coin);
                        for (const target of legal){
                            const tempBoard = {
                                ...board,
                                [coin]: null,
                                [target]: 2
                            };
                            const formsMill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNewlyFormedLines"])(tempBoard, target, 2, usedLines).length > 0;
                            allMoves.push({
                                from: coin,
                                to: target,
                                formsMill
                            });
                        }
                    }
                    if (allMoves.length > 0) {
                        // Prioritize moves that form a mill
                        const millMove = allMoves.find({
                            "StrategicMillGame.useEffect.timer.millMove": (m)=>m.formsMill
                        }["StrategicMillGame.useEffect.timer.millMove"]);
                        const chosenMove = millMove || allMoves[Math.floor(Math.random() * allMoves.length)];
                        // Visually indicate selection for 300ms so human sees AI's intention
                        setGameState({
                            "StrategicMillGame.useEffect.timer": (prev)=>({
                                    ...prev,
                                    selectedPos: chosenMove.from
                                })
                        }["StrategicMillGame.useEffect.timer"]);
                        setTimeout({
                            "StrategicMillGame.useEffect.timer": ()=>{
                                executeMove(chosenMove.from, chosenMove.to);
                            }
                        }["StrategicMillGame.useEffect.timer"], 350);
                    }
                }
            }["StrategicMillGame.useEffect.timer"], 500);
            return ({
                "StrategicMillGame.useEffect": ()=>clearTimeout(timer)
            })["StrategicMillGame.useEffect"];
        }
    }["StrategicMillGame.useEffect"], [
        gameState,
        handleNodeClick,
        executeMove
    ]);
    return /* Full-screen fixed overlay covering the app to hide the bottom navigation menu */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex flex-col w-full h-full select-none overflow-y-auto no-scrollbar scrollbar-hide [&::-webkit-scrollbar]:hidden bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white",
        style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-lg px-3.5 pt-[calc(0rem+env(safe-area-inset-top,10px))] pb-2.5 shrink-0 sticky top-0 z-40 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 -right-6 w-36 h-36 rounded-full bg-white/10 blur-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-black/10 blur-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBack,
                                        className: "p-1.5 -ml-1 text-white/90 hover:text-white rounded-[8px] hover:bg-white/15 active:scale-95 transition-all cursor-pointer",
                                        "aria-label": "Back to Games",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 flex items-center justify-center shadow-xs shrink-0 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/strategic_mill_3d.png",
                                                    alt: "Strategic Mill",
                                                    className: "w-full h-full object-cover rounded-[6px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-base font-black tracking-wider uppercase leading-none text-white",
                                                        children: "Strategic Mill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-white/75 font-bold uppercase tracking-wider mt-0.5",
                                                        children: "24-Point Tactical Board"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                                lineNumber: 554,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleToggleTheme,
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer",
                                        title: `Switch to ${isLight ? "Dark" : "Light"} Mode`,
                                        "aria-label": "Toggle Theme",
                                        children: isLight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Moon01Icon"], {
                                            size: 16,
                                            className: "text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                            size: 16,
                                            className: "text-amber-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowRules(true),
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer",
                                        title: "Game Rules",
                                        "aria-label": "Game Rules",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-extrabold px-2.5 py-1 rounded-[6px] bg-white/20 backdrop-blur-md border border-white/25 uppercase tracking-wide text-white hidden xs:inline-block",
                                        children: "Tactical"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-h-0 flex flex-col items-center justify-between p-2 xs:p-2.5 max-w-md mx-auto w-full gap-1.5 pb-[max(calc(env(safe-area-inset-bottom,0px)+0.4rem),0.6rem)] no-scrollbar scrollbar-hide [&::-webkit-scrollbar]:hidden overflow-y-auto",
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameBoard"], {
                            state: gameState,
                            onSelectNode: handleNodeClick,
                            disabled: gameState.mode === "VS_AI" && gameState.currentPlayer === 2,
                            themeMode: themeMode
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 609,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$PlayerVersusHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerVersusHeader"], {
                            state: gameState,
                            themeMode: themeMode
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 618,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$GameControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameControls"], {
                            state: gameState,
                            onRestart: handleRestart,
                            onToggleMode: handleToggleMode,
                            themeMode: themeMode,
                            hintNotice: hintNotice
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full pt-0.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$components$2f$BottomAdsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomAdsBanner"], {
                            themeMode: themeMode
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            showRules && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-[10px] p-5 space-y-3.5 text-xs border shadow-2xl transition-colors bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-black text-slate-900 dark:text-white",
                            children: "How to Play Strategic Mill"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-rose-500",
                                            children: "1. Placement Phase:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this),
                                        " Each player drops 9 coins onto vacant board nodes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-amber-500",
                                            children: "2. Form Mills (One-Time Line Usage):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this),
                                        " Align 3 coins in a row to complete a winning line and capture 1 opponent coin. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Each player can use each winning line only once per game"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 651,
                                            columnNumber: 177
                                        }, this),
                                        ". Breaking and reforming an already used line awards no removal. The opponent maintains an independent usage record and can still use that same line once."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                    lineNumber: 650,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-cyan-500",
                                            children: "3. Movement Phase:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this),
                                        " Slide coins to adjacent vacant nodes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-pink-500",
                                            children: "4. Flying Phase:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                            lineNumber: 657,
                                            columnNumber: 17
                                        }, this),
                                        " When reduced to 3 coins, you can jump to any open node!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                                    lineNumber: 656,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowRules(false),
                            className: "w-full py-2.5 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white cursor-pointer shadow-md shadow-blue-500/20 active:scale-95 transition-all",
                            children: "Got it"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                            lineNumber: 660,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                    lineNumber: 642,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
                lineNumber: 641,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx",
        lineNumber: 518,
        columnNumber: 5
    }, this);
}
_s(StrategicMillGame, "IQMZBvtQl3vTdygiF4Q8mf31NN4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = StrategicMillGame;
const __TURBOPACK__default__export__ = StrategicMillGame;
var _c;
__turbopack_context__.k.register(_c, "StrategicMillGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/GamesScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GamesScreen",
    ()=>GamesScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GameController01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/GameController01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FireIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FireIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$StrategicMillGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/games/strategic-mill/StrategicMillGame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StrategicMillIcon({ className = "w-6 h-6", size }) {
    const s = size ? `${size}px` : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        style: s ? {
            width: s,
            height: s
        } : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "mill-p1-glow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "0",
                            dy: "0",
                            stdDeviation: "1.2",
                            floodColor: "#ff3366",
                            floodOpacity: "0.9"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "mill-p2-glow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "0",
                            dy: "0",
                            stdDeviation: "1.2",
                            floodColor: "#00d2ff",
                            floodOpacity: "0.9"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "3.5",
                width: "25",
                height: "25",
                rx: "1.5",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "8",
                width: "16",
                height: "16",
                rx: "1.2",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "12.5",
                y: "12.5",
                width: "7",
                height: "7",
                rx: "0.8",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "3.5",
                x2: "16",
                y2: "12.5",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "19.5",
                x2: "16",
                y2: "28.5",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3.5",
                y1: "16",
                x2: "12.5",
                y2: "16",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19.5",
                y1: "16",
                x2: "28.5",
                y2: "16",
                stroke: "#253555",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "3.5",
                cy: "3.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "3.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "8",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "8",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12.5",
                cy: "19.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19.5",
                cy: "19.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19.5",
                cy: "16",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "16",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "24",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "3.5",
                cy: "28.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "28.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28.5",
                cy: "28.5",
                r: "1.3",
                fill: "#0e172a",
                stroke: "#334d77",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "3.5",
                cy: "16",
                r: "2.2",
                fill: "#00d2ff",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p2-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12.5",
                cy: "12.5",
                r: "2.2",
                fill: "#00d2ff",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p2-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28.5",
                cy: "16",
                r: "2.2",
                fill: "#00d2ff",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p2-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "2.2",
                fill: "#00d2ff",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p2-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28.5",
                cy: "3.5",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "12.5",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19.5",
                cy: "12.5",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "16",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12.5",
                cy: "16",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "24",
                r: "2.2",
                fill: "#ff3366",
                stroke: "#ffffff",
                strokeWidth: "0.8",
                filter: "url(#mill-p1-glow)"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = StrategicMillIcon;
const FEATURED_GAMES = [
    {
        id: "strategic-mill",
        title: "Strategic Mill Game",
        category: "Multiplayer",
        description: "Align 3 coins on the 24-point concentric board to form mills and eliminate opponent pieces.",
        players: "1-2 Players",
        rating: 4.9,
        badge: "Popular",
        gradient: "from-slate-900 via-indigo-950 to-blue-900",
        iconBg: "bg-cyan-500/20 text-cyan-400",
        image: "/images/strategic_mill_3d.png"
    },
    {
        id: "wordle-challenge",
        title: "Word Scramble",
        category: "Puzzle",
        description: "Guess the mystery words and test your daily vocabulary.",
        players: "Solo",
        rating: 4.9,
        badge: "Trending",
        gradient: "from-emerald-600 to-teal-600",
        iconBg: "bg-emerald-500/20 text-emerald-400"
    },
    {
        id: "speed-runner",
        title: "Neon Runner",
        category: "Action",
        description: "Dash and dodge cyber obstacles to climb the high score board.",
        players: "Arcade",
        rating: 4.7,
        badge: "New",
        gradient: "from-purple-600 to-pink-600",
        iconBg: "bg-purple-500/20 text-purple-400"
    },
    {
        id: "trivia-master",
        title: "Trivia Ping",
        category: "Multiplayer",
        description: "Compete with friends in general knowledge and pop culture rounds.",
        players: "1-4 Players",
        rating: 4.6,
        badge: "Coming Soon",
        gradient: "from-amber-600 to-orange-600",
        iconBg: "bg-amber-500/20 text-amber-400"
    },
    {
        id: "chess-blitz",
        title: "Chess Blitz",
        category: "Puzzle",
        description: "Speed chess matches with built-in chat and tournament rooms.",
        players: "2 Players",
        rating: 4.9,
        badge: "Coming Soon",
        gradient: "from-slate-700 to-slate-900",
        iconBg: "bg-slate-500/20 text-slate-300"
    },
    {
        id: "block-puzzle",
        title: "Block Clash 2048",
        category: "Casual",
        description: "Slide and merge numbers to hit the 2048 high-score milestone.",
        players: "Solo",
        rating: 4.7,
        badge: "Popular",
        gradient: "from-indigo-600 to-violet-600",
        iconBg: "bg-indigo-500/20 text-indigo-400"
    }
];
const CATEGORIES = [
    "All",
    "Multiplayer",
    "Puzzle",
    "Casual",
    "Action"
];
function GamesScreen({ onBack }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedGame, setSelectedGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeGameId, setActiveGameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleBack = ()=>{
        if (activeGameId) {
            setActiveGameId(null);
            return;
        }
        if (selectedGame) {
            setSelectedGame(null);
            return;
        }
        if (onBack) {
            onBack();
        } else if ("object" !== "undefined" && window.history.length > 1) {
            window.history.back();
        }
    };
    if (activeGameId === "strategic-mill") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$games$2f$strategic$2d$mill$2f$StrategicMillGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrategicMillGame"], {
            onBack: ()=>setActiveGameId(null)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
            lineNumber: 193,
            columnNumber: 12
        }, this);
    }
    const filteredGames = FEATURED_GAMES.filter((game)=>{
        const matchesCategory = activeCategory === "All" || game.category === activeCategory;
        const matchesQuery = !searchQuery.trim() ? true : game.title.toLowerCase().includes(searchQuery.toLowerCase()) || game.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 h-full w-full bg-slate-50 dark:bg-[#0b141a] select-none overflow-hidden",
        children: [
            isNative ? /* Native Header with safe-area */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-lg px-4 pt-[calc(0.5rem+env(safe-area-inset-top,0px))] pb-4 shrink-0 sticky top-0 z-30 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 -right-6 w-36 h-36 rounded-full bg-white/10 blur-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-black/10 blur-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBack,
                                        className: "p-1.5 -ml-1 text-white/90 hover:text-white rounded-[8px] active:scale-95 transition-all",
                                        "aria-label": "Back",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-[8px] bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GameController01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameController01Icon"], {
                                                    size: 18,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-base font-black tracking-wider uppercase leading-none",
                                                        children: "Games Hub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-white/75 font-medium mt-0.5",
                                                        children: "Play with Ping contacts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-extrabold px-2.5 py-1 rounded-[6px] bg-white/20 backdrop-blur-md border border-white/25 uppercase tracking-wide",
                                children: "Arcade"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this) : /* Web / Desktop Header */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 py-3.5 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 shrink-0 sticky top-0 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBack,
                                className: "p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-[8px] hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all",
                                "aria-label": "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-[8px] bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GameController01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameController01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold text-slate-900 dark:text-white leading-tight",
                                        children: "Games & Arcade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "Play quick casual games with friends"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-[8px] border border-blue-200 dark:border-blue-900/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Multiplayer Beta"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-5 ${isNative || isMobile ? "pb-[max(calc(env(safe-area-inset-bottom,0px)+5.5rem),6rem)]" : "pb-8"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 px-3.5 py-2.5 bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px] shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                size: 16,
                                className: "text-slate-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search games, puzzles or challenges...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "flex-1 bg-transparent border-none outline-none text-xs font-medium text-slate-900 dark:text-white placeholder:text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchQuery(""),
                                className: "w-5 h-5 rounded-[6px] bg-slate-200 dark:bg-slate-700 text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center text-xs transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-[10px] bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 p-5 text-white overflow-hidden shadow-lg shadow-indigo-900/30 border border-indigo-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-8 -bottom-10 w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-[12px] bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center p-0.5 shrink-0 shadow-lg shadow-cyan-500/20 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/strategic_mill_3d.png",
                                                    alt: "Strategic Mill Game",
                                                    className: "w-full h-full object-cover rounded-[10px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 max-w-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[6px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FireIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FireIcon"], {
                                                                size: 12,
                                                                className: "text-amber-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Featured Strategy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-black tracking-tight text-white",
                                                        children: "Strategic Mill Game"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-300 leading-relaxed font-medium",
                                                        children: "Align 3 coins on the 24-point concentric board to form mills and capture opponent pieces."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveGameId("strategic-mill"),
                                        className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs shadow-md shadow-cyan-500/20 active:scale-95 transition-all shrink-0 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                size: 16,
                                                className: "fill-slate-950 text-slate-950"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Play Instant"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5",
                        children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(cat),
                                className: `px-4 py-2 rounded-[8px] text-xs font-bold transition-all shrink-0 cursor-pointer ${activeCategory === cat ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm scale-[1.02]" : "bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400",
                                        children: [
                                            activeCategory === "All" ? "Popular Games" : `${activeCategory} Games`,
                                            " (",
                                            filteredGames.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold text-slate-400",
                                        children: "More coming soon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5",
                                children: filteredGames.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedGame(game),
                                        className: "group relative flex flex-col justify-between p-4 bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px] hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-md transition-all cursor-pointer active:scale-[0.99]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-12 h-12 rounded-[8px] bg-gradient-to-br ${game.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden ${game.image ? "p-0.5 border border-cyan-500/40 shadow-cyan-500/20" : ""}`,
                                                                children: game.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: game.image,
                                                                    alt: game.title,
                                                                    className: "w-full h-full object-cover rounded-[6px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GameController01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameController01Icon"], {
                                                                    size: 24
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, this),
                                                            game.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-extrabold px-2 py-0.5 rounded-[6px] uppercase tracking-wider ${game.badge === "Trending" ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40" : game.badge === "Popular" ? "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40" : game.badge === "New" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`,
                                                                children: game.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                                                children: game.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed",
                                                                children: game.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                                size: 13,
                                                                className: "text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, this),
                                                            game.players
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-amber-500 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                size: 12,
                                                                className: "fill-amber-400 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 21
                                                            }, this),
                                                            game.rating
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, game.id, true, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            selectedGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm bg-white dark:bg-[#111827] rounded-[10px] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 animate-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-16 h-16 rounded-[10px] bg-gradient-to-br ${selectedGame.gradient} text-white flex items-center justify-center shadow-md overflow-hidden ${selectedGame.image ? "p-0.5 border border-cyan-500/40 shadow-cyan-500/20" : ""}`,
                                    children: selectedGame.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selectedGame.image,
                                        alt: selectedGame.title,
                                        className: "w-full h-full object-cover rounded-[8px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 423,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GameController01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameController01Icon"], {
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 429,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedGame(null),
                                    className: "w-8 h-8 rounded-[8px] bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-black text-slate-900 dark:text-white",
                                            children: selectedGame.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this),
                                        selectedGame.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-extrabold px-2 py-0.5 rounded-[6px] bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400",
                                            children: selectedGame.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 444,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed",
                                    children: selectedGame.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-[8px] bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 flex items-center justify-around text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-bold text-slate-400 uppercase",
                                            children: "Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5",
                                            children: selectedGame.players
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-200 dark:bg-slate-800"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-bold text-slate-400 uppercase",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5",
                                            children: selectedGame.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-200 dark:bg-slate-800"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-bold text-slate-400 uppercase",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-extrabold text-amber-500 mt-0.5",
                                            children: [
                                                "★ ",
                                                selectedGame.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if ((selectedGame === null || selectedGame === void 0 ? void 0 : selectedGame.id) === "strategic-mill") {
                                            setActiveGameId("strategic-mill");
                                            setSelectedGame(null);
                                        } else {
                                            setSelectedGame(null);
                                        }
                                    },
                                    className: "w-full py-3.5 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Launch Game"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedGame(null),
                                    className: "w-full py-2.5 rounded-[8px] text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs transition-colors cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
                lineNumber: 418,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/GamesScreen.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(GamesScreen, "dZNnoJ0BloiSE48KBve3HsDAx3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = GamesScreen;
const __TURBOPACK__default__export__ = GamesScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "StrategicMillIcon");
__turbopack_context__.k.register(_c1, "GamesScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_be0552b5._.js.map