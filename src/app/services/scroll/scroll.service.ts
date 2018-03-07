import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { debounce } from 'decko'

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
 * Subscribe the event emitter `scrollChange`, it emits the current {@link ScrollState}.
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
     *
     * @returns {ScrollService}
     */
    public constructor() {}

    /**
     * Handles the browsers scroll event and emits it to subscribed components.
     *
     * @param {Event} event - The browser scroll event.
     * @returns {void}
     */
    @debounce(100)
    public handleScroll(event: Event): void {
        this.scrollstate$.next({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        })
    }
}
