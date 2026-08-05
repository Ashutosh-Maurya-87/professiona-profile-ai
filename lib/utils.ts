import { clsx, type ClassValue } from "clsx";

/**
 * Merge Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Smooth scroll to section
 */
export function scrollToSection(id: string) {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/**
 * Delay helper
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Capitalize
 */
export function capitalize(value: string) {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Short text
 */
export function truncate(
    text: string,
    max = 120
) {
    if (text.length <= max) return text;

    return text.slice(0, max) + "...";
}

/**
 * Random Item
 */
export function randomItem<T>(
    array: T[]
): T {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}

/**
 * Match AI keywords
 */
export function containsKeyword(
    message: string,
    keywords: string[]
) {
    const lower = message.toLowerCase();

    return keywords.some((item) =>
        lower.includes(item.toLowerCase())
    );
}

/**
 * Debounce
 */
export function debounce<T extends (...args: any[]) => void>(
    callback: T,
    delay = 300
) {
    let timer: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

/**
 * Copy text
 */
export async function copyText(text: string) {
    try {
        await navigator.clipboard.writeText(text);

        return true;
    } catch {
        return false;
    }
}

/**
 * Format Date
 */
export function formatDate(
    date: Date
) {
    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

/**
 * Generate ID
 */
export function generateId() {
    return crypto.randomUUID();
}

/**
 * Download File
 */
export function downloadFile(url: string) {
    const link = document.createElement("a");

    link.href = url;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}