import type { RouterFeatures, Routes } from '@angular/router'
import { withDisabledInitialNavigation, withInMemoryScrolling } from '@angular/router'

export const features: RouterFeatures[] = [
    withDisabledInitialNavigation(),
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
        data: {
            description: `Hi there, I'm a Cloud Engineer from Frankfurt/Main, Germany.`,
        },
        loadComponent: () => {
            return import('./pages/home/home.component').then(m => m.HomeComponent)
        },
    },
    {
        path: 'skills',
        title: 'Skills // Pascal Iske',
        data: {
            description: 'Container & Orchestration, Infrastructure as Code, GitOps and more...',
        },
        loadComponent: () => {
            return import('./pages/skills/skills.component').then(m => m.SkillsComponent)
        },
    },
    {
        path: 'work',
        title: 'Work // Pascal Iske',
        data: {
            description: `A list of projects I am currently working on and have worked on in the past...`,
        },
        loadComponent: () => {
            return import('./pages/work/work.component').then(m => m.WorkComponent)
        },
    },
    {
        path: 'contact',
        title: 'Contact // Pascal Iske',
        data: {
            description: 'Want to get in touch? You can contact me through the contact form.',
        },
        loadComponent: () => {
            return import('./pages/contact/contact.component').then(m => m.ContactComponent)
        },
    },
    {
        path: 'legal-notice',
        title: 'Legal notice // Pascal Iske',
        data: {
            description: 'Legal information pursuant to § 5 TMG.',
        },
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
