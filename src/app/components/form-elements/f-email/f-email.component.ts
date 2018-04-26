import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import * as fuzzysearch from 'fuzzysearch'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-email',
    templateUrl: './f-email.component.html',
    styleUrls: ['./f-email.component.scss']
})
export class FEmailComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []

    @ViewChild('inputField') public inputRef: ElementRef

    public suggestions$: BehaviorSubject<Array<string>> = new BehaviorSubject([])

    private providers: Array<string> = [
        'aol.com',
        'arcor.de',
        'freenet.de',
        'gmail.com',
        'gmx.at',
        'gmx.com',
        'gmx.de',
        'gmx.net',
        'googlemail.com',
        'hotmail.com',
        'hotmail.de',
        'icloud.com',
        'live.com',
        'live.de',
        'mac.com',
        'me.com',
        'msn.com',
        'online.de',
        't-online.de',
        'web.de',
        'yahoo.com',
        'yahoo.de'
    ]

    public suggest(event: Event): void {
        const value = (event.target as HTMLInputElement).value.match(/(.*)@(.*)/)

        if (value && value.length > 2 && value[2] && value[2].length > 0) {
            const matches = this.providers.filter(item => fuzzysearch(value[2], item))

            this.suggestions$.next(matches)
        } else {
            this.suggestions$.next([])
        }
    }

    public use(event: Event): void {
        console.log('==>', event)

        const parts = this.fc.value.split('@')
        const input = parts.slice(0, parts.length - 1).join('@')
        const suggestion = (event.target as HTMLElement).innerText

        this.suggestions$.next([])
        this.fc.setValue(`${input}@${suggestion}`)
    }

    public focusOut(): void {
        super.focusOut()
        setTimeout(() => this.suggestions$.next([]))
    }
}
