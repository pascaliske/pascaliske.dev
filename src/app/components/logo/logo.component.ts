import { Component, OnInit, Input } from '@angular/core'

export enum LogoThemes {
    LIGHT = 'light',
    DARK = 'dark'
}

@Component({
    selector: 'cmp-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
    @Input() public theme: LogoThemes = LogoThemes.LIGHT

    @Input() public round: boolean = false

    public constructor() {}

    public ngOnInit() {}
}
