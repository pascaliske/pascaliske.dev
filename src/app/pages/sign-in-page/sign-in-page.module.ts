import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PageHeaderModule } from '../../components/page-header/page-header.module'

import { SignInPageComponent } from './sign-in-page.component'

@NgModule({
    imports: [CommonModule, PageHeaderModule],
    declarations: [SignInPageComponent]
})
export class SignInPageModule {}
