import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownModule } from 'ngx-markdown'
import { SharedModule } from '../../shared/shared.module'
import { CopyComponent } from './copy.component'

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        SharedModule.registerDynamicComponents([CopyComponent])
    ],
    declarations: [CopyComponent],
    exports: [CopyComponent]
})
export class CopyModule {}
