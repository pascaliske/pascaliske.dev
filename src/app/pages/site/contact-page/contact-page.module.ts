import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { SectionModule } from '../../../components/section/section.module'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { ContactFormModule } from '../../../components/contact-form/contact-form.module'
import { ContactPageComponent } from './contact-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        SectionModule,
        PageHeaderModule,
        ContactFormModule
    ],
    declarations: [ContactPageComponent]
})
export class ContactPageModule {}
