import { Component, OnInit, OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'

import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(private translate: TranslateService, private titleService: TitleService) {
        this.translate
            .get('PAGE_TITLE_ABOUT')
            .takeWhile(() => this.alive)
            .subscribe(translation => {
                this.title = translation
                this.titleService.setTitle(translation)
            })
        this.translate.onLangChange
            .takeWhile(() => this.alive)
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations.PAGE_TITLE_ABOUT
                this.titleService.setTitle(event.translations.PAGE_TITLE_ABOUT)
            })
    }

    public ngOnInit() {}

    public ngOnDestroy() {
        this.alive = false
    }
}
