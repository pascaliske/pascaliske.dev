export interface FValidation {
    type: string
    message: string
}

export interface FValidationConfig {
    [key: string]: Array<FValidation>
}

export interface FExplanationConfig {
    [key: string]: Array<string>
}
