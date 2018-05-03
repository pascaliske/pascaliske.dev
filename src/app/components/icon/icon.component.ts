import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    public static readonly cmpName: string = 'IconComponent'

    @Input() public name: string

    public constructor() {}
}
