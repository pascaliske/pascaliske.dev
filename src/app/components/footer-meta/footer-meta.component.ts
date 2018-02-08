import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cmp-footer-meta',
    templateUrl: './footer-meta.component.html',
    styleUrls: ['./footer-meta.component.scss']
})
export class FooterMetaComponent implements OnInit {
    public language: string

    public year: number = new Date().getFullYear()

    private alive: boolean = true

    public constructor(public router: Router, public route: ActivatedRoute) {}

    public ngOnInit() {
        this.route.paramMap
            .takeWhile(() => this.alive)
            .subscribe(params => (this.language = params.get('language')))
    }

    public changeLanguage(language: string): void {
        const { path } = this.route.snapshot.url[0]

        this.router.navigate(['/', language, path])
    }
}
