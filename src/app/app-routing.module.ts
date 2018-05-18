import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RouteResolver } from './route.resolver'
import { SiteComponent } from './pages/site/site.component'
import { HomePageComponent } from './pages/site/home-page/home-page.component'
import { AboutPageComponent } from './pages/site/about-page/about-page.component'
import { ReferencesPageComponent } from './pages/site/references-page/references-page.component'
import { BlogPageComponent } from './pages/site/blog-page/blog-page.component'
import { ContactPageComponent } from './pages/site/contact-page/contact-page.component'
import { ImprintPageComponent } from './pages/site/imprint-page/imprint-page.component'
import { PrivacyPageComponent } from './pages/site/privacy-page/privacy-page.component'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'en',
        resolve: {
            timeout: RouteResolver,
        },
    },
    {
        path: ':language',
        component: SiteComponent,
        resolve: {
            timeout: RouteResolver,
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'home',
                component: HomePageComponent,
                data: {
                    title: 'PAGE_TITLE_HOME',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'about',
                component: AboutPageComponent,
                data: {
                    title: 'PAGE_TITLE_ABOUT',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'references',
                component: ReferencesPageComponent,
                data: {
                    title: 'PAGE_TITLE_REFERENCES',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'blog',
                component: BlogPageComponent,
                data: {
                    title: 'PAGE_TITLE_BLOG',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'contact',
                component: ContactPageComponent,
                data: {
                    title: 'PAGE_TITLE_CONTACT',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'imprint',
                component: ImprintPageComponent,
                data: {
                    title: 'PAGE_TITLE_IMPRINT',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: 'privacy',
                component: PrivacyPageComponent,
                data: {
                    title: 'PAGE_TITLE_PRIVACY',
                },
                resolve: {
                    timeout: RouteResolver,
                },
            },
            {
                path: '**',
                redirectTo: 'home',
                resolve: {
                    timeout: RouteResolver,
                },
            },
        ],
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [RouteResolver],
})
export class AppRoutingModule {}
