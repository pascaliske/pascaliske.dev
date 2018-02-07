import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LanguageSwitchComponent } from './language-switch.component'

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LanguageSwitchComponent],
    exports: [LanguageSwitchComponent]
})
export class LanguageSwitchModule {}
