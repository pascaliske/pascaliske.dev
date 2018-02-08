import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { LanguageSwitchComponent } from './language-switch.component'

@NgModule({
    imports: [CommonModule, RouterModule, TranslateModule.forChild()],
    declarations: [LanguageSwitchComponent],
    exports: [LanguageSwitchComponent]
})
export class LanguageSwitchModule {}
