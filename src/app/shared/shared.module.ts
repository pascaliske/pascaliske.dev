import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    exports: [DynamicComponentsComponent, DynamicComponentsDirective]
})
export class SharedModule {}
