export interface RateLimitRecord {
    identifier: string;

    count: number;

    createdAt: number;

    expiresAt: number;
}

export interface RateLimitResult {
    success: boolean;

    remaining: number;

    limit: number;

    resetAt: number;

    retryAfter: number;
}