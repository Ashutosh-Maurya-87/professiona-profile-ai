import { cookies, headers } from "next/headers";

import { RATE_LIMIT } from "@/constants/rate-limit";

export const VISITOR_COOKIE =
    RATE_LIMIT.COOKIE_NAME;

export interface VisitorIdentifier {
    identifier: string;

    shouldSetCookie: boolean;

    cookieValue?: string;
}

/**
 * Generates a UUID for a new visitor.
 */
function generateVisitorId() {
    return crypto.randomUUID();
}

/**
 * Returns the client's IP.
 * Used only as a fallback.
 */
async function getClientIp() {
    const headerList = await headers();

    return (
        headerList
            .get("x-forwarded-for")
            ?.split(",")[0]
            .trim() ||
        headerList.get("x-real-ip") ||
        "unknown"
    );
}

/**
 * Returns a stable visitor identifier.
 *
 * Priority
 * ----------
 * 1. Existing Cookie
 * 2. Generate Cookie
 * 3. IP Fallback
 *
 * NOTE:
 * This function DOES NOT write cookies.
 * Route handlers should write cookies.
 */
export async function getVisitorIdentifier(): Promise<VisitorIdentifier> {
    const cookieStore = await cookies();

    const existing =
        cookieStore.get(VISITOR_COOKIE);

    if (existing?.value) {
        return {
            identifier: existing.value,

            shouldSetCookie: false,
        };
    }

    try {
        const visitorId =
            generateVisitorId();

        return {
            identifier: visitorId,

            shouldSetCookie: true,

            cookieValue: visitorId,
        };
    } catch {
        return {
            identifier:
                await getClientIp(),

            shouldSetCookie: false,
        };
    }
}