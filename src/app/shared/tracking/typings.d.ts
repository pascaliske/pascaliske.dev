export type PageViewEvent = 'pageview'

export interface PageViewEventData {
    page: string
    title?: string
    location?: string
}

export type CustomEvent = 'event'

export interface CustomEventData {
    eventCategory: string
    eventAction: string
    eventLabel?: string
    eventValue?: string
}
