import { Injectable } from '@angular/core'
import { bind } from 'decko'

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
        threshold: [0.5]
    }

    /**
     * The IntersectionObserver instance.
     *
     * @param {IntersectionObserver} observer
     */
    private observer: IntersectionObserver

    /**
     * The elements to observe.
     *
     * @param {Array<any>} elements
     */
    private elements: Array<any> = []

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
     * @param {Function} callback - The callback for observation events.
     * @returns {void}
     */
    public observe(element: Element, callback: (entry: any) => void): void {
        this.elements.push({
            element: element,
            callback: callback
        })
        this.observer.observe(element)
    }

    /**
     * Fires the callback of the current entry.
     *
     * @param {Array<IntersectionObserverEntry>} entries -
     * @returns {void}
     */
    @bind
    private handler(entries: Array<IntersectionObserverEntry>): void {
        entries.forEach(entry => {
            const { callback } = this.elements.find(item => item.element === entry.target)
            callback(entry)
        })
    }
}
