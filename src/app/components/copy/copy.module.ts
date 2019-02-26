import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { CopyComponent } from './copy.component'

@NgModule({
    imports: [SharedModule],
    declarations: [CopyComponent],
    exports: [CopyComponent],
})
export class CopyModule {}
