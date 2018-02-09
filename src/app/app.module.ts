import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { HeaderModule } from './components/header/header.module'
import { HomePageModule } from './pages/home-page/home-page.module'
import { AboutPageModule } from './pages/about-page/about-page.module'
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { TitleService } from './services/title/title.service'
import { ScrollService } from './services/scroll/scroll.service'
import { ViewportService } from './services/viewport/viewport.service'

import { AppComponent } from './app.component'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/translations/')
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production
        }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        AppRoutingModule,
        HeaderModule,
        HomePageModule,
        AboutPageModule,
        NotFoundPageModule
    ],
    providers: [TranslateService, BreakpointService, TitleService, ScrollService, ViewportService],
    bootstrap: [AppComponent]
})
export class AppModule {}
