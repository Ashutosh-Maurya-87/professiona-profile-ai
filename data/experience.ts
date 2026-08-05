export interface Experience {
    id: number;

    company: string;

    designation: string;

    employmentType: string;

    duration: string;

    location: string;

    current: boolean;

    summary: string;

    achievements: string[];

    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,

        company: "ContactPoint360",

        designation: "Senior Frontend Engineer",

        employmentType: "Full Time",

        duration: "Nov 2022 - Present",

        location: "Remote",

        current: true,

        summary:
            "Leading frontend architecture and AI product development using React, Next.js, TypeScript, Redux, OpenAI APIs and WebSockets.",

        achievements: [
            "Built BeyondQA from scratch.",
            "Integrated OpenAI Streaming APIs.",
            "Built RAG powered AI interface.",
            "Reduced API latency by 25%.",
            "Improved rendering performance by 40%.",
            "Built virtualized tables for 500K+ records.",
            "Developed Scheduly AI workforce platform.",
            "Integrated realtime WebSocket notifications.",
            "Mentored junior developers.",
            "Achieved 78%+ test coverage.",
        ],

        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Material UI",
            "AI SDK",
            "OpenAI",
            "WebSocket",
            "React Query",
            "REST API",
        ],
    },

    {
        id: 2,

        company: "Freelancing",

        designation: "Frontend Developer",

        employmentType: "Freelance",

        duration: "Jun 2021 - Present",

        location: "Remote",

        current: true,

        summary:
            "Developed multiple production-grade web applications for startups and clients.",

        achievements: [
            "Built TravelWithPro.",
            "Optimized Lighthouse score from 54 to 87.",
            "Integrated Google Maps.",
            "Built responsive travel booking platform.",
            "Created CI/CD deployment pipeline.",
        ],

        technologies: [
            "React",
            "Redux",
            "TypeScript",
            "Google Maps",
            "Vercel",
            "GitHub Actions",
        ],
    },

    {
        id: 3,

        company: "DDeveloper",

        designation: "Frontend Developer",

        employmentType: "Full Time",

        duration: "Jan 2022 - Sep 2022",

        location: "Ludhiana",

        current: false,

        summary:
            "Worked on enterprise applications including Shipcom, Faircent, Cribfox and LeadSquared.",

        achievements: [
            "Built Shipcom communication platform.",
            "Implemented realtime WebSocket architecture.",
            "Achieved 99.8% uptime.",
            "Developed Faircent Loan Application.",
            "Developed Cribfox e-sign workflow.",
            "Built LeadSquared Admission Portal.",
            "Improved admin productivity.",
        ],

        technologies: [
            "React",
            "Next.js",
            "Redux",
            "WebSocket",
            "Material UI",
            "REST API",
        ],
    },

    {
        id: 4,

        company: "Poly9",

        designation: "Frontend Developer",

        employmentType: "Full Time",

        duration: "Nov 2021 - Jan 2022",

        location: "Ahmedabad",

        current: false,

        summary:
            "Worked on realtime dashboards, GraphQL applications and infrastructure monitoring systems.",

        achievements: [
            "Built realtime monitoring dashboard.",
            "Integrated GraphQL.",
            "Built analytics dashboard.",
            "Improved page performance by 40%.",
        ],

        technologies: [
            "React",
            "GraphQL",
            "Context API",
            "MongoDB",
            "Material UI",
        ],
    },
];

export const currentCompany = experiences.find(
    (item) => item.current
);

export default experiences;