import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input() public text: string

    @Input() public href: Array<string> | string

    @Input() public inline: boolean = true

    public constructor() {}
}
