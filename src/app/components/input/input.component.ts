import { Component, input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormControl } from '@angular/forms'

@Component({
    selector: 'cmp-input',
    templateUrl: './input.component.html',
    imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent {
    public readonly type = input<'text' | 'email' | 'textarea'>('text')

    public readonly fc = input<FormControl>(new FormControl())

    public readonly id = input.required<string>()

    public readonly label = input<string>()

    public readonly autocomplete = input<string>()

    public get filled(): boolean {
        return (this.fc()?.dirty ?? false) && this.fc()?.value?.length > 0
    }
}
