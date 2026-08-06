"use client";

import { useEffect, useState } from "react";
import { ChatMessage } from "@/types/chat";

const STORAGE_KEY = "portfolio-ai-chat";

function createInitialMessage(): ChatMessage {
    return {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
            "👋 Hi! I'm AAI, Ashutosh's AI Assistant.\n\nAsk me anything about my experience, projects, skills or resume.",

        createdAt: new Date(),

        type: "text",
    };
}

export default function useAIChat() {
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        if (typeof window === "undefined") {
            return [createInitialMessage()];
        }

        try {
            const saved = localStorage.getItem(STORAGE_KEY);

            if (!saved) {
                return [createInitialMessage()];
            }

            const parsed: ChatMessage[] = JSON.parse(saved);

            return parsed.map((message) => ({
                ...message,
                createdAt: new Date(message.createdAt),
            }));
        } catch {
            return [createInitialMessage()];
        }
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    async function sendMessage(message: string) {
        if (!message.trim() || loading) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),

            role: "user",

            content: message,

            createdAt: new Date(),

            type: "text",
        };

        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);

        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    message,

                    history: updatedMessages
                        .filter(
                            (msg) =>
                                msg.role === "user" ||
                                msg.role === "assistant"
                        )
                        .map((msg) => ({
                            role: msg.role,

                            content: msg.content,
                        })),
                }),
            });

            if (!response.ok) {
                throw new Error(
                    `Request failed: ${response.status}`
                );
            }

            const contentType =
                response.headers.get(
                    "content-type"
                ) ?? "";

            // -----------------------------
            // Tool / JSON Response
            // -----------------------------

            if (
                contentType.includes(
                    "application/json"
                )
            ) {
                const json = await response.json();

                const assistantMessage: ChatMessage = {
                    id: crypto.randomUUID(),

                    role: "assistant",

                    content:
                        json.message ??
                        "Done.",

                    createdAt: new Date(),

                    type:
                        json.type ?? "text",

                    data: json.data,
                };

                setMessages((prev) => [
                    ...prev,
                    assistantMessage,
                ]);

                return;
            }

            // -----------------------------
            // Streaming Response
            // -----------------------------

            if (!response.body) {
                throw new Error(
                    "Streaming is not supported."
                );
            }

            const reader =
                response.body.getReader();

            const decoder =
                new TextDecoder();

            let streamedText = "";

            const assistantId =
                crypto.randomUUID();

            setMessages((prev) => [
                ...prev,
                {
                    id: assistantId,

                    role: "assistant",

                    content: "",

                    createdAt: new Date(),

                    type: "text",
                },
            ]);

            while (true) {
                const { value, done } =
                    await reader.read();

                if (done) break;

                streamedText += decoder.decode(
                    value,
                    {
                        stream: true,
                    }
                );

                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantId
                            ? {
                                ...msg,
                                content:
                                    streamedText,
                            }
                            : msg
                    )
                );
            }
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),

                    role: "assistant",

                    content:
                        "❌ Sorry, something went wrong while contacting the AI.",

                    createdAt: new Date(),

                    type: "error",

                    error: true,
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function clearChat() {
        localStorage.removeItem(STORAGE_KEY);

        // setMessages([createInitialMessage()]);
        setMessages([]);
    }

    return {
        messages,

        loading,

        sendMessage,

        clearChat,
    };
}