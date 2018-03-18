import { Input, Output, EventEmitter } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FormErrorMessages } from './f-error/f-error.component'

export class FormElement {
    @Input() public name: string

    @Input() public label: string

    @Input() public model: string

    @Output() public modelChange: EventEmitter<string> = new EventEmitter()

    @Input() public fc: AbstractControl

    @Input() public messages: FormErrorMessages

    @Input() public autocomplete: string

    @Input() public autofocus: boolean

    public focus: boolean = false

    public constructor() {}

    public getClasses(baseClass: string): object {
        if (!this.fc) {
            return {}
        }

        const prefixed = modifier => `${baseClass}--${modifier}`

        return {
            [prefixed('focus')]: this.focus,
            [prefixed('required')]: this.fc,
            [prefixed('filled')]: this.model && this.model !== '',
            [prefixed('invalid')]: this.fc.touched && !this.fc.valid
        }
    }

    public focusIn(): void {
        this.focus = true
    }

    public focusOut(): void {
        this.focus = false
    }
}
