export interface FormErrors {
    [key: string]: string
}

export interface SignInFormModel {
    email: string
    password: string
}

export interface SignInFormErrors {
    email: FormErrors
    password: FormErrors
}
