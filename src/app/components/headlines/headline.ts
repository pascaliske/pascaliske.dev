import { Component, Input } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({ template: '' })
// tslint:disable-next-line:component-class-suffix
export class Headline {
    @Input()
    public text: string

    @Input()
    public icon: IconDefinition

    @Input()
    public iconPosition: 'left' | 'right' = 'left'
}
