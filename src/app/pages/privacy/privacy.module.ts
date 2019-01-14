import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { PrivacyComponent } from './privacy.component'

export const routes: Routes = [
    {
        path: '',
        component: PrivacyComponent,
        data: {
            title: 'Privacy',
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
    declarations: [PrivacyComponent],
})
export class PrivacyModule {}
