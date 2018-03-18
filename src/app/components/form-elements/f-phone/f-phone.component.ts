import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'

@Component({
    selector: 'cmp-f-phone',
    templateUrl: './f-phone.component.html',
    styleUrls: ['./f-phone.component.scss']
})
export class FPhoneComponent extends FormElement {}
