import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeadlineComponent } from 'components/headline/headline.component'

@Component({
    standalone: true,
    selector: 'cmp-greeting',
    templateUrl: './greeting.component.html',
    styleUrls: [],
    imports: [CommonModule, HeadlineComponent],
})
export class GreetingComponent {}
