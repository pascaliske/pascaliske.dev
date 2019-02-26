import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { SectionComponent } from './section.component'

@NgModule({
    imports: [SharedModule],
    declarations: [SectionComponent],
    exports: [SectionComponent],
})
export class SectionModule {}
