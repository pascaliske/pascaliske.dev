import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
// import { ReferencesPageComponent } from './pages/references-page/references-page.component'
// import { BlogPageComponent } from './pages/blog-page/blog-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component'
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent,
        data: {
            title: 'PAGE_TITLE_HOME',
        },
    },
    {
        path: 'about',
        component: AboutPageComponent,
        data: {
            title: 'PAGE_TITLE_ABOUT',
        },
    },
    // {
    //     path: 'references',
    //     component: ReferencesPageComponent,
    //     data: {
    //         title: 'PAGE_TITLE_REFERENCES',
    //     },
    // },
    // {
    //     path: 'blog',
    //     component: BlogPageComponent,
    //     data: {
    //         title: 'PAGE_TITLE_BLOG',
    //     },
    // },
    {
        path: 'contact',
        component: ContactPageComponent,
        data: {
            title: 'PAGE_TITLE_CONTACT',
        },
    },
    {
        path: 'imprint',
        component: ImprintPageComponent,
        data: {
            title: 'PAGE_TITLE_IMPRINT',
        },
    },
    {
        path: 'privacy',
        component: PrivacyPageComponent,
        data: {
            title: 'PAGE_TITLE_PRIVACY',
        },
    },
    {
        path: '**',
        redirectTo: 'home',
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
