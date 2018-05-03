import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core'
import camelCase from 'lodash-es/camelCase'
import upperFirst from 'lodash-es/upperFirst'
import { DynamicComponentsDirective } from './dynamic-components.directive'
import { ComponentManifest, ComponentFactory, ComponentRef } from './typings'

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
        this.components.forEach(item => this.resolveComponent(item))
    }

    /**
     * Resolves dynamic components and its children.
     *
     * @param {ComponentManifest} manifest
     * @returns {ComponentRef}
     */
    private resolveComponent(manifest: ComponentManifest): ComponentRef {
        const id = this.resolveComponentName(manifest.componentName)
        const component = this.resolveComponentFactory(id)

        if (!component) {
            console.log(`Unkown component: ${id}`)
            return
        }

        // pre resolve children components
        let children: Array<any>
        if (manifest.children && manifest.children.length > 0) {
            children = manifest.children.map(child => this.resolveComponent(child))
            children = children.filter(child => child !== undefined)
            children = [children.map(child => child.location.nativeElement)]
        }

        // resolve actual factory and create its component
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
        const componentRef: ComponentRef = this.hostRef.viewContainerRef.createComponent(
            componentFactory,
            0,
            undefined,
            children
        )

        // inject params to instance
        if (manifest.params && Object.entries(manifest.params).length > 0) {
            Object.entries(manifest.params).forEach(([key, value]) => {
                componentRef.instance[key] = value
            })
        }

        return componentRef
    }

    /**
     * Resolves a component name from the manifest.
     *
     * @param {string} name
     * @returns {string}
     */
    private resolveComponentName(name: string): string {
        if (!name.includes('-')) {
            return null
        }

        // remove prefix and suffix if available
        name = name.replace('cmp', '')
        name = name.replace('component', '')

        // transform name and append suffix
        return `${upperFirst(camelCase(name))}Component`
    }

    /**
     * Resolves a components factory by component name.
     *
     * @param {string} name
     * @returns {ComponentFactory}
     */
    private resolveComponentFactory(name: string): ComponentFactory {
        const factories: Array<ComponentFactory> = Array.from(
            this.componentFactoryResolver['_factories'].keys()
        )

        return factories.find(item => item.cmpName === name)
    }
}
