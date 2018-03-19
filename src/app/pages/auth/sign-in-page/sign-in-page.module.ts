import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { PageHeaderModule } from '../../../components/page-header/page-header.module'
import { SectionModule } from '../../../components/section/section.module'
import { SignInPageComponent } from './sign-in-page.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        FormElementsModule,
        PageHeaderModule,
        SectionModule
    ],
    declarations: [SignInPageComponent]
})
export class SignInPageModule {}
