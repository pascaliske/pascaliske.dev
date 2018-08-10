import { Injectable } from '@angular/core'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { BehaviorSubject, merge } from 'rxjs'
import { TrackingEvent, TrackingData } from './typings'
import { environment } from '../../../environments/environment'

@Injectable()
export class TrackingService {
    private status$: BehaviorSubject<string> = new BehaviorSubject(
        this.cookieConsentService.hasConsented() ? 'allow' : 'deny',
    )

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
     * @param {TrackingEvent} event
     * @param {TrackingData} data
     * @returns {void}
     */
    public track(event: TrackingEvent = 'pageview', data?: TrackingData): void {
        // track only in production and if cookie consent is given
        if (!environment.production || this.status$.getValue() !== 'allow') {
            return
        }

        // append data
        if (data) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    ga('set', key, data[key])
                }
            }
        }

        // send event
        ga('send', event)
    }
}
