import { Component } from '@angular/core'
import { Router, ActivatedRoute, Route, UrlSegment, NavigationEnd } from '@angular/router'
import { filter, switchMap } from 'rxjs/operators'
import { routes } from '../../../app-routing.module'

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

    public isAuthPath(): boolean {
        const { children } = routes.find(item => item.path === 'auth')

        return !!children.find(item => item.path === this.path)
    }
}
