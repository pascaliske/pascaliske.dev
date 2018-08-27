import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { ReferencesComponent } from './references.component'

export const routes: Routes = [
    {
        path: '',
        component: ReferencesComponent,
        data: {
            title: 'PAGE_TITLE_REFERENCES',
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
    declarations: [ReferencesComponent],
})
export class ReferencesModule {}
