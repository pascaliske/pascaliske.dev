import { Component, HostListener } from '@angular/core'
import {
    Router,
    RouterEvent,
    NavigationStart,
    NavigationEnd,
    ActivatedRoute
} from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { TitleService } from './services/title/title.service'
import { ScrollService } from './services/scroll/scroll.service'
import 'rxjs/add/operator/filter'

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
     * @param {ScrollService} scrollService
     * @returns {AppComponent}
     */
    public constructor(
        private router: Router,
        private translateService: TranslateService,
        private breakpointService: BreakpointService,
        private titleService: TitleService,
        private scrollService: ScrollService
    ) {
        this.translateService.setDefaultLang('en')
        this.translateService.use('en')
        this.titleService.setDivider('//')
        this.titleService.setSuffix('Pascal Iske')
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                this.translateService.use(event.url.split('/')[1])
                setTimeout(() => this.show(), 200)
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
     * Pipes the window scroll event to the ScrollService.
     *
     * @param {Event} event
     * @returns {void}
     */
    @HostListener('window:scroll', ['$event'])
    public onScroll(event: Event): void {
        this.scrollService.handleScroll(event)
    }

    /**
     * Hides the application before loading.
     *
     * @returns {void}
     */
    private show(): void {
        this.activated = true
    }
}
