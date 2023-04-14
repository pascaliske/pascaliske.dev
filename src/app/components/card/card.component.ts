import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-card',
    templateUrl: './card.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class CardComponent {
    @HostBinding('class')
    public classes: string = `group flex flex-col overflow-hidden bg-opacity-25 bg-gradient-to-br from-ghostWhite to-[#d4d6da] to-90% transition-transform will-change-transform motion-safe:hover:scale-105 dark:from-charcoal dark:to-gunmetal`
}
