import {
    Component,
    AfterViewInit,
    ViewEncapsulation,
    Input,
    ElementRef,
    ViewChild
} from '@angular/core'
import * as hljs from 'highlight.js'

@Component({
    selector: 'cmp-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CodeComponent implements AfterViewInit {
    /**
     * Input property to specify the code language.
     *
     * @param {string} language - The language of the code.
     */
    @Input() public language: string

    /**
     * Input property to inject the code itself.
     *
     * @param {string} language - The code.
     */
    @Input() public code: string

    /**
     * Element reference to the code block.
     *
     * @param {ElementRef} codeRef - An reference to the dom elment.
     */
    @ViewChild('codeRef') private codeRef: ElementRef

    /**
     * Initializes the component and configures highlight js.
     *
     * @param {ElementRef} element - The root element of the component.
     * @returns {CodeComponent}
     */
    public constructor(private element: ElementRef) {
        hljs.configure({
            classPrefix: 'cmp-code__'
        })
    }

    /**
     * Parses the code with highlight js and injects the result into the dom reference.
     *
     * @returns {void}
     */
    public ngAfterViewInit(): void {
        this.codeRef.nativeElement.innerHTML = this.parse(this.language, this.code)
    }

    /**
     * Highlights the given code for the given language or detects the language itself.
     *
     * @param {string} language - The language to highlight for.
     * @param {string} code - The code to highlight.
     * @returns {string}
     */
    private parse(language: string, code: string): string {
        // auto detect language
        if (!language || language === '') {
            return hljs.highlightAuto(this.code).value
        }

        // highlight code for given language
        return hljs.highlight(language, this.code).value
    }
}
