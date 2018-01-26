import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'cmp'

    public constructor(private titleService: Title) {}

    public setTitle(title: string) {
        this.titleService.setTitle(title)
    }
}
