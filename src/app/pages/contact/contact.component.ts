import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms'
import { FValidation } from '@pascaliske/form-elements'
import { TitleService } from '../../shared/title/title.service'
import { TrackingService } from '../../shared/tracking/tracking.service'
import { Page } from '../page'
import { ContactService } from './contact.service'
import { ContactFormData } from './typings'

@Component({
    selector: 'cmp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends Page implements OnInit {
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
        private readonly changeDetectorRef: ChangeDetectorRef,
        protected route: ActivatedRoute,
        private readonly formBuilder: FormBuilder,
        protected titleService: TitleService,
        private readonly trackingService: TrackingService,
        private readonly contactService: ContactService,
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

    public get name(): AbstractControl {
        return this.contactForm.get('name')
    }

    public get email(): AbstractControl {
        return this.contactForm.get('email')
    }

    public get subject(): AbstractControl {
        return this.contactForm.get('subject')
    }

    public get message(): AbstractControl {
        return this.contactForm.get('message')
    }

    public send(): void {
        if (!this.contactForm.valid) {
            return
        }

        this.contactService.send(this.contactForm.value as ContactFormData)
        this.contactForm.reset()
        this.trackingService.track('event', {
            event_category: 'contact-form',
            event_action: 'submit',
        })
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
