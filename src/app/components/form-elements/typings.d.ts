export interface FValidation {
    type:
        | 'min'
        | 'max'
        | 'required'
        | 'requiredTrue'
        | 'email'
        | 'minLength'
        | 'maxLength'
        | 'pattern'
    value?: string | number
    message: string
}

export type FRowLayouts = '1' | '1-1' | '1-1-1' | '1-2' | '2-1'

export type FColumnAlignments = 'left' | 'right'

export interface FSelectPlaceholder {
    label: string
    value: any
    selectable: boolean
}

export interface FSelectOption {
    label: string
    value: any
}

export interface FRadiobuttonOption {
    label: string
    value: string
    checked: boolean
}

export interface FDateOptions {}

export interface FValidationConfig {
    [key: string]: Array<FValidation>
}

export interface FExplanationConfig {
    [key: string]: Array<string>
}
