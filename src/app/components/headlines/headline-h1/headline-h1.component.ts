import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h1',
    templateUrl: './headline-h1.component.html',
    styleUrls: ['./headline-h1.component.scss']
})
export class HeadlineH1Component {
    @Input() public text: string

    public constructor() {}
}
