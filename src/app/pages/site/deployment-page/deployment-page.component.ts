import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-deployment-page',
    templateUrl: './deployment-page.component.html',
    styleUrls: ['./deployment-page.component.scss'],
})
export class DeploymentPageComponent extends Page implements OnDestroy {
    public constructor(
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService,
    ) {
        super(route, translate, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
