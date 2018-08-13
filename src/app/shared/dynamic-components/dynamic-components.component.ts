import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core'
import { camelCase, upperFirst } from 'lodash-es'
import { DynamicComponentsDirective } from './dynamic-components.directive'
import { ComponentManifest, ComponentFactory, ComponentRef } from './typings'

@Component({
    selector: 'cmp-dynamic-components',
    template: '<ng-template dynamic-components-host></ng-template>',
})
export class DynamicComponentsComponent implements OnInit {
    @Input() public components: Array<ComponentManifest> = []

    @ViewChild(DynamicComponentsDirective) public hostRef: DynamicComponentsDirective

    /**
     * Initializes the component
     *
     * @param {ComponentFactoryResolver} componentFactoryResolver
     */
    public constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    /**
     * Initially resolves the given components.
     *
     * @returns {void}
     */
    public ngOnInit(): void {
        this.components.reverse().forEach(component => {
            this.resolveComponent(component)
        })
    }

    /**
     * Resolves dynamic components and its children.
     *
     * @param {ComponentManifest} manifest
     * @returns {ComponentRef}
     */
    private resolveComponent(manifest: ComponentManifest): ComponentRef {
        const id = this.formatComponentName(manifest.componentName)
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
            children,
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
     * Formats a component name from the manifest.
     *
     * @param {string} name
     * @returns {string}
     */
    private formatComponentName(name: string): string {
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
            this.componentFactoryResolver['_factories'].keys(),
        )

        return factories.find(item => item.cmpName === name)
    }
}
