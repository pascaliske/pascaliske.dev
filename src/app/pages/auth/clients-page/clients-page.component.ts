import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { AuthService } from '../../../services/auth/auth.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-clients-page',
    templateUrl: './clients-page.component.html',
    styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent extends Page {
    public constructor(
        public translate: TranslateService,
        public titleService: TitleService,
        public authService: AuthService
    ) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_CLIENTS')
    }
}
