import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
    selector: 'cmp-f-explanation',
    templateUrl: './f-explanation.component.html',
    styleUrls: ['./f-explanation.component.scss']
})
export class FExplanationComponent {
    @Input() public fc: AbstractControl

    @Input() public messages: Array<string>

    public constructor() {}
}
