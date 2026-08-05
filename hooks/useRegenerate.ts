"use client";

import { ChatMessage } from "@/types/chat";

interface RegenerateOptions {
    messages: ChatMessage[];

    sendMessage: (
        message: string
    ) => Promise<void>;
}

export default function useRegenerate({
    messages,
    sendMessage,
}: RegenerateOptions) {
    async function regenerate() {
        const lastUserMessage = [...messages]
            .reverse()
            .find(
                (message) =>
                    message.role === "user"
            );

        if (!lastUserMessage) {
            return;
        }

        await sendMessage(
            lastUserMessage.content
        );
    }

    return {
        regenerate,
    };
}