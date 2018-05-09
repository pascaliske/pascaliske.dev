import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { CodeComponent } from './code.component'

@NgModule({
    imports: [SharedModule.registerDynamicComponents([CodeComponent])],
    declarations: [CodeComponent],
    exports: [CodeComponent]
})
export class CodeModule {}
