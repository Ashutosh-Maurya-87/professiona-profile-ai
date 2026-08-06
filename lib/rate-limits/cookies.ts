import { RATE_LIMIT } from "@/constants/rate-limit";
import { VISITOR_COOKIE } from "./visitor";

export function createVisitorCookie(
    value: string
) {
    return `${VISITOR_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${RATE_LIMIT.COOKIE_MAX_AGE}; ${
        process.env.NODE_ENV === "production"
            ? "Secure;"
            : ""
    }`;
}