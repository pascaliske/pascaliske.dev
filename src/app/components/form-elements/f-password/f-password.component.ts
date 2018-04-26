import { Component } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-password',
    templateUrl: './f-password.component.html',
    styleUrls: ['./f-password.component.scss']
})
export class FPasswordComponent extends FInputComponent {}
