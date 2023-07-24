import { Component, HostBinding } from '@angular/core'
import { GreetingComponent } from 'components/greeting/greeting.component'
import { SocialsComponent } from 'components/socials/socials.component'

@Component({
    standalone: true,
    selector: 'cmp-home',
    templateUrl: './home.component.html',
    imports: [GreetingComponent, SocialsComponent],
})
export class HomeComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-center'
}
