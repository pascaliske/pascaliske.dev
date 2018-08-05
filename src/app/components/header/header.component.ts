import { Component } from '@angular/core'
import { animation } from './header.animation'

@Component({
    selector: 'cmp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: animation,
})
export class HeaderComponent {}
