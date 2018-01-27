import { Injectable, EventEmitter } from '@angular/core'
import { debounce } from 'decko'

export interface ScrollState {
    scrollX: number
    scrollY: number
}

@Injectable()
export class ScrollService {
    public scrollChange: EventEmitter<ScrollState> = new EventEmitter()

    /**
     * Initializes the scroll service.
     *
     * @returns {ScrollService}
     */
    public constructor() {}

    /**
     * Handles the brwosers scroll event and emits it to subscribed components.
     *
     * @param {Event} event - The browser scroll event.
     * @returns {void}
     */
    @debounce(100)
    public handleScroll(event: Event): void {
        this.scrollChange.emit({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        })
    }
}
