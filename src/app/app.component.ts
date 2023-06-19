import { Component, OnInit, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ThemeService } from 'shared/theme/theme.service'
import { animations } from './app.animations'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: [],
    animations,
})
export class AppComponent implements OnInit {
    private readonly destroy: DestroyRef = inject(DestroyRef)

    public constructor(private readonly themeService: ThemeService) {}

    public ngOnInit(): void {
        this.themeService.connect().pipe(takeUntilDestroyed(this.destroy)).subscribe()
    }
}
