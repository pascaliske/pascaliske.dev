import { Component } from '@angular/core'
import { LanguageService, Language } from '../../shared/language/language.service'

@Component({
    selector: 'cmp-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
    public constructor(private languageService: LanguageService) {}

    public change(language: string) {
        this.languageService.change(language as Language)
    }
}
