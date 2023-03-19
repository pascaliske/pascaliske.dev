import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeIcon } from 'shared/theme/theme.service'

@Component({
    standalone: true,
    selector: 'cmp-theme-button',
    templateUrl: './theme-button.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class ThemeButtonComponent {
    @Input()
    public state: ThemeIcon | null = ThemeIcon.SYSTEM
}
