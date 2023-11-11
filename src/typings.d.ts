/**
 * Manually trigger custom events for Plausible.
 */
declare let plausible: (
    event: string,
    options?: {
        props?: Record<string, string>
        revenue?: { currency: string; amount: string | number }
        callback?: () => void
    },
) => void
