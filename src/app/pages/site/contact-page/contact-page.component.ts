import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { TitleService } from '../../../services/title/title.service'
import { FValidationConfig } from '../../../components/form-elements/typings'
import { Page } from '../page'

@Component({
    selector: 'cmp-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends Page implements OnInit {
    public contactForm: FormGroup

    public validation: FValidationConfig = {
        email: [
            {
                type: 'required',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_REQUIRED'
            },
            {
                type: 'email',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_EMAIL'
            }
        ]
    }

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        public translate: TranslateService,
        public titleService: TitleService
    ) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_CONTACT')
    }

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: null,
            email: null,
            phone: null,
            subject: null,
            message: null,
            policy: null
        })
        this.changeDetectorRef.detectChanges()
    }

    public get name() {
        return this.contactForm.get('name')
    }

    public get email() {
        return this.contactForm.get('email')
    }

    public get phone() {
        return this.contactForm.get('phone')
    }

    public get subject() {
        return this.contactForm.get('subject')
    }

    public get message() {
        return this.contactForm.get('message')
    }

    public submit(event: Event): void {
        console.log('==> submit form', this.contactForm.value)
        this.reset()
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
