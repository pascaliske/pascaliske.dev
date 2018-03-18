import { Component, OnDestroy } from '@angular/core'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { takeWhile } from 'rxjs/operators'
import { TitleService } from '../../../services/title/title.service'

@Component({
    selector: 'cmp-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnDestroy {
    public title: string

    private alive: boolean = true

    public constructor(private translate: TranslateService, private titleService: TitleService) {
        this.translate
            .get('PAGE_TITLE_BLOG')
            .pipe(takeWhile(() => this.alive))
            .subscribe(translation => {
                this.title = translation
                this.titleService.setTitle(translation)
            })
        this.translate.onLangChange
            .pipe(takeWhile(() => this.alive))
            .subscribe((event: LangChangeEvent) => {
                this.title = event.translations.PAGE_TITLE_BLOG
                this.titleService.setTitle(event.translations.PAGE_TITLE_BLOG)
            })
    }

    public ngOnDestroy() {
        this.alive = false
    }
}
