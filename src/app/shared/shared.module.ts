import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MarkdownModule } from 'ngx-markdown'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'
import { BreakpointService } from './breakpoint/breakpoint.service'
import { TitleService } from './title/title.service'
import { ScrollService } from './scroll/scroll.service'
import { ViewportService } from './viewport/viewport.service'
import { LanguageService } from './language/language.service'
import { NotificationService } from './notification/notification.service'
import { NetworkService } from './network/network.service'
import { TrackingService } from './tracking/tracking.service'

@NgModule({
    imports: [CommonModule, TranslateModule, MarkdownModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective],
    providers: [
        TranslateService,
        BreakpointService,
        TitleService,
        ScrollService,
        ViewportService,
        LanguageService,
        NotificationService,
        NetworkService,
        TrackingService,
    ],
    exports: [
        CommonModule,
        TranslateModule,
        MarkdownModule,
        DynamicComponentsComponent,
        DynamicComponentsDirective,
    ],
})
export class SharedModule {
    public static registerDynamicComponents(components: Array<any>) {
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
