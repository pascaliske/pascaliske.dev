import type { RouterFeatures, Routes } from '@angular/router'
import { withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router'

export const features: RouterFeatures[] = [
    withEnabledBlockingInitialNavigation(),
    withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        // scrollOffset: [0, 100],
    }),
]

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        title: 'Home // Pascal Iske',
        loadComponent: () => {
            return import('./pages/home/home.component').then(m => m.HomeComponent)
        },
    },
    {
        path: 'skills',
        title: 'Skills // Pascal Iske',
        loadComponent: () => {
            return import('./pages/skills/skills.component').then(m => m.SkillsComponent)
        },
    },
    {
        path: 'work',
        title: 'Work // Pascal Iske',
        loadComponent: () => {
            return import('./pages/work/work.component').then(m => m.WorkComponent)
        },
    },
    {
        path: 'contact',
        title: 'Contact // Pascal Iske',
        loadComponent: () => {
            return import('./pages/contact/contact.component').then(m => m.ContactComponent)
        },
    },
    {
        path: 'legal-notice',
        title: 'Legal notice // Pascal Iske',
        loadComponent: () => {
            return import('./pages/legal-notice/legal-notice.component').then(
                m => m.LegalNoticeComponent,
            )
        },
    },
    {
        path: '**',
        redirectTo: 'home',
    },
]
