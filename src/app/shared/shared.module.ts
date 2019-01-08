import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
    imports: [CommonModule, NotificationsModule, MarkdownModule],
    exports: [CommonModule, NotificationsModule, MarkdownModule],
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
