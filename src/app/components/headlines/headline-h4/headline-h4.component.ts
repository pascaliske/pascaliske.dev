import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h4',
    templateUrl: './headline-h4.component.html',
    styleUrls: ['./headline-h4.component.scss']
})
export class HeadlineH4Component {
    @Input() public text: string

    public constructor() {}
}
