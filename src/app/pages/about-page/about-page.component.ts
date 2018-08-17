import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from '../../shared/language/language.service'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent extends Page implements OnDestroy {
    public constructor(
        public route: ActivatedRoute,
        public translateService: TranslateService,
        public languageService: LanguageService,
        public titleService: TitleService,
    ) {
        super(route, translateService, languageService, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
