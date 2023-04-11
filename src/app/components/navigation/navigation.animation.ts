import type { AnimationStyleMetadata } from '@angular/animations'
import { style, trigger, transition, animate } from '@angular/animations'

export function visible(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 1 })
}
export function hidden(additional = {}): AnimationStyleMetadata {
    return style({ ...additional, opacity: 0 })
}

export const animations = [
    trigger('fade', [
        transition(':enter', [hidden(), animate('.15s ease-in-out', visible())]),
        transition(':leave', [visible(), animate('.15s ease-in-out', hidden())]),
    ]),
]
