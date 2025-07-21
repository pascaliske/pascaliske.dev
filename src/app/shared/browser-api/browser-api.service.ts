import { Injectable, PLATFORM_ID, DOCUMENT, inject } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

export interface Globals {
    document: Document
    window: Window
    localStorage: Storage
}

@Injectable({
    providedIn: 'root',
})
export class BrowserApiService {
    private readonly platformId: object = inject<object>(PLATFORM_ID)

    private readonly doc: Document = inject<Document>(DOCUMENT)

    private readonly globals: Globals = {
        document: this.doc,
        window: this.doc.defaultView as Window,
        localStorage: this.doc.defaultView?.localStorage as Storage,
    }

    /**
     * Ensure a Browser API global is defined.
     */
    public with<G extends keyof Globals, R>(global: G, fn: (global: Globals[G]) => R): R {
        // non-browser platform or global is undefined
        if (!isPlatformBrowser(this.platformId) || !this.globals[global]) {
            return null as R
        }

        // exec fn with defined global
        return fn(this.globals[global])
    }
}
