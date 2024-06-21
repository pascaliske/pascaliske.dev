import { Component, Input } from '@angular/core'
import { NgFor } from '@angular/common'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faXTwitter,
    faMastodon,
    faXing,
    faLinkedinIn,
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
    imports: [NgFor, FaIconComponent],
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
            name: 'X / Twitter',
            href: 'https://x.com/pascaliske',
            icon: faXTwitter,
        },
        {
            name: 'Mastodon',
            href: 'https://hachyderm.io/@pascaliske',
            icon: faMastodon,
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
            name: 'Mail',
            href: 'mailto:info@pascaliske.dev',
            icon: faEnvelope,
        },
    ]
}
