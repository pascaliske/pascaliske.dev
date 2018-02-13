import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomePageModule } from './home-page/home-page.module'
import { AboutPageModule } from './about-page/about-page.module'
import { NotFoundPageModule } from './not-found-page/not-found-page.module'

@NgModule({
    imports: [CommonModule, HomePageModule, AboutPageModule, NotFoundPageModule],
    declarations: []
})
export class SiteModule {}
