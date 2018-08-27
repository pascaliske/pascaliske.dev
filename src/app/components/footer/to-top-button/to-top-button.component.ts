import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core'
import { ScrollService } from '../../../shared/scroll/scroll.service'

@Component({
    selector: 'cmp-to-top-button',
    templateUrl: './to-top-button.component.html',
    styleUrls: ['./to-top-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToTopButtonComponent {
    @HostBinding('attr.id')
    public id: string = 'to-top-button'

    @HostBinding('attr.aria-label')
    public ariaLabel: string = 'To Top Button'

    /**
     * Initializes the component.
     */
    public constructor(private scrollService: ScrollService) {}

    /**
     * Scrolls the viewport to the top.
     *
     * @returns {void}
     */
    public scrollToTop(): void {
        this.scrollService.scroll(0, 0)
    }
}
