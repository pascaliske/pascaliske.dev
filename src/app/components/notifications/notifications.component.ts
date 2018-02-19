import { Component } from '@angular/core'
import { NotificationService, Notification } from '../../services/notification/notification.service'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'cmp-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
    /**
     * The list of notifications.
     *
     * @param {Observable<Array<Notification>>}
     */
    public items: Observable<Array<Notification>>

    /**
     * Initializes the component.
     *
     * @param {NotificationService} notificationService
     * @returns {NotificationsComponent}
     */
    public constructor(public notificationService: NotificationService) {
        this.items = this.notificationService.notifications
    }

    /**
     * Dismisses the notification for the given id.
     *
     * @param {string} id - The notification id.
     * @returns {void}
     */
    public dismiss(id: string): void {
        this.notificationService.dismiss(id)
    }
}
