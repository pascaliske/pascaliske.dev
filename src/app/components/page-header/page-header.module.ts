import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageHeaderComponent } from './page-header.component'

import { HeadlinesModule } from '../headlines/headlines.module'
import { SectionModule } from '../section/section.module'

@NgModule({
    imports: [CommonModule, HeadlinesModule, SectionModule],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
