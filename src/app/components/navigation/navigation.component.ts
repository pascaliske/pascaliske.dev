import { Component, OnInit, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'
import { ThemeService } from 'shared/theme/theme.service'
import { BreakpointService } from 'shared/breakpoint/breakpoint.service'
import { ScrollService } from 'shared/scroll/scroll.service'
import { NavigationButtonComponent } from 'components/navigation-button/navigation-button.component'
import { ThemeButtonComponent } from 'components/theme-button/theme-button.component'
import { animations } from './navigation.animation'

export interface NavigationLink {
    title: string
    target: string
}

@Component({
    standalone: true,
    selector: 'cmp-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        NavigationButtonComponent,
        ThemeButtonComponent,
    ],
    animations,
})
export class NavigationComponent implements OnInit {
    private readonly destroy: DestroyRef = inject(DestroyRef)

    public scrolled$: Observable<boolean> = this.scrollService.state$.pipe(
        map(({ scrollY }) => scrollY > 20),
    )

    public open: boolean = false

    public links: NavigationLink[] = [
        {
            title: 'home.',
            target: '/home',
        },
        {
            title: 'about.',
            target: '/about',
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
        this.router.events
            .pipe(
                takeUntilDestroyed(this.destroy),
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            )
            .subscribe(() => {
                this.open = false
                this.browserApiService.with('document', document => {
                    document.documentElement.classList.remove('overflow-hidden')
                })
            })
    }

    public toggle(): void {
        this.open = !this.open
        this.browserApiService.with('document', document => {
            if (this.open) {
                document.documentElement.classList.add('overflow-hidden')
            } else {
                document.documentElement.classList.remove('overflow-hidden')
            }
        })
    }

    public get desktop(): boolean {
        return this.breakpointService.matches('(min-width: 640px)')
    }

    public get icon(): 'menu' | 'close' {
        return this.open ? 'close' : 'menu'
    }
}
