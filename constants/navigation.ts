export interface NavigationItem {
    id: number;
    title: string;
    href: string;
    external?: boolean;
}

export const navigation: NavigationItem[] = [
    {
        id: 1,
        title: "Home",
        href: "#hero",
    },

    {
        id: 2,
        title: "About",
        href: "#about",
    },

    {
        id: 3,
        title: "Skills",
        href: "#skills",
    },

    {
        id: 4,
        title: "Experience",
        href: "#experience",
    },

    {
        id: 5,
        title: "Projects",
        href: "#projects",
    },

    {
        id: 6,
        title: "Education",
        href: "#education",
    },

    {
        id: 7,
        title: "Contact",
        href: "#contact",
    },
];

export const footerNavigation: NavigationItem[] = [
    {
        id: 1,
        title: "Privacy Policy",
        href: "/privacy",
    },

    {
        id: 2,
        title: "Terms",
        href: "/terms",
    },

    {
        id: 3,
        title: "GitHub",
        href: "https://github.com/Ashutosh-Maurya-87",
        external: true,
    },

    {
        id: 4,
        title: "LinkedIn",
        href: "https://linkedin.com/in/ashutosh-maurya-react",
        external: true,
    },
];

export const quickQuestions = [
    "Tell me about Ashutosh",

    "Show React projects",

    "What AI projects has he built?",

    "What are his skills?",

    "Download Resume",

    "How can I contact him?",

    "Is he available for work?",

    "What companies has he worked for?",

    "Show Next.js projects",

    "What is his experience?",
];

export default navigation;