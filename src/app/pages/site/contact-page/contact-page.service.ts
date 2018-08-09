import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { ContactFormData } from './typings'

@Injectable()
export class ContactPageService {
    public constructor(private http: HttpClient) {}

    /**
     * Sends the contact form data to firebase cloud function for processing it.
     *
     * @param {ContactFormData} data
     * @returns {void}
     */
    public send(data: ContactFormData): void {
        this.http.post(`${environment.cfnBaseUrl}/sendContactRequest`, data).subscribe(
            () => {
                // TODO: send successful notification
            },
            () => {
                // TODO: send error notification
            },
        )
    }
}
