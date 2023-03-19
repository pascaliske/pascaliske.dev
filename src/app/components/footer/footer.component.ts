import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
    standalone: true,
    selector: 'cmp-footer',
    templateUrl: './footer.component.html',
    styleUrls: [],
    imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class FooterComponent {
    public year: number = new Date().getFullYear()

    public icons: Record<string, IconDefinition> = {
        faHeart,
    }
}
