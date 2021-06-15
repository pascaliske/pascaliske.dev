import { Injectable } from '@angular/core'
import { BehaviorSubject, merge } from 'rxjs'
import { first, filter } from 'rxjs/operators'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { environment } from '../../../environments/environment'

export type PageViewEvent = 'page_view'
export type CustomEvent = 'event'

export interface PageViewEventData {
    page_path: string
    page_title?: string
    page_location?: string
}

export interface CustomEventData {
    event_category: string
    event_action: string
    event_label?: string
    value?: string
}

/**
 * TrackingService
 *
 * Injectable service for enabling components to send tracking events with Google Analytics.
 * Use the track method to send {@link PageViewEvent}s or {@link CustomEvent}s.
 */
@Injectable({
    providedIn: 'root',
})
export class TrackingService {
    /**
     *
     */
    private readonly status$: BehaviorSubject<'allow' | 'deny' | 'dismiss'> = new BehaviorSubject(
        null,
    )

    /**
     * Initializes the TrackingService.
     *
     * @param {NgcCookieConsentService} cookieConsentService
     */
    public constructor(private readonly cookieConsentService: NgcCookieConsentService) {
        const events = [
            this.cookieConsentService.initialize$,
            this.cookieConsentService.statusChange$,
        ]

        merge(...events).subscribe(event => {
            this.status$.next(event.status)
        })

        this.status$
            .pipe(
                filter(status => status !== null),
                first(),
            )
            .subscribe(status => {
                switch (status) {
                    case 'allow':
                        gtagInit(window, document)
                        break

                    case 'deny':
                        gtagOut()
                        break
                }
            })
    }

    /**
     * Sends a tracking event to Google Analytics.
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
        gtag('event', event, data)
    }
}
