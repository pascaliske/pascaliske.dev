import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

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
