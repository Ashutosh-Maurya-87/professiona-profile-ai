"use client";

import { useState } from "react";

import {
    Check,
    Copy,
    RotateCcw,
} from "lucide-react";

interface MessageActionsProps {
    content: string;

    isUser?: boolean;

    onRegenerate?: () => void;
}

export default function MessageActions({
    content,
    isUser = false,
    onRegenerate,
}: MessageActionsProps) {
    const [copied, setCopied] =
        useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(
                content
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="mt-3 flex items-center gap-2">

            {/* Copy */}

            <button
                onClick={handleCopy}
                className="
                    rounded-lg
                    p-2
                    text-zinc-400
                    transition-all
                    hover:bg-zinc-700
                    hover:text-white
                "
                title="Copy"
            >
                {copied ? (
                    <Check
                        size={16}
                        className="text-green-400"
                    />
                ) : (
                    <Copy size={16} />
                )}
            </button>

            {/* Regenerate */}

            {!isUser &&
                onRegenerate && (
                    <button
                        onClick={
                            onRegenerate
                        }
                        className="
                            rounded-lg
                            p-2
                            text-zinc-400
                            transition-all
                            hover:bg-zinc-700
                            hover:text-white
                        "
                        title="Regenerate"
                    >
                        <RotateCcw
                            size={16}
                        />
                    </button>
                )}
        </div>
    );
}