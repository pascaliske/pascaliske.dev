import { NgModule } from '@angular/core'
import { StoreModule, MetaReducer } from '@ngrx/store'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown'
import { storeFreeze } from 'ngrx-store-freeze'
import { environment } from '../../environments/environment'
import { reducers } from '../store'

export const metaReducers: Array<MetaReducer<any>> = !environment.production ? [storeFreeze] : []

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
        StoreModule.forRoot(reducers, {
            metaReducers,
        }),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        MarkdownModule.forRoot({
            provide: MarkedOptions,
            useFactory: MarkdownOptionsFactory,
        }),
    ],
    exports: [StoreModule, NgProgressModule, MarkdownModule],
    providers: [],
})
export class CoreModule {}
