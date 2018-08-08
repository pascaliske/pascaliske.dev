import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { ContactFormData } from './typings'

@Injectable()
export class ContactPageService {
    public constructor(private http: HttpClient) {}

    public send(data: ContactFormData): Observable<boolean> {
        // TODO: use correct url for firebase cloud function
        return this.http.post('/', data).pipe(
            map(response => {
                console.log('==> response', response)

                return true
            }),
            catchError(error => {
                console.log('==> error', error)

                return of(false)
            }),
        )
    }
}
