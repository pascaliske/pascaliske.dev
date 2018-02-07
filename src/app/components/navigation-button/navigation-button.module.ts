import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationButtonComponent } from './navigation-button.component'

@NgModule({
    imports: [CommonModule],
    declarations: [NavigationButtonComponent],
    exports: [NavigationButtonComponent]
})
export class NavigationButtonModule {}
