import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './pages/home-page/home-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

const routes: Routes = [
    {
        path: ':language',
        children: [
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
    },
    {
        path: '**',
        redirectTo: 'en'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
