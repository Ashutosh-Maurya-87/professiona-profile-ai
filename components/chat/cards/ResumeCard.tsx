"use client";

import { Download, FileText } from "lucide-react";

import type { Resume } from "@/types/portfolio";

interface ResumeCardProps {
    resume: Resume;
}

export default function ResumeCard({
    resume,
}: ResumeCardProps) {
    return (
        <div
            className="
        mt-3
        rounded-2xl
        border
        border-zinc-700
        bg-zinc-900
        p-5
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
                    <FileText
                        size={24}
                        className="text-amber-400"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                        {resume.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                        Click the button below to download my latest resume.
                    </p>

                    <a
                        href={resume.file}
                        download={resume.downloadName}
                        className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-amber-500
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-amber-400
            "
                    >
                        <Download size={18} />

                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}