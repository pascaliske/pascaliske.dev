import { Injectable } from '@angular/core'
import { Subject, fromEvent, Observable, interval } from 'rxjs'
import { distinctUntilChanged, debounceTime, share, map } from 'rxjs/operators'

/**
 * Interface describing the current scroll state.
 */
export interface ScrollState {
    /**
     * The current scroll value in x-direction.
     */
    scrollX: number

    /**
     * The current scroll value in y-direction.
     */
    scrollY: number
}

/**
 * Injectable service for enabling components to observe the scroll state of the application.
 *
 * Subscribe the subject `scrollstate`, it emits the current {@link ScrollState}.
 */
@Injectable()
export class ScrollService {
    /**
     * Subject for scroll changes.
     *
     * @param {Subject<ScrollState>} scrollChange
     */
    public scrollstate$: Subject<ScrollState> = new Subject()

    /**
     * Initializes the scroll service.
     */
    public constructor() {
        this.handleScroll()
    }

    /**
     * Scrolls the viewport to the given position.
     *
     * @param {number} x
     * @param {number} y
     * @param {'auto' | 'instant' | 'smooth'} behavior
     * @returns {void}
     */
    public scroll(x: number, y: number, behavior: 'auto' | 'instant' | 'smooth' = 'smooth'): void {
        window.scrollTo({
            behavior: behavior,
            left: x,
            top: y,
        })
    }

    /**
     * Handles the browsers scroll event and emits it to subscribed components.
     *
     * @returns {void}
     */
    private handleScroll(): void {
        // listen to resize events
        fromEvent(window, 'scroll')
            .pipe(
                distinctUntilChanged(),
                debounceTime(100),
                share(),
            )
            .subscribe(() => {
                this.scrollstate$.next({
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                })
            })
    }
}
