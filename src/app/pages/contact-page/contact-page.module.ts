import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { CopyModule } from '../../components/copy/copy.module'
import { FormElementsModule } from '@pascaliske/form-elements'
import { ContactPageComponent } from './contact-page.component'
import { ContactPageService } from './contact-page.service'

export const routes: Routes = [
    {
        path: '',
        component: ContactPageComponent,
        data: {
            title: 'PAGE_TITLE_CONTACT',
        },
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
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
