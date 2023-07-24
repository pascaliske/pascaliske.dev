import { Component, Input } from '@angular/core'
import { NgSwitch, NgSwitchCase } from '@angular/common'
import { ThemeIcon } from 'shared/theme/theme.service'

@Component({
    standalone: true,
    selector: 'cmp-theme-button',
    templateUrl: './theme-button.component.html',
    imports: [NgSwitch, NgSwitchCase],
})
export class ThemeButtonComponent {
    @Input()
    public state: ThemeIcon | null = ThemeIcon.SYSTEM
}
