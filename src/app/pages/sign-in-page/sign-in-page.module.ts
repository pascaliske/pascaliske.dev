import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { NavigationModule } from '../../components/navigation/navigation.module'
import { PageHeaderModule } from '../../components/page-header/page-header.module'
import { SectionModule } from '../../components/section/section.module'
import { FooterModule } from '../../components/footer/footer.module'

import { SignInPageComponent } from './sign-in-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        NavigationModule,
        PageHeaderModule,
        SectionModule,
        FooterModule
    ],
    declarations: [SignInPageComponent]
})
export class SignInPageModule {}
