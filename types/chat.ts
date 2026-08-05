import { AssistantAction } from "@/lib/actions";

/**
 * Role of a chat message
 */
export type ChatRole =
    | "system"
    | "assistant"
    | "user";

/**
 * Individual chat message
 */
export type MessageType =
    | "text"
    | "resume"
    | "projects"
    | "contact"
    | "skills"
    | "experience"
    | "education"
    | "error";

export interface ChatMessage {
    id: string;

    role: ChatRole;

    content: string;

    createdAt: Date;

    type?: MessageType;

    data?: unknown;

    loading?: boolean;

    error?: boolean;
}

/**
 * Suggested question button
 */
export interface SuggestedQuestion {
    id: number;

    title: string;

    question: string;

    icon?: string;
}

/**
 * Card shown inside chat
 */
export interface ChatCard {
    id: string;

    title: string;

    description: string;

    action?: AssistantAction;

    image?: string;

    href?: string;
}

/**
 * Resume Action
 */
export interface ResumeAction {
    title: string;

    url: string;

    downloadName: string;
}

/**
 * Contact Action
 */
export interface ContactAction {
    email: string;

    phone: string;

    github: string;

    linkedin: string;
}

/**
 * AI Response
 */
export interface AIResponse {
    message: string;

    action: AssistantAction;

    cards?: ChatCard[];

    resume?: ResumeAction;

    contact?: ContactAction;
}

export interface ChatHistoryMessage {
    role: "user" | "assistant";
    content: string;
}

/**
 * Request body sent to API
 */
export interface ChatRequest {
    message: string;

    history: ChatHistoryMessage[];
}

/**
 * API Response
 */
export interface ChatApiResponse {
    success: boolean;

    data?: AIResponse;

    error?: string;
}

/**
 * Streaming State
 */
export interface StreamState {
    loading: boolean;

    streaming: boolean;

    completed: boolean;

    error: boolean;
}

/**
 * AI State
 */
export interface AIState {
    messages: ChatMessage[];

    stream: StreamState;
}

/**
 * Chat Context
 */
export interface ChatContextType {
    messages: ChatMessage[];

    loading: boolean;

    sendMessage: (
        message: string
    ) => Promise<void>;

    clearChat: () => void;
}

/**
 * Prompt Button
 */
export interface PromptButton {
    id: number;

    label: string;

    prompt: string;
}

/**
 * AI Configuration
 */
export interface AISettings {
    temperature: number;

    maxTokens: number;

    model: string;

    provider: string;
}
