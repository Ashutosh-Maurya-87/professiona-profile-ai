export interface Education {
    id: number;

    degree: string;

    institute: string;

    duration: string;

    percentage?: string;

    location: string;

    description: string;
}

export interface Certification {
    id: number;

    title: string;

    organization: string;

    year: string;

    credentialUrl?: string;

    skills: string[];
}

export const education: Education[] = [
    {
        id: 1,

        degree: "Bachelor of Computer Applications (BCA)",

        institute:
            "Dr. Ram Manohar Lohia Awadh University",

        duration: "2017 - 2020",

        percentage: "73%",

        location: "Ayodhya, Uttar Pradesh",

        description:
            "Focused on Computer Science, Programming, Web Development, Database Management and Software Engineering.",
    },

    {
        id: 2,

        degree: "Intermediate (12th)",

        institute: "M.S.S Naaz Inter College",

        duration: "2015 - 2017",

        percentage: "73%",

        location: "Ayodhya, Uttar Pradesh",

        description:
            "Science stream with Mathematics.",
    },
];

export const certifications: Certification[] = [
    {
        id: 1,

        title: "Frontend Developer (React)",

        organization: "HackerRank",

        year: "2025",

        skills: [
            "React",
            "JavaScript",
            "Frontend Development",
        ],
    },

    {
        id: 2,

        title: "AI for All: From Basics to Generative AI",

        organization:
            "NVIDIA Deep Learning Institute",

        year: "2025",

        skills: [
            "Artificial Intelligence",
            "Generative AI",
            "LLM",
        ],
    },

    {
        id: 3,

        title: "Microsoft Copilot Studio",

        organization: "Microsoft",

        year: "2026",

        skills: [
            "Copilot",
            "AI",
            "Automation",
        ],
    },
];

export const languages = [
    "English",
    "Hindi",
];

export const careerObjective = `
Passionate Frontend Engineer with over 6 years of experience building scalable, high-performance web applications using React, Next.js, TypeScript and AI technologies.

I enjoy solving complex UI problems, integrating LLMs, designing enterprise dashboards and building modern AI-powered user experiences.

Currently looking for opportunities where I can contribute to large-scale frontend systems while expanding my expertise in AI Engineering and Cloud technologies.
`;

export default education;