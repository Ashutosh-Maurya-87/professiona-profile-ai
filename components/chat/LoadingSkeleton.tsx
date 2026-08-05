"use client";

export default function LoadingSkeleton() {
    return (
        <div className="flex items-start gap-3 animate-pulse duration-1000">
            {/* Avatar */}

            <div className="h-10 w-10 rounded-full bg-zinc-700" />

            {/* Message */}

            <div className="flex-1 space-y-3">

                <div className="h-4 w-32 rounded bg-zinc-700" />

                <div className="h-4 w-full rounded bg-zinc-800" />

                <div className="h-4 w-5/6 rounded bg-zinc-800" />

                <div className="h-4 w-2/3 rounded bg-zinc-800" />

            </div>
        </div>
    );
}