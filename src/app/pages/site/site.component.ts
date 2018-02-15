import { Component } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd, ParamMap } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { NavigationItem } from '../../components/navigation/navigation.component'

/**
 * SiteComponent
 *
 * Displays the public pages of the website.
 */
@Component({
    selector: 'cmp-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.scss']
})
export class SiteComponent {
    public pages: Array<NavigationItem> = [
        {
            route: 'home',
            label: 'NAVIGATION_HOME',
            options: {
                decorated: true
            }
        },
        {
            route: 'about',
            label: 'NAVIGATION_ABOUT',
            options: {
                decorated: true
            }
        },
        {
            route: 'references',
            label: 'NAVIGATION_REFERENCES',
            options: {
                decorated: true
            }
        },
        {
            route: 'blog',
            label: 'NAVIGATION_BLOG',
            options: {
                decorated: true
            }
        },
        {
            route: 'contact',
            label: 'NAVIGATION_CONTACT',
            options: {
                decorated: true
            }
        }
    ]

    /**
     * Initializes the site component.
     *
     * @param {Router} router
     * @param {ActivatedRoute} route
     * @param {TranslateService} translateService
     * @returns {SiteComponent}
     */
    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private translateService: TranslateService
    ) {
        this.translateService.setDefaultLang('en')
        this.translateService.use('en')
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .switchMap(event => this.route.paramMap)
            .subscribe((params: ParamMap) => {
                this.translateService.use(params.get('language') || 'en')
            })
    }
}
