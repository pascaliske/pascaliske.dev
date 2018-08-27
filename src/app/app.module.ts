import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { HeaderModule } from './components/header/header.module'
import { NavigationModule } from './components/navigation/navigation.module'
import { FooterModule } from './components/footer/footer.module'
import { CookieBannerModule } from './components/cookie-banner/cookie-banner.module'
import { AppComponent } from './app.component'

export function TranslationLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/translations/')
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({
            appId: 'pascal-iske-server',
        }),
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslationLoaderFactory,
                deps: [HttpClient],
            },
        }),
        AppRoutingModule,
        CoreModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        CookieBannerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
