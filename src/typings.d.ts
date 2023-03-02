/**
 * Unique app ID. Will be replaced during build.
 */
declare const APP_ID: string

/**
 * Release version. Will be replaced during build.
 */
declare const APP_VERSION: string

/**
 * Patch effective network type into {@link NetworkInformation}.
 */
interface NetworkInformation extends EventTarget {
    readonly effectiveType?: '2g' | '3g' | '4g' | 'slow-2g'
}

/**
 * Patch connection into {@link NavigatorNetworkInformation}.
 */
declare interface Navigator {
    readonly connection?: NetworkInformation
}
