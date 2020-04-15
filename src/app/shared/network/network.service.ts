import { Injectable } from '@angular/core'
import { Observable, fromEvent, merge } from 'rxjs'
import { startWith, map, distinctUntilChanged, debounceTime, share } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class NetworkService {
    /**
     * The current online / offline state.
     *
     * @param {Observable<boolean>}
     */
    public online$: Observable<boolean> = this.share(
        merge(fromEvent(window, 'online'), fromEvent(window, 'offline')).pipe(
            startWith(navigator.onLine),
            map(() => navigator.onLine),
        ),
    )

    /**
     * The current network speed.
     *
     * @param {Observable<'slow' | 'fast'>}
     */
    public speed$: Observable<'slow' | 'fast'> = this.share(
        fromEvent((navigator as any).connection, 'change').pipe(
            startWith((navigator as any).connection.effectiveType),
            map<any, 'slow' | 'fast'>(() => {
                switch ((navigator as any).connection.effectiveType) {
                    case 'slow-2g':
                    case '2g':
                        return 'slow'

                    case '3g':
                    case '4g':
                        return 'fast'
                }
            }),
        ),
    )

    /**
     * Debounces the given observable and shares it globally.
     *
     * @param {Observable<T>} observable
     * @returns {Observable<T>}
     */
    private share<T = any>(observable: Observable<T>): Observable<T> {
        return observable.pipe(distinctUntilChanged(), debounceTime(100), share())
    }
}
