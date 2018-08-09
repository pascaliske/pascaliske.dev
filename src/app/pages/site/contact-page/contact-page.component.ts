import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { TitleService } from '../../../shared/title/title.service'
import { ContactPageService } from './contact-page.service'
import { FValidationConfig } from '../../../components/form-elements/typings'
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
        private formBuilder: FormBuilder,
        public route: ActivatedRoute,
        public translate: TranslateService,
        public titleService: TitleService,
        private contactPageService: ContactPageService,
    ) {
        super(route, translate, titleService)
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
        this.contactPageService.send(this.contactForm.value)
        this.reset()
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
