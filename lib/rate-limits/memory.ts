import { RATE_LIMIT_CONFIG } from "./config";
import { RateLimitProvider } from "./interface";
import { RateLimitRecord } from "./types";
import {
    buildRateLimitKey,
    isExpired,
} from "./utils";

class MemoryRateLimitProvider
    implements RateLimitProvider
{
    /**
     * In-memory storage
     */
    private readonly store = new Map<
        string,
        RateLimitRecord
    >();

    /**
     * Returns an existing record.
     * Automatically removes expired records.
     */
    async get(
        identifier: string
    ): Promise<RateLimitRecord | null> {
        const key =
            buildRateLimitKey(identifier);

        const record =
            this.store.get(key);

        if (!record) {
            return null;
        }

        if (
            isExpired(
                record.expiresAt
            )
        ) {
            this.store.delete(key);

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

        this.store.set(
            key,
            record
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
     * Removes one visitor.
     */
    async delete(
        identifier: string
    ): Promise<void> {
        this.store.delete(
            buildRateLimitKey(identifier)
        );
    }

    /**
     * Removes expired records.
     * Safe to call periodically.
     */
    async cleanup(): Promise<void> {
        for (const [
            key,
            value,
        ] of this.store.entries()) {
            if (
                isExpired(
                    value.expiresAt
                )
            ) {
                this.store.delete(key);
            }
        }

        if (
            RATE_LIMIT_CONFIG.enableLogs
        ) {
            console.log(
                `[RateLimit] Cleanup completed. Active visitors: ${this.store.size}`
            );
        }
    }

    /**
     * Development helper.
     */
    get size() {
        return this.store.size;
    }

    /**
     * Development helper.
     */
    clear() {
        this.store.clear();
    }
}

export const memoryRateLimitProvider =
    new MemoryRateLimitProvider();

export default memoryRateLimitProvider;