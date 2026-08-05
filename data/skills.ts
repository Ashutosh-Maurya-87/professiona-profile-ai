export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend Development",

    description: "Modern frontend technologies",

    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Responsive Design",
      "Framer Motion",
    ],
  },

  {
    title: "State Management",

    description: "Application state",

    skills: [
      "Redux",
      "Redux Toolkit",
      "Context API",
      "React Query",
      "Zustand",
    ],
  },

  {
    title: "AI Development",

    description: "Generative AI & LLM",

    skills: [
      "OpenAI API",
      "Groq API",
      "AI SDK",
      "Prompt Engineering",
      "LLM Streaming",
      "RAG",
      "Generative AI",
      "Chatbots",
      "AI Assistants",
      "Function Calling",
    ],
  },

  {
    title: "Backend",

    description: "API Development",

    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "JWT",
      "Axios",
    ],
  },

  {
    title: "Real-Time",

    description: "Communication",

    skills: [
      "WebSockets",
      "Socket.io",
      "Real-time Notifications",
      "Live Dashboard",
      "Realtime Chat",
    ],
  },

  {
    title: "Performance",

    description: "Optimization",

    skills: [
      "Memoization",
      "React.memo",
      "useMemo",
      "useCallback",
      "Lazy Loading",
      "Code Splitting",
      "React Virtualization",
      "Performance Profiling",
      "Lighthouse",
    ],
  },

  {
    title: "Testing",

    description: "Quality",

    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Integration Testing",
      "Cypress",
      "ESLint",
      "Prettier",
    ],
  },

  {
    title: "Tools",

    description: "Development Tools",

    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "VS Code",
      "Postman",
      "Figma",
      "npm",
    ],
  },

  {
    title: "Soft Skills",

    description: "Professional Skills",

    skills: [
      "Leadership",
      "Mentoring",
      "Communication",
      "Problem Solving",
      "Agile",
      "Scrum",
      "Code Review",
      "Team Collaboration",
    ],
  },
];

export const allSkills = skills.flatMap((item) => item.skills);

export default skills;