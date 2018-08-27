import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    public static readonly cmpName: string = 'IconComponent'

    @Input()
    public name: string

    @Input()
    public animate: boolean = false

    public constructor() {}

    public get set(): string {
        const [, set] = this.name.split('-').reverse()

        return set ? set : 'Fas'
    }

    public get id(): any {
        const [name] = this.name.split('-').reverse()

        return name
    }
}
