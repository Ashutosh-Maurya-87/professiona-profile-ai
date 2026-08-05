import { groq } from "@ai-sdk/groq";

import { AI_MODEL_CONFIG } from "@/constants/config";

export const groqModel = groq(AI_MODEL_CONFIG.model);

export const GROQ_CONFIG = {
    provider: "groq",

    model: AI_MODEL_CONFIG.model,

    temperature: AI_MODEL_CONFIG.temperature,

    maxTokens: AI_MODEL_CONFIG.maxTokens,
};

export function getGroqModel() {
    return groqModel;
}

export default groqModel;