import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FValidation } from '../typings'

@Component({
    selector: 'cmp-f-error',
    templateUrl: './f-error.component.html',
    styleUrls: ['./f-error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FErrorComponent {
    @Input() public fc: AbstractControl

    @Input() public messages: Array<FValidation>

    public constructor() {}
}
