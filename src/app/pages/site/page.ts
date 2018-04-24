import { OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { takeWhile } from 'rxjs/operators'
import { TitleService } from '../../services/title/title.service'

export class Page implements OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(public translate: TranslateService, public titleService: TitleService) {}

    public fetchTitle(key: string): void {
        this.translate
            .get(key)
            .pipe(takeWhile(() => this.alive))
            .subscribe(translation => {
                this.title = translation
                this.titleService.title = translation
            })
        this.translate.onLangChange
            .pipe(takeWhile(() => this.alive))
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations[key]
                this.titleService.title = event.translations[key]
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
