import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    public matches(query: string): boolean {
        return window.matchMedia(query)?.matches ?? false
    }

    public watch(query: string, listener: (event: MediaQueryListEvent) => void): void {
        window.matchMedia(query).addEventListener('change', event => listener(event))
    }
}
