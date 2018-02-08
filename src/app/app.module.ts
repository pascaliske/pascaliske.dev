import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule } from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'

import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { HomePageModule } from './pages/home-page/home-page.module'
import { AboutPageModule } from './pages/about-page/about-page.module'
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module'

import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { TitleService } from './services/title/title.service'
import { ScrollService } from './services/scroll/scroll.service'
import { ViewportService } from './services/viewport/viewport.service'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        AppRoutingModule,
        HomePageModule,
        AboutPageModule,
        NotFoundPageModule
    ],
    providers: [BreakpointService, TitleService, ScrollService, ViewportService],
    bootstrap: [AppComponent]
})
export class AppModule {}
