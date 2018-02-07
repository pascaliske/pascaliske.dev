import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    public title: string = 'Startseite'

    public constructor(private titleService: TitleService, public route: ActivatedRoute) {
        this.titleService.setTitle(this.title)
        this.route.paramMap.subscribe(params => console.log(params))
    }

    public ngOnInit() {}
}
