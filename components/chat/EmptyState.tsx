"use client";

import {
    Bot,
    Briefcase,
    Code2,
    FileText,
    Mail,
} from "lucide-react";

interface EmptyStateProps {
    onSelect: (prompt: string) => void;
}

const QUICK_ACTIONS = [
    {
        title: "Resume",
        prompt: "Show me your resume",
        icon: FileText,
    },
    {
        title: "Projects",
        prompt: "Show me your projects",
        icon: Briefcase,
    },
    {
        title: "Skills",
        prompt: "What are your skills?",
        icon: Code2,
    },
    {
        title: "Contact",
        prompt: "How can I contact you?",
        icon: Mail,
    },
];

export default function EmptyState({
    onSelect,
}: EmptyStateProps) {
    return (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/15">
                <Bot
                    size={40}
                    className="text-amber-400"
                />
            </div>

            <h2 className="text-2xl font-bold text-white">
                Welcome to AAI
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
                I'm Ashutosh's AI Portfolio Assistant.
                Ask me anything about my experience,
                projects, skills, education, resume,
                or contact information.
            </p>

            <div className="mt-8 grid w-full max-w-xl grid-cols-2 gap-4">

                {QUICK_ACTIONS.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.title}
                            onClick={() =>
                                onSelect(item.prompt)
                            }
                            className="
                                rounded-2xl
                                border
                                border-zinc-700
                                bg-zinc-900
                                p-5
                                text-left
                                transition-all
                                hover:border-amber-500
                                hover:bg-zinc-800
                            "
                        >
                            <Icon
                                size={24}
                                className="mb-3 text-amber-400"
                            />

                            <h3 className="font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-xs text-zinc-400">
                                {item.prompt}
                            </p>
                        </button>
                    );
                })}

            </div>
        </div>
    );
}