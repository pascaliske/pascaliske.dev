import { Component, input } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
})
export class NavigationButtonComponent {
    public readonly open = input<boolean>(false)
}
