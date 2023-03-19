import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GreetingComponent } from 'components/greeting/greeting.component'
import { SocialsComponent } from 'components/socials/socials.component'

@Component({
    standalone: true,
    selector: 'cmp-home',
    templateUrl: './home.component.html',
    styleUrls: [],
    imports: [CommonModule, GreetingComponent, SocialsComponent],
})
export class HomeComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-center'
}
