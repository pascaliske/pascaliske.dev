import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { LinkModule } from '../../components/link/link.module'
import { CopyModule } from '../../components/copy/copy.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { ImprintComponent } from './imprint.component'

export const routes: Routes = [
    {
        path: '',
        component: ImprintComponent,
        data: {
            title: 'PAGE_TITLE_IMPRINT',
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
    declarations: [ImprintComponent],
})
export class ImprintModule {}
