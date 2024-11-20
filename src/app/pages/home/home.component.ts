import { Component, HostBinding } from '@angular/core'
import { MetadataService } from 'shared/metadata/metadata.service'
import { GreetingComponent } from 'components/greeting/greeting.component'
import { SocialsComponent } from 'components/socials/socials.component'

@Component({
    selector: 'cmp-home',
    templateUrl: './home.component.html',
    imports: [GreetingComponent, SocialsComponent],
    providers: [MetadataService],
})
export default class HomeComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-center'

    public constructor(private readonly metadata: MetadataService) {}
}
