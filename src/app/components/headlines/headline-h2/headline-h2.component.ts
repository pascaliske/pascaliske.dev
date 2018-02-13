import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h2',
    templateUrl: './headline-h2.component.html',
    styleUrls: ['./headline-h2.component.scss']
})
export class HeadlineH2Component implements OnInit {
    @Input() public text: string

    public constructor() {}

    public ngOnInit() {}
}
