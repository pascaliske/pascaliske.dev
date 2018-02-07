import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public title: string = 'Pascal Iske'

    public subtitle: string = 'Frontend and Web Development'

    public constructor() {}

    public ngOnInit(): void {}
}
