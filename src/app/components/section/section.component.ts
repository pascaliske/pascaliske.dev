import { Component, Input, ElementRef, OnInit } from '@angular/core'
import { ViewportService } from '../../services/viewport/viewport.service'
import { takeWhile } from 'rxjs/operators'

export enum SectionStates {
    ACTIVATED = 'cmp-section--activated',
    DEACTIVATED = 'cmp-section--deactivated'
}

@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
    @Input() public id: string

    @Input() public even: boolean = false

    public activated: boolean = false

    private alive: boolean = true

    public constructor(private element: ElementRef, private viewportService: ViewportService) {}

    public ngOnInit(): void {
        const sub = this.viewportService
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
