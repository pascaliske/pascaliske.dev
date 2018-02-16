import { Component, OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'

import { TitleService } from '../../../services/title/title.service'

@Component({
    selector: 'cmp-sign-out-page',
    templateUrl: './sign-out-page.component.html',
    styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(private translate: TranslateService, private titleService: TitleService) {
        this.translate
            .get('PAGE_TITLE_SIGNOUT')
            .takeWhile(() => this.alive)
            .subscribe(translation => {
                this.title = translation
                this.titleService.setTitle(translation)
            })
        this.translate.onLangChange
            .takeWhile(() => this.alive)
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations.PAGE_TITLE_SIGNOUT
                this.titleService.setTitle(event.translations.PAGE_TITLE_SIGNOUT)
            })
    }

    public ngOnDestroy() {
        this.alive = false
    }
}
