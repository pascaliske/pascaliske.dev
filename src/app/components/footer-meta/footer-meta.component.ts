import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cmp-footer-meta',
    templateUrl: './footer-meta.component.html',
    styleUrls: ['./footer-meta.component.scss']
})
export class FooterMetaComponent implements OnInit {
    public year: string = '2018'
    public constructor(public router: Router, public route: ActivatedRoute) {}

    public ngOnInit() {}

    public changeLanguage(language: string): void {
        const { path } = this.route.snapshot.url[0]

        this.router.navigate(['/', language, path])
    }
}
