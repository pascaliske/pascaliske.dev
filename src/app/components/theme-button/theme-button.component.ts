import { Component, input } from '@angular/core'
import { ThemeIcon } from 'shared/theme/theme.service'

@Component({
    selector: 'cmp-theme-button',
    templateUrl: './theme-button.component.html',
})
export class ThemeButtonComponent {
    public readonly state = input<ThemeIcon | null>(ThemeIcon.SYSTEM)
}
