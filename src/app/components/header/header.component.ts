import { Component, AfterViewInit } from '@angular/core'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    /**
     * Controls the active state of the component.
     *
     * @param {boolean}
     */
    public activated: boolean = false

    /**
     * Initializes the component.
     */
    public constructor() {}

    /**
     * Activate the component
     *
     * @returns {void}
     */
    public ngAfterViewInit(): void {
        setTimeout(() => (this.activated = true), 600)
    }
}
