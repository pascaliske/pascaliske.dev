import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { NavigationModule } from '../navigation/navigation.module'
import { HeaderComponent } from './header.component'

@NgModule({
    imports: [SharedModule, NavigationModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderModule {}
