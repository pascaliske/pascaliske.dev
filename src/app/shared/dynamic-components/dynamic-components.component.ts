import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core'
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
        const component = this.getComponent(manifest.componentName)

        if (!component) {
            console.log(`Unkown component name: ${manifest.componentName}`)
            return false
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
        const componentRef: any = this.hostRef.viewContainerRef.createComponent(componentFactory)

        if (Object.entries(manifest.params).length > 0) {
            Object.entries(manifest.params).forEach(([key, value]) => {
                componentRef.instance[key] = value
            })
        }

        if (manifest.data) {
            componentRef.instance.data = manifest.data
        }

        return true
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
