import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { QuickContactModule } from '../../components/quick-contact/quick-contact.module'
import { PrivacyPageComponent } from './privacy-page.component'

export const routes: Routes = [
    {
        path: '',
        component: PrivacyPageComponent,
        data: {
            title: 'PAGE_TITLE_PRIVACY',
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
    declarations: [PrivacyPageComponent],
})
export class PrivacyPageModule {}
