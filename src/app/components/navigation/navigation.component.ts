import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
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

@UntilDestroy()
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
        public readonly themeService: ThemeService,
        private readonly breakpointService: BreakpointService,
        private readonly scrollService: ScrollService,
    ) {}

    public ngOnInit(): void {
        this.router.events
            .pipe(
                untilDestroyed(this),
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            )
            .subscribe(() => {
                this.open = false
                document.documentElement.classList.remove('overflow-hidden')
            })
    }

    public toggle(): void {
        this.open = !this.open

        if (this.open) {
            document.documentElement.classList.add('overflow-hidden')
        } else {
            document.documentElement.classList.remove('overflow-hidden')
        }
    }

    public get desktop(): boolean {
        return this.breakpointService.matches('(min-width: 640px)')
    }

    public get icon(): 'menu' | 'close' {
        return this.open ? 'close' : 'menu'
    }
}
