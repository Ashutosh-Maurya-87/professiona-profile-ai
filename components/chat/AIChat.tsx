"use client";

import { useState } from "react";

import useAIChat from "@/hooks/useAIChat";
import useRegenerate from "@/hooks/useRegenerate";
import FloatingChatButton from "./FloatingChatButton";
import ChatWindow from "./ChatWindow";

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false);

    const {
        messages,
        loading,
        sendMessage,
        clearChat,
        rateLimited,
        retryAfter,
    } = useAIChat();

    const { regenerate } = useRegenerate({ messages, sendMessage, });

    function toggleChat() {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <FloatingChatButton
                open={isOpen}
                onClick={toggleChat}
            />

            {isOpen && (
                <ChatWindow
                    messages={messages}
                    loading={loading}
                    onSend={sendMessage}
                    onClose={() => setIsOpen(false)}
                    onClear={clearChat}
                    onRegenerate={regenerate}
                    rateLimited={rateLimited}
                    retryAfter={retryAfter}
                />
            )}
        </>
    );
}