import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h5',
    templateUrl: './headline-h5.component.html',
    styleUrls: ['./headline-h5.component.scss']
})
export class HeadlineH5Component {
    @Input() public text: string

    public constructor() {}
}
