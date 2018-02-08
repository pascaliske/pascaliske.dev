import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PageHeaderModule } from '../../components/page-header/page-header.module'

import { SignOutPageComponent } from './sign-out-page.component'

@NgModule({
    imports: [CommonModule, PageHeaderModule],
    declarations: [SignOutPageComponent]
})
export class SignOutPageModule {}
