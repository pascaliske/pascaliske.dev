import { ErrorHandler } from '@angular/core'
import * as Raven from 'raven-js'
import { environment } from '../environments/environment'

if (environment.production) {
    Raven.config(environment.sentryDsn).install()
}

export class RavenErrorHandler implements ErrorHandler {
    public handleError(error: any): void {
        if (environment.production) {
            Raven.captureException(error)
        }
        throw error
    }
}
