import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-privacy-page',
    templateUrl: './privacy-page.component.html',
    styleUrls: ['./privacy-page.component.scss']
})
export class PrivacyPageComponent extends Page implements OnDestroy {
    public constructor(
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService
    ) {
        super(route, translate, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
