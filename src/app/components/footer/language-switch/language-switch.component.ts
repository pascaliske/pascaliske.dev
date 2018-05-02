import { Component } from '@angular/core'
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router'
import { filter, switchMap } from 'rxjs/operators'

@Component({
    selector: 'cmp-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent {
    public path: string

    public constructor(private router: Router, public route: ActivatedRoute) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                switchMap(() => this.route.firstChild.url)
            )
            .subscribe(([urlSegment]: Array<UrlSegment>) => {
                this.path = urlSegment.path
            })
    }
}
