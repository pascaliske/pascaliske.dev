import { Injectable } from '@angular/core'

/**
 * Types of notifications.
 */
export enum NotificationType {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

/**
 * Interface describing a Notification.
 */
export interface Notification {
    id: string
    type: NotificationType
    text: string
    dismissed: boolean
}

/**
 * Injectable service for sending notifications to the global notification list.
 *
 * - use `send(notification: Notification) => void` to send notifications
 */
@Injectable()
export class NotificationService {
    /**
     * Initializes the notification service.
     *
     * @returns {NotificationService}
     */
    public constructor() {}

    /**
     * Sends a new notification to the user.
     *
     * @param {Notification} notification
     */
    public send(notification: Notification): void {}
}
