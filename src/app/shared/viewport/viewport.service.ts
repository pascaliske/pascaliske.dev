import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { Observable, Subject, EMPTY } from 'rxjs'
import { filter, distinctUntilChanged, finalize } from 'rxjs/operators'

/**
 * ViewportService
 *
 * Injectable service for enabling components to check if they're visible in the viewport.
 */
@Injectable({
    providedIn: 'root',
})
export class ViewportService {
    /**
     * An object with options for the IntersectionObserver.
     *
     * @param {IntersectionObserverInit} options
     */
    private readonly options: IntersectionObserverInit = {
        threshold: [0.5],
    }

    /**
     * The IntersectionObserver instance.
     *
     * @param {IntersectionObserver} observer
     */
    private readonly observer: IntersectionObserver

    /**
     * Subject for handling callback calls for subscribers.
     *
     * @param {Observable<IntersectionObserverEntry>} callback$
     */
    private readonly callback$: Subject<IntersectionObserverEntry> = new Subject()

    /**
     * Initializes the ViewportService.
     */
    public constructor(@Inject(PLATFORM_ID) private readonly platformId: Record<string, unknown>) {
        if (isPlatformBrowser(this.platformId)) {
            this.observer = new IntersectionObserver(entries => this.handler(entries), this.options)
        }
    }

    /**
     * Registers the given element to the IntersectionObserver.
     *
     * @param {Element} element - The element to observe.
     * @returns {Observable<IntersectionObserverEntry>}
     */
    public observe(element: Element): Observable<IntersectionObserverEntry> {
        if (!isPlatformBrowser(this.platformId)) {
            return EMPTY
        }

        this.observer.observe(element)

        return this.callback$.asObservable().pipe(
            filter((entry: IntersectionObserverEntry) => entry.target === element),
            distinctUntilChanged(),
            finalize(() => this.observer.unobserve(element)),
        )
    }

    /**
     * Fires the callback of the current entry.
     *
     * @param {Array<IntersectionObserverEntry>} entries -
     * @returns {void}
     */
    private handler(entries: IntersectionObserverEntry[]): void {
        entries.forEach(entry => this.callback$.next(entry))
    }
}
