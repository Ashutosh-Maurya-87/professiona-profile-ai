"use client";

import { KeyboardEvent, useRef, useState } from "react";

import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
    loading: boolean;
    onSend: (message: string) => Promise<void>;
}

export default function ChatInput({
    loading,
    onSend,
}: ChatInputProps) {
    const [message, setMessage] = useState("");

    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    async function handleSend() {
        const value = message.trim();

        if (!value || loading) return;

        await onSend(value);

        setMessage("");

        if (textareaRef.current) {
            textareaRef.current.style.height = "48px";
        }
    }

    function handleKeyDown(
        e: KeyboardEvent<HTMLTextAreaElement>
    ) {
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

        if (!textareaRef.current) return;

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
                className="
          flex
          items-end
          gap-3
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900
          p-3
        "
            >
                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={message}
                    disabled={loading}
                    maxLength={1000}
                    placeholder="Ask anything about Ashutosh..."
                    onKeyDown={handleKeyDown}
                    onChange={(e) =>
                        handleChange(e.target.value)
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
          "
                />

                <button
                    onClick={handleSend}
                    disabled={
                        loading || !message.trim()
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
                    <SendHorizonal size={18} />
                </button>
            </div>

            <div
                className="
          mt-2
          flex
          justify-between
          text-xs
          text-zinc-500
        "
            >
                <span>
                    Press Enter to send
                </span>

                <span>
                    {message.length}/1000
                </span>
            </div>
        </div>
    );
}