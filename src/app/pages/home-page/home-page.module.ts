import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeaderModule } from '../../components/header/header.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FooterModule } from '../../components/footer/footer.module'

import { HomePageComponent } from './home-page.component'

@NgModule({
    imports: [CommonModule, HeaderModule, NavigationModule, FooterModule],
    declarations: [HomePageComponent]
})
export class HomePageModule {}
