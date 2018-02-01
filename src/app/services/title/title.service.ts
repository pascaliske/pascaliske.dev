import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

/**
 * Service to control the documents title from within components.
 *
 * - call `.setTitle()` for setting a new title
 * - call `.getTitle()` for getting the current title
 */
@Injectable()
export class TitleService {
    /**
     * The title divider.
     *
     * @param {string}
     */
    private divider: string = '|'

    /**
     * The title prefix.
     *
     * @param {string}
     */
    private prefix: string = ''

    /**
     * The title suffix.
     *
     * @param {string}
     */
    private suffix: string = ''

    /**
     * Initializes the TitleService.
     *
     * @param {Title} title - The angular browser title service.
     * @returns {TitleService}
     */
    public constructor(private title: Title) {}

    /**
     * Change the default divider.
     *
     * @param {string} divider - The divider to use.
     */
    public setDivider(divider: string): void {
        this.divider = divider
    }

    /**
     * Sets an optional prefix for the title.
     *
     * @param {string} prefix - The prefix to set.
     */
    public setPrefix(prefix: string): void {
        this.prefix = prefix
    }

    /**
     * Sets an optional suffix for the title.
     *
     * @param {string} suffix - The suffix to set.
     */
    public setSuffix(suffix: string): void {
        this.suffix = suffix
    }

    /**
     * Sets a new title to the current HTML document.
     *
     * @param {string} title - The new title for the document.
     * @returns {string}
     */
    public setTitle(title: string): void {
        this.title.setTitle(this.prepare(title))
    }

    /**
     * Returns the current title of the HTMl document.
     *
     * @returns {string}
     */
    public getTitle(): string {
        return this.title.getTitle()
    }

    /**
     * Builds the title string using the given title and prefix, suffix and divier.
     *
     * @param {string} title - The title which will be prepared.
     * @returns {string} The final title
     */
    private prepare(title: string): string {
        const parts: Array<string> = []

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
