import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { SharedModule } from '../../shared/shared.module'
import { NavigationButtonModule } from './navigation-button/navigation-button.module'
import { NavigationComponent } from './navigation.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
        SharedModule.registerDynamicComponents([NavigationComponent]),
        NavigationButtonModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class NavigationModule {}
