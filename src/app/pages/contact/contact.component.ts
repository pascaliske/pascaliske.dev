import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {
    faCircleNotch,
    faCheck,
    faExclamationCircle,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { timer } from 'rxjs'
import { HeadlineComponent } from 'components/headline/headline.component'
import { CopyComponent } from 'components/copy/copy.component'
import { InputComponent } from 'components/input/input.component'
import { SocialsComponent } from 'components/socials/socials.component'

export interface ContactFormGroup {
    prefix: FormControl
    name: FormControl
    email: FormControl
    subject: FormControl
    message: FormControl
}

@Component({
    standalone: true,
    selector: 'cmp-contact',
    templateUrl: './contact.component.html',
    styleUrls: [],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        HeadlineComponent,
        CopyComponent,
        InputComponent,
        SocialsComponent,
    ],
})
export class ContactComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'

    public state: 'initial' | 'loading' | 'success' | 'error' = 'initial'

    public icons: Record<string, IconDefinition> = {
        faPaperPlane,
        faTrashAlt,
        faCircleNotch,
        faCheck,
        faExclamationCircle,
        faInfoCircle,
    }

    public contact: FormGroup<ContactFormGroup> = new FormGroup({
        prefix: new FormControl(''),
        name: new FormControl(''),
        email: new FormControl(null, [Validators.required, Validators.email]),
        subject: new FormControl(null, [Validators.required]),
        message: new FormControl(null, [Validators.required]),
    })

    public constructor(private readonly http: HttpClient) {}

    public submit(): void {
        this.state = 'loading'

        const headers: HttpHeaders = new HttpHeaders()
        headers.set('Content-Type', 'application/json')

        this.http.post('/api/contact', this.contact.value, { headers }).subscribe({
            complete: () => {
                this.state = 'success'
                this.reset(5000)
            },
            error: () => {
                this.state = 'error'
                this.reset(5000, false)
            },
        })
    }

    public reset(after: number = 0, clear: boolean = true): void {
        if (clear) {
            this.contact.reset({ prefix: '' })
        }

        if (after === 0) {
            this.state = 'initial'
            return
        }

        timer(after).subscribe(() => {
            this.state = 'initial'
        })
    }
}
