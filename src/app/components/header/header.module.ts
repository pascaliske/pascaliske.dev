import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LogoModule } from '../logo/logo.module'
import { HeadlineH1Module } from '../headline-h1/headline-h1.module'
import { HeadlineH2Module } from '../headline-h2/headline-h2.module'
import { NavigationModule } from '../navigation/navigation.module'

import { HeaderComponent } from './header.component'

@NgModule({
    imports: [CommonModule, LogoModule, HeadlineH1Module, HeadlineH2Module, NavigationModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
