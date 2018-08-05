import { Input } from '@angular/core'
import { IconPosition } from './typings'

export class Headline {
    @Input() public text: string

    @Input() public icon: string

    @Input() public iconPosition: IconPosition = 'left'

    public constructor() {}
}
