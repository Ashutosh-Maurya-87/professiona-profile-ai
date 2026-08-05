import { streamText } from "ai";

import groqModel from "./groq";
import { createSystemPrompt } from "./prompt";
import { detectAction } from "./actions";
import { executeTool } from "./tools";

export async function generatePortfolioResponse(
    message: string,
    history: {
        role: "user" | "assistant";
        content: string;
    }[] = []
) {
    const action = detectAction(message);

    const tool = executeTool(action);

    if (tool) {
        return tool;
    }

    return streamText({
        model: groqModel,

        system: createSystemPrompt(),

        messages: [
            ...history,
            {
                role: "user",
                content: message,
            },
        ],
    });
}