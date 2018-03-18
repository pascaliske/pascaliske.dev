import { Component, Input } from '@angular/core'

export enum FColumnAlign {
    LEFT = 'left',
    RIGHT = 'right'
}

@Component({
    selector: 'cmp-f-column',
    templateUrl: './f-column.component.html',
    styleUrls: ['./f-column.component.scss']
})
export class FColumnComponent {
    @Input() public flex: boolean = false

    @Input() public align: FColumnAlign = FColumnAlign.LEFT

    public constructor() {}
}
