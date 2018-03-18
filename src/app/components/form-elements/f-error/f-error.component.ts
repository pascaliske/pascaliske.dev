import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

export interface FormErrorMessages {
    [key: string]: string
}

@Component({
    selector: 'cmp-f-error',
    templateUrl: './f-error.component.html',
    styleUrls: ['./f-error.component.scss']
})
export class FErrorComponent {
    @Input() public fc: AbstractControl

    @Input() public messages: FormErrorMessages

    public constructor() {}
}
