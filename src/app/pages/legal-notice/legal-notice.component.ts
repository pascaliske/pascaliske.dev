import { Component, HostBinding } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MetadataService } from 'shared/metadata/metadata.service'
import { SectionComponent } from 'components/section/section.component'
import { HeadlineComponent } from 'components/headline/headline.component'
import { CopyComponent } from 'components/copy/copy.component'

@Component({
    standalone: true,
    selector: 'cmp-legal-notice',
    templateUrl: './legal-notice.component.html',
    imports: [RouterLink, SectionComponent, HeadlineComponent, CopyComponent],
    providers: [MetadataService],
})
export class LegalNoticeComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'

    public constructor(private readonly metadata: MetadataService) {}
}
