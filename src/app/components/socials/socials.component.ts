import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faTwitter,
    faXing,
    faLinkedinIn,
    faMastodon,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export interface SocialChannel {
    name: string
    href: string
    icon: IconDefinition
}

@Component({
    standalone: true,
    selector: 'cmp-socials',
    templateUrl: './socials.component.html',
    styleUrls: [],
    imports: [CommonModule, FontAwesomeModule],
})
export class SocialsComponent {
    @Input()
    public type: 'box' | 'minimal' = 'box'

    public channels: SocialChannel[] = [
        {
            name: 'GitHub',
            href: 'https://github.com/pascaliske',
            icon: faGithub,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/pascaliske',
            icon: faTwitter,
        },
        {
            name: 'Xing',
            href: 'https://www.xing.com/profile/Pascal_Iske',
            icon: faXing,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/pascaliske',
            icon: faLinkedinIn,
        },
        {
            name: 'Mastodon',
            href: 'https://hachyderm.io/@pascaliske',
            icon: faMastodon,
        },
        {
            name: 'Mail',
            href: 'mailto:info@pascaliske.dev',
            icon: faEnvelope,
        },
    ]
}
