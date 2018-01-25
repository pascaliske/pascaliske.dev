import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LogoModule } from '../logo/logo.module'

import { HeaderComponent } from './header.component'

@NgModule({
    imports: [CommonModule, LogoModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
