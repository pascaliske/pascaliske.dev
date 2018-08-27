import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    },
    {
        path: 'about',
        loadChildren: 'app/pages/about-page/about-page.module#AboutPageModule',
    },
    // {
    //     path: 'references',
    //     loadChildren: 'app/pages/references-page/references-page.module#ReferencesPageModule',
    // },
    // {
    //     path: 'blog',
    //     loadChildren: 'app/pages/blog-page/blog-page.module#BlogPageModule',
    // },
    {
        path: 'contact',
        loadChildren: 'app/pages/contact-page/contact-page.module#ContactPageModule',
    },
    {
        path: 'imprint',
        loadChildren: 'app/pages/imprint-page/imprint-page.module#ImprintPageModule',
    },
    {
        path: 'privacy',
        loadChildren: 'app/pages/privacy-page/privacy-page.module#PrivacyPageModule',
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
