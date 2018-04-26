import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    styleUrls: ['./f-select.component.scss']
})
export class FSelectComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []
}
