import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { LinkModule } from '../link/link.module'
import { IconModule } from '../icon/icon.module'
import { QuickContactComponent } from './quick-contact.component'

@NgModule({
    imports: [SharedModule, LinkModule, IconModule],
    declarations: [QuickContactComponent],
    exports: [QuickContactComponent],
})
export class QuickContactModule {}
