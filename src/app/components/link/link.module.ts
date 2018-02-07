import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LinkComponent } from './link.component'

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LinkComponent],
    exports: [LinkComponent]
})
export class LinkModule {}
