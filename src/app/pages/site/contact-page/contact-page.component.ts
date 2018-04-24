import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends Page {
    public contactForm: FormGroup

    public constructor(
        private formBuilder: FormBuilder,
        public translate: TranslateService,
        public titleService: TitleService
    ) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_CONTACT')

        this.contactForm = this.formBuilder.group({
            name: null,
            email: [null, [Validators.required, Validators.email]],
            phone: null,
            subject: null,
            message: null
        })
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

    public submit(): void {
        console.log('==> submit form', this.contactForm.value)
        this.contactForm.reset()
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
