export type AssistantAction =
  | "resume"
  | "projects"
  | "contact"
  | "skills"
  | "experience"
  | "education"
  | "general";

const ACTION_KEYWORDS: Record<
  AssistantAction,
  string[]
> = {
  resume: [
    "resume",
    "cv",
    "curriculum",
    "download resume",
    "download cv",
  ],

  projects: [
    "project",
    "projects",
    "portfolio",
    "work",
    "github project",
    "application",
    "apps",
    "show project",
  ],

  contact: [
    "contact",
    "email",
    "phone",
    "call",
    "hire",
    "reach",
    "linkedin",
    "whatsapp",
  ],

  skills: [
    "skill",
    "skills",
    "technology",
    "tech stack",
    "react",
    "next",
    "typescript",
    "javascript",
    "frontend",
    "backend",
    "ai",
    "openai",
    "groq",
  ],

  experience: [
    "experience",
    "company",
    "companies",
    "career",
    "worked",
    "job",
    "employment",
  ],

  education: [
    "education",
    "college",
    "degree",
    "study",
    "graduation",
    "school",
    "qualification",
  ],

  general: [],
};

export function detectAction(
  message: string
): AssistantAction {
  const input = message.toLowerCase();

  for (const [action, keywords] of Object.entries(
    ACTION_KEYWORDS
  )) {
    if (
      keywords.some((keyword) =>
        input.includes(keyword)
      )
    ) {
      return action as AssistantAction;
    }
  }

  return "general";
}