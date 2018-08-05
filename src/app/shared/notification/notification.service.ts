import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, timer } from 'rxjs'
import { Notification, NotificationType, NotificationOptions } from './typings'
import { first } from 'rxjs/operators'

@Injectable()
export class NotificationService {
    public notification$: BehaviorSubject<Notification> = new BehaviorSubject(null)

    public constructor() {}

    public info(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.send('info', message, this.applyOptions(options))
    }

    public success(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.send('success', message, this.applyOptions(options))
    }

    public warning(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.send('warning', message, this.applyOptions(options))
    }

    public error(message: string, options?: Partial<NotificationOptions>): Notification {
        return this.send('error', message, this.applyOptions(options))
    }

    public dismiss(): Observable<number> {
        this.notification$.next(null)

        return timer(200).pipe(first())
    }

    private send(
        type: NotificationType,
        message: string,
        options: NotificationOptions,
    ): Notification {
        const notification: Notification = {
            type: type,
            message: message,
            icon: options.icon,
        }

        this.dismiss().subscribe(() => {
            this.notification$.next(notification)
        })

        if (options.timeout && options.timeout > 0) {
            timer(options.timeout)
                .pipe(first())
                .subscribe(() => {
                    this.dismiss()
                })
        }

        return notification
    }

    private applyOptions(override: Partial<NotificationOptions> = {}): NotificationOptions {
        const defaults: NotificationOptions = {
            timeout: 3000,
        }

        return { ...defaults, ...override }
    }
}
