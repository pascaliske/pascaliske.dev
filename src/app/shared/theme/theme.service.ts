import { Injectable } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { Observable, BehaviorSubject, map, tap } from 'rxjs'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'
import { BreakpointService } from 'shared/breakpoint/breakpoint.service'
import { StorageService } from 'shared/storage/storage.service'

export const enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export const enum ThemeIcon {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly state$: BehaviorSubject<Theme | null> = new BehaviorSubject<Theme | null>(null)

    private readonly query: string = '(prefers-color-scheme: dark)'

    public constructor(
        private readonly meta: Meta,
        private readonly browserApiService: BrowserApiService,
        private readonly breakpointService: BreakpointService,
        private readonly storageService: StorageService,
    ) {}

    public connect(): Observable<void> {
        this.breakpointService.watch(this.query, () => this.apply())

        return this.state$.pipe(
            map(theme => {
                if (theme === null) {
                    this.storageService.remove('theme')
                    return
                }

                this.storageService.set('theme', theme)
            }),
            tap(() => this.apply()),
        )
    }

    public next(): void {
        // system -> light -> dark
        switch (this.state$.value) {
            // light
            case Theme.LIGHT:
                this.state$.next(Theme.DARK)
                break

            // dark
            case Theme.DARK:
                this.state$.next(null)
                break

            // system
            default:
                this.state$.next(Theme.LIGHT)
                break
        }
    }

    private apply(): void {
        // light
        if (this.state$.value === Theme.LIGHT) {
            this.meta.updateTag({ name: 'theme-color', content: '#fffaff' })
            this.browserApiService.with('document', document => {
                document.documentElement.classList.remove('dark')
            })

            return
        }

        // dark
        if (this.state$.value === Theme.DARK) {
            this.meta.updateTag({ name: 'theme-color', content: '#2d333d' })
            this.browserApiService.with('document', document => {
                document.documentElement.classList.add('dark')
            })

            return
        }

        // system
        if (this.breakpointService.matches(this.query)) {
            this.meta.updateTag({ name: 'theme-color', content: '#2d333d' })
            this.browserApiService.with('document', document => {
                document.documentElement.classList.add('dark')
            })
        } else {
            this.meta.updateTag({ name: 'theme-color', content: '#fffaff' })
            this.browserApiService.with('document', document => {
                document.documentElement.classList.remove('dark')
            })
        }
    }

    public get preference$(): Observable<Theme | null> {
        return this.state$.asObservable()
    }

    public get icon$(): Observable<ThemeIcon> {
        return this.state$.pipe(
            map(theme => {
                switch (theme) {
                    // light
                    case Theme.LIGHT:
                        return ThemeIcon.DARK

                    // dark
                    case Theme.DARK:
                        return ThemeIcon.SYSTEM

                    // system
                    default:
                        return ThemeIcon.LIGHT
                }
            }),
        )
    }
}
