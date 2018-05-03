import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    exports: [DynamicComponentsComponent, DynamicComponentsDirective]
})
export class SharedModule {
    public static registerDynamicComponents(components: Array<any>) {
        return {
            ngModule: SharedModule,
            providers: [
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: components,
                    multi: true
                }
            ]
        }
    }
}
