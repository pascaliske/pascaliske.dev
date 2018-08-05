import { Component, Input, ElementRef, OnInit } from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import { ViewportService } from '../../shared/viewport/viewport.service'

@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    public static readonly cmpName: string = 'SectionComponent'

    @Input() public id: string

    @Input() public even: boolean = false

    public activated: boolean = false

    private alive: boolean = true

    public constructor(private element: ElementRef, private viewportService: ViewportService) {}

    public ngOnInit(): void {
        this.viewportService
            .observe(this.element.nativeElement)
            .pipe(takeWhile(() => this.alive))
            .subscribe((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    this.show()
                }
            })
    }

    private show(): void {
        this.activated = true
    }
}
