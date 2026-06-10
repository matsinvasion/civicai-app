module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/artifacts/frontend/components/LandingScreen.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingScreen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function LandingScreen({ onSelectAgency }) {
    const agencies = [
        {
            id: "URSB",
            name: "URSB",
            fullName: "Uganda Registration Services Bureau",
            luganda: "Kwandikisa Bizinesi",
            description: "Business registration & company search",
            icon: "🏢",
            color: "#1B4332"
        },
        {
            id: "URA",
            name: "URA",
            fullName: "Uganda Revenue Authority",
            luganda: "Musolo",
            description: "Tax, TIN registration & tax filing",
            icon: "🧾",
            color: "#1A3A5C"
        },
        {
            id: "KCCA",
            name: "KCCA",
            fullName: "Kampala Capital City Authority",
            luganda: "Gavumenti ya Kampala",
            description: "Trading licences & city permits",
            icon: "🏙️",
            color: "#3B1F5E"
        },
        {
            id: "NSSF",
            name: "NSSF",
            fullName: "National Social Security Fund",
            luganda: "Savings zo za Emikolo",
            description: "Social security & retirement savings",
            icon: "🛡️",
            color: "#7A2020"
        },
        {
            id: "MoIA",
            name: "MoIA",
            fullName: "Ministry of Internal Affairs",
            luganda: "Gavumenti y'Embeera ez'Omunda",
            description: "Passports, national IDs & visas",
            icon: "🪪",
            color: "#4A3000"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.logoRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: styles.logoIcon,
                                children: "🇺🇬"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: styles.appName,
                                children: "CivicAI Uganda"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: styles.tagline,
                        children: "Your guide to government services"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: styles.taglineLuganda,
                        children: "Omuyambi wo mu bifo bya gavumenti"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.promptSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: styles.promptText,
                        children: "Select a service to get started"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: styles.promptLuganda,
                        children: "Londa essimu gy'oyagala obwereze"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.agencyGrid,
                children: agencies.map((agency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        style: {
                            ...styles.agencyCard,
                            borderLeft: `4px solid ${agency.color}`
                        },
                        onClick: ()=>onSelectAgency(agency),
                        onMouseEnter: (e)=>e.currentTarget.style.transform = "translateY(-2px)",
                        onMouseLeave: (e)=>e.currentTarget.style.transform = "translateY(0)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.cardTop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: styles.agencyIcon,
                                        children: agency.icon
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.agencyName,
                                                children: agency.name
                                            }, void 0, false, {
                                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.agencyFullName,
                                                children: agency.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.agencyDescription,
                                children: agency.description
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.agencyLuganda,
                                children: agency.luganda
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, agency.id, true, {
                        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    style: styles.footerText,
                    children: "ℹ️ CivicAI provides guidance based on publicly available government information. Always verify with the relevant agency before taking action."
                }, void 0, false, {
                    fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/artifacts/frontend/components/LandingScreen.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: "0 0 40px 0"
    },
    header: {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "40px 24px 32px",
        textAlign: "center"
    },
    logoRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        marginBottom: "12px"
    },
    logoIcon: {
        fontSize: "32px"
    },
    appName: {
        fontSize: "28px",
        fontWeight: "700",
        margin: 0,
        letterSpacing: "-0.5px"
    },
    tagline: {
        fontSize: "16px",
        color: "#CCCCCC",
        margin: "0 0 4px 0"
    },
    taglineLuganda: {
        fontSize: "13px",
        color: "#888888",
        margin: 0,
        fontStyle: "italic"
    },
    promptSection: {
        textAlign: "center",
        padding: "28px 24px 8px"
    },
    promptText: {
        fontSize: "17px",
        fontWeight: "600",
        color: "#111111",
        margin: "0 0 4px 0"
    },
    promptLuganda: {
        fontSize: "13px",
        color: "#666666",
        margin: 0,
        fontStyle: "italic"
    },
    agencyGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px 24px",
        maxWidth: "600px",
        margin: "0 auto"
    },
    agencyCard: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "16px 18px",
        cursor: "pointer",
        textAlign: "left",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    },
    cardTop: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "8px"
    },
    agencyIcon: {
        fontSize: "28px"
    },
    agencyName: {
        fontSize: "16px",
        fontWeight: "700",
        color: "#111111"
    },
    agencyFullName: {
        fontSize: "12px",
        color: "#666666",
        marginTop: "1px"
    },
    agencyDescription: {
        fontSize: "13px",
        color: "#444444",
        marginBottom: "4px"
    },
    agencyLuganda: {
        fontSize: "11px",
        color: "#888888",
        fontStyle: "italic"
    },
    footer: {
        maxWidth: "600px",
        margin: "8px auto 0",
        padding: "0 24px"
    },
    footerText: {
        fontSize: "11px",
        color: "#888888",
        textAlign: "center",
        lineHeight: "1.6"
    }
};
}),
"[project]/artifacts/frontend/components/ChatScreen.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatScreen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const starterQuestions = {
    URSB: [
        "How do I register a sole proprietorship?",
        "What documents do I need to register a company?",
        "How do I search if a business name is available?",
        "How much does it cost to register a business?"
    ],
    URA: [
        "How do I get a TIN number?",
        "How do I file my taxes online?",
        "What taxes does a small business pay?",
        "How do I register for VAT?"
    ],
    KCCA: [
        "How do I get a trading licence in Kampala?",
        "How much does a trading licence cost?",
        "How do I renew my trading licence?",
        "What permits do I need to open a restaurant?"
    ],
    NSSF: [
        "How do I register with NSSF?",
        "How much do I contribute to NSSF?",
        "How do I check my NSSF balance?",
        "When can I access my NSSF savings?"
    ],
    MoIA: [
        "How do I apply for a passport?",
        "What documents do I need for a national ID?",
        "How long does a passport take to process?",
        "How do I apply for a visa to Uganda?"
    ]
};
function ChatScreen({ agency, onBack }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        {
            role: "assistant",
            content: "Oli otya! I am your CivicAI guide for " + agency.fullName + ". How can I help you today?\n\nOnyamba atya? Ndyabaza ku bifo bya " + agency.name + "."
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    async function sendMessage(text) {
        const userMessage = text || input;
        if (!userMessage.trim()) return;
        setInput("");
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: userMessage
                }
            ]);
        setLoading(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage,
                    agency: agency.id
                })
            });
            const data = await response.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: data.answer,
                        sources: data.sources
                    }
                ]);
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment."
                    }
                ]);
        } finally{
            setLoading(false);
        }
    }
    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }
    function openSource(url) {
        window.open(url, "_blank");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    ...styles.header,
                    backgroundColor: agency.color
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        style: styles.backButton,
                        onClick: onBack,
                        children: "Back / Ddayo"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.headerCenter,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: styles.headerIcon,
                                children: agency.icon
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.headerName,
                                        children: agency.name
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.headerFullName,
                                        children: agency.fullName
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            messages.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.starterSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: styles.starterLabel,
                        children: "Common questions / Ebibuuzo ebisinga okubuzibwa"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.starterGrid,
                        children: starterQuestions[agency.id]?.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                style: styles.starterChip,
                                onClick: ()=>sendMessage(q),
                                children: q
                            }, i, false, {
                                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.messageList,
                children: [
                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                ...styles.messageRow,
                                justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
                            },
                            children: [
                                msg.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.avatar,
                                    children: "🇺🇬"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                    lineNumber: 152,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...styles.bubble,
                                        ...msg.role === "user" ? styles.bubbleUser : styles.bubbleAssistant
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: styles.bubbleText,
                                            children: msg.content
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        msg.sources && msg.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.sources,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: styles.sourcesLabel,
                                                    children: "Sources: "
                                                }, void 0, false, {
                                                    fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                msg.sources.map((s, si)=>{
                                                    const parts = s.split(": ");
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        onClick: ()=>openSource(parts[1]),
                                                        style: styles.sourceLink,
                                                        children: parts[0]
                                                    }, si, false, {
                                                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            ...styles.messageRow,
                            justifyContent: "flex-start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.avatar,
                                children: "🇺🇬"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    ...styles.bubble,
                                    ...styles.bubbleAssistant
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.typingDots,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: styles.dot
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: styles.dot
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: styles.dot
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        ref: bottomRef
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.inputArea,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        style: styles.input,
                        placeholder: "Type your question... / Wandiika ekibuuzo kyo...",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKeyDown,
                        rows: 1
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        style: {
                            ...styles.sendButton,
                            backgroundColor: loading ? "#CCCCCC" : agency.color
                        },
                        onClick: ()=>sendMessage(),
                        disabled: loading,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/artifacts/frontend/components/ChatScreen.js",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#F8F9FA",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    },
    header: {
        padding: "16px 20px",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    },
    backButton: {
        background: "rgba(255,255,255,0.2)",
        border: "none",
        color: "#FFFFFF",
        fontSize: "13px",
        padding: "6px 12px",
        borderRadius: "20px",
        cursor: "pointer",
        alignSelf: "flex-start"
    },
    headerCenter: {
        display: "flex",
        alignItems: "center",
        gap: "12px"
    },
    headerIcon: {
        fontSize: "32px"
    },
    headerName: {
        fontSize: "20px",
        fontWeight: "700"
    },
    headerFullName: {
        fontSize: "12px",
        opacity: 0.8
    },
    starterSection: {
        padding: "16px 16px 8px"
    },
    starterLabel: {
        fontSize: "12px",
        color: "#666666",
        margin: "0 0 10px 0",
        fontStyle: "italic"
    },
    starterGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
    },
    starterChip: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        padding: "8px 14px",
        fontSize: "12px",
        color: "#333333",
        cursor: "pointer",
        textAlign: "left"
    },
    messageList: {
        flex: 1,
        overflowY: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    },
    messageRow: {
        display: "flex",
        alignItems: "flex-end",
        gap: "8px"
    },
    avatar: {
        fontSize: "24px",
        flexShrink: 0
    },
    bubble: {
        maxWidth: "75%",
        borderRadius: "16px",
        padding: "12px 14px"
    },
    bubbleUser: {
        backgroundColor: "#1A3A5C",
        color: "#FFFFFF",
        borderRadius: "16px 16px 4px 16px"
    },
    bubbleAssistant: {
        backgroundColor: "#FFFFFF",
        color: "#111111",
        border: "1px solid #E5E7EB",
        borderRadius: "16px 16px 16px 4px"
    },
    bubbleText: {
        margin: 0,
        fontSize: "14px",
        lineHeight: "1.6",
        whiteSpace: "pre-wrap"
    },
    sources: {
        marginTop: "8px",
        paddingTop: "8px",
        borderTop: "1px solid #E5E7EB",
        fontSize: "11px",
        color: "#666666"
    },
    sourcesLabel: {
        fontWeight: "600"
    },
    sourceLink: {
        color: "#1A3A5C",
        textDecoration: "underline",
        marginLeft: "4px",
        cursor: "pointer"
    },
    typingDots: {
        display: "flex",
        gap: "4px",
        padding: "4px 0"
    },
    dot: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#CCCCCC"
    },
    inputArea: {
        display: "flex",
        gap: "8px",
        padding: "12px 16px",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E5E7EB"
    },
    input: {
        flex: 1,
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "10px 14px",
        fontSize: "14px",
        fontFamily: "inherit",
        resize: "none",
        outline: "none"
    },
    sendButton: {
        padding: "0 16px",
        height: "44px",
        borderRadius: "12px",
        border: "none",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        flexShrink: 0
    }
};
}),
"[project]/artifacts/frontend/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$frontend$2f$components$2f$LandingScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/frontend/components/LandingScreen.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$frontend$2f$components$2f$ChatScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/frontend/components/ChatScreen.js [ssr] (ecmascript)");
;
;
;
;
function Home() {
    const [selectedAgency, setSelectedAgency] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        children: selectedAgency ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$frontend$2f$components$2f$ChatScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            agency: selectedAgency,
            onBack: ()=>setSelectedAgency(null)
        }, void 0, false, {
            fileName: "[project]/artifacts/frontend/pages/index.js",
            lineNumber: 11,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$frontend$2f$components$2f$LandingScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            onSelectAgency: setSelectedAgency
        }, void 0, false, {
            fileName: "[project]/artifacts/frontend/pages/index.js",
            lineNumber: 16,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/artifacts/frontend/pages/index.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0yno0i0._.js.map