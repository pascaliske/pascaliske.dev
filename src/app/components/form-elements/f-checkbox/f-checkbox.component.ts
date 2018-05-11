import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-checkbox',
    templateUrl: './f-checkbox.component.html',
    styleUrls: ['./f-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FCheckboxComponent extends FInputComponent {
    public static readonly cmpName: string = 'FCheckboxComponent'
}
