import { ApplicationRef } from '@angular/core'
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { serverConfig } from './app/app.config.server'

export const bootstrap = (context: BootstrapContext): Promise<ApplicationRef> => {
    return bootstrapApplication(AppComponent, serverConfig, context)
}

export default bootstrap
