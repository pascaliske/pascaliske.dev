import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { finalize, filter } from 'rxjs/operators'
import { autobind } from 'core-decorators'

/**
 * ViewportService
 *
 * Injectable service for enabling components to check if they're visible in the viewport.
 */
@Injectable()
export class ViewportService {
    /**
     * An object with options for the IntersectionObserver.
     *
     * @param {IntersectionObserverInit} options
     */
    private options: IntersectionObserverInit = {
        threshold: [0.5],
    }

    /**
     * The IntersectionObserver instance.
     *
     * @param {IntersectionObserver} observer
     */
    private observer: IntersectionObserver

    /**
     * Subject for handling callback calls for subscribers.
     *
     * @param {Observable<IntersectionObserverEntry>} callback$
     */
    private callback$: Subject<IntersectionObserverEntry> = new Subject()

    /**
     * Initializes the ViewportService.
     *
     * @returns {ViewportService}
     */
    public constructor() {
        this.observer = new IntersectionObserver(this.handler, this.options)
    }

    /**
     * Registers the given element to the IntersectionObserver.
     *
     * @param {Element} element - The element to observe.
     * @returns {Observable<IntersectionObserverEntry>}
     */
    public observe(element: Element): Observable<IntersectionObserverEntry> {
        this.observer.observe(element)
        return this.callback$.pipe(
            filter((entry: IntersectionObserverEntry) => entry.target === element),
            finalize(() => this.observer.unobserve(element)),
        )
    }

    /**
     * Fires the callback of the current entry.
     *
     * @param {Array<IntersectionObserverEntry>} entries -
     * @returns {void}
     */
    @autobind
    private handler(entries: Array<IntersectionObserverEntry>): void {
        entries.forEach(entry => this.callback$.next(entry))
    }
}
