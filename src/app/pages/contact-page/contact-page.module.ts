import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { CopyModule } from '../../components/copy/copy.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { ContactPageComponent } from './contact-page.component'
import { ContactPageService } from './contact-page.service'

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        CopyModule,
        FormElementsModule,
    ],
    declarations: [ContactPageComponent],
    providers: [ContactPageService],
})
export class ContactPageModule {}
