import { importProvidersFrom, ApplicationConfig, ValueProvider, APP_ID } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
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
            NgProgressModule.withConfig({ color: '#ff6666', fixed: true }),
            NgProgressHttpModule,
            NgProgressRouterModule,
        ),
        provideClientHydration(),
        provideRouter(routes, ...features),
        provideHttpClient(),
        provideAppId(),
    ],
}
