import { Component, input } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-section',
    templateUrl: './section.component.html',
})
export class SectionComponent {
    public readonly first = input<boolean>(false)

    public readonly full = input<boolean>(false)
}
