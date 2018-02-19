import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'

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
     * @param {AngularFirestore} store
     * @returns {NotificationService}
     */
    public constructor(private store: AngularFirestore) {}

    /**
     * Returns all existing notifications.
     *
     * @returns {Observable<Array<Notification>>}
     */
    public get notifications(): Observable<Array<Notification>> {
        return this.store
            .collection<Notification>('/notifications', ref => ref.limit(5))
            .valueChanges()
            .map((items: Array<Notification>, index) => {
                return items.filter(item => item.dismissed === false)
            })
    }

    /**
     * Sends a new notification to the user.
     *
     * @param {Notification} notification
     */
    public send(notification: Notification): void {
        this.store.collection('/notifications').add(notification)
    }

    /**
     * Dismisses the given notification.
     *
     * @param {string} id - The id of the notification to be dismissed.
     * @returns {void}
     */
    public dismiss(id: string): void {
        this.store.doc<Notification>(`/notifications/${id}`).update({
            dismissed: true
        })
    }
}
