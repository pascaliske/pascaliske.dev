import { Component, Input } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-section',
    templateUrl: './section.component.html',
})
export class SectionComponent {
    @Input()
    public first: boolean = false

    @Input()
    public full: boolean = false
}
