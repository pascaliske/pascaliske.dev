import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageHeaderComponent } from './page-header.component'
import { SectionModule } from '../section/section.module'
import { HeadlinesModule } from '../headlines/headlines.module'
import { CopyModule } from '../copy/copy.module'

@NgModule({
    imports: [CommonModule, SectionModule, HeadlinesModule, CopyModule],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
