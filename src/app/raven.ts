import { Injectable, ErrorHandler } from '@angular/core'
import { config, captureException } from 'raven-js'
import { environment } from '../environments/environment'

// configures sentry's raven library
if (environment.production) {
    config(environment.sentry.dsn, environment.sentry.options).install()
}

/**
 * Injectable error handler for sentry.
 */
@Injectable()
export class RavenErrorHandler implements ErrorHandler {
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
