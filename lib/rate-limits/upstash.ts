import { Redis } from "@upstash/redis";

import { env } from "@/lib/env";

import { RATE_LIMIT_CONFIG } from "./config";
import { RateLimitProvider } from "./interface";
import { RateLimitRecord } from "./types";
import {
    buildRateLimitKey,
    isExpired,
} from "./utils";

let redis: Redis | null = null;

/**
 * Returns a singleton Redis client.
 */
function getRedis() {
    if (!redis) {
        redis = new Redis({
            url: env.UPSTASH_REDIS_REST_URL,
            token: env.UPSTASH_REDIS_REST_TOKEN,
        });
    }

    return redis;
}

class UpstashRateLimitProvider
    implements RateLimitProvider
{
    /**
     * Returns an existing record.
     */
    async get(
        identifier: string
    ): Promise<RateLimitRecord | null> {
        const key =
            buildRateLimitKey(identifier);

        const record =
            await getRedis().get<RateLimitRecord>(
                key
            );

        if (!record) {
            return null;
        }

        /**
         * Extra safety.
         *
         * Redis should already remove
         * expired keys via TTL,
         * but this keeps behaviour
         * identical to Memory.
         */
        if (
            isExpired(
                record.expiresAt
            )
        ) {
            await getRedis().del(key);

            return null;
        }

        return record;
    }

    /**
     * Creates or updates a record.
     */
    async set(
        record: RateLimitRecord
    ): Promise<void> {
        const key =
            buildRateLimitKey(
                record.identifier
            );

        const ttlSeconds =
            Math.max(
                1,
                Math.ceil(
                    (record.expiresAt -
                        Date.now()) /
                        1000
                )
            );

        await getRedis().set(
            key,
            record,
            {
                ex: ttlSeconds,
            }
        );

        if (
            RATE_LIMIT_CONFIG.enableLogs
        ) {
            const shortId =
                record.identifier.slice(
                    0,
                    8
                );

            console.log(
                `[RateLimit] ${shortId} → ${record.count}/${RATE_LIMIT_CONFIG.maxRequests}`
            );
        }
    }

    /**
     * Removes a visitor.
     */
    async delete(
        identifier: string
    ): Promise<void> {
        await getRedis().del(
            buildRateLimitKey(identifier)
        );
    }

    /**
     * Redis removes expired keys
     * automatically.
     */
    async cleanup(): Promise<void> {
        return;
    }
}

export const upstashRateLimitProvider =
    new UpstashRateLimitProvider();

export default upstashRateLimitProvider;