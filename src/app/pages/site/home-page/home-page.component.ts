import { Component, OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'

import { TitleService } from '../../../services/title/title.service'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(private translate: TranslateService, private titleService: TitleService) {
        this.translate
            .get('PAGE_TITLE_HOME')
            .takeWhile(() => this.alive)
            .subscribe(translation => {
                this.title = translation
                this.titleService.setTitle(translation)
            })
        this.translate.onLangChange
            .takeWhile(() => this.alive)
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations.PAGE_TITLE_HOME
                this.titleService.setTitle(event.translations.PAGE_TITLE_HOME)
            })
    }

    public ngOnDestroy() {
        this.alive = false
    }
}
