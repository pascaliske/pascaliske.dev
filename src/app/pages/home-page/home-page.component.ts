import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends Page implements OnDestroy {
    public constructor(
        public route: ActivatedRoute,
        public translateService: TranslateService,
        public titleService: TitleService,
    ) {
        super(route, translateService, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
