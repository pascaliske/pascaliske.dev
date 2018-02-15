import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthComponent } from './pages/auth/auth.component'
import { SignInPageComponent } from './pages/auth/sign-in-page/sign-in-page.component'
import { SignOutPageComponent } from './pages/auth/sign-out-page/sign-out-page.component'
import { ClientsPageComponent } from './pages/auth/clients-page/clients-page.component'
import { SiteComponent } from './pages/site/site.component'
import { HomePageComponent } from './pages/site/home-page/home-page.component'
import { AboutPageComponent } from './pages/site/about-page/about-page.component'
import { NotFoundPageComponent } from './pages/site/not-found-page/not-found-page.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'en'
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'clients'
            },
            {
                path: 'signin',
                component: SignInPageComponent
            },
            {
                path: 'signout',
                component: SignOutPageComponent
            },
            {
                path: 'clients',
                component: ClientsPageComponent
            }
        ]
    },
    {
        path: ':language',
        component: SiteComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'about',
                component: AboutPageComponent
            },
            {
                path: '**',
                component: NotFoundPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
