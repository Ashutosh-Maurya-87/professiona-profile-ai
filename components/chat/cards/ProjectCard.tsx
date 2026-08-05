"use client";

import { FolderKanban, ExternalLink } from "lucide-react";

import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <div
            className="
        mt-3
        rounded-2xl
        border
        border-zinc-700
        bg-zinc-900
        p-5
        transition-all
        hover:border-amber-500/50
      "
        >
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
                    <FolderKanban
                        size={24}
                        className="text-amber-400"
                    />
                </div>

                <div className="flex-1">

                    <h3 className="text-lg font-semibold text-white">
                        {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
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

                    {/* Links */}

                    <div className="mt-5 flex flex-wrap gap-3">

                        {"live" in project &&
                            project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-amber-500
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-amber-400
                  "
                                >
                                    <ExternalLink size={16} />

                                    Live Demo
                                </a>
                            )}

                        {"github" in project &&
                            project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-zinc-600
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-zinc-200
                    transition
                    hover:border-amber-500
                    hover:text-amber-400
                  "
                                >
                                    {/* <Github size={16} /> */}

                                    GitHub
                                </a>
                            )}

                    </div>

                </div>
            </div>
        </div>
    );
}