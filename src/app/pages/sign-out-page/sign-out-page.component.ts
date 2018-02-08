import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-sign-out-page',
    templateUrl: './sign-out-page.component.html',
    styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnInit {
    public title: string = 'Sign out'

    public constructor(private titleService: TitleService, public route: ActivatedRoute) {
        this.titleService.setTitle(this.title)
        this.route.paramMap.subscribe(params => console.log(params))
    }

    public ngOnInit() {}
}
