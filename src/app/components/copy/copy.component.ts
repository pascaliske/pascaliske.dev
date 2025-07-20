import { Component, input } from '@angular/core'

@Component({
    selector: 'cmp-copy',
    templateUrl: './copy.component.html',
})
export class CopyComponent {
    public readonly text = input<string>()

    public readonly html = input<string>()

    public get type(): 'text' | 'html' | 'content' {
        if ((this.text()?.length ?? 0) > 0) {
            return 'text'
        }

        if ((this.html()?.length ?? 0) > 0) {
            return 'html'
        }

        return 'content'
    }
}
