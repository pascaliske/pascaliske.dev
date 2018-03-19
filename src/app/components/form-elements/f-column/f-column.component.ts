import { Component, ViewEncapsulation, Input } from '@angular/core'
import { Alignments } from './typings'

@Component({
    selector: 'cmp-f-column',
    templateUrl: './f-column.component.html',
    styleUrls: ['./f-column.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FColumnComponent {
    @Input() public flex: boolean = false

    @Input() public align: Alignments = 'left'

    public constructor() {}
}
