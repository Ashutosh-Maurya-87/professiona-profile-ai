import crypto from "crypto";

import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import { RATE_LIMIT } from "@/constants/rate-limit";

export const VISITOR_COOKIE =
    RATE_LIMIT.COOKIE_NAME;

export interface VisitorIdentifier {
    identifier: string;

    shouldSetCookie: boolean;

    cookieValue?: string;
}

/**
 * Generates a UUID cookie.
 *
 * The cookie is NOT used as the
 * primary identity anymore.
 */
function generateVisitorId() {
    return crypto.randomUUID();
}

/**
 * Creates a SHA256 hash.
 */
function sha256(value: string) {
    return crypto
        .createHash("sha256")
        .update(value)
        .digest("hex");
}

/**
 * Returns a stable visitor identifier.
 *
 * Priority:
 *
 * 1. Browser Fingerprint
 * 2. IP + UserAgent fallback
 *
 * Cookie is only used to keep
 * a stable browser session.
 */
export async function getVisitorIdentifier(
    request: NextRequest
): Promise<VisitorIdentifier> {
    const cookieStore =
        await cookies();

    let cookie =
        cookieStore.get(
            VISITOR_COOKIE
        )?.value;

    let shouldSetCookie =
        false;

    if (!cookie) {
        cookie =
            generateVisitorId();

        shouldSetCookie =
            true;
    }

    // --------------------------
    // Browser Fingerprint
    // --------------------------

    const fingerprint =
        request.headers.get(
            "x-device-id"
        );

    // --------------------------
    // Fallback
    // --------------------------

    const ip =
        request.headers
            .get("x-forwarded-for")
            ?.split(",")[0]
            .trim() ||

        request.headers.get(
            "x-real-ip"
        ) ||

        "";

    const userAgent =
        request.headers.get(
            "user-agent"
        ) ?? "";

    const identifier = fingerprint
        ? sha256(fingerprint)
        : sha256(
              `${ip}:${userAgent}`
          );

    return {
        identifier,

        shouldSetCookie,

        cookieValue: cookie,
    };
}