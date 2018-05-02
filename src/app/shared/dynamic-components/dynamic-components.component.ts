import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core'
import camelCase from 'lodash-es/camelCase'
import upperFirst from 'lodash-es/upperFirst'
import { DynamicComponentsDirective } from './dynamic-components.directive'
import { ComponentManifest, ComponentFactory } from './typings'

@Component({
    selector: 'cmp-dynamic-components',
    templateUrl: './dynamic-components.component.html',
    styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {
    @Input() public components: Array<ComponentManifest> = []

    @ViewChild(DynamicComponentsDirective) public hostRef: DynamicComponentsDirective

    public constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    public ngOnInit(): void {
        this.components.forEach(item => this.appendComponent(item))
    }

    /**
     * Appends a new component to the container element.
     *
     * @param {ComponentManifest} manifest
     * @returns {boolean}
     */
    private appendComponent(manifest: ComponentManifest): boolean {
        const name = this.getComponentName(manifest.componentName)
        const component = this.getComponent(name)

        if (!component) {
            console.log(`Unkown component name: ${name}`)
            return false
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
        const componentRef: any = this.hostRef.viewContainerRef.createComponent(componentFactory)

        if (manifest.params && Object.entries(manifest.params).length > 0) {
            Object.entries(manifest.params).forEach(([key, value]) => {
                componentRef.instance[key] = value
            })
        }

        if (manifest.data) {
            componentRef.instance.data = manifest.data
        }

        return true
    }

    private getComponentName(name: string): string {
        if (!name.includes('-')) {
            return null
        }

        return `${upperFirst(camelCase(name.replace('cmp-', '')))}Component`
    }

    /**
     * Return component based on string name. Only imported components will be found.
     *
     * @param {string} name
     * @returns {ComponentFactory}
     */
    private getComponent(name: string): ComponentFactory {
        const factories: Array<ComponentFactory> = Array.from(
            this.componentFactoryResolver['_factories'].keys()
        )
        return factories.find(item => item.name === name)
    }
}
