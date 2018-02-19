import { Component } from '@angular/core'

@Component({
    selector: 'cmp-to-top-button',
    templateUrl: './to-top-button.component.html',
    styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent {
    /**
     * Initializes the component.
     *
     * @returns {ToTopButtonComponent}
     */
    public constructor() {}

    /**
     * Scrolls the viewport to the top.
     *
     * @returns {void}
     */
    public scrollToTop(): void {
        window.scroll(0, 0)
    }
}
