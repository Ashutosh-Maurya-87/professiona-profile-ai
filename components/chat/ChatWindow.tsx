"use client";

import { AnimatePresence, motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";
import EmptyState from "./EmptyState";
import useChatScroll from "@/hooks/useChatScroll";
import LoadingSkeleton from "./LoadingSkeleton";

import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatWindowProps {
    messages: ChatMessageType[];
    loading: boolean;
    onSend: (message: string) => Promise<void>;
    onClose: () => void;
    onClear: () => void;
    onRegenerate: () => Promise<void>;
    rateLimited: boolean;
    retryAfter: number;
}

export default function ChatWindow({
    messages,
    loading,
    onSend,
    onClose,
    onClear,
    onRegenerate,
    rateLimited,
    retryAfter
}: ChatWindowProps) {
    const chatRef = useChatScroll({
        dependency: messages,
    });

    const showSuggestions = messages.length <= 1;

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                }}
                transition={{
                    duration: 0.25,
                }}
                className="fixed bottom-28
          right-8
          z-9998
          flex
          h-175
          w-105
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-zinc-700
          bg-[#17181c]
          shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          backdrop-blur-xl

          max-md:bottom-0
          max-md:right-0
          max-md:h-screen
          max-md:w-screen
          max-md:rounded-none
        "
            >
                {/* Header */}

                <ChatHeader
                    onClose={onClose}
                    onClear={onClear}
                />

                {/* Suggestions */}

                {showSuggestions && (
                    <SuggestedQuestions
                        onSelect={onSend}
                    />
                )}

                {/* Messages */}

                <div ref={chatRef} className=" flex-1 overflow-y-auto px-4 py-5"
                >
                    {messages.length === 0 ? (
                        <EmptyState
                            onSelect={onSend}
                        />
                    ) : (
                        <div className="space-y-4">

                            {messages.map((message) => (
                                <ChatMessage
                                    key={message.id}
                                    message={message}
                                    onRegenerate={onRegenerate}
                                />
                            ))}

                            {loading && (
                                <>
                                    <TypingIndicator />

                                    <div className="mt-4">
                                        <LoadingSkeleton />
                                    </div>
                                </>
                            )}

                        </div>
                    )}
                </div>

                {/* Input */}

                <ChatInput
                    loading={loading}
                    onSend={onSend}
                    rateLimited={rateLimited}
                    retryAfter={retryAfter}
                />
                <div className="border-t border-zinc-800 p-3">
                    <button
                        onClick={onRegenerate}
                        disabled={loading}
                        className="
            w-full
            rounded-xl
            border
            border-zinc-700
            py-2
            text-sm
            font-medium
            text-zinc-300
            transition
            hover:border-amber-500
            hover:text-amber-400
            disabled:opacity-50
        "
                    >
                        🔄 Regenerate Last Response
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}