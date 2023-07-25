import { Component, HostBinding } from '@angular/core'
import { NgFor, NgIf } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Tags } from 'typings'
import { MetadataService } from 'shared/metadata/metadata.service'
import { SectionComponent } from 'components/section/section.component'
import { HeadlineComponent } from 'components/headline/headline.component'
import { CopyComponent } from 'components/copy/copy.component'
import { CardComponent } from 'components/card/card.component'
import { SocialsComponent } from 'components/socials/socials.component'

export interface Project {
    title: string
    description: string
    image: {
        url: string
        credit: string
    }
    tags: Tags[]
    links: { name: string; url: string; icon: IconDefinition }[]
}

@Component({
    standalone: true,
    selector: 'cmp-work',
    templateUrl: './work.component.html',
    imports: [
        NgFor,
        NgIf,
        FontAwesomeModule,
        SectionComponent,
        HeadlineComponent,
        CopyComponent,
        CardComponent,
        SocialsComponent,
    ],
    providers: [MetadataService],
})
export class WorkComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'

    public icons: Record<string, IconDefinition> = { faArrowRight }

    public projects: Project[] = [
        {
            title: 'infrastructure',
            description: 'Flux based GitOps repository for my home lab infrastructure.',
            image: {
                url: '/assets/images/project-infrastructure.jpg',
                credit: 'Photo by Taylor Vick on Unsplash.',
            },
            tags: [Tags.FLUX, Tags.KUBERNETES, Tags.TERRAFORM, Tags.ANSIBLE],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/infrastructure',
                    icon: faGithub,
                },
                {
                    name: 'Documentation',
                    url: 'https://k8s.pascaliske.dev',
                    icon: faBook,
                },
            ],
        },
        {
            title: 'helm-charts',
            description: 'Another repository with lightweight Helm Charts.',
            image: {
                url: '/assets/images/project-helm-charts.jpg',
                credit: 'Photo by Leone Venter on Unsplash.',
            },
            tags: [Tags.KUBERNETES, Tags.HELM],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/helm-charts',
                    icon: faGithub,
                },
                {
                    name: 'Documentation',
                    url: 'https://charts.pascaliske.dev',
                    icon: faBook,
                },
            ],
        },
        {
            title: 'docker-traefik-errors',
            description: 'Custom error pages for your Traefik installation.',
            image: {
                url: '/assets/images/project-traefik-errors.jpg',
                credit: 'Photo by Ricardo Resende on Unsplash.',
            },
            tags: [Tags.DOCKER, Tags.ANGULAR],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/docker-traefik-errors',
                    icon: faGithub,
                },
                {
                    name: 'Documentation',
                    url: 'https://pascaliske.github.io/docker-traefik-errors/',
                    icon: faBook,
                },
            ],
        },
        {
            title: 'docker-cloudflare-dyndns',
            description: `Simple container image to update a dynamic DNS record using the Cloudflare API.`,
            image: {
                url: '/assets/images/project-cloudflare-dyndns.jpg',
                credit: 'Photo by Dariusz Sankowski on Unsplash.',
            },
            tags: [Tags.DOCKER, Tags.BASH],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/docker-cloudflare-dyndns',
                    icon: faGithub,
                },
                {
                    name: 'Documentation',
                    url: 'https://pascaliske.github.io/docker-cloudflare-dyndns/',
                    icon: faBook,
                },
            ],
        },
        {
            title: 'pascaliske.dev',
            description: `Angular Web App built with GitHub Actions and deployed with Cloudflare.`,
            image: {
                url: '/assets/images/project-pascaliske-dev.jpg',
                credit: 'Photo by Giorgio Trovato on Unsplash.',
            },
            tags: [Tags.TERRAFORM, Tags.CLOUDFLARE, Tags.ANGULAR],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/pascaliske.dev',
                    icon: faGithub,
                },
            ],
        },
        {
            title: 'magicmirror',
            description: `Go + Angular based smart mirror platform - packaged as single docker image.`,
            image: {
                url: '/assets/images/project-magicmirror.jpg',
                credit: 'Photo by Rishabh Dharmani on Unsplash.',
            },
            tags: [Tags.ANSIBLE, Tags.DOCKER, Tags.GOLANG, Tags.ANGULAR],
            links: [
                {
                    name: 'Repository',
                    url: 'https://github.com/pascaliske/magicmirror',
                    icon: faGithub,
                },
                {
                    name: 'Documentation',
                    url: 'https://pascaliske.github.io/magicmirror/',
                    icon: faBook,
                },
            ],
        },
    ]

    public constructor(private readonly metadata: MetadataService) {}
}
