import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[dynamic-components-host]',
})
export class DynamicComponentsDirective {
    public constructor(public viewContainerRef: ViewContainerRef) {}
}
