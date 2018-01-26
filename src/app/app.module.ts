import { NgModule } from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { HomePageModule } from './pages/home-page/home-page.module'
import { AboutPageModule } from './pages/about-page/about-page.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        AppRoutingModule,
        HomePageModule,
        AboutPageModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {}
