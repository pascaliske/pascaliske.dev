import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class SectionComponent {
    @Input()
    public first: boolean = false

    @Input()
    public full: boolean = false
}
