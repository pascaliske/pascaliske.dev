import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import { NavigationComponent } from './navigation.component'
import { NavigationButtonComponent } from './navigation-button/navigation-button.component'

@NgModule({
    imports: [RouterModule, SharedModule],
    declarations: [NavigationComponent, NavigationButtonComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {}
