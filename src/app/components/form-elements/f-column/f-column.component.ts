import { Component, ViewEncapsulation, Input } from '@angular/core'
import { FColumnAlignments } from '../typings'

@Component({
    selector: 'cmp-f-column',
    templateUrl: './f-column.component.html',
    styleUrls: ['./f-column.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FColumnComponent {
    public static readonly cmpName: string = 'FColumnComponent'

    @Input() public flex: boolean = false

    @Input() public align: FColumnAlignments = 'left'

    public constructor() {}
}
