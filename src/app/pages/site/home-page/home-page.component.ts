import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../shared/title/title.service'
import { LanguageService } from '../../../shared/language/language.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends Page implements OnDestroy {
    public constructor(
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService,
        public languageService: LanguageService,
    ) {
        super(route, translate, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
