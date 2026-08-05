import { NextRequest } from "next/server";
import { generatePortfolioResponse } from "@/lib/chat";

export const runtime = "nodejs";

export async function POST(
    request: NextRequest
) {
    try {
        const {
            message,
            history = [],
        } = await request.json();

        if (!message?.trim()) {
            return Response.json(
                {
                    error:
                        "Message is required",
                },
                {
                    status: 400,
                }
            );
        }

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

        return Response.json(
            {
                error:
                    "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}