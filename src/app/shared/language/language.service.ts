import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
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
     * Internal subject for controlling the current selected language.
     *
     * @param {BehaviorSubject<Language>}
     */
    private lang$: BehaviorSubject<Language>

    public constructor(
        @Inject(PLATFORM_ID) private platformId: object,
        private translateService: TranslateService,
        private trackingService: TrackingService,
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const selected = this.preselect([Language.EN, Language.DE])

            if (!this.lang$) {
                this.lang$ = new BehaviorSubject(selected)
                this.translateService.setDefaultLang(selected)
            }
        }
    }

    /**
     * The current selected language.
     *
     * @param {Observable<Language>}
     */
    public get language$(): Observable<Language> {
        return this.lang$.asObservable()
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
     * @returns {Language}
     */
    private preselect(allowed: Array<string> = []): Language {
        // detect users preferred language
        const lang = navigator.language.split('-')[0].toLowerCase()

        // try users language
        if (allowed.includes(lang)) {
            return lang as Language
        }

        // try first allowed language
        if (allowed.length > 0) {
            return allowed[0] as Language
        }

        // fallback to english
        return Language.EN
    }
}
