import { env } from "@/lib/env";

/**
 * Prefix used for all rate-limit keys.
 */
export const RATE_LIMIT_PREFIX =
    env.APP_NAME
        .toLowerCase()
        .replace(/\s+/g, "-") +
    ":rate-limit";

/**
 * Builds a storage key.
 */
export function buildRateLimitKey(
    identifier: string
) {
    return `${RATE_LIMIT_PREFIX}:${identifier}`;
}

/**
 * Checks whether a record has expired.
 */
export function isExpired(
    expiresAt: number
) {
    return Date.now() >= expiresAt;
}