import { Component, OnInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { modifiers } from '@pascaliske/html-helpers'
import { takeWhile } from 'rxjs/operators'
import { BreakpointService, Breakpoints } from '../../shared/breakpoint/breakpoint.service'

/**
 * Representation of an navigation item.
 */
export interface NavigationItem {
    label: string
    route?: string
    url?: string
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
    public items: NavigationItem[] = []

    /**
     * Represents the current breakpoint state of the navigation.
     *
     * @param {boolean} mobile
     */
    public mobile: boolean = false

    /**
     * Represents the current open/close state of the mobile navigation.
     *
     * @param {boolean} open
     */
    public open: boolean = false

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
        @Inject(PLATFORM_ID) private readonly platformId: Record<string, unknown>,
        private readonly breakpointService: BreakpointService,
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
            open: this.mobile && this.open,
        })
    }

    /**
     * Returns the item classes.
     *
     * @param {NavigationItem}
     * @returns {string}
     */
    public getItemClasses(item: NavigationItem): string {
        return modifiers('cmp-navigation__item', {
            fixed: item.options?.fixedWidth,
        })
    }

    /**
     * Returns the link classes.
     *
     * @param {NavigationItem}
     * @returns {string}
     */
    public getLinkClasses(item: NavigationItem): string {
        return modifiers('cmp-navigation__text', {
            decorated: item.options?.decorated,
        })
    }
}
