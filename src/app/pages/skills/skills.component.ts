import { Component, HostBinding } from '@angular/core'
import { NgFor, NgIf } from '@angular/common'
import { Tags } from 'shared/tags/tags'
import { MetadataService } from 'shared/metadata/metadata.service'
import { HeadlineComponent } from 'components/headline/headline.component'
import { SectionComponent } from 'components/section/section.component'
import { CopyComponent } from 'components/copy/copy.component'
import { CardComponent } from 'components/card/card.component'
import { SocialsComponent } from 'components/socials/socials.component'

@Component({
    standalone: true,
    selector: 'cmp-skills',
    templateUrl: './skills.component.html',
    imports: [
        NgFor,
        NgIf,
        HeadlineComponent,
        SectionComponent,
        CopyComponent,
        CardComponent,
        SocialsComponent,
    ],
    providers: [MetadataService],
})
export default class SkillsComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'

    public readonly groups: { name: string; description: string; tags: string[] }[] = [
        {
            name: 'Container & Orchestration',
            description: '',
            tags: [Tags.KUBERNETES, Tags.DOCKER, Tags.OCI],
        },
        {
            name: 'Infrastructure as Code',
            description: '',
            tags: [Tags.TERRAFORM, Tags.ANSIBLE],
        },
        {
            name: 'GitOps',
            description: '',
            tags: [Tags.FLUX],
        },
        {
            name: 'Cloud',
            description: '',
            tags: [Tags.AWS, Tags.GCP, Tags.CLOUDFLARE],
        },
        {
            name: 'Monitoring',
            description: '',
            tags: [Tags.PROMETHEUS, Tags.GRAFANA],
        },
        {
            name: 'CI/CD',
            description: '',
            tags: [Tags.GITHUB_ACTIONS, Tags.GITLAB_CI],
        },
        {
            name: 'Development',
            description: '',
            tags: [Tags.ANGULAR, Tags.TYPESCRIPT, Tags.NODEJS, Tags.GOLANG],
        },
    ]

    public constructor(private readonly metadata: MetadataService) {}
}
