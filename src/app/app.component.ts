import { Component, OnDestroy } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { filter, takeWhile } from 'rxjs/operators'
import { TitleService } from './services/title/title.service'

/**
 * AppComponent
 *
 * The main component for displaying the complete app.
 */
@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    /**
     * The current state of the application.
     *
     * @param {boolean} activated
     */
    public activated: boolean = false

    private alive: boolean = true

    /**
     * Initializes the AppComponent.
     *
     * @param {Router} router
     * @param {TranslateService} translateService
     * @param {TitleService} titleService
     * @returns {AppComponent}
     */
    public constructor(
        private router: Router,
        private translateService: TranslateService,
        private titleService: TitleService
    ) {
        this.translateService.setDefaultLang('en')
        this.titleService.divider = '//'
        this.titleService.suffix = 'Pascal Iske'
        this.router.events
            .pipe(takeWhile(() => this.alive), filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                setTimeout(() => this.show(), 400)
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    /**
     * Shows the application after loading.
     *
     * @returns {void}
     */
    private show(): void {
        this.activated = true
    }
}
