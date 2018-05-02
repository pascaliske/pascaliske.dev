export interface ComponentManifestParams {
    [key: string]: any
}

export interface ComponentManifest {
    componentName: string
    params?: ComponentManifestParams
    data?: any
}

export interface ComponentFactory {
    new (...args: Array<any>): {}
}
