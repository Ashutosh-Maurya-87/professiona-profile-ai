/**
 * Storage provider
 *
 * memory  -> Local Map (Development)
 * upstash -> Upstash Redis (Production)
 */
import { RATE_LIMIT } from "@/constants/rate-limit";
export const RATE_LIMIT_CONFIG = {
    provider: "memory" as
        | "memory"
        | "upstash",

    /**
     * Maximum AI requests
     * allowed in one window.
     */
    maxRequests: RATE_LIMIT.MAX_REQUESTS,

    /**
     * Window duration
     * in hours.
     */
    windowHours: RATE_LIMIT.WINDOW_HOURS,

    /**
     * Enable logs
     * while developing.
     */
    enableLogs:
        process.env.NODE_ENV !==
        "production",
} as const;