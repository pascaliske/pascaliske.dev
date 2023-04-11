import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class NavigationButtonComponent {
    @Input()
    public open: boolean = false
}
