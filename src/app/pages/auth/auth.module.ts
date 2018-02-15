import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from '../../app-routing.module'
import { HeaderModule } from '../../components/header/header.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FooterModule } from '../../components/footer/footer.module'
import { ClientsPageModule } from './clients-page/clients-page.module'
import { SignInPageModule } from './sign-in-page/sign-in-page.module'
import { SignOutPageModule } from './sign-out-page/sign-out-page.module'

import { AuthComponent } from './auth.component'

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        ClientsPageModule,
        SignInPageModule,
        SignOutPageModule
    ],
    declarations: [AuthComponent],
    providers: [AuthGuard]
})
export class AuthModule {}
