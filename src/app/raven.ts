import { Injectable, ErrorHandler } from '@angular/core'
import * as Raven from 'raven-js'
import { environment } from '../environments/environment'

// configures sentry's raven library
if (environment.production) {
    Raven.config(environment.sentry.dsn, environment.sentry.options).install()
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
            Raven.captureException(error.originalError || error)
            return
        }

        // re-throw error in dev mode
        throw error
    }
}
