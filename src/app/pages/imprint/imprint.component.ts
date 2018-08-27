import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent extends Page implements OnDestroy {
    public constructor(
        protected route: ActivatedRoute,
        protected translateService: TranslateService,
        protected titleService: TitleService,
    ) {
        super(route, translateService, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
