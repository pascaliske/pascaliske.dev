import { Injectable } from '@angular/core'
import { BehaviorSubject, fromEvent } from 'rxjs'
import { share, debounceTime } from 'rxjs/operators'

/**
 * Enumeration of all available breakpoints.
 */
export const enum Breakpoints {
    DESKTOP = 'desktop',
    TABLET = 'tablet',
    MINI_TABLET = 'mini-tablet',
    PHABLET = 'phablet',
    MOBILE = 'mobile',
}

/**
 * Interface describing a breakpoint.
 */
export interface Breakpoint {
    /**
     * The breakpoint id.
     */
    id: string

    /**
     * Minimal viewport width of the breakpoint.
     */
    start?: number

    /**
     * Maximum viewport width of the breakpoint.
     */
    end?: number
}

/**
 * Interface describing the current resize state.
 */
export interface ResizeState {
    /**
     * The current width of the viewport.
     */
    width: number

    /**
     * The current height of the viewport.
     */
    height: number
}

/**
 * Injectable service for enabling components to subscribe to breakpoint and resize changes.
 *
 * - subscribe `resize$` for viewport resize changes, it emits {@link ResizeState}
 * - subscribe `breakpoint$` for breakpoint changes, it emits {@link Breakpoint}
 */
@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    /**
     * BehaviorSubject for resize changes, it emits {@link ResizeState}
     *
     * @param {BehaviorSubject<ResizeState>} resize$
     */
    public resize$: BehaviorSubject<ResizeState>

    /**
     * BehaviorSubject for breakpoint changes, it emits {@link Breakpoint}
     *
     * @param {BehaviorSubject<Breakpoint>} breakpoint$
     */
    public breakpoint$: BehaviorSubject<Breakpoint>

    /**
     * Array containing all breakpoints and their size values.
     *
     * @param {Array<Breakpoint>}
     */
    private readonly breakpoints: Array<Breakpoint> = [
        {
            id: Breakpoints.DESKTOP,
            start: 1280,
        },
        {
            id: Breakpoints.TABLET,
            start: 1024,
            end: 1279,
        },
        {
            id: Breakpoints.MINI_TABLET,
            start: 768,
            end: 1023,
        },
        {
            id: Breakpoints.PHABLET,
            start: 320,
            end: 767,
        },
        {
            id: Breakpoints.MOBILE,
            end: 320,
        },
    ]

    /**
     * The current breakpoint.
     *
     * @param {Breakpoint}
     */
    private current: Breakpoint

    /**
     * Initializes the breakpoint service.
     */
    public constructor() {
        this.resize$ = new BehaviorSubject(this.determineDimensions())
        this.breakpoint$ = new BehaviorSubject(this.determineBreakpoint())
        this.handleResize()
    }

    /**
     * Checks if we are on a mobile device right now.
     *
     * @returns {boolean}
     */
    public isMobile(): boolean {
        // tslint:disable-next-line:max-line-length
        const regex = /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i

        if (regex.test(navigator.userAgent)) {
            return true
        }

        return false
    }

    /**
     * Evaluates if the given breakpoint is larger or same as the current one.
     *
     * @param {Breakpoints} id
     * @returns {boolean}
     */
    public isLarger(id: Breakpoints): boolean {
        if (!this.current) {
            return false
        }

        return this.current.start >= this.breakpoints.find(item => item.id === id).start
    }

    /**
     * Evaluates if the given breakpoint is equal to the current one.
     *
     * @param {Breakpoints} id
     * @returns {boolean}
     */
    public isEqual(id: Breakpoints): boolean {
        if (!this.current) {
            return false
        }

        return this.current >= this.breakpoints.find(item => item.id === id)
    }

    /**
     * Listens to the browsers resize event and emits the correct breakpoint and resize events.
     *
     * @returns {void}
     */
    private handleResize(): void {
        // fetch current breakpoint
        this.current = this.determineBreakpoint()

        // listen to resize events
        fromEvent(window, 'resize')
            .pipe(
                share(),
                debounceTime(15),
            )
            .subscribe(() => {
                const current: Breakpoint = this.determineBreakpoint()
                const dimensions: ResizeState = this.determineDimensions()

                // check if the breakpoint changed too
                if (this.current !== current) {
                    this.current = current

                    // emit the new breakpoint
                    this.breakpoint$.next(current)
                }

                // emit the new resize state
                this.resize$.next(dimensions)
            })
    }

    /**
     * Determines the current {@link ResizeState}.
     *
     * @returns {ResizeState}
     */
    private determineDimensions(): ResizeState {
        return {
            height: document.documentElement.clientHeight,
            width: window.innerWidth,
        }
    }

    /**
     * Determines the current {@link Breakpoint}.
     *
     * @returns {Breakpoint}
     */
    private determineBreakpoint(): Breakpoint {
        // match the breakpoints against window dimensions
        for (const item of this.breakpoints) {
            const query: Array<string> = []

            if (item.start) {
                query.push(`(min-width: ${item.start}px)`)
            }

            if (item.end) {
                query.push(`(max-width: ${item.end}px)`)
            }

            if (window.matchMedia && window.matchMedia(query.join(' and ')).matches) {
                return item
            }
        }
    }
}
