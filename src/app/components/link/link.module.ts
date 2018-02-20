import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { IconModule } from '../icon/icon.module'
import { LinkComponent } from './link.component'

@NgModule({
    imports: [CommonModule, RouterModule, IconModule],
    declarations: [LinkComponent],
    exports: [LinkComponent]
})
export class LinkModule {}
