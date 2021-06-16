import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ScrollService } from '../../../shared/scroll/scroll.service'

@Component({
    selector: 'cmp-to-top-button',
    templateUrl: './to-top-button.component.html',
    styleUrls: ['./to-top-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToTopButtonComponent {
    /**
     * Initializes the component.
     */
    public constructor(private readonly scrollService: ScrollService) {}

    /**
     * Scrolls the viewport to the top.
     *
     * @returns {void}
     */
    public scrollToTop(): void {
        this.scrollService.scroll(0, 0)
    }
}
