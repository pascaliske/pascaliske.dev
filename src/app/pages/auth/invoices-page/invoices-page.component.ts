import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../../services/title/title.service'
import { Page } from '../../page'

@Component({
    selector: 'cmp-invoices-page',
    templateUrl: './invoices-page.component.html',
    styleUrls: ['./invoices-page.component.scss']
})
export class InvoicesPageComponent extends Page {
    public constructor(public translate: TranslateService, public titleService: TitleService) {
        super(translate, titleService)

        this.fetchTitle('PAGE_TITLE_INVOICES')
    }
}
