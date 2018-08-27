import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { BlogPageComponent } from './blog-page.component'

export const routes: Routes = [
    {
        path: '',
        component: BlogPageComponent,
        data: {
            title: 'PAGE_TITLE_BLOG',
        },
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        PageHeaderModule,
        SectionModule,
        QuickContactModule,
    ],
    declarations: [BlogPageComponent],
})
export class BlogPageModule {}
