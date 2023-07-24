import { Component, OnInit, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
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
        NgProgressModule,
        NavigationComponent,
        FooterComponent,
        TriangleComponent,
    ],
})
export class AppComponent implements OnInit {
    private readonly destroy: DestroyRef = inject(DestroyRef)

    public constructor(private readonly themeService: ThemeService) {}

    public ngOnInit(): void {
        this.themeService.connect().pipe(takeUntilDestroyed(this.destroy)).subscribe()
    }
}
