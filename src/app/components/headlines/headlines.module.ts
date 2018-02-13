import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeadlineH1Module } from './headline-h1/headline-h1.module'
import { HeadlineH2Module } from './headline-h2/headline-h2.module'
import { HeadlineH3Module } from './headline-h3/headline-h3.module'
import { HeadlineH4Module } from './headline-h4/headline-h4.module'
import { HeadlineH5Module } from './headline-h5/headline-h5.module'
import { HeadlineH6Module } from './headline-h6/headline-h6.module'

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
        HeadlineH1Module,
        HeadlineH2Module,
        HeadlineH3Module,
        HeadlineH4Module,
        HeadlineH5Module,
        HeadlineH6Module
    ]
})
export class HeadlinesModule {}
