"use client";

export default function TypingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="rounded-2xl bg-zinc-800 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-zinc-300"
                    />

                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-zinc-300"
                        style={{
                            animationDelay: "0.2s",
                        }}
                    />

                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-zinc-300"
                        style={{
                            animationDelay: "0.4s",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}