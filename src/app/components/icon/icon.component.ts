import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    @Input() public name: string

    public constructor() {}
}
