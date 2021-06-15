import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { HeaderModule } from './components/header/header.module'
import { NavigationModule } from './components/navigation/navigation.module'
import { FooterModule } from './components/footer/footer.module'
import { CookieBannerModule } from './components/cookie-banner/cookie-banner.module'
import { AppComponent } from './app.component'

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule.withServerTransition({
            appId: 'pascaliske-dev-server',
        }),
        BrowserTransferStateModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        CookieBannerModule,
    ],
    declarations: [AppComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
