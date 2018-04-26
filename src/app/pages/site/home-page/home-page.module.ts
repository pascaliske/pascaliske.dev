import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { LinkModule } from '../../../components/link/link.module'
import { CopyModule } from '../../../components/copy/copy.module'
import { QuickContactModule } from '../../../components/quick-contact/quick-contact.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        LinkModule,
        CopyModule,
        QuickContactModule
    ],
    declarations: [HomePageComponent]
})
export class HomePageModule {}
