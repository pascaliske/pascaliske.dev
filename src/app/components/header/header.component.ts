import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { animations } from './header.animation'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations,
})
export class HeaderComponent {
    public constructor(private readonly router: Router) {}

    /**
     * Go to home page.
     *
     * @returns {void}
     */
    public goHome(): void {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.router.navigate(['/'])
    }
}
