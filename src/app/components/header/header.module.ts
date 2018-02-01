import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LogoModule } from '../logo/logo.module'
import { HeadlineH1Module } from '../headline-h1/headline-h1.module'
import { NavigationModule } from '../navigation/navigation.module'

import { HeaderComponent } from './header.component'

@NgModule({
    imports: [CommonModule, LogoModule, HeadlineH1Module, NavigationModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
