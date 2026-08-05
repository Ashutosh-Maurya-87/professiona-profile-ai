"use client";

import { AI_SUGGESTIONS } from "@/constants/ai";

interface SuggestedQuestionsProps {
    onSelect: (message: string) => Promise<void>;
}

export default function SuggestedQuestions({
    onSelect,
}: SuggestedQuestionsProps) {
    return (
        <div
            className="
        border-b
        border-zinc-700
        px-4
        py-3
      "
        >
            <p
                className="
          mb-3
          text-xs
          font-medium
          uppercase
          tracking-wide
          text-zinc-400
        "
            >
                Suggested Questions
            </p>

            <div
                className="
          flex
          gap-2
          overflow-x-auto
          pb-1
          scrollbar-hide
        "
            >
                {AI_SUGGESTIONS.map((question) => (
                    <button
                        key={question}
                        onClick={() => onSelect(question)}
                        className="
              shrink-0
              rounded-full
              border
              border-zinc-700
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-zinc-200
              transition-all
              hover:border-amber-500
              hover:bg-amber-500
              hover:text-white
            "
                    >
                        {question}
                    </button>
                ))}
            </div>
        </div>
    );
}