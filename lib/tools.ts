import portfolioService from "./portfolio";

export type ToolType =
    | "resume"
    | "projects"
    | "contact"
    | "skills"
    | "experience"
    | "education";

export interface ToolResponse {
    type: ToolType;

    message: string;

    data: unknown;
}

export function executeTool(
    action: string
): ToolResponse | null {
    switch (action) {
        case "resume":
            return {
                type: "resume",

                message:
                    "You can download my latest resume below.",

                data: portfolioService.getResume(),
            };

        case "projects":
            return {
                type: "projects",

                message:
                    "Here are some of my featured projects.",

                data: portfolioService.getProjects(),
            };

        case "contact":
            return {
                type: "contact",

                message:
                    "Here are my contact details.",

                data: portfolioService.getContact(),
            };

        case "skills":
            return {
                type: "skills",

                message:
                    "These are my technical skills.",

                data: portfolioService.getSkills(),
            };

        case "experience":
            return {
                type: "experience",

                message:
                    "Here's a summary of my professional experience.",

                data: portfolioService.getExperiences(),
            };

        case "education":
            return {
                type: "education",

                message:
                    "Here's my educational background.",

                data: portfolioService.getEducation(),
            };

        default:
            return null;
    }
}