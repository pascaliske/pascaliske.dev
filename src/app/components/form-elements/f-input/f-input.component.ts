import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-input',
    templateUrl: './f-input.component.html',
    styleUrls: ['./f-input.component.scss']
})
export class FInputComponent {
    @Input() public name: string

    @Input() public label: string

    @Input() public fc: AbstractControl

    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []

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
            [prefixed('filled')]: this.fc.value && this.fc.value !== '',
            [prefixed('invalid')]: this.fc.touched && !this.fc.valid,
            [prefixed('required')]: this.isRequired()
        }
    }

    public isRequired(): boolean {
        return this.validation.find(item => item.type === 'required') !== undefined
    }

    public focusIn(): void {
        this.focus = true
    }

    public focusOut(): void {
        this.focus = false
    }
}
