import { Component, OnInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { modifiers } from '@pascaliske/html-helpers'
import { takeWhile } from 'rxjs/operators'
import { BreakpointService, Breakpoints } from '../../shared/breakpoint/breakpoint.service'

/**
 * Representation of an navigation item.
 */
export interface NavigationItem {
    route: string
    label: string
    options?: {
        decorated?: boolean
        fixedWidth?: boolean
    }
}

@Component({
    selector: 'cmp-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
    /**
     * Array of navigation items.
     *
     * @param {Array<NavigationItem>}
     */
    @Input()
    public items: Array<NavigationItem> = []

    /**
     * Represents the current breakpoint state of the navigation.
     *
     * @param {boolean} mobile
     */
    public mobile: boolean = false

    /**
     * Represents the current open/close state of the mobile navigation.
     *
     * @param {boolean} mobileOpen
     */
    public mobileOpen: boolean = false

    /**
     * Lifecycle control property.
     *
     * @param {boolean} alive
     */
    private alive: boolean = true

    /**
     * Initializes the component.
     *
     * @param {BreakpointService} breakpointService
     */
    public constructor(
        @Inject(PLATFORM_ID) private platformId,
        private breakpointService: BreakpointService,
    ) {}

    /**
     * Setup logic.
     *
     * @returns {void}
     */
    public ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.mobile = this.breakpointService.isLarger(Breakpoints.MINI_TABLET) === false
        }

        this.breakpointService.breakpoint$.pipe(takeWhile(() => this.alive)).subscribe(() => {
            this.mobile = this.breakpointService.isLarger(Breakpoints.MINI_TABLET) === false
        })
    }

    /**
     * Teardown logic.
     *
     * @returns {void}
     */
    public ngOnDestroy(): void {
        this.alive = false
    }

    /**
     * Returns the component classes.
     *
     * @returns {string}
     */
    public get classes(): string {
        return modifiers('cmp-navigation', {
            open: this.mobile && this.mobileOpen,
        })
    }
}
