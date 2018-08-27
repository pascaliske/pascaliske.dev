import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { LinkModule } from '../../components/link/link.module'
import { CopyModule } from '../../components/copy/copy.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { HomePageComponent } from './home-page.component'

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        data: {
            title: 'PAGE_TITLE_HOME',
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
        LinkModule,
        CopyModule,
        QuickContactModule,
    ],
    declarations: [HomePageComponent],
})
export class HomePageModule {}
