import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { IconComponent } from './icon.component'

@NgModule({
    imports: [SharedModule.registerDynamicComponents([IconComponent])],
    declarations: [IconComponent],
    exports: [IconComponent],
})
export class IconModule {}
