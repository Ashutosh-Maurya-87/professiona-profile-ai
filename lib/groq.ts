import { createGroq } from "@ai-sdk/groq";

import { AI_MODEL_CONFIG } from "@/constants/config";
import { env } from "./env";

const groqProvider = createGroq({
    apiKey: env.GROQ_API_KEY,
});

export const groqModel = groqProvider(env.GROQ_MODEL);

export const GROQ_CONFIG = {
    provider: AI_MODEL_CONFIG.provider,

    model: env.GROQ_MODEL,

    temperature: AI_MODEL_CONFIG.temperature,

    maxTokens: AI_MODEL_CONFIG.maxTokens,
} as const;

export function getGroqModel() {
    return groqModel;
}

export default groqModel;