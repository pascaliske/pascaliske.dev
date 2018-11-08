import { Component } from '@angular/core'
import { Router } from '@angular/router'

/**
 * FooterMetaComponent
 *
 * Displays copyright info and legal links.
 */
@Component({
    selector: 'cmp-footer-meta',
    templateUrl: './footer-meta.component.html',
    styleUrls: ['./footer-meta.component.scss'],
})
export class FooterMetaComponent {
    /**
     * The current year.
     *
     * @param {number}
     */
    public year: number = new Date().getFullYear()

    /**
     * Initializes the component.
     *
     * @param {Router} router
     */
    public constructor(public router: Router) {}
}
