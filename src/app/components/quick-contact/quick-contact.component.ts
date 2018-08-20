import { Component } from '@angular/core'

@Component({
    selector: 'cmp-quick-contact',
    templateUrl: './quick-contact.component.html',
    styleUrls: ['./quick-contact.component.scss'],
})
export class QuickContactComponent {
    public static readonly cmpName: string = 'QuickContactComponent'

    /**
     * Initializes the component.
     *
     * @returns {FooterMetaComponent}
     */
    public constructor() {}
}
