"use client";

import { useEffect, useRef } from "react";

interface UseChatScrollProps {
    dependency: unknown;
    behavior?: ScrollBehavior;
}

export function useChatScroll({
    dependency,
    behavior = "smooth",
}: UseChatScrollProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.scrollTo({
            top: containerRef.current.scrollHeight,
            behavior,
        });
    }, [dependency, behavior]);

    return containerRef;
}

export default useChatScroll;