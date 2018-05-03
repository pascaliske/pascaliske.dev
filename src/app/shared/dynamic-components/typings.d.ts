export interface ComponentManifestParams {
    [key: string]: any
}

export interface ComponentManifest {
    componentName: string
    params?: ComponentManifestParams
    children?: Array<ComponentManifest>
}

export interface ComponentFactory {
    readonly cmpName: string
    new (...args: Array<any>): {}
}

export interface ComponentRef {
    instance: any
}
