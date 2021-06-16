import 'cookieconsent'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppBrowserModule } from './app/app.browser.module'
import { environment } from './environments/environment'

if (environment.production) {
    // log app version on startup
    console.info(environment.version)

    enableProdMode()
}

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic()
        .bootstrapModule(AppBrowserModule)
        .catch(err => console.error(err))
})
