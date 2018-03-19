import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-references-page',
    templateUrl: './references-page.component.html',
    styleUrls: ['./references-page.component.scss']
})
export class ReferencesPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_REFERENCES')
    }
}
