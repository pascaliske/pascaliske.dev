import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

export enum Language {
    EN = 'en',
    DE = 'de',
}

@Injectable()
export class LanguageService {
    public language$: Observable<Language>

    private lang$: Subject<Language> = new Subject()

    public constructor(private translateService: TranslateService) {
        this.language$ = this.lang$.asObservable()
        this.translateService.setDefaultLang(Language.EN)
    }

    public change(language: Language): Observable<void> {
        return this.translateService.use(language).pipe(
            map(() => {
                this.lang$.next(language)
            }),
        )
    }
}
