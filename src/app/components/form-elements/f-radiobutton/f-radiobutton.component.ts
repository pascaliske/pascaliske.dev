import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'
import { FRadiobuttonOption } from '../typings'

@Component({
    selector: 'cmp-f-radiobutton',
    templateUrl: './f-radiobutton.component.html',
    styleUrls: ['./f-radiobutton.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FRadiobuttonComponent extends FInputComponent {
    public static readonly cmpName: string = 'FRadiobuttonComponent'

    @Input() public options: Array<FRadiobuttonOption> = []

    public setValue(index: number): void {
        this.options.map(item => (item.checked = false))
        this.options[index].checked = true
        this.fc.setValue(this.options[index].value)
    }
}
