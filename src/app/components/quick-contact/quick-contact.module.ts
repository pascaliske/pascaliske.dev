import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IconModule } from '../icon/icon.module'

import { QuickContactComponent } from './quick-contact.component'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [QuickContactComponent],
    exports: [QuickContactComponent]
})
export class QuickContactModule {}
