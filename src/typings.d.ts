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
declare var gtag: (event: string, eventName: string, options: Record<string, any>) => void
declare var gtagInit: (window: Window, document: Document) => void
declare var gtagOut: () => void
