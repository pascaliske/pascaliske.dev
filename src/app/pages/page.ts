import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { takeWhile, switchMap } from 'rxjs/operators'
import { LanguageService, Language } from '../shared/language/language.service'
import { TitleService } from '../shared/title/title.service'

export class Page {
    public title: string

    protected alive: boolean = true

    public constructor(
        public route: ActivatedRoute,
        public translateService: TranslateService,
        public languageService: LanguageService,
        public titleService: TitleService,
    ) {
        this.fetchLanguage()
        this.fetchTitle()
    }

    private fetchLanguage(): void {
        this.route.paramMap.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.languageService.language = params.get('language') as Language
        })
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
