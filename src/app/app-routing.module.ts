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
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    },
    {
        path: 'imprint',
        loadChildren: () => import('./pages/imprint/imprint.module').then(m => m.ImprintModule),
    },
    {
        path: 'privacy',
        loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule),
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
