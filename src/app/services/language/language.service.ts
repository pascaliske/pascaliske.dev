import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject } from 'rxjs'

export enum Language {
    EN = 'en',
    DE = 'de'
}

@Injectable()
export class LanguageService {
    public language$: BehaviorSubject<string> = new BehaviorSubject(Language.EN)

    public constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang(Language.EN)
    }

    public set language(language: Language) {
        this.translateService.use(language)
        this.language$.next(language)
    }

    public get language(): Language {
        return this.language$.getValue() as Language
    }
}
