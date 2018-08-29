import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { modifiers } from '@pascaliske/html-helpers'

@Component({
    selector: 'cmp-navigation-button',
    templateUrl: './navigation-button.component.html',
    styleUrls: ['./navigation-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationButtonComponent {
    @Input()
    public state: boolean = false

    @Output()
    public stateChange: EventEmitter<boolean> = new EventEmitter()

    public get classes(): string {
        return modifiers('cmp-navigation-button', {
            open: this.state,
        })
    }
}
