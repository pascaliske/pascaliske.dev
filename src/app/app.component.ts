import { Component, HostListener } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { filter } from 'rxjs/operators'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
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
export class AppComponent {
    /**
     * The current state of the application.
     *
     * @param {boolean} activated
     */
    public activated: boolean = false

    /**
     * Initializes the AppComponent.
     *
     * @param {Router} router
     * @param {TranslateService} translateService
     * @param {BreakpointService} breakpointService
     * @param {TitleService} titleService
     * @returns {AppComponent}
     */
    public constructor(
        private router: Router,
        private translateService: TranslateService,
        private breakpointService: BreakpointService,
        private titleService: TitleService,
    ) {
        this.translateService.setDefaultLang('en')
        this.titleService.divider = '//'
        this.titleService.suffix = 'Pascal Iske'
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                setTimeout(() => this.show(), 400)
            })
    }

    /**
     * Pipes the window resize event to the BreakpointService.
     *
     * @param {Event} event
     * @returns {void}
     */
    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        this.breakpointService.handleResize(event)
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
