import { Component, OnInit, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NgFor, NgIf, AsyncPipe } from '@angular/common'
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router'
import { Observable, fromEvent, timer } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'
import { ThemeService } from 'shared/theme/theme.service'
import { BreakpointService } from 'shared/breakpoint/breakpoint.service'
import { ScrollService } from 'shared/scroll/scroll.service'
import { NavigationButtonComponent } from 'components/navigation-button/navigation-button.component'
import { ThemeButtonComponent } from 'components/theme-button/theme-button.component'

export const enum NavigationState {
    CLOSED = 'closed',
    FADE_IN = 'fade-in',
    FADE_OUT = 'fade-out',
    OPEN = 'open',
}

export interface NavigationLink {
    title: string
    target: string
}

@Component({
    selector: 'cmp-navigation',
    templateUrl: './navigation.component.html',
    imports: [
        NgFor,
        NgIf,
        AsyncPipe,
        RouterLink,
        RouterLinkActive,
        NavigationButtonComponent,
        ThemeButtonComponent,
    ],
})
export class NavigationComponent implements OnInit {
    private readonly destroy: DestroyRef = inject(DestroyRef)

    public scrolled$: Observable<boolean> = this.scrollService.state$.pipe(
        map(({ scrollY }) => scrollY > 20),
    )

    public state: NavigationState = NavigationState.CLOSED

    public links: NavigationLink[] = [
        {
            title: 'home.',
            target: '/home',
        },
        {
            title: 'skills.',
            target: '/skills',
        },
        {
            title: 'work.',
            target: '/work',
        },
        {
            title: 'contact.',
            target: '/contact',
        },
    ]

    public constructor(
        private readonly router: Router,
        private readonly browserApiService: BrowserApiService,
        public readonly themeService: ThemeService,
        private readonly breakpointService: BreakpointService,
        private readonly scrollService: ScrollService,
    ) {}

    public ngOnInit(): void {
        this.watchNavigationEnd()
        this.watchKeyboard()
    }

    public toggle(): void {
        switch (this.state) {
            case NavigationState.OPEN:
                this.close()
                break

            case NavigationState.CLOSED:
                this.open()
                break
        }
    }

    public open(): void {
        if (this.state === NavigationState.OPEN) {
            return
        }

        this.state = NavigationState.FADE_IN

        timer(200).subscribe(() => {
            this.state = NavigationState.OPEN
            this.browserApiService.with('document', document => {
                document.documentElement.classList.add('overflow-hidden')
            })
        })
    }

    public close(): void {
        if (this.state === NavigationState.CLOSED) {
            return
        }

        this.state = NavigationState.FADE_OUT

        timer(200).subscribe(() => {
            this.state = NavigationState.CLOSED
            this.browserApiService.with('document', document => {
                document.documentElement.classList.remove('overflow-hidden')
            })
        })
    }

    private watchNavigationEnd(): void {
        this.router.events
            .pipe(
                takeUntilDestroyed(this.destroy),
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            )
            .subscribe(() => {
                this.close()
            })
    }

    private watchKeyboard(): void {
        this.browserApiService.with('document', document => {
            fromEvent<KeyboardEvent>(document, 'keypress')
                .pipe(takeUntilDestroyed(this.destroy))
                .subscribe((event: KeyboardEvent) => {
                    // skip keyboard navigation if focus is inside form fields
                    const nodeName: string = (event?.target as Element)?.nodeName ?? ''
                    if (['input', 'textarea'].includes(nodeName.toLowerCase())) {
                        return
                    }

                    // toggle mobile navigation
                    if (event.key === 'm' && this.isMobile) {
                        this.toggle()
                        return
                    }

                    // toggle color scheme
                    if (event.key === 't') {
                        this.themeService.next()
                        return
                    }

                    // go to page
                    const link: NavigationLink = this.links?.[parseInt(event.key ?? '', 10) - 1]
                    if (link && (!this.isMobile || this.isOpen)) {
                        this.router.navigate([link.target]).catch(() => {})
                    }
                })
        })
    }

    public get icon(): 'menu' | 'close' {
        if (this.state === NavigationState.CLOSED || this.state === NavigationState.FADE_OUT) {
            return 'close'
        }

        return 'menu'
    }

    public get isClosed(): boolean {
        return this.state === NavigationState.CLOSED
    }

    public get isFadingIn(): boolean {
        return this.state === NavigationState.FADE_IN
    }

    public get isFadingOut(): boolean {
        return this.state === NavigationState.FADE_OUT
    }

    public get isOpen(): boolean {
        return this.state === NavigationState.OPEN
    }

    public get isAnimating(): boolean {
        return this.state === NavigationState.FADE_IN || this.state === NavigationState.FADE_OUT
    }

    public get isMobile(): boolean {
        return !this.breakpointService.matches('(min-width: 640px)')
    }
}
