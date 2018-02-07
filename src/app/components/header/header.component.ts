import { Component, OnInit, AfterViewInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    public activated: boolean = false

    public title: string = 'Pascal Iske'

    public subtitle: string = 'Frontend and Web Development'

    public constructor() {}

    public ngOnInit(): void {}

    public ngAfterViewInit(): void {
        setTimeout(() => (this.activated = true), 0)
    }
}
