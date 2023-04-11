import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormControl } from '@angular/forms'

@Component({
    standalone: true,
    selector: 'cmp-input',
    templateUrl: './input.component.html',
    styleUrls: [],
    imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent {
    @Input()
    public type: 'text' | 'email' | 'textarea' = 'text'

    @Input()
    public fc: FormControl = new FormControl()

    @Input()
    public id!: string

    @Input()
    public label?: string

    @Input()
    public autocomplete?: string

    public get filled(): boolean {
        return (this.fc?.dirty ?? false) && this.fc?.value?.length > 0
    }
}
