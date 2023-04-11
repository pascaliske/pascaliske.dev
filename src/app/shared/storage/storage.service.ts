import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private readonly prefix: string = 'pi_'

    public get(key: string): string | null {
        return localStorage.getItem(`${this.prefix}${key}`)
    }

    public set(key: string, value: string): void {
        localStorage.setItem(`${this.prefix}${key}`, value)
    }

    public remove(key: string): void {
        localStorage.removeItem(`${this.prefix}${key}`)
    }

    public clear(): void {
        localStorage.clear()
    }
}
