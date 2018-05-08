import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'
import { IconModule } from '../icon/icon.module'
import { FRowComponent } from './f-row/f-row.component'
import { FColumnComponent } from './f-column/f-column.component'
import { FInputComponent } from './f-input/f-input.component'
import { FEmailComponent } from './f-email/f-email.component'
import { FPhoneComponent } from './f-phone/f-phone.component'
import { FButtonComponent } from './f-button/f-button.component'
import { FSelectComponent } from './f-select/f-select.component'
import { FTextAreaComponent } from './f-text-area/f-text-area.component'
import { FPasswordComponent } from './f-password/f-password.component'
import { FDateComponent } from './f-date/f-date.component'
import { FCheckboxComponent } from './f-checkbox/f-checkbox.component'
import { FRadiobuttonComponent } from './f-radiobutton/f-radiobutton.component'
import { FErrorComponent } from './f-error/f-error.component'
import { FExplanationComponent } from './f-explanation/f-explanation.component'

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule.registerDynamicComponents([
            FRowComponent,
            FColumnComponent,
            FInputComponent,
            FEmailComponent,
            FPhoneComponent,
            FButtonComponent,
            FSelectComponent,
            FTextAreaComponent,
            FPasswordComponent,
            FDateComponent,
            FCheckboxComponent,
            FRadiobuttonComponent
        ]),
        IconModule
    ],
    declarations: [
        FRowComponent,
        FColumnComponent,
        FInputComponent,
        FEmailComponent,
        FPhoneComponent,
        FButtonComponent,
        FSelectComponent,
        FTextAreaComponent,
        FPasswordComponent,
        FDateComponent,
        FCheckboxComponent,
        FRadiobuttonComponent,
        FErrorComponent,
        FExplanationComponent
    ],
    exports: [
        FRowComponent,
        FColumnComponent,
        FInputComponent,
        FEmailComponent,
        FPhoneComponent,
        FButtonComponent,
        FSelectComponent,
        FTextAreaComponent,
        FPasswordComponent,
        FDateComponent,
        FCheckboxComponent,
        FRadiobuttonComponent,
        FErrorComponent,
        FExplanationComponent
    ]
})
export class FormElementsModule {}
