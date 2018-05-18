import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FValidation } from '../typings'

@Component({
    selector: 'cmp-f-error',
    templateUrl: './f-error.component.html',
    styleUrls: ['./f-error.component.scss'],
})
export class FErrorComponent {
    @Input() public fc: AbstractControl

    @Input() public messages: Array<FValidation>

    public constructor() {}
}
