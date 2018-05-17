import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { FButtonType } from '../typings'

@Component({
    selector: 'cmp-f-button',
    templateUrl: './f-button.component.html',
    styleUrls: ['./f-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FButtonComponent {
    public static readonly cmpName: string = 'FButtonComponent'

    @Input() public type: FButtonType = 'button'

    @Input() public text: string

    @Input() public icon: string

    @Input() public theme: string = ''

    @Input() public disabled: boolean = false

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme
            .replace(/ +/g, '')
            .split(',')
            .reverse()
            .reduce(
                (prev, current) => ({
                    [`cmp-f-button--${current}`]: true,
                    ...prev,
                }),
                {},
            )
    }
}
