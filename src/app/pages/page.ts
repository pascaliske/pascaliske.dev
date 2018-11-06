import { ActivatedRoute } from '@angular/router'
import { takeWhile } from 'rxjs/operators'
import { TitleService } from '../shared/title/title.service'

export class Page {
    public title: string

    protected alive: boolean = true

    public constructor(protected route: ActivatedRoute, protected titleService: TitleService) {
        this.fetchTitle()
    }

    private fetchTitle(): void {
        this.route.data.pipe(takeWhile(() => this.alive)).subscribe(data => {
            this.title = data.title
            this.titleService.title = data.title
        })
    }
}
