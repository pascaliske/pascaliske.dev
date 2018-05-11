import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { takeWhile, switchMap } from 'rxjs/operators'
import { TitleService } from '../../shared/title/title.service'

export class Page {
    public title: string

    protected alive: boolean = true

    public constructor(
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService,
    ) {
        this.fetchTitle()
    }

    private fetchTitle(): void {
        this.route.data
            .pipe(takeWhile(() => this.alive), switchMap(data => this.translate.get(data.title)))
            .subscribe(translated => {
                this.title = translated
                this.titleService.title = translated
            })
        this.translate.onLangChange
            .pipe(
                takeWhile(() => this.alive),
                switchMap(() => this.route.data),
                switchMap(data => this.translate.get(data.title)),
            )
            .subscribe(translated => {
                this.title = translated
                this.titleService.title = translated
            })
    }
}
