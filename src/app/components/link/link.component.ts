import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { Alignment } from './typings'

/**
 * LinkComponent
 *
 * - use `<cmp-link target="">Text</cmp-link>` for displaying internal links
 * - use `<cmp-link url="">Text</cmp-link>` for displaying external links
 * - use `<cmp-link url="" text="Text" [inline]="true"></cmp-link>` for inline links
 */
@Component({
    selector: 'cmp-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
    public static readonly cmpName: string = 'LinkComponent'

    /**
     * The link text.
     *
     * @param {string} text
     */
    @Input()
    public text: string

    /**
     * The link icon.
     *
     * @param {string} icon
     */
    @Input()
    public icon: string

    /**
     * The external link target.
     *
     * @param {string} url
     */
    @Input()
    public url: string

    /**
     * The internal link target.
     *
     * @param {Array<string>} target
     */
    @Input()
    public target: Array<string>

    /**
     * Whether the link should be displayed inline or not.
     *
     * @param {boolean} inline
     */
    @Input()
    public inline: boolean = true

    /**
     * The alignment of the link inside of the conta
     *
     * @param {'left' | 'center' | 'right'} align
     */
    @Input()
    public align: Alignment = 'center'

    /**
     * Initializes the component.
     *
     * @param {Router} router - The router.
     */
    public constructor(private router: Router) {}

    /**
     * Navigates to the internal or external target.
     *
     * @returns {void}
     */
    public navigate(): void {
        if (this.url && this.url !== '') {
            window.location.href = this.url
            return
        }

        if (this.target && this.target.length !== 0) {
            this.router.navigate(this.target)
            return
        }

        return
    }
}
