export const RATE_LIMIT = {
    MAX_REQUESTS: 20,

    WINDOW_HOURS: 8,

    COOKIE_NAME:
        "portfolio_visitor_id",

    COOKIE_MAX_AGE:
        60 * 60 * 24 * 365,
} as const;