import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-phone',
    templateUrl: './f-phone.component.html',
    styleUrls: ['./f-phone.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FPhoneComponent extends FInputComponent {
    public static readonly cmpName: string = 'FPhoneComponent'
}
