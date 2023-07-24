import { Component, HostBinding } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-triangle',
    templateUrl: './triangle.component.html',
})
export class TriangleComponent {
    @HostBinding('class')
    public classes: string = 'fixed top-0 right-0 -z-10'
}
