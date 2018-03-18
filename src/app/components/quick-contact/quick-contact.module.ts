import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { LinkModule } from '../link/link.module'
import { IconModule } from '../icon/icon.module'
import { QuickContactComponent } from './quick-contact.component'

@NgModule({
    imports: [CommonModule, TranslateModule.forChild(), LinkModule, IconModule],
    declarations: [QuickContactComponent],
    exports: [QuickContactComponent]
})
export class QuickContactModule {}
