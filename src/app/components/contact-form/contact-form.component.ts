import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

export interface ContactFormModel {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

@Component({
    selector: 'cmp-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    public contactForm: FormGroup

    public model: ContactFormModel = {
        name: null,
        email: null,
        phone: null,
        subject: null,
        message: null
    }

    public constructor(private formBuilder: FormBuilder) {
        this.contactForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            phone: [null],
            subject: [null, Validators.required],
            message: [null, Validators.required]
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
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
