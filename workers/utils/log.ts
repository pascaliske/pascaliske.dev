export function logger(context: string): (message: string, ...args: unknown[]) => void {
    return (message: string, ...args: unknown[]) => {
        // eslint-disable-next-line no-console
        console.log(`==> [${context}] ${message}`, ...args)
    }
}
