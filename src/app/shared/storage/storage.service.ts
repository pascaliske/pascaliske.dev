import { Injectable, inject } from '@angular/core'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private readonly browserApiService: BrowserApiService = inject(BrowserApiService)

    private readonly prefix: string = 'pi_'

    public get<T = string>(key: string): T | null {
        return this.browserApiService.with('localStorage', localStorage => {
            return localStorage.getItem(`${this.prefix}${key}`) as T
        })
    }

    public set(key: string, value: string): void {
        this.browserApiService.with('localStorage', localStorage => {
            localStorage.setItem(`${this.prefix}${key}`, value)
        })
    }

    public remove(key: string): void {
        this.browserApiService.with('localStorage', localStorage => {
            localStorage.removeItem(`${this.prefix}${key}`)
        })
    }

    public clear(): void {
        this.browserApiService.with('localStorage', localStorage => {
            localStorage.clear()
        })
    }
}
