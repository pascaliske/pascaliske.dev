import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
    @Input() public text: string

    public constructor() {}
}
