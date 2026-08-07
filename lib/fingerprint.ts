import FingerprintJS from "@fingerprintjs/fingerprintjs";

let visitorId: string | null = null;

let fingerprintPromise: Promise<string> | null =
    null;

/**
 * Returns a stable browser fingerprint.
 *
 * The fingerprint is generated only once
 * and cached for the lifetime of the page.
 */
export async function getBrowserFingerprint(): Promise<string> {
    if (visitorId) {
        return visitorId;
    }

    if (fingerprintPromise) {
        return fingerprintPromise;
    }

    fingerprintPromise = (async () => {
        const fp =
            await FingerprintJS.load();

        const result =
            await fp.get();

        visitorId =
            result.visitorId;

        return visitorId;
    })();

    return fingerprintPromise;
}

/**
 * Clears the cached fingerprint.
 *
 * Useful only for testing.
 */
export function clearFingerprintCache() {
    visitorId = null;

    fingerprintPromise = null;
}