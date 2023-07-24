import { Component } from '@angular/core'
import { HeadlineComponent } from 'components/headline/headline.component'

@Component({
    standalone: true,
    selector: 'cmp-greeting',
    templateUrl: './greeting.component.html',
    imports: [HeadlineComponent],
})
export class GreetingComponent {}
