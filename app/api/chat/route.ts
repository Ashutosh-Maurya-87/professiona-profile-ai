import { NextRequest } from "next/server";

import { generatePortfolioResponse } from "@/lib/chat";
import {
    createErrorResponse,
    validateString,
} from "@/lib/errors";
import {
    getVisitorIdentifier,
    rateLimitService,
} from "@/lib/rate-limits";
import { createVisitorCookie } from "@/lib/rate-limits/cookies";

export const runtime = "nodejs";

export async function POST(
    request: NextRequest
) {
    try {
        // -------------------------
        // Parse Request
        // -------------------------

        const body = await request.json();

        const message = validateString(
            body.message,
            "Message"
        );

        const history =
            body.history ?? [];

        // -------------------------
        // Visitor
        // -------------------------

        const visitor = await getVisitorIdentifier(request);

        // -------------------------
        // Rate Limit
        // -------------------------

        const rateLimit =
            await rateLimitService.check(
                visitor.identifier
            );

        /**
         * Applies common headers
         * and cookie to every response.
         */
        const applyResponseHeaders = (
            response: Response
        ) => {
            response.headers.set(
                "X-RateLimit-Limit",
                String(rateLimit.limit)
            );

            response.headers.set(
                "X-RateLimit-Remaining",
                String(rateLimit.remaining)
            );

            response.headers.set(
                "X-RateLimit-Reset",
                String(rateLimit.resetAt)
            );

            if (
                visitor.shouldSetCookie &&
                visitor.cookieValue
            ) {
                response.headers.append(
                    "Set-Cookie",
                    createVisitorCookie(
                        visitor.cookieValue
                    )
                );
            }

            return response;
        };

        // -------------------------
        // Rate Limit Exceeded
        // -------------------------

        if (!rateLimit.success) {
            return applyResponseHeaders(
                Response.json(
                    {
                        success: false,

                        error: {
                            code: "RATE_LIMIT_EXCEEDED",

                            message:
                                "You've reached the AI usage limit. Please try again later.",
                        },

                        remaining:
                            rateLimit.remaining,

                        limit:
                            rateLimit.limit,

                        resetAt:
                            rateLimit.resetAt,

                        retryAfter:
                            rateLimit.retryAfter,
                    },
                    {
                        status: 429,
                    }
                )
            );
        }

        // -------------------------
        // Generate AI Response
        // -------------------------

        const result =
            await generatePortfolioResponse(
                message,
                history
            );

        // -------------------------
        // Tool Response
        // -------------------------

        if (
            "type" in result &&
            "message" in result
        ) {
            return applyResponseHeaders(
                Response.json(result)
            );
        }

        // -------------------------
        // Streaming Response
        // -------------------------

        const stream =
            result.toTextStreamResponse();

        return applyResponseHeaders(
            stream
        );
    } catch (error) {
        console.error(error);

        return createErrorResponse(
            error
        );
    }
}