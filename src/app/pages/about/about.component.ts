import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends Page implements OnDestroy {
    public constructor(protected route: ActivatedRoute, protected titleService: TitleService) {
        super(route, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
