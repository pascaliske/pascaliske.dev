import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_ABOUT')
    }
}
