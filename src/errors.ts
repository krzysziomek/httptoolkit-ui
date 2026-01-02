export function initSentry(dsn: string | undefined) {
}

export function logErrorsAsUser(id: string | undefined) {
}

export function logError(error: Error | string | unknown, metadata: { [key: string]: any } = {}) {
    console.error('Error:', error, metadata);
}