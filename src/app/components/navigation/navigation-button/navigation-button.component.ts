import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent {
    @Input() public state: boolean = false

    @Output() public stateChange: EventEmitter<boolean> = new EventEmitter()

    public constructor() {}
}
