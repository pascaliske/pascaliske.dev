import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { SharedModule } from '../../shared/shared.module'
import { LinkModule } from '../link/link.module'
import { IconModule } from '../icon/icon.module'
import { QuickContactComponent } from './quick-contact.component'

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        SharedModule.registerDynamicComponents([QuickContactComponent]),
        LinkModule,
        IconModule
    ],
    declarations: [QuickContactComponent],
    exports: [QuickContactComponent]
})
export class QuickContactModule {}
