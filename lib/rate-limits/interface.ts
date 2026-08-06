import {
    RateLimitRecord,
} from "./types";

export interface RateLimitProvider {
    get(
        identifier: string
    ): Promise<
        RateLimitRecord | null
    >;

    set(
        record: RateLimitRecord
    ): Promise<void>;

    delete(
        identifier: string
    ): Promise<void>;

    cleanup?(): Promise<void>;
}