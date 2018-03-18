import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    styleUrls: ['./f-select.component.scss']
})
export class FSelectComponent extends FormElement {}
