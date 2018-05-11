import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { CopyModule } from '../../../components/copy/copy.module'
import { QuickContactModule } from '../../../components/quick-contact/quick-contact.module'
import { AboutPageComponent } from './about-page.component'

@NgModule({
    imports: [
        SharedModule,
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        CopyModule,
        QuickContactModule,
    ],
    declarations: [AboutPageComponent],
})
export class AboutPageModule {}
