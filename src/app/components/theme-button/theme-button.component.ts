import { Component, input } from '@angular/core'
import { NgSwitch, NgSwitchCase } from '@angular/common'
import { ThemeIcon } from 'shared/theme/theme.service'

@Component({
    selector: 'cmp-theme-button',
    templateUrl: './theme-button.component.html',
    imports: [NgSwitch, NgSwitchCase],
})
export class ThemeButtonComponent {
    public readonly state = input<ThemeIcon | null>(ThemeIcon.SYSTEM)
}
