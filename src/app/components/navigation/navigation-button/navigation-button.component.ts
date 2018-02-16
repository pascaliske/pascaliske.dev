import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
    @Input() public state: boolean = false

    @Output() public open: EventEmitter<boolean> = new EventEmitter()

    public constructor() {}

    public ngOnInit() {}

    public onClick(): void {
        this.state = !this.state
        this.open.emit(this.state)
    }
}
