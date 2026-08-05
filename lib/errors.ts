export class AppError extends Error {
    public readonly status: number;

    public readonly code: string;

    constructor(
        message: string,
        status = 500,
        code = "INTERNAL_ERROR"
    ) {
        super(message);

        this.name = "AppError";

        this.status = status;

        this.code = code;
    }
}

export function getErrorMessage(
    error: unknown
): string {
    if (error instanceof AppError) {
        return error.message;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return "An unexpected error occurred.";
}

export function createErrorResponse(
    error: unknown
) {
    const message = getErrorMessage(error);

    const status =
        error instanceof AppError
            ? error.status
            : 500;

    const code =
        error instanceof AppError
            ? error.code
            : "INTERNAL_ERROR";

    return Response.json(
        {
            success: false,

            error: {
                message,

                code,
            },
        },
        {
            status,
        }
    );
}

export function validateRequired(
    value: unknown,
    field: string
) {
    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {
        throw new AppError(
            `${field} is required.`,
            400,
            "VALIDATION_ERROR"
        );
    }
}

export function validateString(
    value: unknown,
    field: string
): string {
    validateRequired(value, field);

    if (typeof value !== "string") {
        throw new AppError(
            `${field} must be a string.`,
            400,
            "VALIDATION_ERROR"
        );
    }

    return value.trim();
}