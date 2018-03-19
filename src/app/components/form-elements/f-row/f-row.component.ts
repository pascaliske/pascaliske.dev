import { Component, ViewEncapsulation, Input } from '@angular/core'
import { Layouts } from './typings'

@Component({
    selector: 'cmp-f-row',
    templateUrl: './f-row.component.html',
    styleUrls: ['./f-row.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FRowComponent {
    @Input() public layout: Layouts = '1'

    public constructor() {}
}
