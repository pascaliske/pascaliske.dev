import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-triangle',
    templateUrl: './triangle.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class TriangleComponent {
    @HostBinding('class')
    public classes: string = 'fixed top-0 right-0 -z-10'
}
