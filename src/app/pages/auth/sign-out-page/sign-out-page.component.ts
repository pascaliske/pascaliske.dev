import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { AuthService } from '../../../services/auth/auth.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-sign-out-page',
    templateUrl: './sign-out-page.component.html',
    styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent extends Page {
    public constructor(
        public router: Router,
        public translate: TranslateService,
        public titleService: TitleService,
        public authService: AuthService
    ) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_SIGNOUT')
    }
    public signout(): void {
        this.authService.signout()
        this.router.navigate(['/'])
    }
}
