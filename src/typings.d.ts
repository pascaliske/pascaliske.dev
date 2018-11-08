/* SystemJS module definition */
declare var module: NodeModule
interface NodeModule {
    id: string
}

declare module '*.json' {
    const value: any
    export default value
}

declare var ga: (event: string, options: any) => void
declare var gaInit: (window: Window, document: Document) => void
declare var gaOut: () => void
