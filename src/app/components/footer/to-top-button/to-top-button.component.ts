import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-to-top-button',
    templateUrl: './to-top-button.component.html',
    styleUrls: ['./to-top-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToTopButtonComponent {
    /**
     * The duration of the scroll to top animation.
     *
     * @param {number} duration
     */
    @Input() public duration: number = 400

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
        const distance = window.scrollY
        const step = Math.PI / (this.duration / 15)
        const cosinus = distance / 2

        let counter = 0
        let margin
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                counter = counter + 1
                margin = cosinus - cosinus * Math.cos(counter * step)
                window.scrollTo(0, distance - margin)
            } else {
                clearInterval(scrollInterval)
            }
        }, 15)
    }
}
