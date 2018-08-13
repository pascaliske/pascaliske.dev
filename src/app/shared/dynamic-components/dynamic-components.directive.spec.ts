import { ViewContainerRef } from '@angular/core'
import { inject } from '@angular/core/testing'
import { DynamicComponentsDirective } from './dynamic-components.directive'

describe('DynamicComponentDirective', () => {
    it('should create an instance', inject([ViewContainerRef], viewContainerRef => {
        const directive = new DynamicComponentsDirective(viewContainerRef)
        expect(directive).toBeTruthy()
    }))
})
