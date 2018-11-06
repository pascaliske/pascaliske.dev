import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { MarkdownModule } from 'ngx-markdown'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'
import { LanguageService } from './language/language.service'

@NgModule({
    imports: [CommonModule, TranslateModule, NotificationsModule, MarkdownModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    providers: [TranslateService, LanguageService],
    exports: [
        CommonModule,
        TranslateModule,
        NotificationsModule,
        MarkdownModule,
        DynamicComponentsComponent,
    ],
})
export class SharedModule {
    public static registerDynamicComponents(components: Array<any>): ModuleWithProviders {
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
