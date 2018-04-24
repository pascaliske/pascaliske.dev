import { Injectable } from '@angular/core'
import { Subject, fromEvent } from 'rxjs'
import { share } from 'rxjs/operators'

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
    public constructor() {
        this.handleScroll()
    }

    /**
     * Handles the browsers scroll event and emits it to subscribed components.
     *
     * @returns {void}
     */
    public handleScroll(): void {
        // listen to resize events
        fromEvent(window, 'scroll')
            .pipe(share())
            .subscribe((event: Event) => {
                this.scrollstate$.next({
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                })
            })
    }
}
