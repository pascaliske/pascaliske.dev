import { ActivatedRoute } from '@angular/router'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { takeWhile } from 'rxjs/operators'
import { TitleService } from '../../services/title/title.service'

export class Page {
    protected alive: boolean = true

    public constructor(
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService
    ) {
        this.fetchTitle(this.route.snapshot.data.title)
    }

    private fetchTitle(key: string): void {
        this.titleService.title = this.translate.instant(key)
        this.translate.onLangChange
            .pipe(takeWhile(() => this.alive))
            .subscribe((event: LangChangeEvent) => {
                this.titleService.title = event.translations[key]
            })
    }
}
