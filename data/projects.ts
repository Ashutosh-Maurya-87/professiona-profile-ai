export interface Project {
    id: number;

    title: string;

    slug: string;

    featured: boolean;

    company: string;

    role: string;

    duration: string;

    description: string;

    problem: string;

    solution: string;

    impact: string[];

    technologies: string[];

    features: string[];

    github?: string;

    live?: string;

    image?: string;
}

export const projects: Project[] = [
    {
        id: 1,

        title: "BeyondQA",

        slug: "beyondqa",

        featured: true,

        company: "ContactPoint360",

        role: "Senior Frontend Engineer",

        duration: "2023 - Present",

        description:
            "AI-powered quality management platform built for enterprise call centers.",

        problem:
            "Manual quality audits were slow, inconsistent, and difficult to scale.",

        solution:
            "Built the frontend architecture from scratch, integrated OpenAI streaming APIs, implemented RAG-powered insights, and created high-performance dashboards.",

        impact: [
            "30% increase in user adoption",
            "25% lower API latency",
            "40% faster rendering",
        ],

        technologies: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Material UI",
            "React Query",
            "OpenAI",
            "AI SDK",
            "RAG",
        ],

        features: [
            "AI Chat",
            "Streaming Responses",
            "Quality Dashboard",
            "Analytics",
            "Charts",
            "Virtualization",
            "Filters",
            "Export",
        ],
    },

    {
        id: 2,

        title: "Scheduly AI",

        slug: "scheduly-ai",

        featured: true,

        company: "ContactPoint360",

        role: "Senior Frontend Engineer",

        duration: "2024",

        description:
            "AI-powered workforce scheduling platform.",

        problem:
            "Managers spent hours creating schedules manually.",

        solution:
            "Created an intelligent shift planner with WebSocket-powered live updates.",

        impact: [
            "20% less scheduling effort",
            "8 hours saved every week",
        ],

        technologies: [
            "React",
            "Redux",
            "WebSocket",
            "Material UI",
        ],

        features: [
            "Calendar",
            "Shift Planning",
            "Notifications",
            "Realtime Update",
        ],
    },

    {
        id: 3,

        title: "Shipcom",

        slug: "shipcom",

        featured: true,

        company: "DDeveloper",

        role: "Frontend Developer",

        duration: "2022",

        description:
            "Mission-critical communication dashboard for the U.S. Navy.",

        problem:
            "Needed reliable communication during unstable network conditions.",

        solution:
            "Implemented reconnect logic, offline queue, and real-time communication.",

        impact: [
            "99.8% uptime",
            "Mission Critical",
        ],

        technologies: [
            "React",
            "WebSocket",
            "Redux",
            "Material UI",
        ],

        features: [
            "Realtime Communication",
            "Offline Queue",
            "Messaging",
            "Signal Recovery",
        ],
    },

    {
        id: 4,

        title: "TravelWithPro",

        slug: "travelwithpro",

        featured: false,

        company: "Freelance",

        role: "Frontend Architect",

        duration: "2022",

        description:
            "Travel booking and itinerary platform.",

        problem:
            "Slow application with poor Lighthouse score.",

        solution:
            "Optimized bundle size, lazy loading, and rendering performance.",

        impact: [
            "Lighthouse improved from 54 to 87",
            "200+ daily users",
        ],

        technologies: [
            "React",
            "Redux",
            "Google Maps",
            "TypeScript",
        ],

        features: [
            "Booking",
            "Maps",
            "Hotels",
            "Packages",
            "Responsive UI",
        ],
    },

    {
        id: 5,

        title: "Faircent",

        slug: "faircent",

        featured: false,

        company: "DDeveloper",

        role: "Frontend Developer",

        duration: "2022",

        description:
            "Loan application platform built using Next.js.",

        problem:
            "High abandonment during loan application.",

        solution:
            "Designed a progressive multi-step application flow.",

        impact: [
            "18% lower abandonment",
        ],

        technologies: [
            "Next.js",
            "React",
            "Material UI",
        ],

        features: [
            "Loan Application",
            "SSR",
            "Authentication",
        ],
    },

    {
        id: 6,

        title: "Cribfox",

        slug: "cribfox",

        featured: false,

        company: "DDeveloper",

        role: "Frontend Developer",

        duration: "2022",

        description:
            "Digital e-signature workflow platform.",

        problem:
            "Paper-based document approval process.",

        solution:
            "Implemented secure electronic signature workflow.",

        impact: [
            "25% faster approvals",
        ],

        technologies: [
            "React",
            "Next.js",
            "REST API",
        ],

        features: [
            "E-Signature",
            "Authentication",
            "Documents",
        ],
    },

    {
        id: 7,

        title: "LeadSquared",

        slug: "leadsquared",

        featured: false,

        company: "DDeveloper",

        role: "Frontend Developer",

        duration: "2022",

        description:
            "Student admission management portal.",

        problem:
            "Manual admission workflow.",

        solution:
            "Built automated admission dashboard.",

        impact: [
            "25% lower admin effort",
        ],

        technologies: [
            "React",
            "Material UI",
            "Redux",
        ],

        features: [
            "Admission",
            "Dashboard",
            "Reports",
        ],
    },

    {
        id: 8,

        title: "GSV Network",

        slug: "gsv-network",

        featured: false,

        company: "Poly9",

        role: "Frontend Developer",

        duration: "2021",

        description:
            "Realtime infrastructure monitoring dashboard.",

        problem:
            "Network monitoring was delayed.",

        solution:
            "Implemented realtime infrastructure visualization.",

        impact: [
            "Realtime Monitoring",
        ],

        technologies: [
            "React",
            "GraphQL",
            "WebSocket",
        ],

        features: [
            "Dashboard",
            "Realtime",
            "Analytics",
        ],
    },
];

export const featuredProjects = projects.filter(
    (project) => project.featured
);

export default projects;