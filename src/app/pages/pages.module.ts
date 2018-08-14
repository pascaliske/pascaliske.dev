import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageModule } from './home-page/home-page.module'
import { AboutPageModule } from './about-page/about-page.module'
import { ReferencesPageModule } from './references-page/references-page.module'
import { BlogPageModule } from './blog-page/blog-page.module'
import { ContactPageModule } from './contact-page/contact-page.module'
import { ImprintPageModule } from './imprint-page/imprint-page.module'
import { PrivacyPageModule } from './privacy-page/privacy-page.module'

@NgModule({
    imports: [
        CommonModule,
        HomePageModule,
        AboutPageModule,
        ReferencesPageModule,
        BlogPageModule,
        ContactPageModule,
        ImprintPageModule,
        PrivacyPageModule,
    ],
    declarations: [],
    exports: [],
})
export class PagesModule {}
