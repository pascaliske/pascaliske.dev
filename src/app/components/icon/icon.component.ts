import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
    @Input() public name: string

    public constructor() {}

    public ngOnInit() {}
}
