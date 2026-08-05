"use client";

import {
    GraduationCap,
    Calendar,
    MapPin,
    Award,
} from "lucide-react";

import type { Education } from "@/types/portfolio";

interface EducationCardProps {
    education: Education[];
}

export default function EducationCard({
    education,
}: EducationCardProps) {
    return (
        <div className="mt-3 space-y-5">
            {education.map((item) => (
                <div
                    key={item.id}
                    className="
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            p-5
          "
                >
                    {/* Header */}

                    <div className="flex items-start gap-4">
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
                            <GraduationCap
                                size={22}
                                className="text-amber-400"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white">
                                {item.degree}
                            </h3>

                            <p className="text-zinc-300">
                                {item.institute}
                            </p>
                        </div>
                    </div>

                    {/* Meta */}

                    <div className="mt-4 flex flex-wrap gap-5 text-sm text-zinc-400">

                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {item.duration}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {item.location}
                        </div>

                        {item.percentage && (
                            <div className="flex items-center gap-2">
                                <Award size={16} />
                                {item.percentage}
                            </div>
                        )}

                    </div>

                    {/* Description */}

                    <p className="mt-5 leading-7 text-zinc-300">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}