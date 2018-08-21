import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { filter, takeWhile, switchMap } from 'rxjs/operators'
import { LanguageService, Language } from './shared/language/language.service'
import { TitleService } from './shared/title/title.service'
import { TrackingService } from './shared/tracking/tracking.service'
import { NavigationItem } from './components/navigation/navigation.component'
import { fetchLanguage } from './language'

/**
 * AppComponent
 *
 * The main component for displaying the complete app.
 */
@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    /**
     * The current state of the application.
     *
     * @param {boolean} activated
     */
    public activated: boolean = false

    public pages: Array<NavigationItem> = [
        {
            route: 'home',
            label: 'NAVIGATION_HOME',
            options: {
                decorated: true,
            },
        },
        {
            route: 'about',
            label: 'NAVIGATION_ABOUT',
            options: {
                decorated: true,
            },
        },
        // {
        //     route: 'references',
        //     label: 'NAVIGATION_REFERENCES',
        //     options: {
        //         decorated: true,
        //     },
        // },
        // {
        //     route: 'blog',
        //     label: 'NAVIGATION_BLOG',
        //     options: {
        //         decorated: true,
        //     },
        // },
        {
            route: 'contact',
            label: 'NAVIGATION_CONTACT',
            options: {
                decorated: true,
            },
        },
    ]

    private alive: boolean = true

    /**
     * Initializes the AppComponent.
     *
     * @param {Router} router
     * @param {TranslateService} translateService
     * @param {LanguageService} languageService
     * @param {TitleService} titleService
     * @param {TrackingService} trackingService
     * @param {NgcCookieConsentService} cookieConsentService
     */
    public constructor(
        private router: Router,
        private translateService: TranslateService,
        private cookieConsentService: NgcCookieConsentService,
        private languageService: LanguageService,
        private titleService: TitleService,
        private trackingService: TrackingService,
    ) {}

    public ngOnInit(): void {
        this.titleService.divider = '//'
        this.titleService.suffix = 'Pascal Iske'
        this.router.events
            .pipe(
                takeWhile(() => this.alive),
                filter(event => event instanceof NavigationEnd),
                map(event => this.trackPageView(event as NavigationEnd)),
                switchMap(() => this.fetchLanguage()),
            )
            .subscribe(() => {
                this.show()
            })

        this.languageService.language$
            .pipe(
                takeWhile(() => this.alive),
                switchMap(() => {
                    return this.translateService.get([
                        'COOKIE_CONSENT_REVOKE_BUTTON',
                        'COOKIE_CONSENT_BANNER_HEADER',
                        'COOKIE_CONSENT_BANNER_MESSAGE',
                        'COOKIE_CONSENT_BANNER_DISMISS',
                        'COOKIE_CONSENT_BANNER_ALLOW',
                        'COOKIE_CONSENT_BANNER_DENY',
                        'COOKIE_CONSENT_BANNER_LINK',
                    ])
                }),
            )
            .subscribe(data => {
                const config = this.cookieConsentService.getConfig()
                const revoke = data['COOKIE_CONSENT_REVOKE_BUTTON']

                config.revokeBtn = `<div class="cc-revoke cc-policy {{classes}}">${revoke}</div>`
                config.content = {
                    header: data['COOKIE_CONSENT_BANNER_HEADER'],
                    message: data['COOKIE_CONSENT_BANNER_MESSAGE'],
                    dismiss: data['COOKIE_CONSENT_BANNER_DISMISS'],
                    allow: data['COOKIE_CONSENT_BANNER_ALLOW'],
                    deny: data['COOKIE_CONSENT_BANNER_DENY'],
                    link: data['COOKIE_CONSENT_BANNER_LINK'],
                }

                this.cookieConsentService.destroy()
                this.cookieConsentService.init(config)
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    private trackPageView(event: NavigationEnd): void {
        this.trackingService.track('pageview', {
            page: event.urlAfterRedirects,
        })
    }

    /**
     * Tries to fetch the users preferred language and fallbacks to english.
     *
     * @returns {void}
     */
    private fetchLanguage(): Observable<void> {
        switch (fetchLanguage(['en', 'de'])) {
            case 'de':
                return this.languageService.change(Language.DE)

            default:
                return this.languageService.change(Language.EN)
        }
    }

    /**
     * Shows the application after loading.
     *
     * @returns {void}
     */
    private show(): void {
        setTimeout(() => (this.activated = true), 400)
    }
}
