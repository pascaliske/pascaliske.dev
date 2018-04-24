import { Input } from '@angular/core'

export class Headline {
    @Input() public text: string

    @Input() public icon: string

    @Input() public iconPosition: 'left' | 'right'

    public constructor() {}
}
