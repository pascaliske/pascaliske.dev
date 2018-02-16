import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

/**
 * FooterMetaComponent
 *
 * Displays copyright info, legal links and the language switch.
 */
@Component({
    selector: 'cmp-footer-meta',
    templateUrl: './footer-meta.component.html',
    styleUrls: ['./footer-meta.component.scss']
})
export class FooterMetaComponent implements OnInit {
    /**
     * The current language.
     *
     * @param {string}
     */
    public language: string

    /**
     * The current year.
     *
     * @param {number}
     */
    public year: number = new Date().getFullYear()

    /**
     * Controls if the observebales in this class shoulb be unsubscribed.
     *
     * @param {boolean}
     */
    private alive: boolean = true

    /**
     * Initializes the component.
     *
     * @param {Router} router
     * @param {ActivatedRoute} route
     * @returns {FooterMetaComponent}
     */
    public constructor(public router: Router, public route: ActivatedRoute) {}

    /**
     * Fetches the current language and injects it in the component.
     *
     * @returns {void}
     */
    public ngOnInit(): void {
        this.route.paramMap
            .takeWhile(() => this.alive)
            .subscribe(params => (this.language = params.get('language') || 'en'))
    }

    /**
     * Navigates to the current page in the given language.
     *
     * @param {string} language - The new language.
     * @returns {void}
     */
    public changeLanguage(language: string): void {
        const { path } = this.route.snapshot.url[0]

        this.router.navigate(['/', language, path])
    }
}
