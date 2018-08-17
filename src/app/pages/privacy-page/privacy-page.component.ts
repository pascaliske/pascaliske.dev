import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from '../../shared/language/language.service'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-privacy-page',
    templateUrl: './privacy-page.component.html',
    styleUrls: ['./privacy-page.component.scss'],
})
export class PrivacyPageComponent extends Page implements OnDestroy {
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
