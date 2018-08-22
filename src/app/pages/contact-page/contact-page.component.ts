import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { FValidationConfig } from '@pascaliske/form-elements'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../shared/title/title.service'
import { TrackingService } from '../../shared/tracking/tracking.service'
import { ContactPageService } from './contact-page.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent extends Page implements OnInit, OnDestroy {
    public contactForm: FormGroup

    public validation: FValidationConfig = {
        email: [
            {
                type: 'required',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_REQUIRED',
            },
            {
                type: 'email',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_EMAIL',
            },
        ],
    }

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        protected route: ActivatedRoute,
        private formBuilder: FormBuilder,
        protected translateService: TranslateService,
        protected titleService: TitleService,
        private trackingService: TrackingService,
        private contactPageService: ContactPageService,
    ) {
        super(route, translateService, titleService)
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

        this.contactPageService.send(this.contactForm.value)
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
