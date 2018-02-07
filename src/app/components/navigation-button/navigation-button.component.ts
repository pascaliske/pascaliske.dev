import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
    @Output() public open: EventEmitter<boolean> = new EventEmitter()

    public state: boolean = false

    public constructor() {}

    public ngOnInit() {}

    public onClick(): void {
        this.state = !this.state
        this.open.emit(this.state)
    }
}
