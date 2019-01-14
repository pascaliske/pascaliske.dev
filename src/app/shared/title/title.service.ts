import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

/**
 * Service to control the documents title from within components.
 *
 * - call `.setTitle()` for setting a new title
 * - call `.getTitle()` for getting the current title
 */
@Injectable({
    providedIn: 'root',
})
export class TitleService {
    /**
     * The title divider.
     *
     * @param {string}
     */
    public divider: string = '|'

    /**
     * The title prefix.
     *
     * @param {string}
     */
    public prefix: string = ''

    /**
     * The title suffix.
     *
     * @param {string}
     */
    public suffix: string = ''

    /**
     * Initializes the TitleService.
     *
     * @param {Title} browserTitle - The angular browser title service.
     */
    public constructor(private browserTitle: Title) {}

    /**
     * Sets a new title to the current HTML document.
     *
     * @param {string} value - The new title for the document.
     */
    public set title(value: string) {
        this.browserTitle.setTitle(this.prepare(value))
    }

    /**
     * Returns the current title of the HTMl document.
     *
     * @returns {string}
     */
    public get title(): string {
        return this.browserTitle.getTitle()
    }

    /**
     * Builds the title string using the given title and prefix, suffix and divier.
     *
     * @param {string} title - The title which will be prepared.
     * @returns {string} The final title
     */
    private prepare(title: string): string {
        const parts: string[] = []

        // prepend optional prefix
        if (this.prefix !== '') {
            parts.push(this.prefix)
        }

        parts.push(title)

        // append optional suffix
        if (this.suffix !== '') {
            parts.push(this.suffix)
        }

        return parts.join(` ${this.divider} `)
    }
}
