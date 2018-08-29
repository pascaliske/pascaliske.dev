import { Input } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export class Headline {
    @Input()
    public text: string

    @Input()
    public icon: IconDefinition

    @Input()
    public iconPosition: 'left' | 'right' = 'left'
}
