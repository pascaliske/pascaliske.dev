import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../services/title/title.service'

@Component({
    selector: 'cmp-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
    public title: string = 'Sign in'

    public constructor(private titleService: TitleService, public route: ActivatedRoute) {
        this.titleService.setTitle(this.title)
        this.route.paramMap.subscribe(params => console.log(params))
    }

    public ngOnInit() {}
}
