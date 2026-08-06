"use client";

import {
    AlertCircle,
    Bot,
    Download,
    Mail,
    Phone,
    User
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import type { ChatMessage as ChatMessageType } from "@/types/chat";

import type {
    ContactInfo,
    Education,
    Experience,
    Project,
    Resume,
    SkillCategory,
} from "@/types/portfolio";
import EducationCard from "./cards/EducationCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectCard from "./cards/ProjectCard";
import SkillsCard from "./cards/SkillsCard";
// import CopyMessageButton from "./CopyMessageButton";
import MessageActions from "./MessageActions";
interface ChatMessageProps {
    message: ChatMessageType;
    onRegenerate?: () => void;
}

export default function ChatMessage({
    message, onRegenerate,
}: ChatMessageProps) {
    const isUser = message.role === "user";

    const renderContent = () => {
        switch (message.type) {
            case "resume": {
                const resume =
                    message.data as Resume | undefined;

                return (
                    <div className="space-y-3">
                        <div>
                            <p className="mb-3">{message.content}</p>

                            <h3 className="font-semibold">
                                {resume?.title}
                            </h3>
                        </div>

                        {resume && (
                            <a
                                href={resume.file}
                                download
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-amber-500
                  px-4
                  py-2
                  font-medium
                  text-white
                  transition
                  hover:bg-amber-400
                "
                            >
                                <Download size={18} />

                                Download Resume
                            </a>
                        )}
                    </div>
                );
            }

            case "projects": {
                const projects =
                    (message.data as Project[]) ?? [];

                return (
                    <div className="space-y-4">

                        <p>{message.content}</p>

                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}

                    </div>
                );
            }

            case "skills": {
                const skills =
                    (message.data as SkillCategory[]) ?? [];

                return (
                    <div className="space-y-4">

                        <p>{message.content}</p>

                        <SkillsCard
                            skills={skills}
                        />

                    </div>
                );
            }
            case "experience": {
                const experiences =
                    (message.data as Experience[]) ?? [];

                return (
                    <div className="space-y-4">

                        <p>{message.content}</p>

                        <ExperienceCard
                            experiences={experiences}
                        />

                    </div>
                );
            }
            case "education": {
                const education =
                    (message.data as Education[]) ?? [];

                return (
                    <div className="space-y-4">

                        <p>{message.content}</p>

                        <EducationCard
                            education={education}
                        />

                    </div>
                );
            }
            case "contact": {
                const contact =
                    message.data as ContactInfo | undefined;

                return (
                    <div className="space-y-3">
                        <p>{message.content}</p>

                        <div className="space-y-2 rounded-xl border border-zinc-700 bg-zinc-900 p-4">

                            <div className="flex items-center gap-2">
                                <Mail size={16} />

                                {contact?.email}
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone size={16} />

                                {contact?.phone}
                            </div>

                        </div>
                    </div>
                );
            }


            default:
                return (
                    <div className="prose prose-invert max-w-none prose-p:my-2 prose-pre:my-3 prose-code:text-amber-400">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                                a: ({ ...props }) => (
                                    <a
                                        {...props}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-400 underline"
                                    />
                                ),
                                code({ inline, className, children, ...props }: any) {
                                    if (inline) {
                                        return (
                                            <code
                                                className="rounded bg-zinc-900 px-1 py-0.5 text-amber-400"
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    }

                                    return (
                                        <pre className="overflow-x-auto rounded-xl bg-black p-4">
                                            <code className={className}>
                                                {children}
                                            </code>
                                        </pre>
                                    );
                                },
                            }}
                        >
                            {message.content}
                        </ReactMarkdown>
                    </div>
                );
        }
    };

    return (
        <div
            className={`flex ${isUser
                ? "justify-end"
                : "justify-start"
                }`}
        >
            <div
                className={`flex max-w-[85%] items-start gap-3 ${isUser
                    ? "flex-row-reverse"
                    : ""
                    }`}
            >
                {/* Avatar */}

                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isUser
                        ? "bg-amber-500 text-white"
                        : "bg-zinc-700 text-white"
                        }`}
                >
                    {isUser ? (
                        <User size={18} />
                    ) : (
                        <Bot size={18} />
                    )}
                </div>

                {/* Bubble */}

                <div
                    className={`max-w-full rounded-2xl px-4 py-3 ${isUser
                        ? "bg-amber-500 text-white"
                        : message.error
                            ? "border border-red-500 bg-red-500/10 text-red-300"
                            : "bg-zinc-800 text-zinc-100"
                        }`}
                >
                    {message.error && (
                        <div className="mb-2 flex items-center gap-2">
                            <AlertCircle size={16} />

                            <span>Error</span>
                        </div>
                    )}

                    {renderContent()}

                    <div className="mt-4 flex items-center justify-between">

                        <span
                            className={`text-xs ${isUser
                                ? "text-amber-100"
                                : "text-zinc-500"
                                }`}
                        >
                            {new Date(
                                message.createdAt
                            ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>

                        <MessageActions
                            content={message.content}
                            isUser={isUser}
                            onRegenerate={onRegenerate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}