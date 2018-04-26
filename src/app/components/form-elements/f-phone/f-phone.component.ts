import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-phone',
    templateUrl: './f-phone.component.html',
    styleUrls: ['./f-phone.component.scss']
})
export class FPhoneComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []
}
