import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_NOT_FOUND')
    }
}
