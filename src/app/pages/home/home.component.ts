import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends Page implements OnDestroy {
    public constructor(protected route: ActivatedRoute, protected titleService: TitleService) {
        super(route, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
