import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-f-button',
    templateUrl: './f-button.component.html',
    styleUrls: ['./f-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FButtonComponent {
    public static readonly cmpName: string = 'FButtonComponent'

    @Input() public type: string = 'button'

    @Input() public text: string

    @Input() public theme: string = ''

    @Input() public disabled: boolean = false

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme
            .split(',')
            .reduce((prev, current) => ({ [`cmp-f-button--${current}`]: true, ...prev }), {})
    }
}
