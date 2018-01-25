import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    public constructor(public route: ActivatedRoute) {
        this.route.params.subscribe(params => console.log(params))
    }

    public ngOnInit() {}
}
