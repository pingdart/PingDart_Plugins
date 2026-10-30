module.exports = [
"[project]/src/app/user/components/modules/AiBlogGenerator/services/blogOsStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Multi-Client AI Blog Operating System Local & Persistence Store
__turbopack_context__.s([
    "INITIAL_AI_CONFIGS",
    ()=>INITIAL_AI_CONFIGS,
    "INITIAL_ARTICLES",
    ()=>INITIAL_ARTICLES,
    "INITIAL_BLOG_BOOKS",
    ()=>INITIAL_BLOG_BOOKS,
    "INITIAL_CLIENTS",
    ()=>INITIAL_CLIENTS,
    "INITIAL_CONTENT_CALENDARS",
    ()=>INITIAL_CONTENT_CALENDARS,
    "INITIAL_DATA_SOURCES",
    ()=>INITIAL_DATA_SOURCES,
    "INITIAL_WEBHOOKS",
    ()=>INITIAL_WEBHOOKS,
    "blogOsStorage",
    ()=>blogOsStorage,
    "createClient",
    ()=>createClient,
    "createDefaultBlogBookForClient",
    ()=>createDefaultBlogBookForClient,
    "createDefaultCalendarForClient",
    ()=>createDefaultCalendarForClient,
    "deleteArticle",
    ()=>deleteArticle,
    "deleteProjectDataSource",
    ()=>deleteProjectDataSource,
    "deleteWebhookSubscription",
    ()=>deleteWebhookSubscription,
    "fastSimulateScrape",
    ()=>fastSimulateScrape,
    "generateArticleFromTopic",
    ()=>generateArticleFromTopic,
    "getActiveBlogBook",
    ()=>getActiveBlogBook,
    "getActiveCalendarPlan",
    ()=>getActiveCalendarPlan,
    "getAllBlogBookVersions",
    ()=>getAllBlogBookVersions,
    "getClientArticles",
    ()=>getClientArticles,
    "loadBlogBooks",
    ()=>loadBlogBooks,
    "loadBlogClients",
    ()=>loadBlogClients,
    "loadContentCalendars",
    ()=>loadContentCalendars,
    "loadContentInventory",
    ()=>loadContentInventory,
    "loadOsArticles",
    ()=>loadOsArticles,
    "loadProjectAiConfig",
    ()=>loadProjectAiConfig,
    "loadProjectDataSources",
    ()=>loadProjectDataSources,
    "loadWebhookSubscriptions",
    ()=>loadWebhookSubscriptions,
    "publishArticleToWordpress",
    ()=>publishArticleToWordpress,
    "saveActiveBlogBook",
    ()=>saveActiveBlogBook,
    "saveArticle",
    ()=>saveArticle,
    "saveBlogBooks",
    ()=>saveBlogBooks,
    "saveBlogClients",
    ()=>saveBlogClients,
    "saveContentCalendars",
    ()=>saveContentCalendars,
    "saveContentInventory",
    ()=>saveContentInventory,
    "saveOsArticles",
    ()=>saveOsArticles,
    "saveProjectAiConfig",
    ()=>saveProjectAiConfig,
    "saveProjectDataSource",
    ()=>saveProjectDataSource,
    "saveWebhookSubscription",
    ()=>saveWebhookSubscription,
    "syncWebsiteContentInventory",
    ()=>syncWebsiteContentInventory,
    "upsertContentInventoryItem",
    ()=>upsertContentInventoryItem
]);
const INITIAL_CLIENTS = [];
const INITIAL_BLOG_BOOKS = {};
const INITIAL_CONTENT_CALENDARS = {};
const INITIAL_ARTICLES = [];
const INITIAL_DATA_SOURCES = [];
const INITIAL_AI_CONFIGS = {};
const INITIAL_WEBHOOKS = [];
// Demo IDs set to automatically purge previously cached demo entries from localStorage
const DEMO_CLIENT_IDS = new Set([
    "client-hosting-apexcloud",
    "client-hospital-metrocare",
    "client-doctor-sarah-mitchell",
    "client-ramesh-cardiology",
    "client-horizon-tax",
    "client-metro-realty"
]);
const DEMO_ARTICLE_IDS = new Set([
    "art-host-nvme-deployments",
    "art-host-k8s-cost-optimization",
    "art-hosp-root-canal-implant",
    "art-hosp-pediatric-fever-guide",
    "art-doc-acne-scar-treatments",
    "art-doc-retinol-beginners-guide",
    "art-horizon-gst-audit-2026",
    "art-metro-mumbai-luxury-2026",
    "art-cardio-silent-heart"
]);
const DEMO_DATASOURCE_IDS = new Set([
    "ds-host-web",
    "ds-host-docs",
    "ds-host-k8s-whitepaper",
    "ds-hosp-web",
    "ds-hosp-doctors",
    "ds-hosp-services",
    "ds-doc-web",
    "ds-doc-faq",
    "ds-ramesh-web",
    "ds-ramesh-sitemap",
    "ds-ramesh-api-doctors",
    "ds-ramesh-api-services",
    "ds-ramesh-api-faqs",
    "ds-ramesh-pdf-guidelines",
    "ds-ramesh-gdrive",
    "ds-horizon-web",
    "ds-horizon-sitemap",
    "ds-metro-web",
    "ds-metro-sitemap"
]);
const DEMO_WEBHOOK_IDS = new Set([
    "wh-1",
    "wh-2",
    "wh-3",
    "wh-4"
]);
// Helper functions for LocalStorage persistence
const CLIENTS_STORAGE_KEY = "pingdart_blog_os_clients_v3";
const BLOGBOOKS_STORAGE_KEY = "pingdart_blog_os_blogbooks_v3";
const CALENDARS_STORAGE_KEY = "pingdart_blog_os_calendars_v3";
const ARTICLES_STORAGE_KEY = "pingdart_blog_os_articles_v3";
const DATASOURCES_STORAGE_KEY = "pingdart_blog_os_datasources_v2";
const WEBHOOKS_STORAGE_KEY = "pingdart_blog_os_webhooks_v2";
const CONTENT_INVENTORY_STORAGE_KEY = "pingdart_blog_os_content_inventory_v1";
function loadContentInventory(clientId) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveContentInventory(clientId, items) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function upsertContentInventoryItem(clientId, item) {
    const current = loadContentInventory(clientId);
    const existingIdx = current.findIndex((it)=>it.id === item.id || it.url === item.url || it.slug && it.slug === item.slug);
    if (existingIdx >= 0) {
        current[existingIdx] = {
            ...current[existingIdx],
            ...item
        };
    } else {
        current.push(item);
    }
    saveContentInventory(clientId, current);
}
function syncWebsiteContentInventory(client) {
    const existing = loadContentInventory(client.id);
    const baseUrl = (client.websiteUrl || "https://example.com").replace(/\/$/, "");
    const pagesToCrawl = [
        {
            title: `${client.businessName || client.name} - Home`,
            slug: "",
            type: "existing_page",
            url: baseUrl,
            summary: `Primary homepage for ${client.businessName}. Outlines key company offerings and primary value proposition.`,
            keywords: [
                client.businessName.toLowerCase(),
                "home",
                "official site",
                client.industry
            ],
            intent: "navigational"
        },
        {
            title: `About Us - ${client.businessName}`,
            slug: "about",
            type: "existing_page",
            url: `${baseUrl}/about`,
            summary: `Corporate leadership, team credentials, mission, and regional service areas in ${client.city}.`,
            keywords: [
                "about",
                "founder",
                "team",
                "credentials",
                "history"
            ],
            intent: "informational"
        },
        {
            title: `Core Services & Solutions - ${client.businessName}`,
            slug: "services",
            type: "service_page",
            url: `${baseUrl}/services`,
            summary: `Comprehensive list of professional services and commercial solutions offered by ${client.businessName}.`,
            keywords: [
                "services",
                "solutions",
                "pricing",
                "packages"
            ],
            intent: "commercial"
        },
        {
            title: `Frequently Asked Questions - ${client.businessName}`,
            slug: "faqs",
            type: "faq_page",
            url: `${baseUrl}/faqs`,
            summary: `Common client queries, warranty, pricing, diagnostic timelines, and customer onboarding support.`,
            keywords: [
                "faqs",
                "questions",
                "support",
                "answers"
            ],
            intent: "informational"
        },
        {
            title: `Corporate Blog Archive - ${client.businessName}`,
            slug: "blog",
            type: "existing_blog",
            url: `${baseUrl}/blog`,
            summary: `Existing publication archive of industry thought leadership and regulatory guidelines.`,
            keywords: [
                "blog",
                "news",
                "articles",
                "updates"
            ],
            intent: "informational"
        }
    ];
    const updatedInventory = [
        ...existing
    ];
    for (const page of pagesToCrawl){
        const existingIdx = updatedInventory.findIndex((it)=>it.url === page.url || page.slug && it.slug === page.slug);
        const item = {
            id: existingIdx >= 0 ? updatedInventory[existingIdx].id : `inv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            clientId: client.id,
            url: page.url,
            title: page.title,
            slug: page.slug,
            contentType: page.type,
            summary: page.summary,
            extractedKeywords: page.keywords,
            targetKeyword: page.keywords[0],
            searchIntent: page.intent,
            targetLocation: client.city || "Headquarters",
            crawledAt: new Date().toISOString(),
            contentHash: "hash_" + page.title.toLowerCase().replace(/\s+/g, "_")
        };
        if (existingIdx >= 0) {
            updatedInventory[existingIdx] = {
                ...updatedInventory[existingIdx],
                ...item
            };
        } else {
            updatedInventory.push(item);
        }
    }
    saveContentInventory(client.id, updatedInventory);
    return updatedInventory;
}
function loadBlogClients() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveBlogClients(clients) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadBlogBooks() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function saveBlogBooks(books) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadContentCalendars() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function saveContentCalendars(cals) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadOsArticles() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveOsArticles(articles) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getActiveBlogBook(clientId) {
    const all = loadBlogBooks();
    const clientBooks = all[clientId];
    if (clientBooks && clientBooks.length > 0) {
        const current = clientBooks.find((b)=>b.isCurrent);
        return current || clientBooks[0];
    }
    const client = loadBlogClients().find((c)=>c.id === clientId);
    if (client) {
        return createDefaultBlogBookForClient(client);
    }
    return createDefaultBlogBookForClient({
        id: clientId || "client-default",
        workspaceId: "ws-default",
        name: "New Client",
        businessName: "Business Organization",
        industry: "general_business",
        websiteUrl: "",
        contactEmail: "",
        contactPhone: "",
        whatsappEnabled: false,
        targetAudience: "",
        city: "",
        createdAt: new Date().toISOString()
    });
}
function getAllBlogBookVersions(clientId) {
    const all = loadBlogBooks();
    const list = all[clientId];
    if (list && list.length > 0) return list;
    const client = loadBlogClients().find((c)=>c.id === clientId);
    if (client) {
        return [
            createDefaultBlogBookForClient(client)
        ];
    }
    return [
        createDefaultBlogBookForClient({
            id: clientId || "client-default",
            workspaceId: "ws-default",
            name: "New Client",
            businessName: "Business Organization",
            industry: "general_business",
            websiteUrl: "",
            contactEmail: "",
            contactPhone: "",
            whatsappEnabled: false,
            targetAudience: "",
            city: "",
            createdAt: new Date().toISOString()
        })
    ];
}
function saveActiveBlogBook(clientId, updatedBook) {
    const all = loadBlogBooks();
    const versions = all[clientId] || [];
    const index = versions.findIndex((b)=>b.id === updatedBook.id);
    if (index >= 0) {
        versions[index] = updatedBook;
    } else {
        versions.push(updatedBook);
    }
    all[clientId] = versions;
    saveBlogBooks(all);
}
function getActiveCalendarPlan(clientId) {
    const all = loadContentCalendars();
    if (all[clientId]) return all[clientId];
    const client = loadBlogClients().find((c)=>c.id === clientId);
    if (client) {
        return createDefaultCalendarForClient(client);
    }
    return createDefaultCalendarForClient({
        id: clientId || "client-default",
        workspaceId: "ws-default",
        name: "New Client",
        businessName: "Business Organization",
        industry: "general_business",
        websiteUrl: "",
        contactEmail: "",
        contactPhone: "",
        whatsappEnabled: false,
        targetAudience: "",
        city: "",
        createdAt: new Date().toISOString()
    });
}
function getClientArticles(clientId) {
    const all = loadOsArticles();
    return all.filter((a)=>a.clientId === clientId || a.projectId === clientId);
}
function createDefaultBlogBookForClient(client) {
    const isDoctor = client.industry === "healthcare_doctor";
    const isFinance = client.industry === "finance_ca_tax";
    const isTech = client.industry === "saas_tech";
    const isAgency = client.industry === "agency_marketing";
    const isEcommerce = client.industry === "ecommerce";
    const isRealEstate = client.industry === "real_estate";
    const isLegal = client.industry === "legal";
    const qualifications = isDoctor ? "MD, Specialized Consultant" : isFinance ? "FCA, Senior Partner" : isTech ? "Lead Architect & CTO" : isAgency ? "Head of Growth & SEO" : isEcommerce ? "Head of Product & E-Commerce" : isLegal ? "Senior Legal Counsel" : isRealEstate ? "Director & Asset Strategist" : "Founder & Lead Strategist";
    const specialties = isDoctor ? [
        "Preventive Healthcare",
        "Clinical Diagnosis",
        "Outpatient Care"
    ] : isFinance ? [
        "Corporate Tax Advisory",
        "GST Compliance",
        "Statutory Audit"
    ] : isTech ? [
        "Cloud Infrastructure",
        "Product Engineering",
        "AI & Developer Tools"
    ] : isAgency ? [
        "SEO & Content Strategy",
        "Growth Marketing",
        "Conversion Optimization"
    ] : isEcommerce ? [
        "Product Experience",
        "Direct to Consumer",
        "Supply Chain & Fulfillment"
    ] : isLegal ? [
        "Corporate Compliance",
        "Commercial Contracts",
        "Intellectual Property"
    ] : isRealEstate ? [
        "Luxury Residential",
        "Commercial Assets",
        "NRI Property Advisory"
    ] : [
        "Product Development",
        "Operations",
        "Strategic Growth"
    ];
    const services = isDoctor ? [
        {
            id: "s1",
            name: "Comprehensive Diagnostics",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/diagnostics`,
            description: "Full clinical diagnostic and imaging evaluations.",
            keywords: [
                `diagnostics ${client.city?.toLowerCase() || ""}`
            ]
        },
        {
            id: "s2",
            name: "Specialist Consultation",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/consultation`,
            description: "One-on-one specialist consultation and tailored care plan.",
            keywords: [
                `specialist ${client.city?.toLowerCase() || ""}`
            ]
        }
    ] : isFinance ? [
        {
            id: "s1",
            name: "Corporate Income Tax Filing & Audit",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/tax-audit`,
            description: "Section 44AB audits, filings, and statutory representations.",
            keywords: [
                `tax audit ${client.city?.toLowerCase() || ""}`
            ]
        },
        {
            id: "s2",
            name: "GST Advisory & Reconciliation",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/gst`,
            description: "Monthly GSTR-1, 3B, and annual GSTR-9 reconciliations.",
            keywords: [
                `gst consultant ${client.city?.toLowerCase() || ""}`
            ]
        }
    ] : isTech ? [
        {
            id: "s1",
            name: "Platform Architecture & Core Features",
            targetUrl: `${client.websiteUrl || "https://example.com"}/features`,
            description: "High-performance infrastructure, cloud APIs, and developer toolkits.",
            keywords: [
                `${client.businessName?.toLowerCase() || "tech"} features`,
                "cloud platform"
            ]
        },
        {
            id: "s2",
            name: "Enterprise Integrations & Security",
            targetUrl: `${client.websiteUrl || "https://example.com"}/integrations`,
            description: "Enterprise-grade API connectors, role-based access, and compliance workflows.",
            keywords: [
                "enterprise integrations",
                "api documentation"
            ]
        }
    ] : isAgency ? [
        {
            id: "s1",
            name: "Organic Search & Content Domination",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/seo`,
            description: "High-ROI content calendars and search engine visibility systems.",
            keywords: [
                "seo services",
                "organic growth"
            ]
        },
        {
            id: "s2",
            name: "Performance Acquisition & Funnels",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services/growth`,
            description: "Full-funnel acquisition, paid campaigns, and conversion rate optimization.",
            keywords: [
                "performance marketing",
                "growth marketing"
            ]
        }
    ] : isEcommerce ? [
        {
            id: "s1",
            name: "Catalog & Product Innovations",
            targetUrl: `${client.websiteUrl || "https://example.com"}/products`,
            description: "Curated collections with fast delivery and quality guarantees.",
            keywords: [
                "best products",
                "online shopping"
            ]
        },
        {
            id: "s2",
            name: "Customer Experience & Support",
            targetUrl: `${client.websiteUrl || "https://example.com"}/support`,
            description: "Dedicated customer support, seamless returns, and member rewards.",
            keywords: [
                "customer support",
                "returns and warranty"
            ]
        }
    ] : isRealEstate ? [
        {
            id: "s1",
            name: "Luxury Residential Developments",
            targetUrl: `${client.websiteUrl || "https://example.com"}/projects/residential`,
            description: "Signature apartments, villas, and gated residences.",
            keywords: [
                `luxury residences ${client.city?.toLowerCase() || ""}`
            ]
        },
        {
            id: "s2",
            name: "Grade-A Commercial Space Leasing",
            targetUrl: `${client.websiteUrl || "https://example.com"}/projects/commercial`,
            description: "High-yield commercial office parks and tech campuses.",
            keywords: [
                `commercial leasing ${client.city?.toLowerCase() || ""}`
            ]
        }
    ] : [
        {
            id: "s1",
            name: "Core Solutions & Services",
            targetUrl: `${client.websiteUrl || "https://example.com"}/services`,
            description: "End-to-end strategic solutions tailored to organizational goals.",
            keywords: [
                `services ${client.city?.toLowerCase() || ""}`
            ]
        },
        {
            id: "s2",
            name: "Strategic Advisory & Support",
            targetUrl: `${client.websiteUrl || "https://example.com"}/consultation`,
            description: "Expert consulting and ongoing support.",
            keywords: [
                "consulting",
                "enterprise support"
            ]
        }
    ];
    const editorialVoice = isDoctor ? "clinical_authoritative" : isFinance ? "corporate_executive" : isTech ? "conversational_educational" : isRealEstate ? "friendly_persuasive" : "conversational_educational";
    const complianceDisclaimers = isDoctor ? [
        "Medical Disclaimer: This article is intended strictly for educational awareness and does not substitute professional medical diagnosis."
    ] : isFinance ? [
        "Tax Disclaimer: Insights presented are educational and do not constitute formal legal or tax counsel under ICAI regulations."
    ] : isLegal ? [
        "Legal Disclaimer: The information provided does not constitute formal legal advice. Consult certified legal counsel for your jurisdiction."
    ] : isRealEstate ? [
        "Real Estate Disclaimer: Floorplans, specifications, and renderings are subject to statutory RERA registrations."
    ] : [
        "Disclaimer: Product benchmarks, specifications, and architecture details are based on standard production guidelines."
    ];
    return {
        id: `bb-${client.id}-v1`,
        projectId: `proj-${client.id}`,
        clientId: client.id,
        version: 1,
        versionLabel: "v1.0 — Initial Ingestion",
        isCurrent: true,
        businessSummary: `${client.businessName || client.name} is a premier ${client.industry.replace(/_/g, " ")} organization headquartered in ${client.city || "global market"}.`,
        doctorOrFounderProfile: {
            name: client.name || "Founder & Managing Director",
            qualifications,
            experienceYears: 12,
            specialties,
            bioSnippet: `Senior expert leading ${client.businessName || client.name} with extensive experience delivering high-impact solutions.`
        },
        services,
        targetLocalities: [
            client.city || "Global Market"
        ],
        editorialVoice,
        complianceDisclaimers,
        forbiddenPhrases: [
            "100% cure guarantee",
            "guaranteed zero tax",
            "100% return in 6 months"
        ],
        preferredCtas: [
            `For tailored solutions, connect with ${client.businessName || client.name}.`
        ],
        internalLinkGraph: [
            {
                id: "l1",
                anchorText: "Learn more about our solutions",
                targetUrl: `${client.websiteUrl || "https://example.com"}/contact`,
                category: "Contact"
            }
        ],
        masterFaqs: [
            {
                id: "f1",
                question: `How to get started with ${client.businessName || client.name}?`,
                answer: `You can reach our team via ${client.contactPhone || client.contactEmail || "our official contact channels"}.`,
                category: "General"
            }
        ],
        sourceWebsiteUrl: client.websiteUrl || "https://pingdart.com",
        lastSynthesizedAt: new Date().toISOString()
    };
}
function createDefaultCalendarForClient(client) {
    return {
        id: `cal-${client.id}-plan`,
        projectId: `proj-${client.id}`,
        generatedAt: new Date().toISOString(),
        theme: `${client.businessName || client.name} Local Authority & Client Acquisition Strategy`,
        gapInsights: [
            {
                id: "cg1",
                topic: `Key Industry Trends in ${client.city || "Local Market"}`,
                targetKeyword: `${client.industry.replace(/_/g, " ")} ${client.city || ""}`.trim(),
                category: "Core Services",
                status: "critical_gap",
                estimatedMonthlySearch: "4,500/mo",
                reason: "Target local high-intent client queries."
            }
        ],
        months: [
            {
                monthIndex: 1,
                monthName: "Month 1: Client Education & Authority Building",
                objective: `Establish local leadership for ${client.businessName || client.name} in ${client.city || "the region"}.`,
                items: [
                    {
                        id: "itm1",
                        monthIndex: 1,
                        monthName: "Month 1",
                        title: `Top 5 Factors to Consider When Choosing a ${client.industry.replace(/_/g, " ")} Partner in ${client.city || "Your City"}`,
                        targetKeyword: `${client.industry.replace(/_/g, " ")} ${client.city || ""}`.trim(),
                        searchIntent: "commercial",
                        difficulty: "easy",
                        priority: "high",
                        suggestedWordCount: 1400,
                        status: "planned"
                    },
                    {
                        id: "itm2",
                        monthIndex: 1,
                        monthName: "Month 1",
                        title: `Common Compliance & Strategic Pitfalls in ${client.city || "Industry"}: 2026 Comprehensive Guide`,
                        targetKeyword: `${client.city || "Industry"} guide 2026`,
                        searchIntent: "informational",
                        difficulty: "medium",
                        priority: "high",
                        suggestedWordCount: 1500,
                        status: "planned"
                    }
                ]
            }
        ]
    };
}
function saveArticle(article) {
    const all = loadOsArticles();
    const idx = all.findIndex((a)=>a.id === article.id);
    if (idx >= 0) {
        all[idx] = article;
    } else {
        all.unshift(article);
    }
    saveOsArticles(all);
}
function deleteArticle(articleId) {
    const all = loadOsArticles();
    const filtered = all.filter((a)=>a.id !== articleId);
    saveOsArticles(filtered);
}
function createClient(data) {
    const clients = loadBlogClients();
    const id = `client-${Date.now()}`;
    const newClient = {
        id,
        workspaceId: "ws-default",
        name: data.name,
        businessName: data.businessName,
        industry: data.industry,
        websiteUrl: data.websiteUrl,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        whatsappEnabled: true,
        targetAudience: data.targetAudience,
        city: data.city,
        createdAt: new Date().toISOString()
    };
    clients.unshift(newClient);
    saveBlogClients(clients);
    // Initialize v1.0 Blog Book for this client using unified industry logic
    const books = loadBlogBooks();
    const initialBook = createDefaultBlogBookForClient(newClient);
    books[id] = [
        initialBook
    ];
    saveBlogBooks(books);
    // Initialize Calendar using unified industry logic
    const calendars = loadContentCalendars();
    const initialCalendar = createDefaultCalendarForClient(newClient);
    calendars[id] = initialCalendar;
    saveContentCalendars(calendars);
    return newClient;
}
function fastSimulateScrape(clientId, websiteUrl) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const activeBook = getActiveBlogBook(clientId);
            const newVersionNum = activeBook.version + 1;
            const domain = websiteUrl ? new URL(websiteUrl).hostname : "client-website.com";
            // Phase 1: Index website pages, blogs, FAQs, and services into client content inventory
            const clients = loadBlogClients();
            const client = clients.find((c)=>c.id === clientId);
            if (client) {
                syncWebsiteContentInventory({
                    ...client,
                    websiteUrl: websiteUrl || client.websiteUrl
                });
                client.lastAuditedAt = new Date().toISOString();
                client.missingUnverifiedInfo = [
                    "Confirm exact service pricing packages",
                    "Upload verified practitioner/founder certificates"
                ];
                saveBlogClients(clients);
            }
            const updatedBook = {
                ...activeBook,
                id: `bb-${clientId}-v${newVersionNum}`,
                version: newVersionNum,
                versionLabel: `v${newVersionNum}.0 — 5-Page Auto-Extract (${domain})`,
                isCurrent: true,
                sourceWebsiteUrl: websiteUrl,
                lastSynthesizedAt: new Date().toISOString(),
                businessSummary: `${activeBook.businessSummary} (Synced and verified from live site pages: Home, About, Services, FAQs, Contact).`
            };
            // Mark old version as not current
            const all = loadBlogBooks();
            const clientBooks = all[clientId] || [
                activeBook
            ];
            const updatedList = clientBooks.map((b)=>({
                    ...b,
                    isCurrent: false
                }));
            updatedList.unshift(updatedBook);
            all[clientId] = updatedList;
            saveBlogBooks(all);
            resolve(updatedBook);
        }, 1200);
    });
}
function generateArticleFromTopic(clientId, topic, targetKeyword, searchIntent = 'informational') {
    const activeBook = getActiveBlogBook(clientId);
    const client = loadBlogClients().find((c)=>c.id === clientId) || {
        id: clientId,
        workspaceId: "ws-default",
        name: "Client",
        businessName: "Business",
        industry: "general_business",
        websiteUrl: "https://example.com",
        contactEmail: "",
        contactPhone: "",
        whatsappEnabled: false,
        targetAudience: "",
        city: "Headquarters",
        createdAt: new Date().toISOString()
    };
    const kw = targetKeyword || topic.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
    const slug = kw.replace(/\s+/g, "-");
    const token = `tok_${Math.random().toString(36).substring(2, 10)}`;
    const baseUrl = client.websiteUrl ? client.websiteUrl.replace(/\/$/, '') : "https://example.com";
    const canonicalUrl = `${baseUrl}/blog/${slug}`;
    // Automatically extract internal links from Blog Book
    const injectedLinks = activeBook.internalLinkGraph.slice(0, 3).map((l)=>({
            anchorText: l.anchorText,
            targetUrl: l.targetUrl
        }));
    const primaryService = activeBook.services[0];
    if (primaryService && !injectedLinks.some((l)=>l.targetUrl === primaryService.targetUrl)) {
        injectedLinks.push({
            anchorText: primaryService.name,
            targetUrl: primaryService.targetUrl
        });
    }
    const articleId = `art-${Date.now()}`;
    const generatedArticle = {
        id: articleId,
        projectId: activeBook.projectId,
        clientId,
        blogBookVersion: activeBook.version,
        title: topic,
        slug,
        targetKeyword: kw,
        secondaryKeywords: [
            `${kw} in ${activeBook.targetLocalities[0] || client.city}`,
            `${client.name} advice`,
            "expert consultation"
        ],
        targetLocation: activeBook.targetLocalities[0] || client.city,
        contentMarkdown: client.industry === "healthcare_doctor" ? `# ${topic}\n\nWhen exploring **${kw}**, individuals often encounter fragmented advice online. Under the clinical guidance of **${activeBook.doctorOrFounderProfile.name}**, this comprehensive review examines diagnostic criteria, prevention, and proactive care.\n\n---\n\n## 1. Understanding Key Fundamentals\n\nProper assessment begins with accurate baseline evaluation. Many people overlook early markers because symptoms develop gradually.\n\nAccording to clinical observations at our ${activeBook.targetLocalities[0] || client.city || "center"}, early intervention significantly improves long-term outcomes. We advise scheduling a [${injectedLinks[0]?.anchorText || "consultation"}](${injectedLinks[0]?.targetUrl || client.websiteUrl}) whenever persistent indicators appear.\n\n---\n\n## 2. When to Consult a Specialist\n\nSelf-evaluation can lead to delayed intervention. Our specialists offer dedicated consultations tailored to individual health goals.\n\n---\n\n### Author Profile & Clinical Verification\n**${activeBook.doctorOrFounderProfile.name}** (${activeBook.doctorOrFounderProfile.qualifications}) has over ${activeBook.doctorOrFounderProfile.experienceYears} years of experience in ${activeBook.doctorOrFounderProfile.specialties.join(", ")}.\n\n---\n\n${activeBook.complianceDisclaimers[0] || ""}` : client.industry === "finance_ca_tax" ? `# ${topic}\n\nNavigating statutory mandates around **${kw}** requires adherence to evolving fiscal compliance and regulatory provisions. Under the advisory framework of **${activeBook.doctorOrFounderProfile.name}**, this briefing breaks down actionable guidelines, compliance timelines, and risk mitigation strategies.\n\n---\n\n## 1. Statutory Foundations & Regulatory Overview\n\nMaintaining compliance begins with accurate documentation and timely filings. Regulatory authorities have intensified audit scrutinies, making baseline reconciliations crucial for businesses in ${activeBook.targetLocalities[0] || client.city || "the region"}.\n\nFor tailored enterprise advice, consider scheduling an advisory session for [${injectedLinks[0]?.anchorText || "Tax Audit & Advisory"}](${injectedLinks[0]?.targetUrl || client.websiteUrl}) with our corporate advisory desk.\n\n---\n\n## 2. Strategic Best Practices\n\nProactive tax planning prevents penalties and litigation risks. Our practice assists corporate entities across ${activeBook.targetLocalities.join(", ") || "the market"} with comprehensive filing support.\n\n---\n\n### Verified By Senior Partner\n**${activeBook.doctorOrFounderProfile.name}** (${activeBook.doctorOrFounderProfile.qualifications}) with ${activeBook.doctorOrFounderProfile.experienceYears}+ years in ${activeBook.doctorOrFounderProfile.specialties.join(", ")}.\n\n---\n\n${activeBook.complianceDisclaimers[0] || ""}` : client.industry === "real_estate" ? `# ${topic}\n\nEvaluating investment opportunities in **${kw}** demands an in-depth analysis of micro-market infrastructure and strategic fundamentals. Guided by the market advisory desk of **${activeBook.doctorOrFounderProfile.name}**, this report examines capital appreciation drivers across ${activeBook.targetLocalities[0] || client.city || "prime sectors"}.\n\n---\n\n## 1. Prime Micro-Market Infrastructure Catalysts\n\nConnectivity developments, transport corridors, and modern master planning continue to accelerate property valuations. Buyers prioritize Grade-A developments with verified statutory approvals.\n\nExplore premier opportunities such as [${injectedLinks[0]?.anchorText || "Strategic Development Portfolios"}](${injectedLinks[0]?.targetUrl || client.websiteUrl}) curated by our advisory group.\n\n---\n\n## 2. Investment Portfolio Recommendations\n\nWhether acquiring commercial tech park spaces or premium residential acquisitions across ${activeBook.targetLocalities.join(", ") || "prime districts"}, our advisory group delivers end-to-end transaction advisory.\n\n---\n\n### Advisory Desk\n**${activeBook.doctorOrFounderProfile.name}** (${activeBook.doctorOrFounderProfile.qualifications}) with ${activeBook.doctorOrFounderProfile.experienceYears}+ years leading ${activeBook.doctorOrFounderProfile.specialties.join(", ")}.\n\n---\n\n${activeBook.complianceDisclaimers[0] || ""}` : `# ${topic}\n\nIn modern engineering and technology landscapes, effectively mastering **${kw}** requires a robust architecture, scalable workflows, and actionable benchmarks. Guided by **${activeBook.doctorOrFounderProfile.name}** and the team at ${client.businessName || client.name}, this guide explores architectural best practices, implementation patterns, and common production pitfalls.\n\n---\n\n## 1. Core Architecture & Fundamentals\n\nBuilding high-efficiency solutions starts with a clear understanding of foundational bottlenecks. Modern systems require high availability, low latency, and modular design to scale effortlessly.\n\nWhether evaluating developer tools or enterprise software, key metrics such as deployment velocity and reliability dictate long-term success. Discover how [${injectedLinks[0]?.anchorText || "Core Platform Features"}](${injectedLinks[0]?.targetUrl || client.websiteUrl}) streamline day-to-day operations.\n\n---\n\n## 2. Implementation Strategies & Production Roadmap\n\nTo achieve sustainable velocity without introducing technical debt, engineering teams must establish automated validation pipelines, standardized API contracts, and proactive monitoring.\n\n### Key Implementation Checklist:\n- **Modular decoupling**: Ensure services and data pipelines maintain clear separation of concerns.\n- **Continuous observability**: Track real-time telemetry, logs, and system error rates.\n- **Automated security & compliance**: Enforce policy checks across all integration endpoints.\n\n---\n\n### About the Author & Technical Leadership\n**${activeBook.doctorOrFounderProfile.name}** (${activeBook.doctorOrFounderProfile.qualifications}) has over ${activeBook.doctorOrFounderProfile.experienceYears} years of technical expertise in ${activeBook.doctorOrFounderProfile.specialties.join(", ")}.\n\n---\n\n${activeBook.complianceDisclaimers[0] || ""}`,
        contentHtml: `<h1>${topic}</h1><p>Comprehensive industry analysis regarding <strong>${kw}</strong>...</p>`,
        wordCount: 1420,
        readTimeMinutes: 5,
        metaTitle: `${topic.slice(0, 50)} | ${client.name}`,
        metaDescription: `Discover key insights regarding ${kw}. Written and verified by ${activeBook.doctorOrFounderProfile.name} in ${client.city || "our team"}.`,
        schemaJsonLd: JSON.stringify({
            "@context": "https://schema.org",
            "@type": client.industry === "healthcare_doctor" ? "MedicalWebPage" : client.industry === "saas_tech" ? "TechArticle" : "Article",
            headline: topic,
            author: {
                "@type": "Person",
                name: activeBook.doctorOrFounderProfile.name,
                jobTitle: activeBook.doctorOrFounderProfile.qualifications
            },
            publisher: {
                "@type": "Organization",
                name: client.businessName,
                url: client.websiteUrl
            }
        }, null, 2),
        coverImage: client.industry === "healthcare_doctor" ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" : client.industry === "finance_ca_tax" ? "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" : client.industry === "real_estate" ? "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        injectedInternalLinks: injectedLinks,
        injectedDisclaimers: activeBook.complianceDisclaimers,
        status: "draft",
        magicApprovalToken: token,
        magicApprovalUrl: `https://pingdart.com/review/${token}`,
        whatsappPreviewText: `Hi ${client.name}, your new article '${topic}' has been generated adhering to Blog Book v${activeBook.version}. Review and 1-tap approve here: https://pingdart.com/review/${token}`,
        idempotencyKey: `pub_${articleId}_${Date.now()}`,
        canonicalUrl,
        publishingRetryCount: 0,
        createdAt: new Date().toISOString()
    };
    // Phase 2: Duplicate check execution
    const inventory = loadContentInventory(clientId);
    const isMatch = inventory.some((it)=>it.title.toLowerCase().trim() === topic.toLowerCase().trim() || it.slug && it.slug === slug);
    generatedArticle.duplicateCheckResult = {
        verdict: isMatch ? "BLOCKED" : "PASSED",
        level1ExactScore: isMatch ? 1.0 : 0.0,
        level2TitleScore: 0.15,
        level3SemanticScore: 0.12,
        level4OriginalityScore: 0.05,
        overallScore: isMatch ? 1.0 : 0.15,
        matchedItems: isMatch ? [
            {
                id: "inv-match",
                title: topic,
                url: canonicalUrl,
                similarityScore: 1.0,
                level: "level1_exact",
                reason: "Exact title or slug collision with indexed client page"
            }
        ] : [],
        canProceed: !isMatch,
        recommendation: isMatch ? "BLOCKED: Exact match found in existing content inventory." : "PASSED: Verified unique against client content inventory.",
        checkedAt: new Date().toISOString()
    };
    saveArticle(generatedArticle);
    return generatedArticle;
}
// In-flight concurrency lock to guarantee idempotent publishing across simultaneous requests
const inFlightPublishJobs = new Map();
function publishArticleToWordpress(articleId) {
    // If a publish job for this article is already running, await the existing job
    if (inFlightPublishJobs.has(articleId)) {
        return inFlightPublishJobs.get(articleId);
    }
    const jobPromise = new Promise((resolve)=>{
        setTimeout(()=>{
            try {
                const all = loadOsArticles();
                const article = all.find((a)=>a.id === articleId);
                const client = article ? loadBlogClients().find((c)=>c.id === article.clientId) : null;
                const baseUrl = client?.websiteUrl ? client.websiteUrl.replace(/\/$/, '') : "https://example.com";
                const targetUrl = article?.canonicalUrl || `${baseUrl}/blog/${article?.slug || 'new-article'}`;
                // Idempotency: Reuse existing postId if this is a retry or simultaneous call
                const postId = article?.wordpressPostId || Math.floor(10000 + Math.random() * 90000);
                if (article) {
                    article.status = "published";
                    article.wordpressPublishedUrl = targetUrl;
                    article.wordpressPostId = postId;
                    article.canonicalUrl = targetUrl;
                    article.publishedAt = article.publishedAt || new Date().toISOString();
                    article.updatedAt = new Date().toISOString();
                    article.publishingRetryCount = (article.publishingRetryCount || 0) + 1;
                    saveArticle(article);
                }
                resolve({
                    success: true,
                    url: targetUrl,
                    postId
                });
            } finally{
                inFlightPublishJobs.delete(articleId);
            }
        }, 400);
    });
    inFlightPublishJobs.set(articleId, jobPromise);
    return jobPromise;
}
function loadProjectDataSources(clientId) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveProjectDataSource(source) {
    const all = loadProjectDataSources();
    const index = all.findIndex((d)=>d.id === source.id);
    if (index >= 0) {
        all[index] = source;
    } else {
        all.unshift(source);
    }
    localStorage.setItem(DATASOURCES_STORAGE_KEY, JSON.stringify(all));
}
function deleteProjectDataSource(id) {
    const all = loadProjectDataSources().filter((d)=>d.id !== id);
    localStorage.setItem(DATASOURCES_STORAGE_KEY, JSON.stringify(all));
}
function loadProjectAiConfig(clientId) {
    try {
        const raw = localStorage.getItem(`pingdart_blog_os_aiconfig_${clientId}`);
        if (raw) return JSON.parse(raw);
        const initial = INITIAL_AI_CONFIGS[clientId] || {
            clientId,
            aiProvider: "openai",
            aiModel: "gpt-4o",
            temperature: 0.4,
            maxTokens: 3500,
            language: "en-US",
            brandVoice: "conversational_educational",
            complianceDirectives: [
                "Adhere strictly to verified client facts."
            ],
            forbiddenPhrases: [],
            autoPublishOnSignoff: false,
            requireClientApproval: true,
            internalReviewRequired: true,
            notifyOnWhatsApp: true,
            notifyOnEmail: true
        };
        return initial;
    } catch (e) {
        return INITIAL_AI_CONFIGS[clientId] || {};
    }
}
function saveProjectAiConfig(config) {
    localStorage.setItem(`pingdart_blog_os_aiconfig_${config.clientId}`, JSON.stringify(config));
}
function loadWebhookSubscriptions(clientId) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveWebhookSubscription(sub) {
    const all = loadWebhookSubscriptions();
    const index = all.findIndex((w)=>w.id === sub.id);
    if (index >= 0) {
        all[index] = sub;
    } else {
        all.unshift(sub);
    }
    localStorage.setItem(WEBHOOKS_STORAGE_KEY, JSON.stringify(all));
}
function deleteWebhookSubscription(id) {
    const all = loadWebhookSubscriptions().filter((w)=>w.id !== id);
    localStorage.setItem(WEBHOOKS_STORAGE_KEY, JSON.stringify(all));
}
const blogOsStorage = {
    loadBlogClients,
    saveBlogClients,
    loadBlogBooks,
    saveBlogBooks,
    loadContentCalendars,
    saveContentCalendars,
    loadOsArticles,
    saveOsArticles,
    getActiveBlogBook,
    getAllBlogBookVersions,
    saveActiveBlogBook,
    getActiveCalendarPlan,
    getClientArticles,
    saveArticle,
    createClient,
    fastSimulateScrape,
    generateArticleFromTopic,
    publishArticleToWordpress,
    loadContentInventory,
    saveContentInventory,
    upsertContentInventoryItem,
    syncWebsiteContentInventory,
    loadProjectDataSources,
    saveProjectDataSource,
    deleteProjectDataSource,
    loadProjectAiConfig,
    saveProjectAiConfig,
    loadWebhookSubscriptions,
    saveWebhookSubscription,
    deleteWebhookSubscription,
    INITIAL_CLIENTS,
    INITIAL_BLOG_BOOKS,
    INITIAL_CONTENT_CALENDARS,
    INITIAL_ARTICLES,
    INITIAL_DATA_SOURCES,
    INITIAL_AI_CONFIGS,
    INITIAL_WEBHOOKS
};
}),
"[project]/src/app/user/components/modules/AiBlogGenerator/services/duplicatePreventionEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PingDart AI Blog OS - Duplicate Prevention Engine
// 4-Level Multistage Detection:
// Level 1: Exact Duplicates (Hash, Slug, Normalized Title)
// Level 2: Similar Titles & Target Keywords (N-gram & Jaccard with Location/Service Divergence)
// Level 3: Semantic & Search Intent Matching (Concept Vector + Search Intent Clustering)
// Level 4: Article Originality vs Client Inventory (Body Shingle Overlap & Citation Check)
__turbopack_context__.s([
    "DUPLICATE_THRESHOLDS",
    ()=>DUPLICATE_THRESHOLDS,
    "calculateJaccardSimilarity",
    ()=>calculateJaccardSimilarity,
    "checkPrePublishSafety",
    ()=>checkPrePublishSafety,
    "generateContentHash",
    ()=>generateContentHash,
    "getCharacterNgrams",
    ()=>getCharacterNgrams,
    "getWordNgrams",
    ()=>getWordNgrams,
    "normalizeText",
    ()=>normalizeText,
    "runClientDuplicateCheck",
    ()=>runClientDuplicateCheck,
    "tokenizeWords",
    ()=>tokenizeWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/services/blogOsStorage.ts [app-ssr] (ecmascript)");
;
const DUPLICATE_THRESHOLDS = {
    EXACT_MATCH: 0.95,
    HIGH_SIMILARITY: 0.75,
    MODERATE_SIMILARITY: 0.45
};
// Common stop words for normalization
const STOP_WORDS = new Set([
    "a",
    "about",
    "above",
    "after",
    "again",
    "against",
    "all",
    "am",
    "an",
    "and",
    "any",
    "are",
    "aren't",
    "as",
    "at",
    "be",
    "because",
    "been",
    "before",
    "being",
    "below",
    "between",
    "both",
    "but",
    "by",
    "can't",
    "cannot",
    "could",
    "couldn't",
    "did",
    "didn't",
    "do",
    "does",
    "doesn't",
    "doing",
    "don't",
    "down",
    "during",
    "each",
    "few",
    "for",
    "from",
    "further",
    "had",
    "hadn't",
    "has",
    "hasn't",
    "have",
    "haven't",
    "having",
    "he",
    "he'd",
    "he'll",
    "he's",
    "her",
    "here",
    "here's",
    "hers",
    "herself",
    "him",
    "himself",
    "his",
    "how",
    "how's",
    "i",
    "i'd",
    "i'll",
    "i'm",
    "i've",
    "if",
    "in",
    "into",
    "is",
    "isn't",
    "it",
    "it's",
    "its",
    "itself",
    "let's",
    "me",
    "more",
    "most",
    "mustn't",
    "my",
    "myself",
    "no",
    "nor",
    "not",
    "of",
    "off",
    "on",
    "once",
    "only",
    "or",
    "other",
    "ought",
    "our",
    "ours",
    "ourselves",
    "out",
    "over",
    "own",
    "same",
    "shan't",
    "she",
    "she'd",
    "she'll",
    "she's",
    "should",
    "shouldn't",
    "so",
    "some",
    "such",
    "than",
    "that",
    "that's",
    "the",
    "their",
    "theirs",
    "them",
    "themselves",
    "then",
    "there",
    "there's",
    "these",
    "they",
    "they'd",
    "they'll",
    "they're",
    "they've",
    "this",
    "those",
    "through",
    "to",
    "too",
    "under",
    "until",
    "up",
    "very",
    "was",
    "wasn't",
    "we",
    "we'd",
    "we'll",
    "we're",
    "we've",
    "were",
    "weren't",
    "what",
    "what's",
    "when",
    "when's",
    "where",
    "where's",
    "which",
    "while",
    "who",
    "who's",
    "whom",
    "why",
    "why's",
    "with",
    "won't",
    "would",
    "wouldn't",
    "you",
    "you'd",
    "you'll",
    "you're",
    "you've",
    "your",
    "yours"
]);
function normalizeText(text) {
    if (!text) return "";
    return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenizeWords(text) {
    const norm = normalizeText(text);
    return norm.split(" ").filter((w)=>w.length > 1 && !STOP_WORDS.has(w));
}
function getCharacterNgrams(text, n = 3) {
    const norm = normalizeText(text).replace(/\s/g, "");
    const ngrams = new Set();
    if (norm.length < n) {
        ngrams.add(norm);
        return ngrams;
    }
    for(let i = 0; i <= norm.length - n; i++){
        ngrams.add(norm.substring(i, i + n));
    }
    return ngrams;
}
function getWordNgrams(words, n = 2) {
    const ngrams = new Set();
    if (words.length < n) {
        ngrams.add(words.join(" "));
        return ngrams;
    }
    for(let i = 0; i <= words.length - n; i++){
        ngrams.add(words.slice(i, i + n).join(" "));
    }
    return ngrams;
}
function calculateJaccardSimilarity(setA, setB) {
    if (setA.size === 0 && setB.size === 0) return 1.0;
    if (setA.size === 0 || setB.size === 0) return 0.0;
    let intersectionSize = 0;
    for (const item of setA){
        if (setB.has(item)) {
            intersectionSize++;
        }
    }
    const unionSize = setA.size + setB.size - intersectionSize;
    return unionSize === 0 ? 0 : intersectionSize / unionSize;
}
function generateContentHash(str) {
    let hash = 0;
    const clean = normalizeText(str);
    for(let i = 0; i < clean.length; i++){
        const char = clean.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return "h_" + Math.abs(hash).toString(36);
}
function runClientDuplicateCheck(clientId, candidate) {
    const matchedItems = [];
    const normCandidateTitle = normalizeText(candidate.title);
    const candidateWords = tokenizeWords(candidate.title);
    const candidateNgrams = getCharacterNgrams(candidate.title, 3);
    const candidateWordBigrams = getWordNgrams(candidateWords, 2);
    const candidateSlug = (candidate.slug || candidate.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^-|-$/g, "");
    const candidateHash = candidate.contentMarkdown ? generateContentHash(candidate.contentMarkdown) : "";
    // 1. Gather all comparison items strictly scoped to this clientId
    const inventoryItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentInventory"])(clientId);
    const clientArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadOsArticles"])().filter((a)=>(a.clientId === clientId || a.projectId === clientId) && a.id !== candidate.articleId);
    const calendarPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentCalendars"])()[clientId];
    const calendarTopics = calendarPlan ? calendarPlan.months.flatMap((m)=>m.items).filter((it)=>it.articleId !== candidate.articleId) : [];
    let maxLevel1Score = 0;
    let maxLevel2Score = 0;
    let maxLevel3Score = 0;
    let maxLevel4Score = 0;
    // Comparison Source A: Content Inventory (Crawled website pages, existing blogs, service pages)
    for (const inv of inventoryItems){
        const invNormTitle = normalizeText(inv.title);
        const invWords = tokenizeWords(inv.title);
        const invNgrams = getCharacterNgrams(inv.title, 3);
        const invBigrams = getWordNgrams(invWords, 2);
        // Level 1: Exact Check
        const isExactTitle = normCandidateTitle === invNormTitle;
        const isExactSlug = candidateSlug.length > 4 && inv.slug && candidateSlug === inv.slug;
        const isExactHash = candidateHash && inv.contentHash && candidateHash === inv.contentHash;
        if (isExactTitle || isExactSlug || isExactHash) {
            maxLevel1Score = 1.0;
            matchedItems.push({
                id: inv.id,
                title: inv.title,
                url: inv.url,
                similarityScore: 1.0,
                level: "level1_exact",
                reason: isExactTitle ? `Exact matching title with existing website page` : isExactSlug ? `Exact slug collision with existing page: /${inv.slug}` : `Identical content hash with indexed page`
            });
            continue;
        }
        // Level 2: Title & Keyword Overlap
        const charJaccard = calculateJaccardSimilarity(candidateNgrams, invNgrams);
        const wordJaccard = calculateJaccardSimilarity(new Set(candidateWords), new Set(invWords));
        const bigramJaccard = calculateJaccardSimilarity(candidateWordBigrams, invBigrams);
        const rawTitleScore = charJaccard * 0.3 + wordJaccard * 0.4 + bigramJaccard * 0.3;
        // Divergence Adjustment (Do not treat legitimately differentiated locations or services as duplicates)
        const divergenceFactors = [];
        let titleScore = rawTitleScore;
        if (candidate.location && inv.targetLocation && candidate.location.toLowerCase() !== inv.targetLocation.toLowerCase()) {
            divergenceFactors.push(`Different location: "${candidate.location}" vs "${inv.targetLocation}"`);
            titleScore = titleScore * 0.65; // Divergent location discount
        }
        if (candidate.serviceOrProduct && inv.serviceOrProduct && candidate.serviceOrProduct.toLowerCase() !== inv.serviceOrProduct.toLowerCase()) {
            divergenceFactors.push(`Different service: "${candidate.serviceOrProduct}" vs "${inv.serviceOrProduct}"`);
            titleScore = titleScore * 0.70; // Divergent service discount
        }
        if (titleScore > maxLevel2Score) {
            maxLevel2Score = titleScore;
        }
        if (titleScore >= DUPLICATE_THRESHOLDS.MODERATE_SIMILARITY) {
            matchedItems.push({
                id: inv.id,
                title: inv.title,
                url: inv.url,
                similarityScore: Number(titleScore.toFixed(3)),
                level: "level2_title_keyword",
                reason: `High topic overlap (${Math.round(titleScore * 100)}%) with existing page`,
                divergenceFactors: divergenceFactors.length > 0 ? divergenceFactors : undefined
            });
        }
        // Level 3: Semantic Intent Matching
        if (candidate.searchIntent && inv.searchIntent) {
            const intentMatches = candidate.searchIntent === inv.searchIntent;
            const kwMatches = candidate.targetKeyword && inv.targetKeyword && normalizeText(candidate.targetKeyword) === normalizeText(inv.targetKeyword);
            if (intentMatches && kwMatches) {
                const intentScore = Math.min(1.0, titleScore + 0.25);
                if (intentScore > maxLevel3Score) maxLevel3Score = intentScore;
                matchedItems.push({
                    id: inv.id + "_intent",
                    title: inv.title,
                    url: inv.url,
                    similarityScore: Number(intentScore.toFixed(3)),
                    level: "level3_semantic_intent",
                    reason: `Identical keyword & search intent: "${candidate.targetKeyword}" (${candidate.searchIntent})`
                });
            }
        }
    }
    // Comparison Source B: Previously Generated / Drafted Articles
    for (const art of clientArticles){
        const artNormTitle = normalizeText(art.title);
        const artWords = tokenizeWords(art.title);
        const artNgrams = getCharacterNgrams(art.title, 3);
        const artBigrams = getWordNgrams(artWords, 2);
        // Level 1: Exact Check
        const isExactTitle = normCandidateTitle === artNormTitle;
        const isExactSlug = candidateSlug.length > 4 && art.slug && candidateSlug === art.slug;
        const isExactHash = candidateHash && art.contentMarkdown && candidateHash === generateContentHash(art.contentMarkdown);
        if (isExactTitle || isExactSlug || isExactHash) {
            maxLevel1Score = 1.0;
            matchedItems.push({
                id: art.id,
                title: art.title,
                url: art.wordpressPublishedUrl,
                similarityScore: 1.0,
                level: "level1_exact",
                reason: isExactTitle ? `Exact matching title with already drafted/published article (${art.status})` : `Exact slug collision with existing article (${art.status})`
            });
            continue;
        }
        // Level 2: Title Overlap
        const charJaccard = calculateJaccardSimilarity(candidateNgrams, artNgrams);
        const wordJaccard = calculateJaccardSimilarity(new Set(candidateWords), new Set(artWords));
        const bigramJaccard = calculateJaccardSimilarity(candidateWordBigrams, artBigrams);
        const rawTitleScore = charJaccard * 0.3 + wordJaccard * 0.4 + bigramJaccard * 0.3;
        const divergenceFactors = [];
        let titleScore = rawTitleScore;
        if (candidate.location && art.targetLocation && candidate.location.toLowerCase() !== art.targetLocation.toLowerCase()) {
            divergenceFactors.push(`Different location: "${candidate.location}" vs "${art.targetLocation}"`);
            titleScore = titleScore * 0.65;
        }
        if (titleScore > maxLevel2Score) {
            maxLevel2Score = titleScore;
        }
        if (titleScore >= DUPLICATE_THRESHOLDS.MODERATE_SIMILARITY) {
            matchedItems.push({
                id: art.id,
                title: art.title,
                url: art.wordpressPublishedUrl,
                similarityScore: Number(titleScore.toFixed(3)),
                level: "level2_title_keyword",
                reason: `Title & concept overlap (${Math.round(titleScore * 100)}%) with draft/article "${art.title}"`,
                divergenceFactors: divergenceFactors.length > 0 ? divergenceFactors : undefined
            });
        }
        // Level 4: Originality Check (Body Content Shingle Overlap)
        if (candidate.contentMarkdown && art.contentMarkdown) {
            const candidateBodyTokens = tokenizeWords(candidate.contentMarkdown);
            const artBodyTokens = tokenizeWords(art.contentMarkdown);
            const candidateBodyShingles = getWordNgrams(candidateBodyTokens, 4);
            const artBodyShingles = getWordNgrams(artBodyTokens, 4);
            const bodyOverlap = calculateJaccardSimilarity(candidateBodyShingles, artBodyShingles);
            if (bodyOverlap > maxLevel4Score) maxLevel4Score = bodyOverlap;
            if (bodyOverlap >= 0.4) {
                matchedItems.push({
                    id: art.id + "_body",
                    title: art.title,
                    url: art.wordpressPublishedUrl,
                    similarityScore: Number(bodyOverlap.toFixed(3)),
                    level: "level4_originality",
                    reason: `High paragraph/body text overlap (${Math.round(bodyOverlap * 100)}%) with article "${art.title}"`
                });
            }
        }
    }
    // Comparison Source C: Existing Calendar Planned Topics
    for (const topic of calendarTopics){
        if (topic.title === candidate.title) continue; // skip identical object if re-evaluating
        const topNormTitle = normalizeText(topic.title);
        const topWords = tokenizeWords(topic.title);
        const topNgrams = getCharacterNgrams(topic.title, 3);
        const topBigrams = getWordNgrams(topWords, 2);
        if (normCandidateTitle === topNormTitle) {
            maxLevel1Score = 1.0;
            matchedItems.push({
                id: topic.id,
                title: topic.title,
                similarityScore: 1.0,
                level: "level1_exact",
                reason: `Exact match with an existing scheduled calendar topic`
            });
            continue;
        }
        const charJaccard = calculateJaccardSimilarity(candidateNgrams, topNgrams);
        const wordJaccard = calculateJaccardSimilarity(new Set(candidateWords), new Set(topWords));
        const bigramJaccard = calculateJaccardSimilarity(candidateWordBigrams, topBigrams);
        const titleScore = charJaccard * 0.3 + wordJaccard * 0.4 + bigramJaccard * 0.3;
        if (titleScore > maxLevel2Score) {
            maxLevel2Score = titleScore;
        }
        if (titleScore >= DUPLICATE_THRESHOLDS.MODERATE_SIMILARITY) {
            matchedItems.push({
                id: topic.id,
                title: topic.title,
                similarityScore: Number(titleScore.toFixed(3)),
                level: "level2_title_keyword",
                reason: `Overlaps with scheduled calendar pillar "${topic.title}"`
            });
        }
    }
    // Calculate Overall Verdict
    const overallScore = Math.max(maxLevel1Score, maxLevel2Score, maxLevel3Score, maxLevel4Score);
    let verdict = 'PASSED';
    let canProceed = true;
    let recommendation = "Content is original and free of duplicate intent.";
    if (maxLevel1Score >= DUPLICATE_THRESHOLDS.EXACT_MATCH) {
        verdict = 'BLOCKED';
        canProceed = false;
        recommendation = "BLOCKED: Exact duplicate detected against existing page, slug, or article. Do not generate or publish.";
    } else if (overallScore >= DUPLICATE_THRESHOLDS.HIGH_SIMILARITY) {
        verdict = 'BLOCKED';
        canProceed = false;
        recommendation = "BLOCKED: Heavy topic/intent collision (>75%). Pivot the core angle, change the target keyword, or select a different service.";
    } else if (overallScore >= DUPLICATE_THRESHOLDS.MODERATE_SIMILARITY) {
        verdict = 'FLAGGED';
        canProceed = true;
        recommendation = "FLAGGED: Moderate concept overlap (45%-75%). Review proposed angle to ensure clear differentiation before publishing.";
    }
    return {
        verdict,
        level1ExactScore: Number(maxLevel1Score.toFixed(2)),
        level2TitleScore: Number(maxLevel2Score.toFixed(2)),
        level3SemanticScore: Number(maxLevel3Score.toFixed(2)),
        level4OriginalityScore: Number(maxLevel4Score.toFixed(2)),
        overallScore: Number(overallScore.toFixed(2)),
        matchedItems: matchedItems.slice(0, 5),
        canProceed,
        recommendation,
        checkedAt: new Date().toISOString()
    };
}
function checkPrePublishSafety(clientId, article) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadBlogClients"])().find((c)=>c.id === clientId);
    const baseUrl = client?.websiteUrl ? client.websiteUrl.replace(/\/$/, "") : "https://example.com";
    const canonicalUrl = article.canonicalUrl || `${baseUrl}/blog/${article.slug}`;
    // Run real-time duplicate check
    const duplicateCheck = runClientDuplicateCheck(clientId, {
        articleId: article.id,
        title: article.title,
        slug: article.slug,
        targetKeyword: article.targetKeyword,
        location: article.targetLocation,
        contentMarkdown: article.contentMarkdown
    });
    const idempotencyKey = article.idempotencyKey || `pub_${article.id}_${generateContentHash(article.title + article.slug)}`;
    if (duplicateCheck.verdict === 'BLOCKED') {
        return {
            canPublish: false,
            reason: duplicateCheck.recommendation,
            idempotencyKey,
            wordpressPostId: article.wordpressPostId,
            canonicalUrl,
            duplicateCheck
        };
    }
    return {
        canPublish: true,
        idempotencyKey,
        wordpressPostId: article.wordpressPostId,
        canonicalUrl,
        duplicateCheck
    };
}
}),
"[project]/src/app/user/components/modules/AiBlogGenerator/services/intelligentContentStrategy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PingDart AI Blog OS - Intelligent Content Strategy Engine (Phase 3)
// 1. Website & Business Opportunity Audit
// 2. Keyword & Search Intent Mapping (Informational, Commercial, Transactional, Local)
// 3. Duplicate-Aware Topic Selection (4-Level Duplicate Engine)
// 4. Rolling 90-Day Strategic Calendar
// 5. Preservation of Approved & Published Work
__turbopack_context__.s([
    "approveContentCalendarStrategy",
    ()=>approveContentCalendarStrategy,
    "auditBusinessOpportunities",
    ()=>auditBusinessOpportunities,
    "generateIntelligentCalendarPlan",
    ()=>generateIntelligentCalendarPlan,
    "revalidateCalendarTopics",
    ()=>revalidateCalendarTopics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/services/blogOsStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$duplicatePreventionEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/services/duplicatePreventionEngine.ts [app-ssr] (ecmascript)");
;
;
function auditBusinessOpportunities(client, blogBook, inventory) {
    const gapInsights = [];
    const candidateTopics = [];
    // Merge services from Knowledge Book and Client Business Profile
    const rawServices = [
        ...blogBook.services
    ];
    if (client.productsAndServices && client.productsAndServices.length > 0) {
        for (const p of client.productsAndServices){
            if (!rawServices.some((s)=>s.name.toLowerCase() === p.name.toLowerCase())) {
                rawServices.push({
                    id: p.id || `srv-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
                    name: p.name,
                    targetUrl: p.destinationUrl || `${client.websiteUrl || "https://example.com"}/services`,
                    description: p.description || "Client service offering",
                    keywords: p.keywords || [
                        p.name.toLowerCase()
                    ]
                });
            }
        }
    }
    const services = rawServices.length > 0 ? rawServices : [
        {
            id: "srv-default",
            name: `${client.industry.replace(/_/g, " ")} Consulting`,
            targetUrl: `${client.websiteUrl || "https://example.com"}/services`,
            description: "Core service offering",
            keywords: [
                client.industry.replace(/_/g, " ")
            ]
        }
    ];
    const primaryLocality = blogBook.targetLocalities[0] || client.city || "Primary Market";
    const baseUrl = (client.websiteUrl || "https://example.com").replace(/\/$/, "");
    // Audit each service for supporting content coverage in inventory
    for (const srv of services){
        const matchingPages = inventory.filter((it)=>it.title.toLowerCase().includes(srv.name.toLowerCase()) || it.url.toLowerCase().includes(srv.targetUrl.toLowerCase()) || it.summary.toLowerCase().includes(srv.name.toLowerCase()));
        const isUnderserved = matchingPages.length <= 1;
        // Content Gap Item
        gapInsights.push({
            id: `gap-${srv.id}`,
            topic: `${srv.name} Knowledge Hub`,
            targetKeyword: srv.name.toLowerCase(),
            category: srv.name,
            status: isUnderserved ? "critical_gap" : "high_opportunity",
            // Non-negotiable: Never invent fake search volumes. Clearly label research status.
            estimatedMonthlySearch: "Research Pending (High Intent)",
            reason: isUnderserved ? `Service has ${matchingPages.length} indexed page(s). Requires educational & commercial supporting pillars.` : `Service has foundational coverage (${matchingPages.length} pages). Ready for comparison & local buyer guides.`
        });
        // ── Generate Qualified Candidate Opportunities ─────────────────────
        // Pillar 1: Informational / Problem-solving (Month 1 Foundation)
        candidateTopics.push({
            topicTitle: `Complete Guide to ${srv.name}: Best Practices, Diagnostic Indicators & Planning`,
            primaryKeyword: `${srv.name.toLowerCase()} guide`,
            secondaryKeywords: [
                `understanding ${srv.name.toLowerCase()}`,
                "procedure overview",
                "expert benchmarks"
            ],
            searchIntent: "informational",
            targetAudience: client.targetAudience || "Prospective clients seeking authoritative guidance",
            serviceOrProductId: srv.id,
            destinationUrl: srv.targetUrl || `${baseUrl}/services`,
            contentGapReason: `Zero in-depth educational guides exist for ${srv.name}. Establishes E-E-A-T leadership for ${blogBook.doctorOrFounderProfile?.name || client.businessName}.`,
            priorityScore: 92,
            evidenceSources: [
                srv.targetUrl,
                `${baseUrl}/about`
            ],
            suggestedWordCount: 1500,
            monthIndex: 1
        });
        // Pillar 2: Commercial / Evaluation Guide (Month 2 Acceleration)
        candidateTopics.push({
            topicTitle: `How to Choose the Right ${srv.name} Specialist: Evaluation Checklist & Cost Factors`,
            primaryKeyword: `choose ${srv.name.toLowerCase()} specialist`,
            secondaryKeywords: [
                `${srv.name.toLowerCase()} cost factors`,
                "selection criteria",
                "verified standards"
            ],
            searchIntent: "commercial",
            targetAudience: client.targetAudience || "High-intent buyers evaluating competitive providers",
            serviceOrProductId: srv.id,
            destinationUrl: srv.targetUrl || `${baseUrl}/services`,
            contentGapReason: `Captures high-intent commercial evaluation traffic comparing providers against ${client.businessName}.`,
            priorityScore: 88,
            evidenceSources: [
                srv.targetUrl
            ],
            suggestedWordCount: 1600,
            monthIndex: 2
        });
        // Pillar 3: Transactional / Consultation & Booking Guide (Month 2 Transactional)
        candidateTopics.push({
            topicTitle: `Consultation & Onboarding for ${srv.name}: Pricing Structure, Milestones & Booking`,
            primaryKeyword: `book ${srv.name.toLowerCase()} consultation`,
            secondaryKeywords: [
                `${srv.name.toLowerCase()} pricing`,
                "service onboarding",
                "appointment booking"
            ],
            searchIntent: "transactional",
            targetAudience: `Ready-to-hire clients looking to engage ${client.businessName} for ${srv.name}`,
            serviceOrProductId: srv.id,
            destinationUrl: `${baseUrl}/contact`,
            contentGapReason: `Direct conversion bridge addressing onboarding, pricing expectations and booking logistics for ${srv.name}.`,
            priorityScore: 94,
            evidenceSources: [
                srv.targetUrl,
                `${baseUrl}/contact`
            ],
            suggestedWordCount: 1250,
            monthIndex: 2
        });
        // Pillar 4: Local Authority Guide (Month 3 Authority)
        candidateTopics.push({
            topicTitle: `${srv.name} in ${primaryLocality}: Regulations, Clinical Standards & Patient Care`,
            primaryKeyword: `${srv.name.toLowerCase()} ${primaryLocality.toLowerCase()}`,
            secondaryKeywords: [
                `best ${srv.name.toLowerCase()} in ${primaryLocality.toLowerCase()}`,
                "local compliance"
            ],
            searchIntent: "local",
            targetAudience: `Local clients & decision makers located in ${primaryLocality}`,
            serviceOrProductId: srv.id,
            destinationUrl: srv.targetUrl || `${baseUrl}/services`,
            contentGapReason: `Captures geo-targeted queries for ${primaryLocality} with zero keyword cannibalization on general service pages.`,
            priorityScore: 85,
            evidenceSources: [
                srv.targetUrl,
                `${baseUrl}/contact`
            ],
            suggestedWordCount: 1400,
            monthIndex: 3
        });
    }
    // Check Knowledge Book FAQs for underserved question topics
    const faqs = blogBook.masterFaqs || [];
    if (faqs.length > 0) {
        const topFaq = faqs[0];
        const faqTitle = topFaq.question.endsWith("?") ? topFaq.question.slice(0, -1) : topFaq.question;
        candidateTopics.push({
            topicTitle: `Client FAQ Guide: ${faqTitle} Explained by ${blogBook.doctorOrFounderProfile?.name || client.businessName}`,
            primaryKeyword: `${topFaq.question.toLowerCase().replace(/[^a-z0-9 ]/g, "").slice(0, 40).trim()}`,
            secondaryKeywords: [
                "frequently asked questions",
                "expert advice",
                "key considerations"
            ],
            searchIntent: "informational",
            targetAudience: client.targetAudience || "Prospective clients seeking clear answers to critical questions",
            serviceOrProductId: services[0]?.id || "srv-default",
            destinationUrl: `${baseUrl}/faqs`,
            contentGapReason: `Grounds content strategy in verified client FAQ. Resolves common hesitation points before engagement.`,
            priorityScore: 89,
            evidenceSources: [
                `${baseUrl}/faqs`,
                `${baseUrl}/about`
            ],
            suggestedWordCount: 1350,
            monthIndex: 1
        });
    }
    // Common Compliance & Pitfalls Pillar (Month 1)
    candidateTopics.push({
        topicTitle: `Common Strategic Pitfalls in ${client.industry.replace(/_/g, " ")}: 2026 Compliance & Audit Review`,
        primaryKeyword: `${client.industry.replace(/_/g, " ")} compliance guide 2026`,
        secondaryKeywords: [
            "regulatory updates",
            "audit precautions",
            "risk mitigation"
        ],
        searchIntent: "informational",
        targetAudience: client.targetAudience || "Operations and compliance leads",
        serviceOrProductId: services[0]?.id || "srv-default",
        destinationUrl: `${baseUrl}/services`,
        contentGapReason: `High-authority thought leadership covering regulatory guidelines for ${client.businessName}.`,
        priorityScore: 90,
        evidenceSources: [
            `${baseUrl}/about`
        ],
        suggestedWordCount: 1650,
        monthIndex: 1
    });
    return {
        gapInsights,
        candidateTopics
    };
}
// In-flight concurrency lock to guarantee atomic calendar generation
const inFlightCalendarGenerations = new Map();
async function generateIntelligentCalendarPlan(clientId, options = {
    preserveApproved: true
}) {
    // Prevent concurrent duplicate calendar generation runs
    if (inFlightCalendarGenerations.has(clientId)) {
        return inFlightCalendarGenerations.get(clientId);
    }
    const runPlanGeneration = async ()=>{
        // Microtask yield ensures map entry is registered before execution
        await Promise.resolve();
        try {
            const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadBlogClients"])();
            const client = clients.find((c)=>c.id === clientId) || {
                id: clientId,
                workspaceId: "ws-default",
                name: "Client",
                businessName: "Business",
                industry: "general_business",
                websiteUrl: "https://example.com",
                contactEmail: "",
                contactPhone: "",
                whatsappEnabled: false,
                targetAudience: "",
                city: "Headquarters",
                createdAt: new Date().toISOString()
            };
            const blogBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveBlogBook"])(clientId);
            const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentInventory"])(clientId);
            const existingArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientArticles"])(clientId);
            const existingCalendars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentCalendars"])();
            const previousPlan = existingCalendars[clientId];
            // Step 1: Audit Opportunities based on Knowledge Book & Site Inventory
            const { gapInsights, candidateTopics } = auditBusinessOpportunities(client, blogBook, inventory);
            // Step 2: Separate previously approved/drafted items to preserve
            const preservedItemsByMonth = {
                1: [],
                2: [],
                3: []
            };
            if (options.preserveApproved && previousPlan) {
                for (const month of previousPlan.months){
                    for (const item of month.items){
                        const isProtected = item.status === "approved" || item.status === "drafted" || item.status === "published" || item.status === "in_review" || item.calendarStatus === "approved" || item.calendarStatus === "scheduled" || item.calendarStatus === "drafted" || item.articleId !== undefined;
                        if (isProtected) {
                            const mIdx = month.monthIndex;
                            if (preservedItemsByMonth[mIdx]) {
                                preservedItemsByMonth[mIdx].push(item);
                            }
                        }
                    }
                }
            }
            // Step 3: Run 4-Level Duplicate Prevention Engine on each candidate topic
            const validatedItemsByMonth = {
                1: [],
                2: [],
                3: []
            };
            // Add preserved items first
            for(let m = 1; m <= 3; m++){
                validatedItemsByMonth[m] = [
                    ...preservedItemsByMonth[m] || []
                ];
            }
            // Filter and insert candidate opportunities
            for (const candidate of candidateTopics){
                const mIdx = candidate.monthIndex;
                // Don't duplicate if already preserved in calendar
                const alreadyInMonth = validatedItemsByMonth[mIdx].some((it)=>it.title.toLowerCase().trim() === candidate.topicTitle.toLowerCase().trim());
                if (alreadyInMonth) continue;
                // Run 4-Level Duplicate Check
                const dupResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$duplicatePreventionEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runClientDuplicateCheck"])(clientId, {
                    title: candidate.topicTitle,
                    targetKeyword: candidate.primaryKeyword,
                    searchIntent: candidate.searchIntent,
                    location: candidate.searchIntent === "local" ? client.city : undefined,
                    serviceOrProduct: candidate.serviceOrProductId
                });
                // Exclude blocked candidates
                if (dupResult.verdict === "BLOCKED") {
                    continue;
                }
                // Calculate rolling 90-day publication date
                const itemIdx = validatedItemsByMonth[mIdx].length;
                const baseDayOffset = mIdx === 1 ? 7 : mIdx === 2 ? 37 : 67;
                const offsetDays = baseDayOffset + itemIdx * 7;
                const suggestedPublishDate = new Date(Date.now() + offsetDays * 86400000).toISOString().split("T")[0];
                const calendarItem = {
                    id: `topic-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                    clientId,
                    monthIndex: mIdx,
                    monthName: mIdx === 1 ? "Month 1: Client Education & Core Foundations" : mIdx === 2 ? "Month 2: Commercial Intent & Selection Frameworks" : "Month 3: Regional Leadership & Conversion Catalysts",
                    title: candidate.topicTitle,
                    topicTitle: candidate.topicTitle,
                    targetKeyword: candidate.primaryKeyword,
                    primaryKeyword: candidate.primaryKeyword,
                    secondaryKeywords: candidate.secondaryKeywords,
                    searchIntent: candidate.searchIntent,
                    difficulty: "unverified",
                    priority: candidate.priorityScore >= 90 ? "high" : "medium",
                    priorityScore: candidate.priorityScore,
                    suggestedWordCount: candidate.suggestedWordCount,
                    status: "planned",
                    calendarStatus: "proposed",
                    duplicateStatus: dupResult.verdict === "PASSED" ? "passed" : dupResult.verdict === "FLAGGED" ? "flagged" : "blocked",
                    targetAudience: candidate.targetAudience,
                    serviceOrProductId: candidate.serviceOrProductId,
                    destinationUrl: candidate.destinationUrl,
                    contentGapReason: candidate.contentGapReason,
                    evidenceSources: candidate.evidenceSources,
                    suggestedPublishDate,
                    duplicateCheckResult: dupResult
                };
                validatedItemsByMonth[mIdx].push(calendarItem);
            }
            // Construct New 3-Month Plan
            const newPlan = {
                id: previousPlan?.id || `cal-${clientId}-plan`,
                projectId: `proj-${clientId}`,
                clientId,
                strategyStatus: previousPlan?.strategyStatus || "draft_review",
                generatedAt: new Date().toISOString(),
                theme: `${client.businessName || client.name} Business-Grounded Authority & Client Acquisition Strategy`,
                gapInsights,
                months: [
                    {
                        monthIndex: 1,
                        monthName: "Month 1: Client Education & Core Foundations",
                        objective: `Establish foundational authority for ${client.businessName} and address top educational client queries.`,
                        items: validatedItemsByMonth[1]
                    },
                    {
                        monthIndex: 2,
                        monthName: "Month 2: Commercial Intent & Selection Frameworks",
                        objective: `Capture high-intent commercial buyers comparing services and evaluating solutions in ${client.city}.`,
                        items: validatedItemsByMonth[2]
                    },
                    {
                        monthIndex: 3,
                        monthName: "Month 3: Regional Leadership & Conversion Catalysts",
                        objective: `Accelerate localized market leadership and transactional appointments across ${client.city}.`,
                        items: validatedItemsByMonth[3]
                    }
                ]
            };
            existingCalendars[clientId] = newPlan;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveContentCalendars"])(existingCalendars);
            return newPlan;
        } finally{
            inFlightCalendarGenerations.delete(clientId);
        }
    };
    const generationPromise = runPlanGeneration();
    inFlightCalendarGenerations.set(clientId, generationPromise);
    return generationPromise;
}
function revalidateCalendarTopics(clientId, calendar) {
    const updatedPlan = {
        ...calendar,
        months: calendar.months.map((m)=>({
                ...m,
                items: m.items.map((item)=>{
                    // Run fresh duplicate check against current inventory
                    const dupResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$duplicatePreventionEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runClientDuplicateCheck"])(clientId, {
                        title: item.title,
                        targetKeyword: item.targetKeyword,
                        searchIntent: item.searchIntent,
                        location: item.searchIntent === "local" ? undefined : undefined,
                        articleId: item.articleId
                    });
                    return {
                        ...item,
                        duplicateCheckResult: dupResult
                    };
                })
            }))
    };
    const allCalendars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentCalendars"])();
    allCalendars[clientId] = updatedPlan;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveContentCalendars"])(allCalendars);
    return updatedPlan;
}
function approveContentCalendarStrategy(clientId) {
    const allCalendars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadContentCalendars"])();
    const plan = allCalendars[clientId];
    if (!plan) throw new Error("Calendar plan not found");
    plan.strategyStatus = "approved_active";
    plan.approvedAt = new Date().toISOString();
    plan.months = plan.months.map((m)=>({
            ...m,
            items: m.items.map((it)=>({
                    ...it,
                    calendarStatus: it.calendarStatus === "proposed" ? "approved" : it.calendarStatus
                }))
        }));
    allCalendars[clientId] = plan;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveContentCalendars"])(allCalendars);
    return plan;
}
}),
];

//# sourceMappingURL=src_app_user_components_modules_AiBlogGenerator_services_e3744b8e._.js.map