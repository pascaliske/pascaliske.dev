import { Component, AfterViewInit } from '@angular/core'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    public activated: boolean = false

    public constructor() {}

    public ngAfterViewInit(): void {
        setTimeout(() => (this.activated = true), 400)
    }
}
