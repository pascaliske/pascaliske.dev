import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { SentryErrorHandler } from './sentry'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { HeaderModule } from './components/header/header.module'
import { NavigationModule } from './components/navigation/navigation.module'
import { FooterModule } from './components/footer/footer.module'
import { PagesModule } from './pages/pages.module'
import { AppComponent } from './app.component'

export function TranslationLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/translations/')
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslationLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NotificationsModule.forRoot(),
        AppRoutingModule,
        CoreModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        PagesModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: SentryErrorHandler,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
