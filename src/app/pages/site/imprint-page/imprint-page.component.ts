import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-imprint-page',
    templateUrl: './imprint-page.component.html',
    styleUrls: ['./imprint-page.component.scss']
})
export class ImprintPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_IMPRINT')
    }
}
