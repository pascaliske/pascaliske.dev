import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { NavigationItem } from '../../components/navigation/navigation.component'

/**
 * AuthComponent
 *
 * Displays the authorized only section for clients.
 */
@Component({
    selector: 'cmp-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    public pages: Array<NavigationItem> = [
        {
            route: '/',
            label: 'NAVIGATION_BACK',
            options: {
                fixedWidth: true,
                decorated: false
            }
        },
        {
            route: 'clients',
            label: 'NAVIGATION_CLIENTS',
            options: {
                decorated: false
            }
        },
        {
            route: 'invoices',
            label: 'NAVIGATION_INVOICES',
            options: {
                decorated: false
            }
        }
    ]

    /**
     * Initializes the auth component.
     *
     * @param {TranslateService} translateService
     * @returns {AuthComponent}
     */
    public constructor(private translateService: TranslateService) {
        this.translateService.use('en')
    }
}
