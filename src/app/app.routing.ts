import type { RouterFeatures, Routes } from '@angular/router'
import { withDisabledInitialNavigation, withInMemoryScrolling } from '@angular/router'

export const features: RouterFeatures[] = [
    withDisabledInitialNavigation(),
    withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
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
        loadComponent: () => import('./pages/home/home.component'),
        data: {
            description: `Hi there, I'm a Cloud & DevOps Engineer from Frankfurt/Main, Germany.`,
        },
    },
    {
        path: 'skills',
        title: 'Skills // Pascal Iske',
        loadComponent: () => import('./pages/skills/skills.component'),
        data: {
            description: 'Container & Orchestration, Infrastructure as Code, GitOps and more...',
        },
    },
    {
        path: 'work',
        title: 'Work // Pascal Iske',
        loadComponent: () => import('./pages/work/work.component'),
        data: {
            description: `A list of projects I am currently working on and have worked on in the past...`,
        },
    },
    {
        path: 'contact',
        title: 'Contact // Pascal Iske',
        loadComponent: () => import('./pages/contact/contact.component'),
        data: {
            description: 'Want to get in touch? You can contact me through the contact form.',
        },
    },
    {
        path: 'legal-notice',
        title: 'Legal notice // Pascal Iske',
        loadComponent: () => import('./pages/legal-notice/legal-notice.component'),
        data: {
            description: 'Legal information pursuant to § 5 TMG.',
        },
    },
    {
        path: '**',
        redirectTo: 'home',
    },
]
