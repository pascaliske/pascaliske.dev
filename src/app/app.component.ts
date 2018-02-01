import { Component, HostListener } from '@angular/core'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { TitleService } from './services/title/title.service'
import { ScrollService } from './services/scroll/scroll.service'

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
     * Initializes the AppComponent.
     *
     * @param {BreakpointService} breakpointService
     * @param {TitleService} titleService
     * @param {ScrollService} scrollService
     * @returns {AppComponent}
     */
    public constructor(
        private breakpointService: BreakpointService,
        private titleService: TitleService,
        private scrollService: ScrollService
    ) {
        this.titleService.setDivider('//')
        this.titleService.setSuffix('Pascal Iske')
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
}
