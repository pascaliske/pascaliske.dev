import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
    public title: string = 'Über mich'

    public constructor(private titleService: TitleService, public route: ActivatedRoute) {
        this.titleService.setTitle(this.title)
        this.route.paramMap.subscribe(params => console.log(params))
    }

    public ngOnInit() {}
}
