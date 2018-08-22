import { Injectable } from '@angular/core'
import { BehaviorSubject, merge } from 'rxjs'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { environment } from '../../../environments/environment'
import { PageViewEvent, PageViewEventData, CustomEvent, CustomEventData } from './typings'

/**
 * TrackingService
 *
 * Injectable service for enabling components to send tracking events with Google Analytics.
 * Use the track method to send {@link PageViewEvent}s or {@link CustomEvent}s.
 */
@Injectable()
export class TrackingService {
    /**
     *
     */
    private status$: BehaviorSubject<string> = new BehaviorSubject(
        this.cookieConsentService.hasConsented() ? 'allow' : 'deny',
    )

    /**
     * Initializes the TrackingService.
     *
     * @param {NgcCookieConsentService} cookieConsentService
     */
    public constructor(private cookieConsentService: NgcCookieConsentService) {
        const events = [
            this.cookieConsentService.initialize$,
            this.cookieConsentService.statusChange$,
        ]

        merge(...events).subscribe(event => {
            this.status$.next(event.status)
        })
    }

    /**
     * Sends a tracking event to analytics.
     *
     * @param {PageViewEvent | CustomEvent} event
     * @param {PageViewEventData | CustomEventData} data
     * @returns {void}
     */
    public track(event: PageViewEvent, data: PageViewEventData): void
    public track(event: CustomEvent, data: CustomEventData): void
    public track(event: PageViewEvent | CustomEvent, data: PageViewEventData | CustomEventData) {
        // track only in production and if cookie consent is given
        if (!environment.production || this.status$.getValue() !== 'allow') {
            return
        }

        // send event
        ga('send', { ...data, hitType: event })
    }
}
