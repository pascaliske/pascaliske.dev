export const NOTIFICATION = 'notification'

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface NotificationOptions {
    timeout?: number
    icon?: string
}

export interface Notification {
    type: NotificationType
    message: string
    icon?: string
}
