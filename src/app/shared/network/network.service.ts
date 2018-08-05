import { Injectable } from '@angular/core'
import { BehaviorSubject, fromEvent, merge } from 'rxjs'
import { share, map, distinctUntilChanged, debounceTime } from 'rxjs/operators'

@Injectable()
export class NetworkService {
    /**
     *
     */
    public online$: BehaviorSubject<boolean> = new BehaviorSubject(navigator.onLine)

    /**
     * Initializes the network service.
     */
    public constructor() {
        const events = [
            fromEvent(window, 'online').pipe(map(() => true)),
            fromEvent(window, 'offline').pipe(map(() => false)),
        ]

        merge(...events)
            .pipe(share(), distinctUntilChanged(), debounceTime(100))
            .subscribe(online => {
                this.online$.next(online)
            })
    }

    public get online(): boolean {
        return this.online$.getValue()
    }
}
