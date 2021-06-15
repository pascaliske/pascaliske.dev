/**
 * Unique app ID. Will be replaced during build.
 */
declare const APP_ID: string

/**
 * Release version. Will be replaced during build.
 */
declare const APP_VERSION: string

declare var ga: (event: string, options: any) => void
declare var gaInit: (window: Window, document: Document) => void
declare var gaOut: () => void
