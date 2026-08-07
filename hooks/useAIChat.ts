"use client";

import { useEffect, useState } from "react";
import { ChatMessage } from "@/types/chat";
import { getBrowserFingerprint } from "@/lib/fingerprint";

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
    // const [retryAfter, setRetryAfter] = useState(0);
    const [loading, setLoading] = useState(false);
    const [rateLimited, setRateLimited] =
        useState(false);

    const [retryAfter, setRetryAfter] = useState(0);
    const [deviceId, setDeviceId] = useState("");

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        async function loadFingerprint() {
            try {
                const id =
                    await getBrowserFingerprint();

                setDeviceId(id);
            } catch (error) {
                console.error(
                    "Failed to load browser fingerprint",
                    error
                );
            }
        }

        loadFingerprint();
    }, []);

    useEffect(() => {
        if (!rateLimited || retryAfter <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setRetryAfter((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);

                    setRateLimited(false);

                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [rateLimited, retryAfter]);

    async function sendMessage(message: string) {
        if (!deviceId || !message.trim() || loading || rateLimited) {
            return;
        }

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
                    "x-device-id": deviceId,
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

            // -----------------------------
            // Rate Limit
            // -----------------------------

            if (response.status === 429) {
                const json = await response.json();

                setRateLimited(true);

                setRetryAfter(json.retryAfter ?? 0);

                setMessages((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),

                        role: "assistant",

                        content: `AI usage limit reached.

You have used all ${json.limit} requests.

Please try again in ${formatDuration(
                            json.retryAfter ?? 0
                        )}.`,

                        createdAt: new Date(),

                        type: "error",

                        error: true,
                    },
                ]);

                return;
            }

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
            if (rateLimited) {
                return;
            }
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
    function formatDuration(
        seconds: number
    ) {
        const hours = Math.floor(
            seconds / 3600
        );

        const minutes = Math.floor(
            (seconds % 3600) / 60
        );

        if (hours > 0) {
            return `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
        }

        return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    }
    return {
        messages,

        loading,

        sendMessage,

        clearChat,

        rateLimited,

        retryAfter,
    };
}