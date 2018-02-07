import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { NavigationModule } from '../navigation/navigation.module'

import { HeaderComponent } from './header.component'

@NgModule({
    imports: [CommonModule, NavigationModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
