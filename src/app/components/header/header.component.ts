import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { TimelineLite, TweenLite } from 'gsap'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    /**
     * Element reference of the title element.
     *
     * @param {ElementRef}
     */
    @ViewChild('titleRef') public titleRef: ElementRef

    /**
     * Element reference of the title element.
     *
     * @param {ElementRef}
     */
    @ViewChild('subtitleRef') public subtitleRef: ElementRef

    /**
     * Initializes the component.
     */
    public constructor() {}

    /**
     * Activate the component
     *
     * @returns {void}
     */
    public ngAfterViewInit(): void {
        setTimeout(() => this.fadeIn(), 100)
    }

    /**
     * Fades the title and subtitle in.
     *
     * @returns {void}
     */
    private fadeIn(): void {
        const timeline = new TimelineLite()

        timeline.add(
            TweenLite.to(this.titleRef.nativeElement, 0.4, {
                stroke: 'rgba(255, 255, 255, 1)'
            }),
            0
        )

        timeline.add(
            TweenLite.to(this.titleRef.nativeElement, 1.6, {
                opacity: 1,
                x: 0,
                strokeDashoffset: 0
            }),
            0
        )

        timeline.add(
            TweenLite.to(this.titleRef.nativeElement, 1, {
                fill: 'rgba(255, 255, 255, 1)'
            }),
            0.6
        )

        timeline.add(
            TweenLite.to(this.subtitleRef.nativeElement, 1.6, {
                opacity: 1,
                x: 0
            }),
            0
        )
    }
}
