export interface FValidationMessage {
    type: string
    message: string
}

export interface FValidationConfig {
    [key: string]: Array<FValidationMessage>
}

export interface FExplanationConfig {
    [key: string]: Array<string>
}
