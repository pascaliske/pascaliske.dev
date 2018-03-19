import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { AuthService, User } from '../../../services/auth/auth.service'
import { Page } from '../../page'
import { SignInFormModel, SignInFormErrors } from './typings'

@Component({
    selector: 'cmp-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent extends Page {
    public signInForm: FormGroup

    public model: SignInFormModel = {
        email: '',
        password: ''
    }

    public errors: SignInFormErrors = {
        email: {
            required: 'This field is mandatory.',
            email: 'You must enter a valid email address.'
        },
        password: {
            required: 'This field is mandatory.',
            minlength: 'Your password must contain at least 8 characters.',
            maxlength: 'Your password must not be longer than 30 charcaters.',
            pattern: 'Your password must contain at least one number, one symbol and one letter.'
        }
    }

    public constructor(
        public router: Router,
        public translate: TranslateService,
        public titleService: TitleService,
        public authService: AuthService,
        public formBuilder: FormBuilder
    ) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_SIGNIN')

        this.signInForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(30),
                    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9<!{,=~)]+)$')
                ]
            ]
        })
    }

    public get email() {
        return this.signInForm.get('email')
    }

    public get password() {
        return this.signInForm.get('password')
    }

    public signin(): void {
        this.authService
            .signin(this.email.value, this.password.value)
            .then(user => {
                console.log('==>', user)
                this.router.navigate(['/auth'])
            })
            .catch(error => {
                console.error(error)
            })
    }

    public reset(): void {
        this.signInForm.reset()
    }
}
