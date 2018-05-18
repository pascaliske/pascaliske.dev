import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
    public static readonly cmpName: string = 'PageHeaderComponent'

    @Input() public title: string

    @Input() public copy: string

    public constructor() {}
}
