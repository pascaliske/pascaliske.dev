import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '@pascaliske/form-elements'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { CopyModule } from '../../components/copy/copy.module'
import { ContactComponent } from './contact.component'
import { ContactService } from './contact.service'

export const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        data: {
            title: 'PAGE_TITLE_CONTACT',
        },
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormElementsModule,
        SharedModule,
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        CopyModule,
    ],
    declarations: [ContactComponent],
    providers: [ContactService],
})
export class ContactModule {}
