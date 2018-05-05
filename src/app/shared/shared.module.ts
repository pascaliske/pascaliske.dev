import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'

@NgModule({
    imports: [CommonModule, TranslateModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    exports: [CommonModule, TranslateModule, DynamicComponentsComponent, DynamicComponentsDirective]
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
