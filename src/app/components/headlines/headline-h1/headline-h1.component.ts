import { Component } from '@angular/core'
import { Headline } from '../headline'

@Component({
    selector: 'cmp-headline-h1',
    templateUrl: './headline-h1.component.html',
    styleUrls: ['./headline-h1.component.scss']
})
export class HeadlineH1Component extends Headline {}
