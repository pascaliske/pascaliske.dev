import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { FValidation } from '@pascaliske/form-elements'
import { TitleService } from '../../shared/title/title.service'
import { TrackingService } from '../../shared/tracking/tracking.service'
import { ContactService } from './contact.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends Page implements OnInit, OnDestroy {
    public contactForm: FormGroup

    public validation: Record<string, FValidation[]> = {
        email: [
            {
                type: 'required',
                message: 'This field is required!',
            },
            {
                type: 'email',
                message: 'Please enter a valid email address!',
            },
        ],
    }

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        protected route: ActivatedRoute,
        private formBuilder: FormBuilder,
        protected titleService: TitleService,
        private trackingService: TrackingService,
        private contactService: ContactService,
    ) {
        super(route, titleService)
    }

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: null,
            email: null,
            subject: null,
            message: null,
        })
        this.changeDetectorRef.detectChanges()
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get name() {
        return this.contactForm.get('name')
    }

    public get email() {
        return this.contactForm.get('email')
    }

    public get subject() {
        return this.contactForm.get('subject')
    }

    public get message() {
        return this.contactForm.get('message')
    }

    public submit(): void {
        if (!this.contactForm.valid) {
            return
        }

        this.contactService.send(this.contactForm.value)
        this.contactForm.reset()
        this.trackingService.track('event', {
            eventCategory: 'contact-form',
            eventAction: 'submit',
        })
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
