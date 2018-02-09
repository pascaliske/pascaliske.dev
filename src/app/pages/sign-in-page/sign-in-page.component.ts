import { Component, OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'

import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(private translate: TranslateService, private titleService: TitleService) {
        this.translate
            .get('PAGE_TITLE_SIGNIN')
            .takeWhile(() => this.alive)
            .subscribe(translation => {
                this.title = translation
                this.titleService.setTitle(translation)
            })
        this.translate.onLangChange
            .takeWhile(() => this.alive)
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations.PAGE_TITLE_SIGNIN
                this.titleService.setTitle(event.translations.PAGE_TITLE_SIGNIN)
            })
    }

    public ngOnDestroy() {
        this.alive = false
    }
}
