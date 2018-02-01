import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NavigationButtonModule } from '../navigation-button/navigation-button.module'

import { NavigationComponent } from './navigation.component'

@NgModule({
    imports: [CommonModule, RouterModule, NavigationButtonModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class NavigationModule {}
