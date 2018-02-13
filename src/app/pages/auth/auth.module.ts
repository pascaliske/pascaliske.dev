import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SignInPageModule } from './sign-in-page/sign-in-page.module'
import { SignOutPageModule } from './sign-out-page/sign-out-page.module'

@NgModule({
    imports: [CommonModule, SignInPageModule, SignOutPageModule],
    declarations: []
})
export class AuthModule {}
