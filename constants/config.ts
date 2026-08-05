export const APP_CONFIG = {
    appName: "Ashutosh Portfolio",

    shortName: "Portfolio",

    version: "1.0.0",

    author: "Ashutosh Maurya",

    description:
        "Senior Frontend Engineer Portfolio with AI Assistant",

    defaultTheme: "dark",

    language: "en",

    timezone: "Asia/Kolkata",
};

export const API_CONFIG = {
    chatRoute: "/api/chat",

    timeout: 30000,

    maxRetries: 2,
};

export const CHAT_CONFIG = {
    maxMessages: 50,

    maxCharacters: 1000,

    enableStreaming: true,

    autoScroll: true,

    persistHistory: true,

    typingSpeed: 15,
};

export const AI_MODEL_CONFIG = {
    provider: "groq",
    temperature: 0.4,
    maxTokens: 2048,
} as const;

export const FEATURE_FLAGS = {
    enableAI: true,

    enableThemeSwitcher: true,

    enableResumeDownload: true,

    enableAnimations: true,

    enableSuggestions: true,

    enableMarkdown: true,

    enableTypingAnimation: true,

    enableCopyMessage: true,

    enableChatHistory: true,
};

export const SEO_CONFIG = {
    title: "Ashutosh Maurya",

    description:
        "Senior Frontend Engineer specializing in React, Next.js, TypeScript and AI.",

    keywords: [
        "React",
        "Next.js",
        "Frontend",
        "TypeScript",
        "AI",
        "Portfolio",
    ],

    robots: "index,follow",
};

export default APP_CONFIG;