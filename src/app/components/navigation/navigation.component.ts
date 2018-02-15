import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BreakpointService, Breakpoints } from '../../services/breakpoint/breakpoint.service'
import 'rxjs/add/operator/takeWhile'

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
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    @Input() public items: Array<NavigationItem> = []

    public language: string

    public mobile: boolean = false

    public mobileOpen: boolean = false

    private alive: boolean = true

    public constructor(public route: ActivatedRoute, public breakpointService: BreakpointService) {
        this.mobile = this.breakpointService.isLarger(Breakpoints.MINI_TABLET) === false
    }

    public ngOnInit() {
        this.route.paramMap
            .takeWhile(() => this.alive)
            .subscribe(params => (this.language = params.get('language') || 'en'))
        this.breakpointService.breakpointChange
            .takeWhile(() => this.alive)
            .subscribe(() => this.onBreakpointChange())
    }

    public ngOnDestroy() {
        this.alive = false
    }

    /**
     * Toggles the state of the mobile navigation.
     *
     * @param {boolean} state
     * @returns {void}
     */
    public toggleMobileOpen(state: boolean): void {
        this.mobileOpen = state
    }

    /**
     * Sets the mobile flag according to breakpoints.
     *
     * @returns {void}
     */
    private onBreakpointChange(): void {
        this.mobile = !this.breakpointService.isLarger(Breakpoints.MINI_TABLET)
    }
}
