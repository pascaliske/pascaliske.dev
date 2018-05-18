import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyComponent {
    public static readonly cmpName: string = 'CopyComponent'

    @Input() public theme: string = ''

    @Input() public text: string

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme
            .replace(/ +/g, '')
            .split(',')
            .reverse()
            .reduce(
                (prev, current) => ({
                    [`cmp-copy--${current}`]: true,
                    ...prev,
                }),
                {},
            )
    }
}
