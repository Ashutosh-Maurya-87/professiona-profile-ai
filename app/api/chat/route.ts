import { NextRequest } from "next/server";
import { generatePortfolioResponse } from "@/lib/chat";
import {
    createErrorResponse,
    validateString,
} from "@/lib/errors";

export const runtime = "nodejs";

export async function POST(
    request: NextRequest
) {
    try {
        const body = await request.json();

        const message = validateString(
            body.message,
            "Message"
        );

        const history =
            body.history ?? [];

        const result =
            await generatePortfolioResponse(
                message,
                history
            );

        if ("type" in result) {
            return Response.json(result);
        }

        return result.toTextStreamResponse();
    } catch (error) {
        console.error(error);

        return createErrorResponse(error);
    }
}