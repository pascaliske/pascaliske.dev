import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { SharedModule } from '../../shared/shared.module'
import { NavigationComponent } from './navigation.component'
import { NavigationButtonComponent } from './navigation-button/navigation-button.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
        SharedModule.registerDynamicComponents([NavigationComponent]),
    ],
    declarations: [NavigationComponent],
    declarations: [NavigationComponent, NavigationButtonComponent],
    exports: [NavigationComponent]
})
export class NavigationModule {}
