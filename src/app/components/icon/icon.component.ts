import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    public static readonly cmpName: string = 'IconComponent'

    @Input()
    public icon: IconDefinition

    @Input()
    public animate: boolean = false
}
