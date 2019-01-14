import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { animations } from './header.animation'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: animations,
})
export class HeaderComponent {
    public constructor(private router: Router) {}

    /**
     * Go to home page.
     *
     * @returns {void}
     */
    public goHome(): void {
        this.router.navigate(['/'])
    }
}
