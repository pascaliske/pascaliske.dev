import type { AnimationStyleMetadata } from '@angular/animations'
import { trigger, transition, animate, style } from '@angular/animations'

export function visible(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 1, visibility: 'visible' })
}
export function hidden(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 0, visibility: 'hidden' })
}

export const animations = [
    trigger('fade', [
        transition(':enter', [hidden(), animate('1.5s', visible())]),
        transition(':leave', [visible(), animate('1.5s', hidden())]),
    ]),
]
