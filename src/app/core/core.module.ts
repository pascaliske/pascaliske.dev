import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown'
import { environment } from '../../environments/environment'
import { reducers } from '../store'

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
        renderer: renderer,
    }
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([]),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useFactory: MarkdownOptionsFactory,
            },
        }),
    ],
    exports: [CommonModule, NgProgressModule, MarkdownModule],
    providers: [],
})
export class CoreModule {}
