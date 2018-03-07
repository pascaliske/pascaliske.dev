import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { LanguageService } from '../../services/language/language.service'
import { BreakpointService, Breakpoints } from '../../services/breakpoint/breakpoint.service'
import { takeWhile } from 'rxjs/operators'

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

    public mobile: boolean = false

    public mobileOpen: boolean = false

    private alive: boolean = true

    public constructor(private breakpointService: BreakpointService) {
        this.mobile = this.breakpointService.isLarger(Breakpoints.MINI_TABLET) === false
    }

    public ngOnInit() {
        this.breakpointService.breakpoint$
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.onBreakpointChange())
    }

    public ngOnDestroy() {
        this.alive = false
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
