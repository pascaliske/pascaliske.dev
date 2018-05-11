import { Component, ViewEncapsulation, Input } from '@angular/core'
import { FRowLayouts } from '../typings'

@Component({
    selector: 'cmp-f-row',
    templateUrl: './f-row.component.html',
    styleUrls: ['./f-row.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FRowComponent {
    public static readonly cmpName: string = 'FRowComponent'

    @Input() public layout: FRowLayouts = '1'

    public constructor() {}
}
