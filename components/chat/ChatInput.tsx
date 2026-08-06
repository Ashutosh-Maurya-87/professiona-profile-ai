"use client";

import { KeyboardEvent, useRef, useState } from "react";

import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
    loading: boolean;

    rateLimited: boolean;

    retryAfter: number;

    onSend: (
        message: string
    ) => Promise<void>;
}

export default function ChatInput({
    loading,
    rateLimited,
    retryAfter,
    onSend,
}: ChatInputProps) {
    const [message, setMessage] =
        useState("");

    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    function formatTime(
        seconds: number
    ) {
        const hours = Math.floor(
            seconds / 3600
        );

        const minutes = Math.floor(
            (seconds % 3600) / 60
        );

        const secs =
            seconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }

        if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        }

        return `${secs}s`;
    }

    async function handleSend() {
        const value =
            message.trim();

        if (
            !value ||
            loading ||
            rateLimited
        ) {
            return;
        }

        await onSend(value);

        setMessage("");

        if (textareaRef.current) {
            textareaRef.current.style.height =
                "48px";
        }
    }

    function handleKeyDown(
        e: KeyboardEvent<HTMLTextAreaElement>
    ) {
        if (
            loading ||
            rateLimited
        ) {
            return;
        }

        if (
            e.key === "Enter" &&
            !e.shiftKey
        ) {
            e.preventDefault();

            handleSend();
        }
    }

    function handleChange(
        value: string
    ) {
        setMessage(value);

        if (!textareaRef.current)
            return;

        textareaRef.current.style.height =
            "48px";

        textareaRef.current.style.height =
            `${textareaRef.current.scrollHeight}px`;
    }

    return (
        <div
            className="
                border-t
                border-zinc-700
                bg-[#17181c]
                p-4
            "
        >
            <div
                className={`
                    flex
                    items-end
                    gap-3
                    rounded-2xl
                    border
                    p-3
                    transition

                    ${rateLimited
                        ? "border-red-600 bg-red-950/20"
                        : "border-zinc-700 bg-zinc-900"
                    }
                `}
            >
                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={message}
                    disabled={
                        loading ||
                        rateLimited
                    }
                    maxLength={1000}
                    placeholder={
                        rateLimited
                            ? `AI limit reached • Retry in ${formatTime(
                                retryAfter
                            )}`
                            : "Ask anything about Ashutosh..."
                    }
                    onKeyDown={
                        handleKeyDown
                    }
                    onChange={(e) =>
                        handleChange(
                            e.target.value
                        )
                    }
                    className="
                        max-h-40
                        flex-1
                        resize-none
                        overflow-y-auto
                        bg-transparent
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-zinc-500
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                />

                <button
                    onClick={
                        handleSend
                    }
                    disabled={
                        loading ||
                        rateLimited ||
                        !message.trim()
                    }
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-500
                        text-white
                        transition
                        hover:bg-amber-400
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <SendHorizonal
                        size={18}
                    />
                </button>
            </div>

            <div
                className="
                    mt-2
                    flex
                    justify-between
                    text-xs
                "
            >
                {rateLimited ? (
                    <>
                        <span className="text-red-400">
                            AI limit reached
                        </span>

                        <span className="font-medium text-red-400">
                            {formatTime(
                                retryAfter
                            )}
                        </span>
                    </>
                ) : (
                    <>
                        <span className="text-zinc-500">
                            Press Enter to
                            send
                        </span>

                        <span className="text-zinc-500">
                            {
                                message.length
                            }
                            /1000
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}