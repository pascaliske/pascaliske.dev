import { Component } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-text-area',
    templateUrl: './f-text-area.component.html',
    styleUrls: ['./f-text-area.component.scss']
})
export class FTextAreaComponent extends FInputComponent {}
