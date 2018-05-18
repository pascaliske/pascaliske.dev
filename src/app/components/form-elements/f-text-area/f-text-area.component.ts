import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-text-area',
    templateUrl: './f-text-area.component.html',
    styleUrls: ['./f-text-area.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTextAreaComponent extends FInputComponent {
    public static readonly cmpName: string = 'FTextAreaComponent'
}
