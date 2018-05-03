import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { IconComponent } from './icon.component'

@NgModule({
    imports: [CommonModule, SharedModule.registerDynamicComponents([IconComponent])],
    declarations: [IconComponent],
    exports: [IconComponent]
})
export class IconModule {}
