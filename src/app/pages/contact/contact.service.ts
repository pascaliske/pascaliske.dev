import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { NotificationsService } from '@pascaliske/ngx-notifications'
import { environment } from '../../../environments/environment'
import { ContactFormData } from './typings'

@Injectable()
export class ContactService {
    public constructor(
        private http: HttpClient,
        private notificationsService: NotificationsService,
    ) {}

    /**
     * Sends the contact form data to firebase cloud function for processing it.
     *
     * @param {ContactFormData} data
     * @returns {void}
     */
    public send(data: ContactFormData): void {
        this.http.post(`${environment.cfnBaseUrl}/sendContactRequest`, data).subscribe(
            () => {
                this.notificationsService.success(`I'll reach out to you as soon as I can!`)
            },
            () => {
                this.notificationsService.error(
                    'Could not send contact request. Please try again later.',
                )
            },
        )
    }
}
