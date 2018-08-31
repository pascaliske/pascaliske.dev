import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { modifiers } from '@pascaliske/html-helpers'
import { TranslateService } from '@ngx-translate/core'
import { filter, takeWhile } from 'rxjs/operators'
import { TitleService } from './shared/title/title.service'
import { TrackingService } from './shared/tracking/tracking.service'
import { NavigationItem } from './components/navigation/navigation.component'

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
     * @param {TitleService} titleService
     * @param {TrackingService} trackingService
     */
    public constructor(
        private router: Router,
        private translateService: TranslateService,
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
            )
            .subscribe((event: NavigationEnd) => {
                this.show()
                this.trackingService.track('pageview', {
                    page: event.urlAfterRedirects,
                })
            })

        this.translateService.onLangChange.pipe(takeWhile(() => this.alive)).subscribe(event => {
            document.querySelector('html').setAttribute('lang', event.lang)
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

    /**
     * Shows the application after loading.
     *
     * @returns {void}
     */
    private show(): void {
        setTimeout(() => (this.activated = true), 400)
    }
}
