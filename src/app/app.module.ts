import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { RavenErrorHandler } from './raven'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { SiteModule } from './pages/site/site.module'
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
        AppRoutingModule,
        CoreModule,
        SiteModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: RavenErrorHandler,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
