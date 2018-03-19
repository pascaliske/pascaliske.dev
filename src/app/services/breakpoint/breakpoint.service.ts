import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { debounce } from 'decko'

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
 * Enumeration of all available breakpoints.
 */
export enum Breakpoints {
    DESKTOP = 'desktop',
    TABLET = 'tablet',
    MINI_TABLET = 'mini-tablet',
    PHABLET = 'phablet',
    MOBILE = 'mobile'
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
 * - subscribe `breakpointChange` for breakpoint changes, it emits {@link Breakpoint}
 */
@Injectable()
export class BreakpointService {
    /**
     * Subject for resize changes, it emits {@link ResizeState}
     *
     * @param {Subject<ResizeState>} resize$
     */
    public resize$: Subject<ResizeState> = new Subject()

    /**
     * Subject for breakpoint changes, it emits {@link Breakpoint}
     *
     * @param {Subject<Breakpoint>} breakpoint$
     */
    public breakpoint$: Subject<Breakpoint> = new Subject()

    /**
     * Array containing all breakpoints and their size values.
     *
     * @param {Array<Breakpoint>}
     */
    private readonly breakpoints: Array<Breakpoint> = []

    /**
     * The current breakpoint.
     *
     * @param {Breakpoint}
     */
    private current: Breakpoint

    /**
     * Initializes the breakpoint service.
     *
     * @returns {BreakpointService}
     */
    public constructor() {
        this.breakpoints.push({
            id: Breakpoints.DESKTOP,
            start: 1280
        })
        this.breakpoints.push({
            id: Breakpoints.TABLET,
            start: 1024,
            end: 1279
        })
        this.breakpoints.push({
            id: Breakpoints.MINI_TABLET,
            start: 768,
            end: 1023
        })
        this.breakpoints.push({
            id: Breakpoints.PHABLET,
            start: 320,
            end: 767
        })
        this.breakpoints.push({
            id: Breakpoints.MOBILE,
            end: 320
        })

        // fetch current breakpoint
        this.current = this.determineBreakpoint()
    }

    /**
     * Handles the browsers resize event and emits the correct breakpoint events.
     *
     * @param {Event} event - The browser resize event.
     * @returns {void}
     */
    @debounce(100)
    public handleResize(event: Event): void {
        const current: Breakpoint = this.determineBreakpoint()
        const dimensions: ResizeState = {
            height: document.documentElement.clientHeight,
            width: window.innerWidth
        }

        // check if the breakpoint changed too
        if (this.current !== current) {
            this.current = current

            // emit the new breakpoint
            this.breakpoint$.next(current)
        }

        // emit the new resize state
        this.resize$.next(dimensions)
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
     * Determines the current breakpoint.
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
