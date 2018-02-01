import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-headline-h3',
    templateUrl: './headline-h3.component.html',
    styleUrls: ['./headline-h3.component.scss']
})
export class HeadlineH3Component implements OnInit {
    @Input() public text: string

    public constructor() {}

    public ngOnInit() {}
}
