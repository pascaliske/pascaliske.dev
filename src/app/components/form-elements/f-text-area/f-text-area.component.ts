import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-text-area',
    templateUrl: './f-text-area.component.html',
    styleUrls: ['./f-text-area.component.scss']
})
export class FTextAreaComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []
}
