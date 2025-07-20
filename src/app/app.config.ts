import type { ApplicationConfig, ValueProvider } from '@angular/core'
import { provideZonelessChangeDetection, APP_ID } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { provideNgProgressOptions } from 'ngx-progressbar'
import { provideNgProgressRouter } from 'ngx-progressbar/router'
import { features, routes } from './app.routing'

export const provideAppId: () => ValueProvider = (): ValueProvider => ({
    provide: APP_ID,
    useValue: 'pascaliske-dev',
})

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideClientHydration(),
        provideRouter(routes, ...features),
        provideHttpClient(),
        provideNgProgressOptions({ spinner: true }),
        provideNgProgressRouter({ minDuration: 200 }),
        provideAppId(),
    ],
}
