/**
 * Unique app ID. Will be replaced during build.
 */
declare const APP_ID: string

/**
 * Release version. Will be replaced during build.
 */
declare const APP_VERSION: string

/**
 * Google Analytics Functions.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let gtag: (event: string, eventName: string, options: Record<string, any>) => void
declare let gtagInit: (window: Window, document: Document) => void
declare let gtagOut: () => void
