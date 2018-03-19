import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownModule } from 'ngx-markdown'
import { CopyComponent } from './copy.component'

@NgModule({
    imports: [CommonModule, MarkdownModule.forChild()],
    declarations: [CopyComponent],
    exports: [CopyComponent]
})
export class CopyModule {}
