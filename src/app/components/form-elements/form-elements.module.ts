import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
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
import { FErrorComponent } from './f-error/f-error.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule, IconModule],
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
        FErrorComponent
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
        FErrorComponent
    ]
})
export class FormElementsModule {}
