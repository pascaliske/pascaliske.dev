import { Component, HostBinding } from '@angular/core'

@Component({
    standalone: true,
    selector: 'cmp-card',
    templateUrl: './card.component.html',
})
export class CardComponent {
    @HostBinding('class')
    public classes: string =
        `group flex flex-col overflow-hidden bg-opacity-25 bg-linear-to-br from-ghost-white to-[#d4d6da] to-90% transition-transform will-change-transform motion-safe:hover:scale-105 dark:from-charcoal dark:to-gunmetal`
}
