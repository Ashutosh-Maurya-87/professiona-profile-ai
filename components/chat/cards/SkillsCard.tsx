"use client";

import { Code2 } from "lucide-react";

import type { SkillCategory } from "@/types/portfolio";

interface SkillsCardProps {
    skills: SkillCategory[];
}

export default function SkillsCard({
    skills,
}: SkillsCardProps) {
    return (
        <div className="mt-3 space-y-5">
            {skills.map((category) => (
                <div
                    key={category.title}
                    className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            p-5
          "
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-amber-500/20
              "
                        >
                            <Code2
                                size={22}
                                className="text-amber-400"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {category.title}
                            </h3>

                            <p className="text-sm text-zinc-400">
                                {category.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className="
                  rounded-full
                  bg-amber-500/20
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-amber-400
                "
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}