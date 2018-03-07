import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { SignInPageComponent } from './sign-in-page.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        PageHeaderModule,
        SectionModule
    ],
    declarations: [SignInPageComponent]
})
export class SignInPageModule {}
