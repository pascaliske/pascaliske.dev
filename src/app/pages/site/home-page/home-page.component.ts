import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_HOME')
    }
}
