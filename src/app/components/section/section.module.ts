import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { SectionComponent } from './section.component'

@NgModule({
    imports: [CommonModule, SharedModule.registerDynamicComponents([SectionComponent])],
    declarations: [SectionComponent],
    exports: [SectionComponent]
})
export class SectionModule {}
