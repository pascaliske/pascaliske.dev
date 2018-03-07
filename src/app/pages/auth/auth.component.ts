import { Component } from '@angular/core'
import { LanguageService } from '../../services/language/language.service'
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
     * @returns {AuthComponent}
     */
    public constructor() {}
}
