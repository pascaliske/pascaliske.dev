import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { NavigationComponent } from './navigation.component'
import { NavigationButtonComponent } from './navigation-button/navigation-button.component'
import { LanguageSwitchModule } from '../language-switch/language-switch.module'

@NgModule({
    imports: [
        RouterModule,
        SharedModule.registerDynamicComponents([NavigationComponent]),
        LanguageSwitchModule,
    ],
    declarations: [NavigationComponent, NavigationButtonComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {}
