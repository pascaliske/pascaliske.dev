import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { HeaderModule } from '../../components/header/header.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { FooterModule } from '../../components/footer/footer.module'

import { AboutPageComponent } from './about-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        HeaderModule,
        PageHeaderModule,
        SectionModule,
        QuickContactModule,
        FooterModule
    ],
    declarations: [AboutPageComponent]
})
export class AboutPageModule {}
