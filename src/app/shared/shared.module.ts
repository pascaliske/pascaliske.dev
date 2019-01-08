import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { MarkdownModule } from 'ngx-markdown'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'

@NgModule({
    imports: [CommonModule, NotificationsModule, MarkdownModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    exports: [CommonModule, NotificationsModule, MarkdownModule, DynamicComponentsComponent],
})
export class SharedModule {
    public static registerDynamicComponents(components: any[]): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: components,
                    multi: true,
                },
            ],
        }
    }
}
