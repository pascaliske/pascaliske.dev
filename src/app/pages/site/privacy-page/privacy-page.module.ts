import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { QuickContactModule } from '../../../components/quick-contact/quick-contact.module'
import { PrivacyPageComponent } from './privacy-page.component'

@NgModule({
    imports: [SharedModule, PageHeaderModule, SectionModule, QuickContactModule],
    declarations: [PrivacyPageComponent]
})
export class PrivacyPageModule {}
