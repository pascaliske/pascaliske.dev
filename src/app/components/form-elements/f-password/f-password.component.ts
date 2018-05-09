import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-password',
    templateUrl: './f-password.component.html',
    styleUrls: ['./f-password.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FPasswordComponent extends FInputComponent {
    public static readonly cmpName: string = 'FPasswordComponent'

    public type: 'text' | 'password' = 'password'

    public visible: boolean = false

    public mouseup(): void {
        this.type = 'password'
        this.visible = false
    }

    public mousedown(): void {
        this.type = 'text'
        this.visible = true
    }

    public getClasses(baseClass: string): object {
        const result = super.getClasses(baseClass)
        const prefixed = modifier => `${baseClass}--${modifier}`

        result[prefixed('visible')] = this.visible

        return result
    }
}
