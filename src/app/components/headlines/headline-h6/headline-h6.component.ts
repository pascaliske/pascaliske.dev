import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h6',
    templateUrl: './headline-h6.component.html',
    styleUrls: ['./headline-h6.component.scss']
})
export class HeadlineH6Component {
    @Input() public text: string

    public constructor() {}
}
