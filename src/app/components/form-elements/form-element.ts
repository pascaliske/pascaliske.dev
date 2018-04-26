import { Input, Output, EventEmitter } from '@angular/core'
import { AbstractControl } from '@angular/forms'
// import { FValidationConfig, FValidationMessage } from './typings'

export class FormElement {
    @Input() public name: string

    @Input() public label: string

    @Input() public fc: AbstractControl

    // @Input() public validation: Array<FValidationMessage> = []

    // @Input() public explanation: Array<string> = []

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
            [prefixed('required')]: this.isRequired(),
            [prefixed('filled')]: this.fc.value && this.fc.value !== '',
            [prefixed('invalid')]: this.fc.touched && !this.fc.valid
        }
    }

    public isRequired(): boolean {
        // return this.validation.find(item => item.type === 'required') !== undefined
        return false
    }

    public focusIn(): void {
        this.focus = true
    }

    public focusOut(): void {
        this.focus = false
    }
}
