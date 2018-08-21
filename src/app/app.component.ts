import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { modifiers } from '@pascaliske/html-helpers'
import { Observable } from 'rxjs'
import { filter, takeWhile, switchMap, map } from 'rxjs/operators'
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
     * @param {LanguageService} languageService
     * @param {TitleService} titleService
     * @param {TrackingService} trackingService
     */
    public constructor(
        private router: Router,
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
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get classes(): string {
        return modifiers('cmp-root', {
            activated: this.activated,
        })
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
