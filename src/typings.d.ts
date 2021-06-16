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
declare let gtag: (event: string, eventName: string, options: Record<string, unknown>) => void
declare let gtagInit: (window: Window, document: Document) => void
declare let gtagOut: () => void
