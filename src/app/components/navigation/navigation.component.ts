import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { BreakpointService, Breakpoints } from '../../services/breakpoint/breakpoint.service'
import 'rxjs/add/operator/takeWhile'

@Component({
    selector: 'cmp-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    public mobile: boolean = false

    public mobileOpen: boolean = false

    private alive: boolean = true

    public constructor(public router: Router, public breakpointService: BreakpointService) {
        this.mobile = this.breakpointService.isLarger(Breakpoints.MINI_TABLET) === false
    }

    public ngOnInit() {
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
