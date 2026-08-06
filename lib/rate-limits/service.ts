import { env } from "@/lib/env";

import { RATE_LIMIT_CONFIG } from "./config";
import { RateLimitProvider } from "./interface";
import { memoryRateLimitProvider } from "./memory";
import {
    RateLimitRecord,
    RateLimitResult,
} from "./types";
import { upstashRateLimitProvider } from "./upstash";

class RateLimitService {
    private readonly provider: RateLimitProvider;

    constructor() {
        this.provider =
            this.resolveProvider();
    }

    /**
     * Select the configured provider.
     */
    private resolveProvider(): RateLimitProvider {
        switch (
        RATE_LIMIT_CONFIG.provider
        ) {
            case "memory":
                return memoryRateLimitProvider;

            case "upstash":
                if (
                    !env.UPSTASH_REDIS_REST_URL ||
                    !env.UPSTASH_REDIS_REST_TOKEN
                ) {
                    throw new Error(
                        "Upstash Redis is selected but environment variables are missing."
                    );
                }

                return upstashRateLimitProvider;

            default:
                throw new Error(
                    "Unsupported rate limit provider."
                );
        }
    }

    /**
     * Window duration in milliseconds.
     */
    private getWindowMs() {
        return (
            RATE_LIMIT_CONFIG.windowHours *
            60 *
            60 *
            1000
        );
    }

    /**
     * Remaining seconds before reset.
     */
    private getRetryAfter(
        expiresAt: number
    ) {
        return Math.max(
            0,
            Math.ceil(
                (expiresAt -
                    Date.now()) /
                1000
            )
        );
    }

    /**
     * Creates a new visitor record.
     */
    private createRecord(
        identifier: string
    ): RateLimitRecord {
        const now = Date.now();

        return {
            identifier,

            count: 1,

            createdAt: now,

            expiresAt:
                now +
                this.getWindowMs(),
        };
    }

    /**
     * Checks whether a visitor
     * can consume one request.
     */
    async check(
        identifier: string
    ): Promise<RateLimitResult> {
        let record =
            await this.provider.get(
                identifier
            );

        /**
         * First request
         */
        if (!record) {
            record =
                this.createRecord(
                    identifier
                );

            await this.provider.set(
                record
            );

            return {
                success: true,

                remaining:
                    RATE_LIMIT_CONFIG.maxRequests -
                    1,

                limit:
                    RATE_LIMIT_CONFIG.maxRequests,

                resetAt:
                    record.expiresAt,

                retryAfter: 0,
            };
        }

        /**
         * Limit reached
         */
        if (
            record.count >=
            RATE_LIMIT_CONFIG.maxRequests
        ) {
            return {
                success: false,

                remaining: 0,

                limit:
                    RATE_LIMIT_CONFIG.maxRequests,

                resetAt:
                    record.expiresAt,

                retryAfter:
                    this.getRetryAfter(
                        record.expiresAt
                    ),
            };
        }

        /**
         * Increment usage
         */
        record.count += 1;

        await this.provider.set(
            record
        );

        return {
            success: true,

            remaining:
                RATE_LIMIT_CONFIG.maxRequests -
                record.count,

            limit:
                RATE_LIMIT_CONFIG.maxRequests,

            resetAt:
                record.expiresAt,

            retryAfter: 0,
        };
    }

    /**
     * Clears one visitor.
     */
    async reset(
        identifier: string
    ) {
        await this.provider.delete(
            identifier
        );
    }

    /**
     * Cleanup expired records.
     */
    async cleanup() {
        if (
            this.provider.cleanup
        ) {
            await this.provider.cleanup();
        }
    }
}

export const rateLimitService =
    new RateLimitService();

export default rateLimitService;