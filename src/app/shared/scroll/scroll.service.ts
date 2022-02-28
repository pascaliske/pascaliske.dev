import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { Subject, fromEvent } from 'rxjs'
import { distinctUntilChanged, debounceTime, share } from 'rxjs/operators'

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
@Injectable({
    providedIn: 'root',
})
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
    public constructor(@Inject(PLATFORM_ID) private readonly platformId: Record<string, unknown>) {
        if (isPlatformBrowser(this.platformId)) {
            this.handleScroll()
        }
    }

    /**
     * Scrolls the viewport to the given position.
     *
     * @param {number} x
     * @param {number} y
     * @param {'auto' | 'smooth'} behavior
     * @returns {void}
     */
    // eslint-disable-next-line id-length
    public scroll(x: number, y: number, behavior: 'auto' | 'smooth' = 'smooth'): void {
        window.scrollTo({
            behavior,
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
        fromEvent(window, 'scroll')
            .pipe(distinctUntilChanged(), debounceTime(100), share())
            .subscribe(() => {
                this.scrollstate$.next({
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                })
            })
    }
}
