import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { CopyModule } from '../../../components/copy/copy.module'
import { QuickContactModule } from '../../../components/quick-contact/quick-contact.module'
import { ReferencesPageComponent } from './references-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        CopyModule,
        QuickContactModule
    ],
    declarations: [ReferencesPageComponent]
})
export class ReferencesPageModule {}
