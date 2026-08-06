/**
 * Returns an environment variable or throws an error
 * during application startup if it is missing.
 */
function getEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(
            ` Missing required environment variable: ${name}`
        );
    }

    return value;
}

/**
 * Application Environment Variables
 */
export const env = {
    // AI

    GROQ_API_KEY: getEnv("GROQ_API_KEY"),

    // Models

    GROQ_MODEL:
        process.env.GROQ_MODEL ??
        "llama-3.3-70b-versatile",

    // App

    NODE_ENV:
        process.env.NODE_ENV ??
        "development",

    APP_NAME:
        process.env.NEXT_PUBLIC_APP_NAME ??
        "Ash Portfolio AI",

    APP_URL:
        process.env.NEXT_PUBLIC_APP_URL ??
        "http://localhost:3000",
        
    UPSTASH_REDIS_REST_URL:
        process.env.UPSTASH_REDIS_REST_URL ?? "",

    UPSTASH_REDIS_REST_TOKEN:
        process.env.UPSTASH_REDIS_REST_TOKEN ?? "",
} as const;