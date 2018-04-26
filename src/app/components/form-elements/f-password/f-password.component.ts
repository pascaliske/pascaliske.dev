import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-password',
    templateUrl: './f-password.component.html',
    styleUrls: ['./f-password.component.scss']
})
export class FPasswordComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []
}
