import { Component, OnInit, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Router, RouterOutlet } from '@angular/router'
import { NgProgressbar } from 'ngx-progressbar'
import { NgProgressRouter } from 'ngx-progressbar/router'
import { ThemeService } from 'shared/theme/theme.service'
import { NavigationComponent } from 'components/navigation/navigation.component'
import { FooterComponent } from 'components/footer/footer.component'
import { TriangleComponent } from 'components/triangle/triangle.component'

@Component({
    standalone: true,
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet,
        NgProgressbar,
        NgProgressRouter,
        NavigationComponent,
        FooterComponent,
        TriangleComponent,
    ],
})
export class AppComponent implements OnInit {
    private readonly destroy: DestroyRef = inject(DestroyRef)

    public constructor(
        private readonly router: Router,
        private readonly themeService: ThemeService,
    ) {}

    public ngOnInit(): void {
        // connect theme service to local storage
        this.themeService.connect().pipe(takeUntilDestroyed(this.destroy)).subscribe()

        // delayed initial navigation
        setTimeout(() => this.router.initialNavigation())
    }
}
