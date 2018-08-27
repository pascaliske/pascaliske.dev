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
        loadChildren: 'app/pages/home/home.module#HomeModule',
    },
    {
        path: 'about',
        loadChildren: 'app/pages/about/about.module#AboutModule',
    },
    // {
    //     path: 'references',
    //     loadChildren: 'app/pages/references/references.module#ReferencesModule',
    // },
    // {
    //     path: 'blog',
    //     loadChildren: 'app/pages/blog/blog.module#BlogModule',
    // },
    {
        path: 'contact',
        loadChildren: 'app/pages/contact/contact.module#ContactModule',
    },
    {
        path: 'imprint',
        loadChildren: 'app/pages/imprint/imprint.module#ImprintModule',
    },
    {
        path: 'privacy',
        loadChildren: 'app/pages/privacy/privacy.module#PrivacyModule',
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
