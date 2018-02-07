import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageHeaderComponent } from './page-header.component'

import { SectionModule } from '../section/section.module'
import { HeadlineH3Module } from '../headline-h3/headline-h3.module'

@NgModule({
    imports: [CommonModule, SectionModule, HeadlineH3Module],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
