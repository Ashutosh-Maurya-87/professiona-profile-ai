"use client";

import {
    Briefcase,
    Building2,
    Calendar,
    MapPin,
} from "lucide-react";

import type { Experience } from "@/types/portfolio";

interface ExperienceCardProps {
    experiences: Experience[];
}

export default function ExperienceCard({
    experiences,
}: ExperienceCardProps) {
    return (
        <div className="mt-3 space-y-5">
            {experiences.map((experience) => (
                <div
                    key={experience.id}
                    className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            p-5
          "
                >
                    {/* Header */}

                    <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-3">

                            <div
                                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-amber-500/20
                "
                            >
                                <Building2
                                    size={22}
                                    className="text-amber-400"
                                />
                            </div>

                            <div>

                                <h3 className="text-lg font-semibold text-white">
                                    {experience.designation}
                                </h3>

                                <p className="text-zinc-300">
                                    {experience.company}
                                </p>

                            </div>

                        </div>

                        {experience.current && (
                            <span
                                className="
                  rounded-full
                  bg-green-500/20
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-green-400
                "
                            >
                                Current
                            </span>
                        )}
                    </div>

                    {/* Meta */}

                    <div className="mt-4 flex flex-wrap gap-5 text-sm text-zinc-400">

                        <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            {experience.employmentType}
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {experience.duration}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {experience.location}
                        </div>

                    </div>

                    {/* Summary */}

                    <p className="mt-5 leading-7 text-zinc-300">
                        {experience.summary}
                    </p>

                    {/* Achievements */}

                    <div className="mt-5">

                        <h4 className="mb-3 font-semibold text-white">
                            Key Achievements
                        </h4>

                        <ul className="list-disc space-y-2 pl-5 text-zinc-300">
                            {experience.achievements.map((achievement) => (
                                <li key={achievement}>
                                    {achievement}
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Technologies */}

                    <div className="mt-5 flex flex-wrap gap-2">

                        {experience.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                  rounded-full
                  bg-amber-500/20
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-amber-400
                "
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    );
}