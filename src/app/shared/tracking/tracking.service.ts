import { Injectable } from '@angular/core'
import { TrackingEvent, TrackingData } from './typings'
import { environment } from '../../../environments/environment'

@Injectable()
export class TrackingService {
    public constructor() {}

    /**
     * Sends a tracking event to analytics.
     *
     * @param {TrackingEvent} event
     * @param {TrackingData} data
     */
    public track(event: TrackingEvent = 'pageview', data?: TrackingData): void {
        // track only in production
        if (!environment.production) {
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
