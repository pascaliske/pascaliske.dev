import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown'
import { environment } from '../environments/environment'
import { RavenErrorHandler } from './raven'
import { AppRoutingModule } from './app-routing.module'
import { SiteModule } from './pages/site/site.module'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { TitleService } from './services/title/title.service'
import { ScrollService } from './services/scroll/scroll.service'
import { ViewportService } from './services/viewport/viewport.service'
import { LanguageService } from './services/language/language.service'
import { AppComponent } from './app.component'

export function TranslationLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/translations/')
}

export function MarkdownOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer()

    renderer.strong = (text: string): string => `<strong class="md-bold">${text}</strong>`
    renderer.em = (text: string): string => `<em class="md-italic">${text}</em>`
    renderer.hr = (): string => '<div class="md-divider"></div>'
    renderer.link = (href: string, title: string, text: string): string => {
        const content: string = `<span class="md-link__text">${text}</span>`
        return `<a class="md-link" href="${href}" title="${title}">${content}</a>`
    }
    renderer.list = (body: string, ordered: boolean): string => {
        if (ordered) {
            return `<ol class="md-list ordered">${body}</ol>`
        }
        return `<ul class="md-list">${body}</ul>`
    }
    renderer.listitem = (text: string): string => `<li class="md-list__item">${text}</li>`

    return {
        gfm: true,
        tables: true,
        renderer: renderer
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production
        }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslationLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        MarkdownModule.forRoot({
            provide: MarkedOptions,
            useFactory: MarkdownOptionsFactory
        }),
        AppRoutingModule,
        SiteModule
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: RavenErrorHandler
        },
        TranslateService,
        BreakpointService,
        TitleService,
        ScrollService,
        ViewportService,
        LanguageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
