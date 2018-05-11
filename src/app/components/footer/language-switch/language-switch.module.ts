import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { LinkModule } from '../../link/link.module'
import { LanguageSwitchComponent } from './language-switch.component'

@NgModule({
    imports: [CommonModule, RouterModule, TranslateModule.forChild(), LinkModule],
    declarations: [LanguageSwitchComponent],
    exports: [LanguageSwitchComponent],
})
export class LanguageSwitchModule {}
