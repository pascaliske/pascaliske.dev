import { Component, Input } from '@angular/core'
import { NgSwitch, NgSwitchCase } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-copy',
    templateUrl: './copy.component.html',
    imports: [NgSwitch, NgSwitchCase],
})
export class CopyComponent {
    @Input()
    public text?: string

    @Input()
    public html?: string

    public get type(): 'text' | 'html' | 'content' {
        if ((this.text?.length ?? 0) > 0) {
            return 'text'
        }

        if ((this.html?.length ?? 0) > 0) {
            return 'html'
        }

        return 'content'
    }
}
