import { Component, ViewEncapsulation, Input } from '@angular/core'

@Component({
    selector: 'cmp-f-row',
    templateUrl: './f-row.component.html',
    styleUrls: ['./f-row.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FRowComponent {
    @Input() public layout: string = '1'

    public constructor() {}
}
