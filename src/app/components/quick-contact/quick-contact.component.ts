import { Component } from '@angular/core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faWpforms,
    faTwitter,
    faXing,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

@Component({
    selector: 'cmp-quick-contact',
    templateUrl: './quick-contact.component.html',
    styleUrls: ['./quick-contact.component.scss'],
})
export class QuickContactComponent {
    public static readonly cmpName: string = 'QuickContactComponent'

    /**
     * Provide icons for the template.
     */
    public readonly icons = {
        faWpforms,
        faEnvelope,
        faTwitter,
        faXing,
        faLinkedin,
        faGithub,
    }
}
