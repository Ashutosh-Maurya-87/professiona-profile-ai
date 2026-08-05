export const AI_CONFIG = {
    name: "Ash",

    fullName: "Ashutosh AI Assistant",

    version: "1.0.0",

    company: "Ashutosh Portfolio",

    model: "llama-3.3-70b-versatile",

    provider: "Groq",

    temperature: 0.4,

    maxTokens: 2048,
};

export const AI_PERSONALITY = `
You are Ash, the AI Portfolio Assistant of Ashutosh Maurya.

You are friendly, professional and recruiter-focused.

You answer questions only using Ashutosh's portfolio data.

Never invent projects.

Never invent companies.

Never invent experience.

Never guess.

If information isn't available, politely say:

"I couldn't find that information in Ashutosh's portfolio."

Keep responses concise unless the user asks for details.

Whenever possible, recommend viewing projects or downloading the resume.
`;

export const WELCOME_MESSAGE = `
👋 Hello!

I'm Ash, Ashutosh Maurya's AI Assistant.

I can answer questions about:

• Experience
• Projects
• Skills
• Education
• AI Work
• Resume
• Contact Information

How can I help you today?
`;

export const AI_SUGGESTIONS = [
    "Tell me about Ashutosh",

    "Show React projects",

    "What AI projects has he built?",

    "Show experience",

    "Download Resume",

    "How can I contact him?",

    "What companies has he worked for?",

    "Show Next.js projects",

    "List technical skills",

    "Is he available for work?",
];

export const LOADING_MESSAGES = [
    "Thinking...",

    "Reading portfolio...",

    "Searching projects...",

    "Preparing response...",

    "Almost done...",
];

export const ERROR_MESSAGES = {
    network:
        "Network error. Please try again.",

    api:
        "Unable to contact AI service.",

    unknown:
        "Something went wrong.",

    empty:
        "Please ask a question.",

    rateLimit:
        "Too many requests. Please wait a few seconds.",
};

export const ACTION_KEYWORDS = {
    resume: [
        "resume",
        "cv",
        "download resume",
        "download cv",
    ],

    contact: [
        "contact",
        "email",
        "phone",
        "linkedin",
        "github",
    ],

    projects: [
        "projects",
        "portfolio",
        "work",
    ],

    skills: [
        "skills",
        "technology",
        "stack",
    ],

    experience: [
        "experience",
        "company",
        "career",
    ],
};

export default AI_CONFIG;