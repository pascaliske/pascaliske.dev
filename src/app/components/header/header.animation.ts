import { trigger, state, style, transition, group, animate } from '@angular/animations'

export const animations = [
    trigger('title', [
        state(
            'fadeIn',
            style({
                opacity: 1,
                fill: 'rgba(255, 255, 255, 1)',
                stroke: 'rgba(255, 255, 255, 1)',
                strokeDashoffset: 0,
                transform: 'translateX(0)',
            }),
        ),
        transition(
            ':enter',
            group([
                animate(
                    '400ms 0ms ease-out',
                    style({
                        stroke: 'rgba(255, 255, 255, 1)',
                    }),
                ),
                animate(
                    '1600ms 0ms ease-out',
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        strokeDashoffset: 0,
                    }),
                ),
                animate(
                    '1000ms 600ms ease-out',
                    style({
                        fill: 'rgba(255, 255, 255, 1)',
                    }),
                ),
            ]),
        ),
    ]),
    trigger('subtitle', [
        state(
            'fadeIn',
            style({
                opacity: 1,
                transform: 'translateX(0)',
            }),
        ),
        transition(
            ':enter',
            animate(
                '1600ms 0ms ease-out',
                style({
                    opacity: 1,
                    transform: 'translateX(0)',
                }),
            ),
        ),
    ]),
]
