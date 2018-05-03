import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { CodeComponent } from './code.component'

@NgModule({
    imports: [CommonModule, SharedModule.registerDynamicComponents([CodeComponent])],
    declarations: [CodeComponent],
    exports: [CodeComponent]
})
export class CodeModule {}
