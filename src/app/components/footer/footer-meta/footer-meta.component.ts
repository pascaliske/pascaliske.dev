import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LanguageService } from '../../../shared/language/language.service'

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
     * @param {LanguageService} languageService
     * @returns {FooterMetaComponent}
     */
    public constructor(public router: Router, public languageService: LanguageService) {}
}
