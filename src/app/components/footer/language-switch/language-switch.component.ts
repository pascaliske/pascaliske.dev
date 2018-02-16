import { Component } from '@angular/core'
import { Router, ActivatedRoute, Route } from '@angular/router'
import { routes } from '../../../app-routing.module'

@Component({
    selector: 'cmp-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent {
    public path: string = 'home'

    public constructor(public route: ActivatedRoute) {
        this.path = this.route.snapshot.firstChild.url[0].path
    }

    public isAuthPath(): boolean {
        const { children } = routes.find(item => item.path === 'auth')

        return !!children.find(item => item.path.includes(this.path))
    }
}
