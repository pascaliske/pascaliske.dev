import { Injectable } from '@angular/core'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    public constructor(private readonly browserApiService: BrowserApiService) {}

    public matches(query: string): boolean {
        return this.browserApiService.with('window', window => {
            return window.matchMedia(query)?.matches ?? false
        })
    }

    public watch(query: string, listener: (event: MediaQueryListEvent) => void): void {
        return this.browserApiService.with('window', window => {
            window.matchMedia(query).addEventListener('change', event => listener(event))
        })
    }
}
