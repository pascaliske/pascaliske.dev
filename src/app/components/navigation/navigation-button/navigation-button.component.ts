import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationButtonComponent {
    @Input() public state: boolean = false

    @Output() public stateChange: EventEmitter<boolean> = new EventEmitter()

    public constructor() {}
}
