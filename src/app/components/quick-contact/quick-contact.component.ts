import { Component } from '@angular/core'
import { LanguageService } from '../../services/language/language.service'

@Component({
    selector: 'cmp-quick-contact',
    templateUrl: './quick-contact.component.html',
    styleUrls: ['./quick-contact.component.scss']
})
export class QuickContactComponent {
    public static readonly cmpName: string = 'QuickContactComponent'

    /**
     * Initializes the component.
     *
     * @param {LanguageService} languageService
     * @returns {FooterMetaComponent}
     */
    public constructor(public languageService: LanguageService) {}
}
