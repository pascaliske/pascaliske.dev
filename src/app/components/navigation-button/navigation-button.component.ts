import { Component, Input } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
})
export class NavigationButtonComponent {
    @Input()
    public open: boolean = false
}
