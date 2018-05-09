import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core'
import * as hljs from 'highlight.js'

@Component({
    selector: 'cmp-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent {
    public static readonly cmpName: string = 'CodeComponent'

    /**
     * Input property to specify the code language.
     *
     * @param {string} language - The language of the code.
     */
    @Input() public language: string

    /**
     * Input property to inject the code itself.
     *
     * @param {any} language - The code.
     */
    @Input() public code: any

    /**
     * Initializes the component and configures highlight js.
     *
     * @returns {CodeComponent}
     */
    public constructor() {
        hljs.configure({
            classPrefix: 'cmp-code__'
        })
    }

    /**
     * Highlights the given code for the given language or detects the language itself.
     *
     * @param {any} code - The code to highlight.
     * @returns {string}
     */
    public parse(code: any): string {
        // auto parse non string values
        if (typeof code !== 'string') {
            code = JSON.stringify(code, null, 2)
        }

        // auto detect language
        if (!this.language || this.language === '') {
            return hljs.highlightAuto(code).value
        }

        // highlight code for given language
        return hljs.highlight(this.language, code).value
    }
}
