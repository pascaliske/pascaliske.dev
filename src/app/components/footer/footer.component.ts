import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
    selector: 'cmp-footer',
    templateUrl: './footer.component.html',
    imports: [RouterLink, FaIconComponent],
})
export class FooterComponent {
    public year: number = new Date().getFullYear()

    public icons: Record<string, IconDefinition> = {
        faHeart,
    }
}
