import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SectionComponent } from 'components/section/section.component'
import { HeadlineComponent } from 'components/headline/headline.component'
import { CopyComponent } from 'components/copy/copy.component'

@Component({
    standalone: true,
    selector: 'cmp-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrls: [],
    imports: [CommonModule, RouterModule, SectionComponent, HeadlineComponent, CopyComponent],
})
export class LegalNoticeComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'
}
