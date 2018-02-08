import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { LanguageSwitchModule } from '../language-switch/language-switch.module'

import { FooterMetaComponent } from './footer-meta.component'

@NgModule({
    imports: [CommonModule, RouterModule, TranslateModule.forChild(), LanguageSwitchModule],
    declarations: [FooterMetaComponent],
    exports: [FooterMetaComponent]
})
export class FooterMetaModule {}
