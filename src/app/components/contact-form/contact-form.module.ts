import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { HeadlinesModule } from '../headlines/headlines.module'
import { FormElementsModule } from '../form-elements/form-elements.module'
import { CodeModule } from '../code/code.module'
import { ContactFormComponent } from './contact-form.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        HeadlinesModule,
        FormElementsModule,
        CodeModule
    ],
    declarations: [ContactFormComponent],
    exports: [ContactFormComponent]
})
export class ContactFormModule {}
