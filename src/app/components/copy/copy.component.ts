import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
    public static readonly cmpName: string = 'CopyComponent'

    @Input() public theme: string = ''

    @Input() public text: string

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme
            .split(',')
            .reduce((prev, current) => ({ [`cmp-copy--${current}`]: true, ...prev }), {})
    }
}
