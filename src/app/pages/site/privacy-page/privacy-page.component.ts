import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-privacy-page',
    templateUrl: './privacy-page.component.html',
    styleUrls: ['./privacy-page.component.scss']
})
export class PrivacyPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)
        this.fetchTitle('PAGE_TITLE_PRIVACY')
    }
}
