import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from '../../app-routing.module'
import { HeaderModule } from '../../components/header/header.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FooterModule } from '../../components/footer/footer.module'
import { HomePageModule } from './home-page/home-page.module'
import { AboutPageModule } from './about-page/about-page.module'
import { NotFoundPageModule } from './not-found-page/not-found-page.module'

import { SiteComponent } from './site.component'

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        HomePageModule,
        AboutPageModule,
        NotFoundPageModule
    ],
    declarations: [SiteComponent]
})
export class SiteModule {}
