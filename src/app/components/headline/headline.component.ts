import { Component, input } from '@angular/core'
import { NgSwitch, NgSwitchCase, NgIf, NgTemplateOutlet } from '@angular/common'

@Component({
    selector: 'cmp-headline',
    templateUrl: './headline.component.html',
    imports: [NgSwitch, NgSwitchCase, NgIf, NgTemplateOutlet],
})
export class HeadlineComponent {
    public readonly level = input<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>('h1')

    public readonly text = input.required<string>()

    public readonly id = input<string>()
}
