import { NgModule, ErrorHandler } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { FormElementsModule } from '@pascaliske/form-elements'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown'
import { NgcCookieConsentModule } from 'ngx-cookieconsent'
import { environment } from '../../environments/environment'
import { reducers } from '../store'
import { SentryErrorHandler } from '../sentry'

export function MarkdownOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer()

    renderer.strong = (text: string): string => `<strong class="md-bold">${text}</strong>`
    renderer.em = (text: string): string => `<em class="md-italic">${text}</em>`
    renderer.hr = (): string => '<div class="md-divider"></div>'
    renderer.link = (href: string, title: string, text: string): string => {
        const content: string = `<span class="md-link__text">${text}</span>`
        return `<a class="md-link" href="${href}" title="${title || text}">${content}</a>`
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
        renderer: renderer,
    }
}

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([]),
        FormElementsModule.forRoot({
            email: {
                suggestions: true,
            },
        }),
        NotificationsModule,
        NgProgressModule.forRoot({
            color: '#fff',
            speed: 250,
            debounceTime: 400,
            thick: true,
            spinner: true,
            meteor: false,
        }),
        NgProgressHttpModule,
        NgProgressRouterModule,
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useFactory: MarkdownOptionsFactory,
            },
        }),
        NgcCookieConsentModule.forRoot({
            autoOpen: false,
            autoAttach: false,
            cookie: {
                name: 'pascal-iske.de',
                domain: environment.cookieDomain,
            },
        }),
    ],
    exports: [NotificationsModule, NgProgressModule, MarkdownModule],
    providers: [
        {
            provide: ErrorHandler,
            useClass: SentryErrorHandler,
        },
    ],
})
export class CoreModule {}
