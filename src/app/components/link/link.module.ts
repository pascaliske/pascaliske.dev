import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { IconModule } from '../icon/icon.module'
import { LinkComponent } from './link.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule.registerDynamicComponents([LinkComponent]),
        IconModule
    ],
    declarations: [LinkComponent],
    exports: [LinkComponent]
})
export class LinkModule {}
