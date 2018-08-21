import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { TrackingService } from '../tracking/tracking.service'

export enum Language {
    EN = 'en',
    DE = 'de',
}

@Injectable()
export class LanguageService {
    /**
     * The current selected language.
     *
     * @param {Observable<Language>}
     */
    public language$: Observable<Language>

    /**
     * Internal subject for controlling the current selected language.
     *
     * @param {BehaviorSubject<Language>}
     */
    private lang$: BehaviorSubject<Language>

    public constructor(
        private translateService: TranslateService,
        private trackingService: TrackingService,
    ) {
        this.translateService.setDefaultLang(Language.EN)
        this.language$ = this.preselect([Language.EN, Language.DE])
    }

    /**
     * Changes the current language.
     *
     * @param {Language} language
     * @returns {Observable<void>}
     */
    public change(language: Language): Observable<void> {
        return this.translateService.use(language).pipe(
            map(() => {
                this.lang$.next(language)
                this.trackingService.track('event', {
                    eventCategory: 'language',
                    eventAction: 'change',
                    eventValue: language,
                })
            }),
        )
    }

    /**
     * Tries to fetch the users preferred language and fallbacks to english.
     *
     * @param {Array<string>} allowed
     * @returns {Observable<Language>}
     */
    private preselect(allowed: Array<string> = []): Observable<Language> {
        // use existing behavior subject
        if (this.lang$) {
            console.log('==>', this.lang$)
            return this.lang$.asObservable()
        }

        // detect users preferred language
        const lang = navigator.language.split('-')[0].toLowerCase()

        // try users language
        if (allowed.includes(lang)) {
            return new BehaviorSubject(lang as Language).asObservable()
        }

        // try first allowed language
        if (allowed.length > 0) {
            return new BehaviorSubject(allowed[0] as Language).asObservable()
        }

        // fallback to english
        return new BehaviorSubject(Language.EN).asObservable()
    }
}
