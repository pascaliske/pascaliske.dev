import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { takeWhile, switchMap } from 'rxjs/operators'
import { TitleService } from '../shared/title/title.service'

export class Page {
    public title: string

    protected alive: boolean = true

    public constructor(
        protected route: ActivatedRoute,
        protected translateService: TranslateService,
        protected titleService: TitleService,
    ) {
        this.fetchTitle()
    }

    private fetchTitle(): void {
        this.route.data
            .pipe(
                takeWhile(() => this.alive),
                switchMap(data => this.translateService.get(data.title)),
            )
            .subscribe(translated => {
                this.title = translated
                this.titleService.title = translated
            })

        this.translateService.onLangChange
            .pipe(
                takeWhile(() => this.alive),
                switchMap(() => this.route.data),
                switchMap(data => this.translateService.get(data.title)),
            )
            .subscribe(translated => {
                this.title = translated
                this.titleService.title = translated
            })
    }
}
