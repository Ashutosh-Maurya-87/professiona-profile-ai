"use client";

import { Bot, Trash2, X } from "lucide-react";

interface ChatHeaderProps {
    onClose: () => void;
    onClear: () => void;
}

export default function ChatHeader({
    onClose,
    onClear,
}: ChatHeaderProps) {
    return (
        <div className="flex items-center justify-between border-b border-zinc-700 px-5 py-4">

            <div className="flex items-center gap-3">

                <div className="relative">

                    <div
                        className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-linear-to-r
              from-amber-500
              to-orange-500
              text-white
            "
                    >
                        <Bot size={24} />
                    </div>

                    <span
                        className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              border-2
              border-[#17181c]
              bg-green-500
            "
                    />
                </div>

                <div>

                    <h2 className="font-semibold text-white">
                        Hi, I am Ashu's AI Assistant
                    </h2>

                    <p className="text-sm text-green-400">
                        Online
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-2">

                <button
                    onClick={onClear}
                    className="
            rounded-lg
            p-2
            transition
            hover:bg-zinc-800
          "
                    title="Clear Chat"
                >
                    <Trash2
                        size={20}
                        className="text-zinc-300"
                    />
                </button>

                <button
                    onClick={onClose}
                    className="
            rounded-lg
            p-2
            transition
            hover:bg-zinc-800
          "
                    title="Close"
                >
                    <X
                        size={22}
                        className="text-zinc-300"
                    />
                </button>

            </div>

        </div>
    );
}