import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-headline',
    templateUrl: './headline.component.html',
    styleUrls: [],
    imports: [CommonModule],
})
export class HeadlineComponent {
    @Input()
    public level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'

    @Input()
    public text!: string

    @Input()
    public id!: string
}
