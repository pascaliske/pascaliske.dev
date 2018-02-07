import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cmp-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {
    public page: string = 'home'

    public constructor(public router: Router, public route: ActivatedRoute) {
        this.page = this.route.snapshot.url[0].path
    }

    public ngOnInit() {}
}
