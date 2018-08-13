import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { LinkModule } from '../../../components/link/link.module'
import { CopyModule } from '../../../components/copy/copy.module'
import { QuickContactModule } from '../../../components/quick-contact/quick-contact.module'
import { ImprintPageComponent } from './imprint-page.component'

@NgModule({
    imports: [
        SharedModule,
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        LinkModule,
        CopyModule,
        QuickContactModule,
    ],
    declarations: [ImprintPageComponent],
})
export class ImprintPageModule {}
