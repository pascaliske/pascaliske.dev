import { Injectable, inject } from '@angular/core'
import { Subject, fromEvent } from 'rxjs'
import { distinctUntilChanged, share } from 'rxjs/operators'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'

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
 * Subscribe the subject `state`, it emits the current {@link ScrollState}.
 */
@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private readonly browserApiService: BrowserApiService = inject(BrowserApiService)

    /**
     * Subject for scroll changes.
     *
     * @param {Subject<ScrollState>} scrollChange
     */
    public state$: Subject<ScrollState> = new Subject()

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
     * @param {'auto' | 'smooth'} behavior
     * @returns {void}
     */
    // eslint-disable-next-line id-length
    public scroll(x: number, y: number, behavior: 'auto' | 'smooth' = 'smooth'): void {
        this.browserApiService.with('window', window => {
            window.scrollTo({
                behavior,
                left: x,
                top: y,
            })
        })
    }

    /**
     * Handles the browsers scroll event and emits it to subscribed components.
     *
     * @returns {void}
     */
    private handleScroll(): void {
        this.browserApiService.with('window', window => {
            fromEvent(window, 'scroll')
                .pipe(distinctUntilChanged(), share())
                .subscribe(() => {
                    this.state$.next({
                        scrollX: window.scrollX,
                        scrollY: window.scrollY,
                    })
                })
        })
    }
}
