import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() public title: string

    public constructor() {}

    public ngOnInit() {}
}
