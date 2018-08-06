import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { AppRoutingModule } from '../../app-routing.module'
import { HeaderModule } from '../../components/header/header.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FooterModule } from '../../components/footer/footer.module'
import { HomePageModule } from './home-page/home-page.module'
import { AboutPageModule } from './about-page/about-page.module'
import { ReferencesPageModule } from './references-page/references-page.module'
import { BlogPageModule } from './blog-page/blog-page.module'
import { ContactPageModule } from './contact-page/contact-page.module'
import { ImprintPageModule } from './imprint-page/imprint-page.module'
import { PrivacyPageModule } from './privacy-page/privacy-page.module'
import { SiteComponent } from './site.component'

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule,
        HeaderModule,
        NavigationModule,
        FooterModule,
        HomePageModule,
        AboutPageModule,
        ReferencesPageModule,
        BlogPageModule,
        ContactPageModule,
        ImprintPageModule,
        PrivacyPageModule,
    ],
    declarations: [SiteComponent],
})
export class SiteModule {}
