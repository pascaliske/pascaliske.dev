import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'

if (environment.production) {
    // log app version on startup
    console.log('==> version', environment.version)

    enableProdMode()
}

export { AppServerModule } from './app/app.server.module'
