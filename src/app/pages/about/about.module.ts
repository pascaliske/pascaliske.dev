import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { CopyModule } from '../../components/copy/copy.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { AboutComponent } from './about.component'

export const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        data: {
            title: 'PAGE_TITLE_ABOUT',
        },
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        PageHeaderModule,
        SectionModule,
        HeadlinesModule,
        CopyModule,
        QuickContactModule,
    ],
    declarations: [AboutComponent],
})
export class AboutModule {}
