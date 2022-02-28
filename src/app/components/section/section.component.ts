import { Component, Input, ElementRef, OnInit } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'
import { takeWhile } from 'rxjs/operators'
import { ViewportService } from '../../shared/viewport/viewport.service'

@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    public static readonly cmpName: string = 'SectionComponent'

    @Input()
    public id: string

    @Input()
    public even: boolean = false

    public activated: boolean = false

    private readonly alive: boolean = true

    public constructor(
        private readonly element: ElementRef,
        private readonly viewportService: ViewportService,
    ) {}

    public ngOnInit(): void {
        this.viewportService
            .observe(this.element.nativeElement as Element)
            .pipe(takeWhile(() => this.alive))
            .subscribe((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    this.show()
                }
            })
    }

    public get classes(): string {
        return modifiers('cmp-section', {
            activated: this.activated,
            even: this.even,
        })
    }

    private show(): void {
        this.activated = true
    }
}
