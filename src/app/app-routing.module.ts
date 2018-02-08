import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './pages/home-page/home-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'en'
    },
    {
        path: ':language',
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
                path: 'signin',
                component: SignInPageComponent
            },
            {
                path: 'signout',
                component: SignOutPageComponent
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
