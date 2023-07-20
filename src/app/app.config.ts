import { importProvidersFrom, ApplicationConfig, ValueProvider, APP_ID } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { NgProgressRouterModule } from 'ngx-progressbar/router'
import { features, routes } from './app.routing'

export const provideAppId: () => ValueProvider = (): ValueProvider => ({
    provide: APP_ID,
    useValue: 'pascaliske-dev',
})

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            NgProgressModule.withConfig({ color: '#ff6666', fixed: true }),
            NgProgressHttpModule,
            NgProgressRouterModule,
        ),
        provideClientHydration(),
        provideAnimations(),
        provideRouter(routes, ...features),
        provideAppId(),
    ],
}
