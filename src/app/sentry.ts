import { Injectable, ErrorHandler } from '@angular/core'
import { init, captureException } from '@sentry/browser'
import { environment } from '../environments/environment'

// configures sentry's raven library
if (environment.production) {
    init(environment.sentry)
}

/**
 * Injectable error handler for sentry.
 */
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    /**
     * Handles any error.
     *
     * @param {any} error
     * @returns {void}
     */
    public handleError(error: any): void {
        // log error to sentry in production
        if (environment.production) {
            captureException(error.originalError || error)
            return
        }

        // re-throw error in dev mode
        throw error
    }
}
