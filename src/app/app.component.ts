import { Component, HostListener } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { BreakpointService } from './services/breakpoint/breakpoint.service'
import { ScrollService } from './services/scroll/scroll.service'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'cmp'

    public constructor(
        private titleService: Title,
        private breakpointService: BreakpointService,
        private scrollService: ScrollService
    ) {}

    public setTitle(title: string) {
        this.titleService.setTitle(title)
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event): void {
        this.breakpointService.handleResize(event)
    }

    @HostListener('window:scroll', ['$event'])
    public onScroll(event): void {
        this.scrollService.handleScroll(event)
    }
}
